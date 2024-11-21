import { ContainerGridElement, } from "../../interfaces";
import { cn } from "../../lib/utils";


interface Props {
    element: ContainerGridElement;
    children?: React.ReactNode;
}


export const GridContainer = ({ element, children}: Props) => {
    const { cols,  gap, padding, backgroundColor} = element
    return (
        <div className={cn(cols, gap, padding, backgroundColor, "grid min-h-[100px] w-full rounded-lg border-2 border-dashed border-gray-200")}>
            {children}
        </div>
    );
};