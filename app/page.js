import Link from "next/link";
import Form from "@/helper-Components/handleFormInNext/form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-secondary-100 ">
        <h1 className="text-6xl font-bold">Hello World</h1>
        <Link href={"/about"} className="max-w-fit bg-amber-500 p-3 rounded-lg text-amber-50 ">
            About
        </Link>
        <Link href={"/data"}  className="max-w-fit bg-amber-500 p-3 rounded-lg text-amber-50 ">
            Data Page
        </Link>
        <Form />

    </main>
  );
}
