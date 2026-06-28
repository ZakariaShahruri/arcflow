"use server";

import { eq } from "drizzle-orm";
import { z } from "zod";
import { getDb } from "@/db";
import { waitlist } from "@/db/schema";
import type { WaitlistState } from "./waitlist.types";

const waitlistSchema = z.object({
  email: z.email("Please enter a valid email address."),
  source: z.string().trim().min(1).max(64).optional(),
});

export async function joinWaitlist(
  _prevState: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const parsed = waitlistSchema.safeParse({
    email: formData.get("email"),
    source: formData.get("source") ?? undefined,
  });

  if (!parsed.success) {
    return {
      status: "error",
      message:
        parsed.error.issues[0]?.message ?? "Please check your details and try again.",
    };
  }

  const email = parsed.data.email.trim().toLowerCase();
  const source = parsed.data.source ?? "website";

  try {
    const db = getDb();

    const existing = await db
      .select({ id: waitlist.id })
      .from(waitlist)
      .where(eq(waitlist.email, email))
      .limit(1);

    if (existing.length > 0) {
      return { status: "error", message: "You're already on the list — nice." };
    }

    await db.insert(waitlist).values({ email, source });

    return {
      status: "success",
      message: "You're on the list — we'll be in touch soon.",
    };
  } catch (error) {
    // Handle the race where two requests insert the same email at once.
    if (isUniqueViolation(error)) {
      return { status: "error", message: "You're already on the list — nice." };
    }
    console.error("Failed to add waitlist signup:", error);
    return {
      status: "error",
      message: "Something went wrong on our end. Please try again.",
    };
  }
}

function isUniqueViolation(error: unknown): boolean {
  if (typeof error !== "object" || error === null) return false;
  const code = (error as { code?: string }).code;
  const message = (error as { message?: string }).message ?? "";
  return code === "23505" || message.toLowerCase().includes("duplicate key");
}
