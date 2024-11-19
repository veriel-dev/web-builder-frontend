import React from "react"

interface Props {
    children: React.ReactNode
}
export const MainLayout = ({children}:Props) => {
    return (
        <div className="flex h-screen bg-gray-50">
            {children}
        </div>
    )
}
