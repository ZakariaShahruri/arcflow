# arcflow

Workflow automation platform for modern product teams — a monorepo with a
separate frontend and backend.

```
arcflow/
├── frontend/   Next.js 16 · TypeScript · Tailwind CSS v4 · shadcn/ui
└── backend/    Spring Boot 4 · Java 21 · Maven
```

## Getting started

Run the two apps in separate terminals.

### Backend (Spring Boot)

```bash
cd backend
./mvnw spring-boot:run
```

API runs on **http://localhost:8090**. Quick check:

```bash
curl http://localhost:8090/api/health
```

### Frontend (Next.js)

```bash
cd frontend
npm install
cp .env.example .env.local   # points NEXT_PUBLIC_API_URL at the backend
npm run dev
```

Site runs on **http://localhost:3000**.

## Layout

- `frontend/` — marketing site and app UI. Design system and conventions are
  documented in `frontend/AGENTS.md`.
- `backend/` — REST API under `com.arcflow`. Business endpoints live under
  `/api/**`; operational probes under `/actuator/**`.
