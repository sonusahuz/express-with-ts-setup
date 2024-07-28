### Step-by-Step: Setting Up Node.js and Express.js with TypeScript

#### 1. Initialize Node.js Project

Initialize a new Node.js project with default settings.

```bash
npm init -y
```

#### 2. Install Express

Install the Express framework.

```bash
npm install express
```

#### 3. Install Development Dependencies

Install nodemon, TypeScript, and type definitions for Express and TypeScript.

```bash
npm install nodemon typescript @types/express @types/node -D
```

#### 4. Initialize TypeScript Configuration

Create a `tsconfig.json` file to configure TypeScript.

```bash
npx tsc --init
```

#### 5. Compile TypeScript

Compile the TypeScript code to JavaScript.

```bash
npx tsc
```

#### 6. Set Up ESLint

Initialize ESLint to maintain code quality.

```bash
npm init @eslint/config
```

#### 7. Update `package.json` Scripts

Add scripts to the `package.json` file for building, starting, and developing the application.

```json
{
  "scripts": {
    "start": "node dist/app.js",
    "build": "tsc",
    "dev": "nodemon src/app.ts"
  }
}
```

#### 8. Run the Development Server

Start the development server.

```bash
npm run dev
```

This setup covers initializing a Node.js project, installing and configuring Express and TypeScript, setting up ESLint, and adding scripts for development and production builds.
