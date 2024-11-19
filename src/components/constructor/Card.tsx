import { ElementBuilder } from "../../interfaces"

interface Props {
    element: ElementBuilder;
    handleDragStart: (element: ElementBuilder) => void
}
export const Card = ({element, handleDragStart}:Props) => {
    const {icon:Icon} = element
    return (
        <div
            draggable
            onDragStart={() => handleDragStart(element as ElementBuilder)}
            className="bg-white rounded-lg shadow-sm border border-gray-200 cursor-move flex items-center flex-col transition-all duration-200 hover:shadow-md hover:border-indigo-200 h-[80px] w-[80px] p-4 gap-1"
        >
            <Icon className="w-5 h-5 text-gray-400 hover:text-indigo-200 transition-all duration-200 " />
            <span className="text-gray-700 font-medium text-sm hover:text-indigo-200 transition-all duration-200 ">{element.label}</span>
    </div>
    )
}
