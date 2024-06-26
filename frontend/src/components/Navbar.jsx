import CreateNote from "../components/CreateNote"
import { useState } from "react"
import { Link } from "react-router-dom"
import { FiHome, FiUser } from "react-icons/fi"
import { RiChatNewLine } from "react-icons/ri"
import { PiHandPeaceFill } from "react-icons/pi"
import { VscRepo } from "react-icons/vsc"
import { TbBrandMysql } from "react-icons/tb"
import { FaGlobeAmericas } from "react-icons/fa"


function Navbar() {
    const [creatingNote, setCreatingNote] = useState(false)

    const handleCreateClick = () => {
        setCreatingNote(true);
    }

    return (
    <div className="top-0 left-0 pl-4 h-screen w-18 flex flex-col bg-cream shadow-lg">
        <div>
                <Link to= "/" aria-label="Home"><NavButton icon={<FiHome size="28" />} title="Home"/></Link>
                <Link to="/userPage" aria-label="Posts" title="Posts"><NavButton icon={<FaGlobeAmericas size="28" />} title="Posts"/></Link> 
                <button onClick={handleCreateClick} aria-label="New Post" title="New Post"><NavButton icon={<RiChatNewLine size="28" />} title="New Post"/></button> 
                <Link to="/register" aria-label="Register" title="Register"><NavButton icon={<VscRepo size="28" />} title="Register"/></Link>
                <Link href="/login" aria-label="Login" title="Login"><NavButton icon={<TbBrandMysql size="28" />} title="Login"/></Link>
                <Link href="/profile" aria-label="Profile" title="Profile"><NavButton icon={<FiUser size="28" />} title="Profile"/></Link>
                <Link to="/logout" aria-label='User Logout' title ='User Logout'><NavButton icon={<PiHandPeaceFill size="28"/>} title="Logout"/></Link>
        </div>
        {creatingNote && <CreateNote isOpen={creatingNote} onClose={() => setCreatingNote(!creatingNote)} />}
    </div>
    );
}

const NavButton = ({icon, title}) => (
    <div className="navbar-icon group">
        {icon}
        <span className="navbar-tip group-hover:scale-100">
            {title}
        </span>
    </div>
);

export default Navbar