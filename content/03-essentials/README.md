# Next.js Essentials

<br>

## File-based Routing
* The folder structure of your project (under `/app`) dictates the routing of your application
    * `page.js` / `page.tsx` is a reserved filename that tells Next.js to create a route using the parent folder's name
        * Example:  `/app/login/page.tsx` creates a route at `/login` and serves the corresponding `page.tsx` file
    * `page.*` files are React component:
        * Example:
            ```typescript
                export default function Home() {
                    return (
                        <main>
                        <img src="/logo.png" alt="A server surrounded by magic sparkles." />
                        <h1>Welcome to this NextJS Course!</h1>
                        <p>🔥 Let&apos;s get started! 🔥</p>
                        </main>
                    );
                }
            ```

<br>

## Server vs Client Components
```typescript
    export default function Home() {
        console.log('Output something');
        return (
            <main>
            <img src="/logo.png" alt="A server surrounded by magic sparkles." />
            <h1>Welcome to this NextJS Course!</h1>
            <p>🔥 Let&apos;s get started! 🔥</p>
            </main>
        );
    }
```
* This component is by default a Server component, meaning that it is rendered on the server and not the client
    * As a result, the `console.log()` outputted in the server logs and not in the browser
* If we wanted this to be a Client component, we would add `'use client'` to the top of the component file