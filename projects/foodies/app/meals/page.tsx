import Link from "@/node_modules/next/link";

export default function MealsPage() {

    return(
        <main>
            <h1>Meals Page</h1>
            <Link href='/meals/share'>Share Meal</Link>
        </main>
    );
}