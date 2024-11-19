import { ParagraphProps } from "../../interfaces"
import { cn } from "../../lib/utils"


export const Paragraph = ({text, fontSize, color, backgroundColor}:ParagraphProps) => {
    return (
        <p className={cn(`${fontSize} ${color} ${backgroundColor}`, 'leading-relaxed')}>
            {text}
        </p>
    )
}
