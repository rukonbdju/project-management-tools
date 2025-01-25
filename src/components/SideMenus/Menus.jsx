import { ChatIcon } from "../Icon/ChatIcon";
import { CommunityIcon } from "../Icon/CommunityIcon";
import { NoteIcon } from "../Icon/NoteIcon";
import { PlusIcon } from "../Icon/PlusIcon";
import { ProjectIcon } from "../Icon/ProjectIcon";
import { TasksIcon } from "../Icon/TasksIcon";
import { ThreeDotsIcon } from "../Icon/ThreeDotsIcon";

const Menus = () => {
    return (
        <div className="flex flex-col gap-4 p-2">
            <div>
                <div className="flex justify-between items-center p-2  rounded transition-all duration-200 hover:bg-blue-50">
                    <div className="flex flex-row gap-2 items-center text-sm font-semibold text-gray-500 cursor-pointer">
                        <span><ProjectIcon className="size-5" /></span>
                        <span>Projects</span>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <button className="bg-gray-200 p-0.5 rounded transition-all duration-200 active:bg-gray-200 active:scale-95">
                            <PlusIcon className="size-5" />
                        </button>
                        <button className="bg-gray-200 p-0.5 rounded transition-all duration-200 active:bg-gray-300 active:scale-95">
                            <ThreeDotsIcon className="size-5" />
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center p-2 rounded transition-all duration-200 hover:bg-blue-50 ">
                    <div className="flex flex-row gap-2 items-center text-sm font-semibold text-gray-500  cursor-pointer">
                        <span><NoteIcon className="size-5" /></span>
                        <span>Notes</span>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <button className="bg-gray-200 p-0.5 rounded transition-all duration-200 active:bg-gray-200 active:scale-95">
                            <PlusIcon className="size-5" />
                        </button>
                        <button className="bg-gray-200 p-0.5 rounded transition-all duration-200 active:bg-gray-300 active:scale-95">
                            <ThreeDotsIcon className="size-5" />
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center p-2 hover:bg-blue-50 rounded transition-all duration-200">
                    <div className="flex flex-row gap-2 items-center text-sm font-semibold text-gray-500  cursor-pointer">
                        <span><TasksIcon className="size-5" /></span>
                        <span>Tasks</span>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <button className="bg-gray-200 p-0.5 rounded transition-all duration-200 active:bg-gray-200 active:scale-95">
                            <PlusIcon className="size-5" />
                        </button>
                        <button className="bg-gray-200 p-0.5 rounded transition-all duration-200 active:bg-gray-300 active:scale-95">
                            <ThreeDotsIcon className="size-5" />
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center p-2  rounded transition-all duration-200 hover:bg-blue-50">
                    <div className="flex flex-row gap-2 items-center text-sm font-semibold text-gray-500 cursor-pointer">
                        <span><CommunityIcon className="size-5" /></span>
                        <span>Community</span>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center p-2  rounded transition-all duration-200 hover:bg-blue-50">
                    <div className="flex flex-row gap-2 items-center text-sm font-semibold text-gray-500 cursor-pointer">
                        <span><ChatIcon className="size-5" /></span>
                        <span>Chat</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menus;