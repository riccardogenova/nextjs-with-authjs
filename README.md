# Next.js 15 Authentication Example with Auth.js

This is a [Next.js](https://nextjs.org) project demonstrating authentication integration using [Auth.js](https://authjs.dev). It provides an example of implementing GitHub and Google authentication in a Next.js application.

## Repository

This repository is publicly available at [https://github.com/riccardogenova/nextjs-with-authjs](https://github.com/riccardogenova/nextjs-with-authjs).

## Getting Started

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/riccardogenova/nextjs-with-authjs.git
cd nextjs-with-authjs
npm install
# or
yarn install
```

### Setup Environment

The only environment variable that is mandatory is the `AUTH_SECRET`. This is a random value used by the library to encrypt tokens and email verification hashes. You can generate one via the official Auth.js CLI by running:

```bash
npx auth secret
```

This will also add it to your `.env` file, respecting the framework conventions (e.g., Next.js’ `.env.local`).

In addition to `AUTH_SECRET`, you need to set up the following environment variables in your `.env.local` file at the root of your project:

```env
# GitHub OAuth
AUTH_GITHUB_ID=your-github-client-id
AUTH_GITHUB_SECRET=your-github-client-secret

# Google OAuth
AUTH_GOOGLE_ID=your-google-client-id
AUTH_GOOGLE_SECRET=your-google-client-secret

# Auth.js Secret
AUTH_SECRET=your-secret-key
```

For more information on obtaining the required credentials:

- [GitHub OAuth App Setup](https://docs.github.com/developers/apps/creating-an-oauth-app)
- [Google Cloud OAuth Setup](https://console.cloud.google.com/apis/credentials)

### Running the Development Server

Once the environment variables are set, start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Features

- **GitHub Authentication**: Use your GitHub account to log in.
- **Google Authentication**: Use your Google account to log in.
- **Secure and Scalable**: Built on [Auth.js](https://authjs.dev) for easy authentication management.

## Project Structure

- **`app/api/auth/[...nextauth].ts`**: Contains the NextAuth.js configuration.
- **`app/page.tsx`**: Main application page, showcasing the authentication UI.
- **`components/`**: UI components used in the application.

## Learn More

To learn more about the tools and libraries used in this project:

- [Next.js Documentation](https://nextjs.org/docs): Learn about Next.js features and API.
- [Auth.js Documentation](https://authjs.dev): Explore Auth.js and its authentication strategies.
- [GitHub OAuth Guide](https://docs.github.com/developers/apps/creating-an-oauth-app): How to configure GitHub OAuth.
- [Google OAuth Guide](https://console.cloud.google.com/apis/credentials): How to configure Google OAuth.

## Deployment

The easiest way to deploy this Next.js app is with [Vercel](https://vercel.com). Follow the [Next.js deployment guide](https://nextjs.org/docs/app/building-your-application/deploying) for detailed steps.

## Contributing

Your feedback and contributions are welcome! Feel free to open issues or submit pull requests to improve this example.
