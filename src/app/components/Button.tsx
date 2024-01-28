'use client'
import { useRouter } from "next/navigation";

interface ButtonProps {
    size: string;
    variant: "primary" | "secondary" | "tertiary";
    state: "active" | "disabled"
    label: string;
    navigate?: string;
    onClickHandler?: () => void;
}

export function Button({ variant, state, label, navigate, onClickHandler }: ButtonProps) {
    const router = useRouter();
    
    const buttonVariant = {
        "primary": {
            "active": "bg-primary-600 hover:bg-primary-500 text-primary-100 hover:text-primary-200 border-primary-500 hover:border-primary-400",
            "disabled": "bg-primary-600 text-primary-500 text-primary-100"
        },
        "secondary": {
            "active": "bg-primary-700 hover:bg-primary-600 text-primary-100 hover:text-primary-200 border-primary-400",
            "disabled": "bg-primary-700 hover:bg-primary-600 text-primary-100 border-primary-600"
        },
        "tertiary": {
            "active": "text-primary-100 hover:text-primary-300",
            "disabled": "text-primary-600"
        }
    };

    return (
        <button 
            className={`py-2.5 px-4 h-[50px] flex items-center justify-center min-w-[100px] w-fit rounded-2xl ${buttonVariant[variant][state]} text-center text-sm sm:text-base ${variant !== "tertiary" ? "border-[1.5px] border-solid": "border-none"}`}

            onClick={() => {
                navigate ? router.push(navigate) : onClickHandler && onClickHandler();
            }}
        >
            { label }
        </button>
    );
}   