import { cn } from "../../lib/utils"

import type { ParagraphProps } from "../../interfaces"


export const Paragraph = ({
    text,
    fontSize,
    color,
    backgroundColor,
    fontWeight
}: ParagraphProps) => {
    return (
        <p className={cn(fontSize, color, backgroundColor, fontWeight, 'leading-relaxed block w-auto')}>
            {text}
        </p>
    )
}
