
import {  CanvasArea, ElementConstructor,  MainLayout,  TopBar } from "../components"
import {  useWebBuilderStore} from "../store/store"

import { PreviewMode } from "../components/builder/previewMode/PreviewMode";



export const WebBuilder = () => {
  const { 
    // Existing state
    selectedDevice,
    setSelectedDevice,
    isPreviewMode,
    setIsPreviewMode,
    
    // New drag and drop functionality
    handleDragStart,
    handleDrop,
    handleDragOver,
    handleDragLeave,
  } = useWebBuilderStore();

  if (isPreviewMode) {
    return (
      <PreviewMode  
        selectedDevice={selectedDevice} 
        setSelectedDevice={setSelectedDevice} 
        setIsPreviewMode={setIsPreviewMode}
        isPreviewMode={isPreviewMode}
      />
    )
  }

  return (
    <MainLayout>
      {/* Left SideBar */}
      <ElementConstructor 
        handleDragStart={handleDragStart} 
      />
      {/* Main Content */}
      <div 
        className="flex-1 flex flex-col"
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDragLeave={handleDragLeave}
      >
        {/* Top Toolbar */}
        <TopBar 
          selectedDevice={selectedDevice} 
          setSelectedDevice={setSelectedDevice}
          setIsPreviewMode={setIsPreviewMode}
        />
        {/* Canvas */}
        <CanvasArea 
          selectedDevice={selectedDevice} 
          isPreviewMode={isPreviewMode}
        />
      </div>
    </MainLayout>

  )
}
