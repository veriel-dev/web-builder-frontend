import { ButtonProps } from "../../interfaces";
import { cn } from "../../lib/utils";



export const Button = ({ text, fontSize, color, backgroundColor }: ButtonProps) => {
    return (
        <button className={cn(`${fontSize} ${color} ${backgroundColor}`, `ppx-6 py-2 rounded-md shadow-sm hover:opacity-90`)}>
            {text}
        </button>
    );
};