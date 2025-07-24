function MainContent({page, children}: { page: string, children: React.ReactNode }) {
    return (
        <div
            className={page + " grow p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:shadow-xs lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10"}>
            <div className="w-max h-max m-auto">
                {children}
            </div>
        </div>
    )
}

export {MainContent};