# Salt Stay 🏖️

A modern vacation rental platform tailored for seaside and beach properties, built with cutting-edge web technologies.

## ✨ Features

- **Beach Property Listings**: Browse and discover beautiful seaside vacation rentals
- **User Authentication**: Secure sign-up and login with Clerk
- **Booking System**: Seamless reservation management for guests and hosts
- **User Profiles**: Personalized profiles for guests and property owners
- **Reviews & Ratings**: Community-driven feedback and rating system
- **Payment Integration**: Secure payment processing
- **Responsive Design**: Optimized for all devices and screen sizes

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components
- **Authentication**: [Clerk](https://clerk.com/) - Complete authentication solution
- **Database**: [Supabase](https://supabase.com/) - Open source Firebase alternative

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm
- Supabase account
- Clerk account

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/salt-stay.git
   cd salt-stay
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Fill in your environment variables:

   ```env
   NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
   NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
   SUPABASE_SERVICE_ROLE_KEY="your-supabase-service-role-key"
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
   CLERK_SECRET_KEY="your-clerk-secret-key"
   ```

4. **Set up the database**

   ```bash
   # Run Supabase migrations
   npx supabase db push
   ```

5. **Run the development server**

   ```bash
   npm run dev
   # or
   npm run dev:turbo  # for faster development with Turbopack
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
salt-stay/
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── (auth)/        # Authentication pages
│   │   ├── (dashboard)/   # Dashboard pages
│   │   ├── api/           # API routes
│   │   └── globals.css    # Global styles
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # shadcn/ui components
│   │   └── ...
│   ├── lib/              # Utility functions
│   │   ├── supabase.ts   # Supabase client
│   │   └── utils.ts      # Helper functions
│   └── types/            # TypeScript type definitions
├── public/               # Static assets
├── scripts/              # Build and development scripts
└── ...config files
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run dev:turbo` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run typecheck` - Run TypeScript type checking
- `npm run quality` - Run all quality checks (format, lint, typecheck)
- `npm run quality:check` - Run quality checks without auto-fixing

## 🎨 Styling

This project uses Tailwind CSS v4 with shadcn/ui components for a consistent and beautiful design system.

## 🗄️ Database

The application uses Supabase as the backend database. Key features include:

- User authentication and profiles (handled by Clerk)
- Beach property listings with images and amenities
- Booking and reservation system
- Reviews and ratings system
- Payment processing integration

## 🚀 Deployment

### Deploy on Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your environment variables
4. Deploy!

### Deploy on Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to [Netlify](https://netlify.com)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Vercel](https://vercel.com/) for hosting and deployment
- [Supabase](https://supabase.com/) for the backend infrastructure
- [Clerk](https://clerk.com/) for authentication services
- [shadcn](https://twitter.com/shadcn) for the beautiful UI components

---

Built with ❤️ using Next.js and modern web technologies.
