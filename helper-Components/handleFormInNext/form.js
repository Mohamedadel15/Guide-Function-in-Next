'use client';

import {handleSubmit} from "@/lip/action";
import { useFormState  } from "react-dom";
import FormSubmittingButton from "@/helper-Components/handleFormInNext/form-submiting-button";
export default  function Form() {
  const [state, formAction] = useFormState(handleSubmit , {
        userName: "",
        email: "",
        password: ""
  });
    return (
        <form action={formAction} className=" flex flex-col items-center justify-center gap-4 ">
            <input type="text" placeholder="Enter your name" name={"userName"}  autoComplete={"username"}/>
            {
                state?.userName && <p className="text-red-500">{state?.userName}</p>
            }
            <input type="email" placeholder="Enter your email" name={"email"}  autoComplete={"email"} />
            {
                state?.email && <p className="text-red-500">{state?.email}</p>
            }
            <input type="password" placeholder="Enter your password" name={"password"}  autoComplete={"current-password"} />
            {
                state?.password && <p className="text-red-500">{state?.password}</p>
            }
            <button type="button">Hello</button>    {/*----- type="button"  ------ */}
            <FormSubmittingButton name={"Create"} />
        </form>
    )
}