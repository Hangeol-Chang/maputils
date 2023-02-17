import logo from '/public/icon.png'
import { Menu, MenuHandler, MenuList, MenuItem, Button } from "@material-tailwind/react"
import DistCalculator from '../utilities/DistCalculator'
import Router, { useRouter } from 'next/router'
import { useContext, useState } from 'react';
import Image from 'next/image'
import MapUtilsContext from '../../context/context';

export default function Header() {
    const router = useRouter();
    const { prefix } = useContext(MapUtilsContext)

    let [ viewDistCalcurator, setViewDistCalcurator ] = useState(false);

    return (
        <header className="shadow-md mb-2">
            <div className="container mx-auto flex flex-wrap px-5 py-2 flex-col md:flex-row items-center">
                <div
                    className="flex title-font font-medium items-center text-gray-900 mb-1 md:mb-0"
                >
                    
                    {/* <Image alt="logo" src={`/public/icon.png`} width={60} height={60} className="w-8 h-8 -mr-1" /> */}
                    <span onClick={() => router.push("/")} className="ml-3 text-xl text-indigo-500 cursor-pointer">
                        Map Utils
                    </span>
                </div>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <div onClick={() => router.push("/pathDrawer")} className="mr-5 hover:text-gray-400 cursor-pointer">
                        Path Drawer
                    </div>

                    <div onClick={() => setViewDistCalcurator(!viewDistCalcurator)} className="mr-5 hover:text-gray-400 cursor-pointer">
                        dist Calcurator
                    </div>

                    {
                        viewDistCalcurator ? 
                            <div className="z-10 absolute top-16 right-12 bg-white p-3 outline outline-1 outline-blue-200 rounded-md">
                                <DistCalculator />
                            </div>
                        : <></>
                    }
                    <div className="mr-5 hover:text-gray-400">
                        m3
                    </div>
                </nav>
                </div>
        </header>
    )
}