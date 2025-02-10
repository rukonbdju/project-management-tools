import Image from "next/image"

const Sidebar = () => {
    return (
        <div className="h-14">
            <Image src={'/logo.svg'} alt="logo" width={48} height={48} className="-ml-0.5" />
        </div>
    )
}

export default Sidebar