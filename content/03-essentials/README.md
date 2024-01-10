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

## Navigation
* Next.js provides a `<Link>` component that should be used for navigating between `page.*`'s
    * This enables our app to leaverage the prerendering advantages of SSR but also be a modern reactive SPA after the initial page load
* Example:
    ```typescript
        <Link href='about-us'>About Us</Link>
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

<br>

## Layout
* Within each component folder, the `layout.*` file is reserved for defining the shell around one or more pages
    * It defines the layout into which a `page.*` will be rendered
* Every Next.js project requires at least one `layout.*` in the root `/app` folder but nested ones can be used in your components
    * Example:
        ```typescript
            import './globals.css'

            export const metadata = {
                title: 'NextJS Course App',
                description: 'Your first NextJS app!',
            };

            export default function RootLayout({ children }) {
            return (
                <html lang="en">
                    <body>{children}</body>
                </html>
            );
            }
        ```
        * Note: 
            * `metadata` is a reserved variable, available throughout an app, for implicitly injecting properties into the `<header>`
            * `children` refers to the template of the corresponding `page.*` file in this component

<br>

## Favicon
* In the root `/app` folder, the reserved `icon.png` file represents the application favicon