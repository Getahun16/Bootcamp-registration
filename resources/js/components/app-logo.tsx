export default function AppLogo() {
    return (
        <>
            <div
                className="flex aspect-square size-8 items-center justify-center rounded-md"
                style={{
                    background:
                        'linear-gradient(to bottom right, #F7A600, #FFB300)',
                }}
            >
                <span className="text-xs font-bold text-white">BC</span>
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold">
                    Bootcamp
                </span>
            </div>
        </>
    );
}
