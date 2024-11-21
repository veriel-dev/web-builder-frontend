import { Monitor, Tablet, Smartphone, ArrowLeft } from "lucide-react"

import { CanvasArea } from "../canvasArea"

import type { DeviceType } from "../../../interfaces"

interface Props {
  selectedDevice: DeviceType
  setSelectedDevice: (device: DeviceType) => void
  setIsPreviewMode: React.Dispatch<React.SetStateAction<boolean>>
  isPreviewMode: boolean
}
export const PreviewMode = ({
  selectedDevice,
  setSelectedDevice,
  setIsPreviewMode,
  isPreviewMode
}: Props): JSX.Element => {

  return (
    <div className="fixed inset-0 bg-slate-50 z-50">
      {/* Preview Toolbar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-4">
        {/* Device Selector */}
        <div className="flex items-center gap-2 bg-white rounded-lg shadow-sm border p-1">
          <button
            className={`p-2 rounded-md transition-colors ${selectedDevice === 'desktop' ? 'bg-violet-50 text-violet-700' : 'hover:bg-slate-50'}`}
            onClick={() => setSelectedDevice('desktop')}
          >
            <Monitor className="w-5 h-5" />
          </button>
          <button
            className={`p-2 rounded-md transition-colors ${selectedDevice === 'tablet' ? 'bg-violet-50 text-violet-700' : 'hover:bg-slate-50'}`}
            onClick={() => setSelectedDevice('tablet')}
          >
            <Tablet className="w-5 h-5" />
          </button>
          <button
            className={`p-2 rounded-md transition-colors ${selectedDevice === 'mobile' ? 'bg-violet-50 text-violet-700' : 'hover:bg-slate-50'}`}
            onClick={() => setSelectedDevice('mobile')}
          >
            <Smartphone className="w-5 h-5" />
          </button>
        </div>

        {/* Exit Preview Button */}
        <button
          className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-sm border hover:bg-slate-50"
          onClick={() => setIsPreviewMode(false)}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Salir de vista previa</span>
        </button>
      </div>

      {/* Preview Content */}
      <CanvasArea
        isPreviewMode={isPreviewMode}
        selectedDevice={selectedDevice}
      />
    </div>
  )
}
