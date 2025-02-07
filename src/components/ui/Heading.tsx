import { cn } from "../../lib/utils"

import type { HeadingProps } from "../../interfaces"

export const Heading = ({
    text,
    fontSize,
    color,
    textPosition,
    padding,
    margin,
    fontWeight,
    level = 'h2',
    toggleIsEditing,
}: HeadingProps): JSX.Element => {
    const HeadingComponent = level
    return (
        <HeadingComponent className={
            cn("relative", "cursor-pointer", fontSize, color, textPosition, padding, margin, fontWeight)}
            onClick={toggleIsEditing}
        >
            {text}
        </HeadingComponent>

    )
}
