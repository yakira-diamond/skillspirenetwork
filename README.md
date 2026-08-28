# SkillSpire Network — Website (Phase 1 + 2)

This is the SkillSpire Network website, built with **Next.js** (a React
framework) and **Tailwind CSS** (utility-based styling). Accounts run on
**Supabase**.

## What's in this phase

**Phase 1 — Design system & marketing pages**
- SkillSpire's brand colors, fonts, and a signature "Spire" mark, wired up
  as reusable Tailwind tokens and components.
- Pages: Home, About, Learn (programme catalogue), Community, Opportunities,
  Blog, Get Involved, Contact.
- Reusable components: Navbar, Footer, Button, StatusBadge (cohort status:
  open / coming soon / waitlist / closed / completed), PillarCard,
  ProgrammeCard.

**Phase 2 — Accounts**
- Sign up, log in, forgot password, and reset password pages, all wired to
  Supabase Auth.
- A `/dashboard` page that's protected — signed-out visitors get redirected
  to `/login`, and it greets signed-in users by name.
- The navbar automatically shows "Join SkillSpire" when signed out and
  "Dashboard" when signed in.
- A `proxy.js` (Next.js's server middleware) that keeps login sessions
  refreshed and guards `/dashboard`.

Not yet built (coming in later phases): payments and checkout, cohort
enrollment, the full learner dashboard content, and the admin backend.

## Setting up Supabase (required before accounts will work)

1. Create a free project at [supabase.com](https://supabase.com).
2. In your project, go to **Project Settings > API** and copy the
   **Project URL** and **anon public key**.
3. In this folder, copy `.env.local.example` to a new file named
   `.env.local`, and paste in those two values.
4. In Supabase, go to **Authentication > URL Configuration** and add
   `http://localhost:3000/**` as a redirect URL (add your real domain here
   too once you deploy).
5. Restart `npm run dev` after adding `.env.local` — Next.js only reads
   env files on startup.

Until you do this, the site's marketing pages work fine, but signup/login
will show a connection error.

## Running it on your computer

You'll need [Node.js](https://nodejs.org) installed first (the LTS version).

1. Open a terminal in this folder.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the local dev server:
   ```
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

Any time you edit a file in `app/` or `components/`, the browser will
update automatically.

## Project structure

```
app/
  layout.js         → wraps every page (fonts, Navbar, Footer, auth check)
  globals.css       → brand colors, fonts, and base styles
  page.js           → Home page
  about/page.js
  learn/page.js
  community/page.js
  opportunities/page.js
  blog/page.js
  get-involved/page.js
  contact/page.js
  signup/page.js
  signup/check-email/page.js
  login/page.js
  forgot-password/page.js
  reset-password/page.js
  dashboard/page.js → protected: redirects to /login if signed out
components/
  Navbar.js         → shows different button when signed in vs out
  Footer.js
  Button.js
  SpireMark.js      → the signature ascending-bars logo mark
  StatusBadge.js    → cohort status pill (open/coming-soon/waitlist/etc.)
  PillarCard.js
  ProgrammeCard.js
  AuthShell.js      → shared layout wrapper for auth pages
  FormField.js      → labeled input used across auth forms
  LogoutButton.js
lib/supabase/
  client.js         → Supabase client for the browser
  server.js         → Supabase client for server components
proxy.js            → refreshes sessions, protects /dashboard
```

## Design tokens (in `app/globals.css`)

| Token             | Hex       | Use                          |
|-------------------|-----------|-------------------------------|
| `imperial`        | `#1C1F4A` | Primary — buttons, headings   |
| `imperial-deep`   | `#12142F` | Dark section backgrounds      |
| `lilac`           | `#B79EFF` | Secondary accents, eyebrows   |
| `ivory`           | `#FDFDFD` | Light backgrounds             |
| `neon`            | `#00F0FF` | High-emphasis accent, glow    |
| `graphite`        | `#1B1B1B` | Body text                     |

Fonts: **Space Grotesk** (headings), **Inter** (body), **IBM Plex Mono**
(labels, eyebrows, status text).

## Next phases

1. ~~Auth (sign up / login / password reset) via Supabase~~ ✅ done
2. Programme detail pages + cohort logic
3. Checkout (Paystack / Flutterwave) + enrollment
4. Learner dashboard (real content — currently a placeholder)
5. Admin backend

Come back to this project any time and pick up wherever it left off.
