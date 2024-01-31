'use client';

import { useFormStatus } from "react-dom";

export default function FormSubmittingButton({name}) {
    const {pending} = useFormStatus();
    return (
        <button type="submit" disabled={pending}>
            {pending ? "Loading..." : name}
        </button>
    );
}