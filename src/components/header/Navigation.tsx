import Menu from "./Menu";
import MenuDesktop from "./MenuDesktop";
import menu from "../../images/icon-hamburger.svg";
import{useState} from "react";

const Navigation=()=>{
    const[isVisible,setIsVisible]=useState(false);
    const toggleHandler=()=>{
        setIsVisible((prevState)=>!prevState)
    };
    return(
        <nav className="flex justify-between  contents ">

            <MenuDesktop />
            <button className="lg:hidden"  onClick={toggleHandler}>
                <img src={menu} alt="menu"  />
            </button>
            {isVisible && <Menu />}


        </nav>
    );
};
export default  Navigation;