// Shared types/constants for the waitlist action. Kept out of the
// "use server" module, which may only export async functions.

export type WaitlistState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export const initialWaitlistState: WaitlistState = { status: "idle" };
