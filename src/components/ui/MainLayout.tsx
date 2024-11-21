import React from "react"

interface Props {
    children: React.ReactNode
}
export const MainLayout = ({ children }: Props): JSX.Element => {
    return (
        <div className="flex h-screen bg-slate-50">
            {children}
        </div>
    )
}
