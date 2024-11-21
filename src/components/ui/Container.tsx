
import {ContainerElement} from "../../interfaces"
import { cn } from '../../lib/utils'

interface Props {
    element:ContainerElement;
    children?: React.ReactNode;
}

export const Container = ({ element, children }: Props) => {
    const { direction, justify, align, gap, padding, backgroundColor} = element
    return (
        <div className={cn(direction, justify,align, gap, padding, backgroundColor, 'flex min-h-[100px] w-full rounded-lg border-2 border-dashed border-gray-200')}>
            {children}
        </div>
    );
}
