# arcflow

Workflow automation platform for modern product teams. This repository is split
into two independently deployable apps:

```
arcflow/
├── frontend/   # Next.js 16 marketing site + app (TypeScript, Tailwind v4, shadcn/ui)
└── backend/    # Spring Boot 4 REST API (Java 21, Maven)
```

Each folder has its own toolchain, dependencies, and `.gitignore`. See
`frontend/AGENTS.md` for the frontend's design system and Next.js conventions.

## frontend/
- Run: `cd frontend && npm install && npm run dev` → http://localhost:3000
- Talks to the backend via `src/lib/api.ts`, configured by `NEXT_PUBLIC_API_URL`
  (see `frontend/.env.example`).

## backend/
- Run: `cd backend && ./mvnw spring-boot:run` → http://localhost:8090
- Build/test: `./mvnw verify`
- Java 21, package root `com.arcflow`. Status endpoint: `GET /api/health`.
  Ops health/readiness: `GET /actuator/health`.
- CORS allowed origins are set via `arcflow.cors.allowed-origins` in
  `application.properties` (defaults to the frontend at localhost:3000).
