import { CanvasArea, ContainerEditor, ElementConstructor, MainLayout, TopBar } from "../components"
import { PreviewMode } from "../components/builder/previewMode/PreviewMode";
import { useWebBuilderStore } from "../store/store"

export const WebBuilder = () => {
  const {
    // Existing state
    selectedDevice,
    setSelectedDevice,
    isPreviewMode,
    setIsPreviewMode,
    handleDragStart,
    handleDrop,
    handleDragOver,
    handleDragLeave,
  } = useWebBuilderStore();

  if (isPreviewMode) {
    return (
      <PreviewMode
        isPreviewMode={isPreviewMode}
        selectedDevice={selectedDevice}
        setIsPreviewMode={setIsPreviewMode}
        setSelectedDevice={setSelectedDevice}
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
        className="main-content"
        role="contentinfo"
        onDragLeave={handleDragLeave}
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => handleDrop(e)}
      >
        {/* Top Toolbar */}
        <TopBar
          selectedDevice={selectedDevice}
          setIsPreviewMode={setIsPreviewMode}
          setSelectedDevice={setSelectedDevice}
        />
        {/* Canvas */}
        <CanvasArea
          isPreviewMode={isPreviewMode}
          selectedDevice={selectedDevice}
        />
      </div>
      {/* Right SideBar */}
      <ContainerEditor />
    </MainLayout>

  )
}
