import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-secondary-100 ">
        <h1 className="text-6xl font-bold">Hello World</h1>
        <div className={"text-2xl font-bold border-2  rounded-lg p-2 bg-amber-500 hover:bg-amber-200 hover:transition-all  "}>
            <Link href={"/about"}>
                About
            </Link>
        </div>

    </main>
  );
}
