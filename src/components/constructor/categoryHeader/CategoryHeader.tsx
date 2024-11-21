import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface Props {
    title: string
    isOpen: boolean
    onToggle: () => void
}
export const CategoryHeader = ({ title, isOpen, onToggle }: Props): JSX.Element => {
    return (
        <button
            className="w-full flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg group transition-colors duration-200"
            onClick={onToggle}
        >
            <span className='text-xs font-medium uppercase text-gray-500 tracking-wider'>
                {title}
            </span>
            <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                className='text-gray-500'
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <ChevronDown className='h-4 w-4 transition-colors group-hover:text-gray-700' />
            </motion.div>

        </button>
    )
}
