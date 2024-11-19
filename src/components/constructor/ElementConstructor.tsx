/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ElementBuilder } from "../../interfaces"
import { containerElemenst, singleElements } from "../../const"
import { Card } from "./Card"

interface Props {
    handleDragStart: (element: ElementBuilder) => void
}
export const ElementConstructor = ({handleDragStart}:Props) => {
    return (
        <div className="w-72 bg-white p-6 border-r border-gray-200 shadow-lg">
            <h2 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-slate-950 bg-clip-text text-transparent mb-6">Constructor</h2>

            <h4 className="text-lg font-semibold bg-gradient-to-r from-gray-400 to-slate-500 bg-clip-text text-transparent mb-6">Contenedores</h4>
            <div className="flex items-center flex-wrap gap-2">
                {
                    containerElemenst.map((element) => (
                        <Card 
                            key={element.type} 
                            //@ts-expect-error
                            element={element} 
                            handleDragStart={handleDragStart} 
                        />
                    ))
                }
            </div>


            <h4 className="text-lg font-semibold bg-gradient-to-r from-gray-400 to-slate-500 bg-clip-text text-transparent mb-6 mt-6">Elementos Simples</h4>
            <div className="flex items-center flex-wrap gap-2">
                {singleElements.map((element) => (
                    <Card 
                        key={element.type}
                        //@ts-expect-error
                        element={element}
                        handleDragStart={handleDragStart} 
                    />
                ))}
            </div>
        </div>
    )
}
