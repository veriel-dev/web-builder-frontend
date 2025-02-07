import { Settings2 } from 'lucide-react'

interface Props {
  title?: string;
}
export const Tabs = ({ title = 'Estilo del elemento' }: Props) => {
  return (
    <div className="container-tabs">
      <div className="flex w-auto">
        <button
          className="container-tabs__buttons"
        >
          <div className="flex items-center justify-start gap-2">
            <Settings2 className="w-4 h-4" />
            <span className='text-start'>{title}</span>
          </div>
        </button>
      </div>
    </div>
  )
}
