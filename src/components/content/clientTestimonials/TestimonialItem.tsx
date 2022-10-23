const TestimonialItem=(props: {image:string,content:string,name:string,function:string})=>{
return(
    <div className="flex flex-col justify-center items-center ">
        <img alt="image"  src={require(`../../../images/${props.image}`)}
        className="w-[72px] h-[72px] rounded-full "/>
        <p className="mt-8 font-barlow not-italic font-semibold text-lg leading-8 text-center tracking-[-0.128571px] text-[#5B636D] lg:w-[350px]">
            {props.content}
        </p>
        <p className="mt-8 font-fraunces not-italic font-black text-lg leading-[22px] text-[center] tracking-[-0.128571px] text-[#24303E] ">{props.name}</p>
        <p className="mt-[9px] font-barlow not-italic font-semibold text-sm leading-[25px] text-center tracking-[0.1px] text-[#A7AAAD] ">{props.function}</p>
    </div>
);
};
export default  TestimonialItem;
