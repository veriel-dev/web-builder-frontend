import { HeadingProps } from "../../interfaces"
import { cn } from "../../lib/utils"



export const Heading = ({text, fontSize, color, backgroundColor}:HeadingProps) => {
    return (
        <h2 className={cn(`${fontSize} ${color} ${backgroundColor}`, 'font-bold')}>{
            text}
        </h2>
    )
}
