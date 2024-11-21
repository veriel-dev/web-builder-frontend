
import { cn } from '../../lib/utils'

import type { ContainerElement } from "../../interfaces"

interface Props {
    element: ContainerElement;
    children?: React.ReactNode[];
}

export const Container = ({ element, children = [] }: Props): JSX.Element => {

    const { direction, justify, align, gap, padding, backgroundColor, label } = element
    return (
        <div className={cn(direction, justify, align, gap, padding, backgroundColor, 'flex min-h-[100px] w-full rounded-lg border-2 border-dashed border-gray-200')}>
            {children.length > 0 ? children : (
                <div className="flex items-center justify-center text-gray-400 opacity-30 text-4xl font-bold w-full">
                    {label}
                </div>
            )}
        </div>
    );
}
