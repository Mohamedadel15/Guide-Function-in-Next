import Link from "next/link";

export default  function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-dvh ">
            <h1 className="text-6xl font-bold text-amber-400 my-2">OPPS </h1>
            <p className={"font-mono my-2"}> Page Not Found</p>
            <p className={"font-mono"}> Pleasee Try Again Later</p>
            <div
                className={"text-2xl font-bold border-2 mt-10  rounded-lg p-2 bg-amber-500 hover:bg-amber-200 hover:transition-all max-w-fit "}>
                <Link href={"/"}>
                    Home
                </Link>
            </div>
        </div>
    );
}