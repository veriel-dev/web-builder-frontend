import React from 'react'

import { Undo, Redo, Monitor, Tablet, Smartphone, Code, Eye, Share2, Save } from 'lucide-react'

import type { DeviceType } from '../../../interfaces'

interface Props {
    selectedDevice: string
    setSelectedDevice: (device: DeviceType) => void
    setIsPreviewMode: React.Dispatch<React.SetStateAction<boolean>>
}
export const TopBar = ({
    selectedDevice,
    setSelectedDevice,
    setIsPreviewMode
}: Props): JSX.Element => {
    return (
        <div className="top-bar">
            <div className="flex items-center gap-4">
                <button className="top-bar__button">
                    <Undo className="top-bar__icon-style" />
                </button>
                <button className="top-bar__button">
                    <Redo className="top-bar__icon-style" />
                </button>
            </div>

            <div className="top-bar__device-controls">
                <button
                    className={`top-bar__device-button ${selectedDevice === 'desktop' ? 'bg-white dark:bg-slate-900 shadow-sm' : 'hover:bg-slate-200 dark:hover:bg-slate-900'}`}
                    onClick={() => setSelectedDevice('desktop')}
                >
                    <Monitor className="top-bar__icon-style" />
                </button>
                <button
                    className={`top-bar__device-button ${selectedDevice === 'tablet' ? 'bg-white dark:bg-slate-900 shadow-sm' : 'hover:bg-slate-200 dark:hover:bg-slate-900'}`}
                    onClick={() => setSelectedDevice('tablet')}
                >
                    <Tablet className="top-bar__icon-style" />
                </button>
                <button
                    className={`top-bar__device-button ${selectedDevice === 'mobile' ? 'bg-white dark:bg-slate-900 shadow-sm' : 'hover:bg-slate-200 dark:hover:bg-slate-900'}`}
                    onClick={() => setSelectedDevice('mobile')}
                >
                    <Smartphone className="top-bar__icon-style" />
                </button>
            </div>

            <div className="flex items-center gap-2">
                <button className="top-bar__button">
                    <Code className="top-bar__icon-style" />
                </button>
                <button
                    className="top-bar__button"
                    onClick={() => setIsPreviewMode(true)}
                >
                    <Eye className="top-bar__icon-style" />
                </button>
                <button className="top-bar__button">
                    <Share2 className="top-bar__icon-style" />
                </button>
                <button className="top-bar__save-button">
                    <Save className="top-bar__save-icon" />
                    Save
                </button>
            </div>
        </div >
    )
}
