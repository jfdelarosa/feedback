# PulseKit 

![PulseKit](https://trypulsekit.com)

PulseKit is a lightweight, embeddable feedback system designed for modern SaaS teams. It helps product teams capture insights directly from their users—without requiring them to sign up for another platform. Built with developers in mind, PulseKit integrates natively into any web app via a simple SDK or Web Component.

## 💡 Overview

PulseKit allows your users to:

* Submit feedback without creating a new account
* Vote and comment on ideas directly inside your product

For your team, it offers:

* A simple dashboard to manage ideas and suggestions
* A structured feedback loop that fits into your product workflows
* Customization and branding to make it feel like part of your app

## 🤔 Why It Exists

Feedback tools often live outside your product, creating friction and context switching. PulseKit removes that barrier by making feedback native—users never have to leave your app or deal with a separate login. It's a better experience for them and more actionable for you.


## 🏗️ Project Structure

The project is organized as a monorepo with the following main components:

- **Platform App** (`apps/platform`): The website and dashboard for teams to manage feedback and settings
- **Embed Widget** (`apps/embed`): The embeddable component that gets integrated into client applications
- **API** (`packages/api`): Backend services and endpoints

## 🛠️ Tech Stack

PulseKit is built using:

- **[Bun](https://bun.sh)**: JavaScript/TypeScript runtime and package manager
- **[Vue.js](https://vuejs.org)**: Frontend framework (Embed widget)
- **[Nuxt.js](https://nuxt.com)**: Vue meta-framework (Platform app)
- **[Hono](https://hono.dev)**: Lightweight web framework for the API
- **[Clerk](https://clerk.com)**: Authentication provider
- **[Drizzle ORM](https://orm.drizzle.team)**: TypeScript ORM
- **[Neon](https://neon.tech)**: Serverless Postgres database
- **[TailwindCSS](https://tailwindcss.com)**: CSS framework
- **[DaisyUI](https://daisyui.com)**: TailwindCSS component library

## 📦 Setup

### Prerequisites

- [Bun](https://bun.sh) (>= 1.2.13)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/jfdelarosa/pulsekit.git
   cd pulsekit
   ```

2. Install dependencies
   ```bash
   bun install
   ```

3. Environment setup
   Each project contains `.env.example` files that you need to copy and rename to `.env`.
   Make sure to fill in the required environment variables:

   ```bash
   # For the Platform app
   cp apps/platform/.env.example apps/platform/.env

   # For the Embed widget
   cp apps/embed/.env.example apps/embed/.env

   # For the API
   cp packages/api/.env.example packages/api/.env
   ```

## 🚀 Running the Projects

Each project in the monorepo can be run independently:

### Platform Dashboard

```bash
cd apps/platform
bun dev
```

This will start the platform dashboard at `http://localhost:3000`.

### Embed Widget

```bash
cd apps/embed
bun dev
```

This will start the embed widget development server at `http://localhost:5173`.

### API Server

```bash
cd packages/api
bun dev
```

This will start the API server at `http://localhost:3002`.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the AGPL License - see the LICENSE file for details.
