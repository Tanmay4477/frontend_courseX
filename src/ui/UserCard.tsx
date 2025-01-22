import { FaClockRotateLeft } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { IoChatboxOutline } from "react-icons/io5";
import { LiaCreditCard } from "react-icons/lia";
import { AiOutlineDollar } from "react-icons/ai";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { RiNotionFill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { FaAngleRight } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { useAuthContext } from "@/context/AuthContext";

const UserCard = () => {
    const { logout } = useAuthContext();

    return (
        <div className="fixed right-0 top-0 w-44 p-4 mt-16 mr-4 rounded-md bg-gray-50 dark:bg-[#1F2937]">
            <div className="flex flex-col gap-4">
                <button className="flex justify-normal items-center gap-2">
                    <div><FaClockRotateLeft /></div>
                    <div>Watch History</div>
                </button>
                <button className="flex justify-normal items-center gap-2">
                    <div><FaRegBookmark /></div>
                    <div>Bookmarks</div>
                </button>
                <button className="flex justify-normal items-center gap-2">
                    <div><IoChatboxOutline/></div>
                    <div>Questions</div>
                </button>
                <button className="flex justify-normal items-center gap-2">
                    <div><LiaCreditCard/></div>
                    <div>Payout Methods</div>
                </button>
                <button className="flex justify-normal items-center gap-2">
                    <div><AiOutlineDollar/></div>
                    <div>Bounty</div>
                </button>
                <button className="flex justify-normal items-center gap-2">
                    <div><IoCalendarClearOutline /></div>
                    <div>Calendar</div>
                </button>
                <div className="flex flex-col gap-3 py-2 border-y">
                    <div className="flex justify-between items-center">
                        <button className="flex justify-normal items-center gap-2">
                            <div><FaGithub /></div>
                            <div>Assignments</div>
                        </button>
                        <div>
                            <FaAngleRight />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <button className="flex justify-normal items-center gap-2">
                            <div><RiNotionFill /></div>
                            <div>Slides</div>
                        </button>
                        <button >
                            <GoLinkExternal />
                        </button>
                    </div>
                </div>
                <button className="flex justify-normal items-center gap-2" onClick={logout}>
                    <div><FiLogOut /></div>
                    <div>Logout</div>
                </button>
            </div>
        </div>
    )
}

export default UserCard;