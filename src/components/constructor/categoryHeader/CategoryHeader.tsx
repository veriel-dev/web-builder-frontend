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
            className="category-header group"
            onClick={onToggle}
        >
            <span className='category-header_title'>
                {title}
            </span>
            <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                className='text-gray-500 dark:text-slate-100'
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <ChevronDown className='category-header_chevron-down group-hover:text-gray-700 dark:group-hover:text-slate-200' />
            </motion.div>
        </button>
    )
}
