import { Type } from 'lucide-react'

export const Tabs = () => {
  return (
    <div className="border-b border-gray-100">
      <nav className="flex w-auto">
        <button
          className="flex-1 px-4 py-3 text-sm font-medium transition-colors text-gray-900 border-b-2 border-indigo-500"
        >
          <div className="flex items-center justify-start gap-2">
            <Type className="w-4 h-4" />
            <span className='text-start'>Estilos</span>
          </div>
        </button>

      </nav>
    </div>
  )
}
