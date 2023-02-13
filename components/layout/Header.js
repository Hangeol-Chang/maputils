import logo from '../../public/icon.png'

export default function Header() {
    return (
        <header className="shadow-md mb-2">
            <div className="container mx-auto flex flex-wrap px-5 py-2 flex-col md:flex-row items-center">
                <div
                    className="flex title-font font-medium items-center text-gray-900 mb-1 md:mb-0"
                >
                    <img alt="logo" src={logo} className="w-8 h-8 -mr-1" />
                    <span className="ml-3 text-xl text-indigo-500">Map Utils</span>
                </div>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <div className="mr-5 hover:text-gray-400">
                        Path Drawer
                    </div>
                    <div className="mr-5 hover:text-gray-400">
                        m2
                    </div>
                    <div className="mr-5 hover:text-gray-400">
                        m3
                    </div>
                </nav>
                </div>
        </header>
    )
}