
import {ContainerElement} from "../../interfaces"
import { cn } from '../../lib/utils'
import {  RenderElement } from '../RenderElement'

interface Props {
    element:ContainerElement;
    onDragOver?: (e: React.DragEvent) => void;
    onDrop?: (e: React.DragEvent) => void;
}

export const Container = (props: Props) => {
    console.log({
        props
    })
    const {direction, justify, align, gap, padding, backgroundColor} =  props.element
    return (
        <div className={cn(
            direction,
            justify,
            align,
            gap,
            padding,
            backgroundColor,
            'flex min-h-[100px] w-full rounded-lg border-2 border-dashed border-gray-200'
        )}
            onDragOver={props.onDragOver}
            onDrop={props.onDrop}
        >
            {props.element.children?.map(child => (
                <div key={child.id} className="relative m-2">
                    <RenderElement element={child} />
                </div>
            ))}
        </div>
    )
}
