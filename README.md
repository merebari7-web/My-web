# NaijaLearn 🇳🇬

A modern, mobile-first e-learning platform for Nigerian students, covering **Primary 1 → SS3** (9-3-4 system), aligned to the **NERDC curriculum** with **WAEC / NECO / JAMB** exam readiness.

**🔴 Live demo:** https://naijalearn-plum.vercel.app

## Demo accounts

All demo accounts use the password `Password123`.

| Role    | Email                     | Notes                          |
|---------|---------------------------|---------------------------------|
| Student | `student@naijalearn.ng`   | SS2 Science, XP 1250, 14-day streak |
| Student | `tobi.p5@naijalearn.ng`   | Primary 5                       |
| Teacher | `teacher@naijalearn.ng`   | Has authored lessons/exams      |
| Parent  | `parent@naijalearn.ng`    | Linked to `student@naijalearn.ng` |
| Admin   | `admin@naijalearn.ng`     | Full platform overview          |

## Tech stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS + shadcn/ui-style components + Framer Motion
- **Database:** PostgreSQL via Prisma ORM
- **Auth:** NextAuth.js (email/password credentials + Google OAuth), JWT sessions, role-based access (Student / Teacher / Parent / Admin)
- **Forms/validation:** React Hook Form + Zod
- **PWA:** next-pwa (offline-friendly, installable)

## Getting started locally

### 1. Prerequisites
- Node.js 20+
- A PostgreSQL database (local or hosted, e.g. [Neon](https://neon.tech))

### 2. Install dependencies

```bash
npm install --legacy-peer-deps
```

### 3. Configure environment variables

Copy `.env.example` to `.env` and fill in the values:

```bash
cp .env.example .env
```

At minimum you need:
- `DATABASE_URL` — your PostgreSQL connection string
- `NEXTAUTH_SECRET` — a random secret (`openssl rand -base64 32`)
- `NEXTAUTH_URL` — `http://localhost:3000` for local dev

Google OAuth and payment provider keys (Paystack/Flutterwave) are optional.

### 4. Set up the database

```bash
npx prisma migrate deploy   # apply the schema
npm run db:seed             # load real Nigerian curriculum content + demo accounts
```

The seed script creates:
- 12 class levels (Primary 1 → SS3), 42 subjects, 237 class-subject mappings
- Full lesson content (3 lessons + quiz + term exam) for **all 15 Primary 5 subjects** and **9 SS2 subjects** (Physics, Chemistry, Biology, English Language, Mathematics, Civic Education, Financial Accounting, Government, Further Mathematics)
- A full 30-question **JAMB UTME mock exam** (Use of English)
- 5 demo accounts (see table above), 8 gamification badges, 10 Nigerian public holidays, announcements, and sample forum activity

### 5. Run the dev server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command             | Description                                  |
|----------------------|-----------------------------------------------|
| `npm run dev`        | Start the development server                  |
| `npm run build`      | Generate Prisma client + build for production |
| `npm run start`      | Start the production server                   |
| `npm run db:seed`    | Seed the database with curriculum + demo data |
| `npm run db:migrate` | Run Prisma migrations (dev)                   |
| `npm run db:studio`  | Open Prisma Studio (visual DB browser)        |
| `npm run test`       | Run tests (Vitest)                            |
| `npm run lint`       | Lint the codebase                             |

## Key routes

| Route                                   | Description                                    |
|-------------------------------------------|-------------------------------------------------|
| `/`                                      | Marketing homepage                             |
| `/login`, `/register`                    | Auth pages                                     |
| `/dashboard`                             | Role-aware dashboard (Student/Teacher/Parent/Admin) |
| `/learn`                                 | Subject browser for the logged-in student's class |
| `/learn/[classLevelId]/[subjectSlug]`    | Lesson list + exams for a subject              |
| `/lesson/[lessonId]`                     | Lesson viewer — markdown content, TTS, inline quiz |
| `/cbt`                                   | CBT mock exam list (WAEC/NECO/JAMB-styled)     |
| `/cbt/[examId]`                          | Timed exam runner with negative marking toggle |
| `/cbt/[examId]/result/[attemptId]`       | Score report with per-question explanations    |

## Deployment

This project is deployed on **Vercel** with a **Neon** (serverless Postgres) database.

To deploy your own instance:

1. Push this repo to GitHub.
2. Import it into [Vercel](https://vercel.com/new).
3. Add a Postgres database (Vercel's Neon integration works out of the box) and set `DATABASE_URL` in the project's environment variables.
4. Set `NEXTAUTH_SECRET` and `NEXTAUTH_URL` (your production domain) as environment variables.
5. Vercel runs `npm run build`, which executes `prisma generate` automatically before `next build`.
6. After the first deploy, run migrations and seed the production database:

   ```bash
   DATABASE_URL="<your-production-db-url>" npx prisma migrate deploy
   DATABASE_URL="<your-production-db-url>" npm run db:seed
   ```

## Project structure

```
prisma/
  schema.prisma        # Full data model (users, curriculum, lessons, exams, gamification...)
  seed.ts               # Main seed script
  seed/data/            # Real Nigerian curriculum content (P5 + SS2 + JAMB mock)
src/
  app/                  # Next.js App Router pages & API routes
  components/           # UI components (dashboard, CBT engine, lesson viewer, layout)
  lib/                  # Auth, Prisma client, session helpers, validation, utils
```
