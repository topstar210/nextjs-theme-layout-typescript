

export default function Navbar() {
    return (
        <div className="flex flex-col w-56 bg-th-background-secondary rounded-r-3xl overflow-hidden min-h-[500px]">
            <div className="flex items-center justify-center h-20 shadow-md">
                <h1 className="text-3xl uppercase">Logo</h1>
            </div>
            <ul className="flex flex-col py-4">
                <li>
                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg"><i className="bx bx-home"></i></span>
                        <span className="text-sm font-medium">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg"><i className="bx bx-music"></i></span>
                        <span className="text-sm font-medium">Music</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}