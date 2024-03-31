import React from 'react';
import Link from "next/link";

const DataPage = () => {
    return (
        <div className="min-h-dvh flex justify-center items-center bg-red-200 text-black text-2xl flex-col gap-4 ">
            <h1>data page</h1>
            <Link href={"/"}  className="max-w-fit bg-amber-500 p-3 rounded-lg text-amber-50 ">
               Home
            </Link>
        </div>
    );
};

export default DataPage;