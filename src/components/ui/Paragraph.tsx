import { cn } from "../../lib/utils"

import type { ParagraphProps } from "../../interfaces"


export const Paragraph = ({
    text,
    fontSize,
    color,
    backgroundColor
}: ParagraphProps): JSX.Element => {
    return (
        <p className={cn(`${fontSize} ${color} ${backgroundColor}`, 'leading-relaxed')}>
            {text}
        </p>
    )
}
