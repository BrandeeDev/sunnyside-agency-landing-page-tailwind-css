const MenuDesktop=()=>{
    return(
        <div className="hidden lg:flex">
            <div className="p-12 text-white font-barlow not-italic font-semibold text-lg leading-[25px] tracking-[-0.128571px] ">
                <a href="" className="ml-12">About</a>
                <a href="" className="ml-12">Services</a>
                <a href="" className="ml-12">Projects</a>
                <a href=""
                   className="ml-12 cursor-pointer p-4 bg-white  m-4 px-8 rounded-full uppercase font-fraunces font-bold hover:text-white hover:bg-opacity-40 hover:shadow-sm text-[15px] leading-[25px] tracking-[-0.107143px] text-[#24303E] ">Contact</a>
            </div>
        </div>
    );
};
export default  MenuDesktop;
