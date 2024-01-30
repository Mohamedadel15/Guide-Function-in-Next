import React from 'react';

const Page = ({params}) => {
    const {AboutId} = params;
    console.log(AboutId);
    return (
        <div>
            <h1 className="text-6xl font-bold">About Slug Page is {AboutId}</h1>
        </div>
    );
};

export default Page;