'use client';
import Link from "next/link";

export default function AboutError({error}) {
    return (
        <div className="flex flex-col items-center justify-center min-h-dvh ">
            <h1 className="text-6xl font-bold text-amber-400">OPPS </h1>
            <p className={"font-mono"}> {error.message}</p>
            <p className={"font-mono"}> Pleasee Try Again Later</p>
            <Link href={"/"}>
                Home
            </Link>
        </div>
    );
}