const Menu=()=>{
    return(
        <div id="mobile-menu" className=" lg:hidden contents">
            <div className="absolute top-[106px] right-6   w-[329px] flex flex-col justify-center items-center bg-white font-barlow font-semibold cursor-pointer mx-auto p-4 no-underline text-[#808397] text-xl leading-[25px] tracking-[-0.142857px]">
                <a href=""className="mt-8" >About</a>
                <a href=""  className="mt-8">Services</a>
                <a href=""  className="mt-8 mb-8">Projects</a>
                <a href=""
                   className="block cursor-pointer mx-auto p-4 bg-[#FBD600] w-max m-4 px-8 rounded-full uppercase font-fraunces font-bold ">Contact</a>
            </div>
        </div>
    );
};
export default  Menu;