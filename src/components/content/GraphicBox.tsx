
const GraphicBox=(props:{title:string,description:string})=>{
return(
    <div className="flex flex-col justify-center items-center  mx-6 contents lg:h-full ">
    <h1 className="font-fraunces not-italic font-black text-[28px] leading-[35px] text-center tracking-[-0.2px] text-[#24554A]    mt-[398px] lg:mix-blend-normal	lg:opacity-[.75] lg:text-[#052C3B]">{props.title}</h1>
<p className="  mt-[27px]  font-barlow font-semibold text-base leading-[27px] text-center tracking-[-0.114286px] text-[#24554A]  mx-6   lg:self-center lg:w-[339px] mb-[59px] lg:text-[#19536C] ">{props.description}</p>
    </div>);
};
export  default  GraphicBox;
