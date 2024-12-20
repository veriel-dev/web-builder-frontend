import { cn } from "../../lib/utils";

import type { ButtonProps } from "../../interfaces";



export const Button = ({ text, fontSize, color, backgroundColor }: ButtonProps): JSX.Element => {
    return (
        <button className={cn(`${fontSize} ${color} ${backgroundColor}`, `ppx-6 py-2 rounded-md shadow-sm hover:opacity-90`)}>
            {text}
        </button>
    );
};