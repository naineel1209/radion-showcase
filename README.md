# Radion-Showcase

We'll be following the below folder structure for our Next.js project:

```bash
/src
  ├── /app                # Next.js App Router (server components)
  │   ├── layout.tsx      # Root layout
  │   ├── page.tsx        # Main page
  │   ├── /dashboard      # Example subroute: /dashboard
  │   │   ├── page.tsx    # Dashboard page
  │   │   ├── loading.tsx # Loading skeleton
  │   │   ├── layout.tsx  # Nested layout
  │   │   ├── error.tsx   # Error boundary
  │   │   ├── /settings   # Nested route: /dashboard/settings
  │   │   │   ├── page.tsx
  │   │   │   ├── layout.tsx
  │   │   │   ├── loading.tsx
  │   │   │   ├── error.tsx
  │   │   └── ...more
  │   ├── /api            # Server actions / API routes (only in `app/` folder)
  │   │   ├── /users
  │   │   │   ├── route.ts # API endpoint: GET, POST, PUT, DELETE
  │   │   ├── ...more
  │   ├── globals.css     # Global styles
  │   ├── favicon.ico     # Site favicon
  │   ├── not-found.tsx   # 404 Page
  │   ├── middleware.ts   # Middleware
  │   └── ...more
  │
  ├── /components         # Reusable components (both server & client)
  │   ├── Button.tsx      # UI Component (Client Component)
  │   ├── Header.tsx      # Layout Component
  │   ├── ThemeSwitcher.tsx # Example Client Component
  │   ├── Sidebar.tsx
  │   ├── Footer.tsx
  │   └── ...more
  │
  ├── /lib                # Helper functions, API calls, utilities
  │   ├── db.ts           # Database connection (Prisma, Mongo, etc.)
  │   ├── auth.ts         # Authentication logic
  │   ├── api.ts          # API helpers
  │   ├── constants.ts    # Constant variables
  │   ├── utils.ts        # Utility functions
  │   ├── validation.ts   # Zod validation schemas
  │   └── ...more
  │
  ├── /hooks              # Custom React hooks
  │   ├── useAuth.ts      # Authentication hook
  │   ├── useTheme.ts     # Theme hook
  │   ├── useFetch.ts     # Data fetching hook
  │   └── ...more
  │
  ├── /styles             # Styling (Tailwind, SCSS, etc.)
  │   ├── globals.css     # Global styles
  │   ├── theme.css       # Theme variables
  │   ├── components.css  # Component-specific styles (if needed)
  │   └── ...more
  │
  ├── /public             # Static assets (images, fonts, icons)
  │   ├── /images         # Store images
  │   │   ├── logo.png
  │   │   ├── banner.jpg
  │   │   └── ...more
  │   ├── robots.txt      # SEO Robots file
  │   ├── sitemap.xml     # Sitemap
  │   └── ...more
  │
  ├── .env                # Environment variables
  ├── tsconfig.json       # TypeScript config
  ├── next.config.js      # Next.js configuration
  ├── package.json        # Dependencies
  ├── README.md           # Documentation
  └── ...more
```
