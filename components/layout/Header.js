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
                    <button 
                        id="dropdownNavbarLink" 
                        data-dropdown-toggle="dropdownNavbar" 
                        className="
                            flex items-center 
                            justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 
                            md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 
                            dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                            Dropdown 
                    </button>
                    <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                            </li>
                        </ul>
                    </div>

                    <div className="mr-5 hover:text-gray-400">
                    </div>
                    <div className="mr-5 hover:text-gray-400">
                        m3
                    </div>
                </nav>
                </div>
        </header>
    )
}