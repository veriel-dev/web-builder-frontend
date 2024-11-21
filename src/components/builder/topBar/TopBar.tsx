import { Undo, Redo, Monitor, Tablet, Smartphone, Code, Eye, Share2, Save } from 'lucide-react'
import React from 'react'
import { DeviceType } from '../../../interfaces'

interface Props {
    activeDevice: string
    setActiveDevice: React.Dispatch<React.SetStateAction<DeviceType>>
    setIsPreviewMode: React.Dispatch<React.SetStateAction<boolean>>
}
export const TopBar = ({activeDevice, setActiveDevice, setIsPreviewMode}:Props) => {
    return (
        <div className="h-16 border-b bg-white px-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-slate-100 rounded-lg">
                    <Undo className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-slate-100 rounded-lg">
                    <Redo className="w-5 h-5" />
                </button>
            </div>

            <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg">
                <button
                    className={`p-2 rounded-md transition-colors ${activeDevice === 'desktop' ? 'bg-white shadow-sm' : 'hover:bg-slate-200'}`}
                    onClick={() => setActiveDevice('desktop')}
                >
                    <Monitor className="w-5 h-5" />
                </button>
                <button
                    className={`p-2 rounded-md transition-colors ${activeDevice === 'tablet' ? 'bg-white shadow-sm' : 'hover:bg-slate-200'}`}
                    onClick={() => setActiveDevice('tablet')}
                >
                    <Tablet className="w-5 h-5" />
                </button>
                <button
                    className={`p-2 rounded-md transition-colors ${activeDevice === 'mobile' ? 'bg-white shadow-sm' : 'hover:bg-slate-200'}`}
                    onClick={() => setActiveDevice('mobile')}
                >
                    <Smartphone className="w-5 h-5" />
                </button>
            </div>

            <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-slate-100 rounded-lg">
                    <Code className="w-5 h-5" />
                </button>
                <button 
                    className="p-2 hover:bg-slate-100 rounded-lg" 
                    onClick={() => setIsPreviewMode(true)}
                >
                    <Eye className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-slate-100 rounded-lg">
                    <Share2 className="w-5 h-5" />
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
                    <Save className="w-4 h-4" />
                    Save
                </button>
            </div>
        </div>
    )
}
