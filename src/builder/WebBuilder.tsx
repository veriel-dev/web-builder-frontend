
import {  CanvasArea, ElementConstructor,  MainLayout,  TopBar } from "../components"
import { useDragAndDrop} from "../store/store"
import { useState } from "react";
import { DeviceType } from "../interfaces";
import { PreviewMode } from "../components/builder/previewMode/PreviewMode";



export const WebBuilder = () => {

  const [activeDevice, setActiveDevice] = useState<DeviceType>('desktop');
  const { handleDragStart } = useDragAndDrop();
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  if (isPreviewMode) {
    return (

      <PreviewMode  
        activeDevice={activeDevice} 
        setActiveDevice={setActiveDevice} 
        setIsPreviewMode={setIsPreviewMode}
        isPreviewMode={isPreviewMode}
      />
    )
  }

  return (
    <MainLayout>
      {/* Left SideBar */}
      <ElementConstructor handleDragStart={handleDragStart} />
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Toolbar */}
        <TopBar 
          activeDevice={activeDevice} 
          setActiveDevice={setActiveDevice} 
          setIsPreviewMode={setIsPreviewMode}
        />
        {/* Canvas */}
        <CanvasArea 
          activeDevice={activeDevice} 
          isPreviewMode={isPreviewMode}
        />
      </div>
    </MainLayout>

  )
}
