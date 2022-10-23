import logo from "../../images/logo.svg";
import menu from "../../images/icon-hamburger.svg";
import Navigation from "./Navigation";

const TopHeader =()=>{
    return(
        <div className="  mt-8 mx-6 lg:ml-[40px]  lg:mr-[48px]  lg:mt-[34px] flex flex-row justify-between items-center ">
            <img src={logo} alt="logo" className="lg:w-[170px] lg:h-[33px]" />
           <Navigation />

        </div>
    );
};
export default  TopHeader;