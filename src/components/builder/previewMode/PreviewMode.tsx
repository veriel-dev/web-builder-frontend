import { Monitor, Tablet, Smartphone, ArrowLeft } from "lucide-react"
import { DeviceType } from "../../../interfaces"
import { CanvasArea } from "../canvasArea"

interface Props {
  activeDevice: DeviceType
  setActiveDevice: React.Dispatch<React.SetStateAction<DeviceType>>
  setIsPreviewMode: React.Dispatch<React.SetStateAction<boolean>>
  isPreviewMode: boolean 
}
export const PreviewMode = ({activeDevice, setActiveDevice, setIsPreviewMode, isPreviewMode}:Props) => {
  
  return (
    <div className="fixed inset-0 bg-slate-50 z-50">
        {/* Preview Toolbar */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-4">
          {/* Device Selector */}
          <div className="flex items-center gap-2 bg-white rounded-lg shadow-sm border p-1">
            <button 
              className={`p-2 rounded-md transition-colors ${activeDevice === 'desktop' ? 'bg-violet-50 text-violet-700' : 'hover:bg-slate-50'}`}
              onClick={() => setActiveDevice('desktop')}
            >
              <Monitor className="w-5 h-5" />
            </button>
            <button 
              className={`p-2 rounded-md transition-colors ${activeDevice === 'tablet' ? 'bg-violet-50 text-violet-700' : 'hover:bg-slate-50'}`}
              onClick={() => setActiveDevice('tablet')}
            >
              <Tablet className="w-5 h-5" />
            </button>
            <button 
              className={`p-2 rounded-md transition-colors ${activeDevice === 'mobile' ? 'bg-violet-50 text-violet-700' : 'hover:bg-slate-50'}`}
              onClick={() => setActiveDevice('mobile')}
            >
              <Smartphone className="w-5 h-5" />
            </button>
          </div>

          {/* Exit Preview Button */}
          <button 
            onClick={() => setIsPreviewMode(false)}
            className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-sm border hover:bg-slate-50"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Salir de vista previa</span>
          </button>
        </div>

        {/* Preview Content */}
        <CanvasArea 
          activeDevice={activeDevice} 
          isPreviewMode={isPreviewMode}
        />
      </div>
  )
}
