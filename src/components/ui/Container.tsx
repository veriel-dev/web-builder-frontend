
import { cn } from '../../lib/utils'

import type { ContainerElement } from "../../interfaces"

interface Props {
    element: ContainerElement;
    children?: React.ReactNode[];
}

export const Container = ({ element, children = [] }: Props): JSX.Element => {

    const {
        direction, justify, align, gap, padding, backgroundColor, label, fontSize, color } = element
    return (
        <div className={cn(
            direction, justify, align, gap, padding, backgroundColor, fontSize, color, 'flex  flex-wrap min-h-[100px] w-full rounded-lg border-2 border-dashed border-gray-200')}
        >
            {children.length > 0 ? children : (
                <div className="font-bold text-start">
                    {label}
                </div>
            )}
        </div>
    );
}
