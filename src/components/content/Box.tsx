const Box = (props: { title: string, description: string, color: string ,order:string}) => {
    // const getGridOrder=()=>{
    //     if (!!!props.order){
    //         return "lg:order-"+props.order+"";
    //
    //     }
    //     return "";
    // }
    const divClass=`flex  flex-col bg-white justify-center items-center text-center mx-6 my-[64px] lg:h-full lg:w-[445px]  lg:mx-[110px] lg:my-[157px] lg:items-start  ${props.order}`
    return (

        <div className={divClass}>

            <h1 className="font-fraunces not-italic font-black text-[32px] leading-[39px] text-3xl-center tracking-[-0.228571px] text-[#24303E] lg:text-left lg:text-[40px] lg:leading-[49px] " >{props.title}</h1>
            <p className="mt-6 font-barlow font-semibold not-italic text-lg leading-[30x] text-center tracking-[-0.128571px] text-[#808397] lg:text-left">{props.description}</p>
            <div className="mt-8 flex flex-col justify-center items-center  relative lg:text-left ">
                <a href="src/components/content/Box#"
                   className=" mb-0 font-fraunces font-black text-[15px]
               leading-[25px] tracking-[1px] uppercase text-[#24303E] lg:text-left peer">LEARN
                    MORE</a>
                <span className={`absolute bottom-0 box-border h-[10px] w-[137px]    opacity-[.25] rounded-[28px] mix-blend-normal learnMoreShadow lg:text-left peer-hover:opacity-[1] mt-1 bg-fixed`} style={{backgroundColor: props.color}}> </span>
            </div>



        </div>
    );
};
export default Box;


