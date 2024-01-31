'use server';


import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

function ISValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function ISValidPassword(password) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
}

function ISValidUserName(userName) {
    return /^[a-zA-Z0-9]{3,30}$/.test(userName)
}
export async function  handleSubmit( prevState ,formData) {
    const FormData = {
        userName: formData.get("userName"),
        email: formData.get("email"),
        password: formData.get("password")
    }

    if (!ISValidUserName(FormData.userName)) {
        return { userName: "User name is not valid & Min Length is 3 character" }
    }
    if (!ISValidEmail(FormData.email)) {
        return { email: "Email is not valid" }
    }
    if (!ISValidPassword(FormData.password)) {
        return { password: "Password is not valid" }
    }
    else{
        console.log(FormData)
        revalidatePath("/" , 'layout')
        redirect("/about")
    }

    // -- --- --- Make A Request --- --- --- //
}