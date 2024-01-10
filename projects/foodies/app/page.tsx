import Link from "@/node_modules/next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Foodies</h1>
      <Link href='/meals'>Meals</Link>
      <Link href='/community'>Community</Link>
    </main>
  )
}
