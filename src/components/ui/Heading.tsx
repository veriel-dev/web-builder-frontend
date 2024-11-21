import { cn } from "../../lib/utils"

import type { HeadingProps } from "../../interfaces"



export const Heading = ({ text, fontSize, color, backgroundColor }: HeadingProps): JSX.Element => {
    return (
        <h2 className={cn(`${fontSize} ${color} ${backgroundColor}`, 'font-bold')}>{
            text}
        </h2>
    )
}
