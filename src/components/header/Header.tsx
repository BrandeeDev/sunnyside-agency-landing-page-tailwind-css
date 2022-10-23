import TopHeader from "./TopHeader";
import arrow from"../../images/icon-arrow-down.svg"

const Header = () => {
    return (
        <div
            className="flex flex-col r top-0 w-full bg-header_bg lg:bg-desktop_header_bg lg:h-[800px]  bg-cover bg-center   bg-no-repeat  ">
            <TopHeader/>
            <p className=" mx-[23px] text-white self-center mt-[88px] font-fraunces not-italic  font-black text-[40px] leading-[49px] text-center tracking-[6.25px]  uppercase lg:mt-[105px] lg:text-[56px] lg:leading-[69px] lg:tracking-[8.75px] ">We
                are creatives</p>
            <img src={arrow} alt="arrow" className="self-center mt-[52px] mb-[136px] lg:mt-[97px] lg:mb-[332px]" />
        </div>
    );
};
export default Header;
