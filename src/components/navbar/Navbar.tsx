import Image from "next/image";

const Navbar = () => {
    return (
        <header className="bg-white h-14 border-b border-gray-200">
            <nav className="px-4 w-full content-center h-full">
                <div className="flex items-center justify-between">
                    <div className="flex flex-row items-center gap-5">
                        <Image src={'/logo.svg'} alt="logo" width={48} height={48} className="-ml-0.5" />
                        <h1 className="text-xl">Welcome</h1>
                    </div>
                    <div>
                        Avatar
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;