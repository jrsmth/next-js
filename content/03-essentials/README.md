# Next.js Essentials

<br>

## File-based Routing
* The folder structure of your project (under `/app`) dictates the routing of your application
    * `page.js` / `page.tsx` is a reserved filename that tells Next.js to create a route using the parent folder's name
        * Example:  `/app/login/page.tsx` creates a route at `/login` and serves the corresponding `page.tsx` file