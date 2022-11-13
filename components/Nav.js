import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
    const [navbar, setNavbar] = useState(false)

    return (
        <div>
            <nav className="w-full bg-pink-800 shadow">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link href="/">
                                <h3 className="text-2xl text-white font-bold">
                                    Logo
                                </h3>
                            </Link>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    <div className="space-y-2">
                                        <div className="w-8 h-0.5 bg-gray-600"></div>
                                        <div className="w-8 h-0.5 bg-gray-600"></div>
                                        <div className="w-8 h-0.5 bg-gray-600"></div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                                navbar ? 'block' : 'hidden'
                            }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-white">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="text-white">
                                    <Link href="/seasonal-calendar">
                                        Seasonal Calendar
                                    </Link>
                                </li>
                                <li className="text-white">
                                    <Link href="/recipes">Recipes</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
