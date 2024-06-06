import React, {Suspense} from 'react';
import {getUSer} from "@/lip/user";
import Link from "next/link";
import LoadingAbout from "@/app/about/loading-about";
import UserInfo from "@/component/about/user";
import ImagePicker from "@/helper-Components/image-Picker/image-picker";


const User = async () =>{
    const AllUsers = await getUSer();
    return <UserInfo AllUsers={AllUsers}/>;
}

const AboutPage = () => {

    return (
        <div>
            <h1 className="text-6xl font-bold">About</h1>
            <Suspense fallback={<LoadingAbout/>} >
                <User/>
            </Suspense>
            <div
                className={"text-2xl font-bold border-2 mt-1  rounded-lg p-2 bg-amber-500 hover:bg-amber-200 hover:transition-all max-w-fit  "}>
                <Link href={"/"}>
                    Home
                </Link>
            </div>
            <ImagePicker/>
        </div>
    );
};

export default AboutPage;