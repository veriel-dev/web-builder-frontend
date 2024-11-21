import { cn } from "../../lib/utils";

import type { HeroProps } from "../../interfaces";

export const Hero = ({
    text,
    subtitle,
    fontSize,
    color,
    backgroundColor
}: HeroProps): JSX.Element => {
    return (
        <div className={cn(`${fontSize} ${color} ${backgroundColor}`, `p-12 rounded-xl text-center`)}>
            <h1 className="font-bold mb-4">{text}</h1>
            <p className="text-xl opacity-90">{subtitle}</p>
        </div>
    );
};