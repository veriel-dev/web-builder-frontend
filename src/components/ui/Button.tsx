import { cn } from "../../lib/utils";

import type { ElementBuilder } from "../../interfaces";

export const Button = ({
    display,
    align,
    justify,
    gap,
    text,
    fontSize,
    color,
    backgroundColor,
    fontWeight,
    padding,
    borderRadius,
    hover
}: ElementBuilder): JSX.Element => {
    return (
        <button
            className={cn(
                hover,
                display,
                align,
                justify,
                gap,
                fontSize,
                color,
                backgroundColor,
                fontWeight,
                padding,
                borderRadius,
                "h-auto w-auto")}
        >
            {text}
        </button >
    );
};