import TestimonialItem from "./TestimonialItem";

const DUMMY_LIST = [
    {
        id: "t1",
        image: "image-emily.jpg",
        content: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
        name: "Emily R.",
        function: "Marketing Director"
    },
    {
        id: "t2",
        image: "image-thomas.jpg",
        content: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
        name: "Thomas S.",
        function: "Chief Operating Officer"
    },
    {
        id: "t3",
        image: "image-jennie.jpg",
        content: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended! ",
        name: "Jennie F.",
        function: "Business Owner"
    }
];
const TestimonialList = () => {
    const list = DUMMY_LIST.map((item) => <li key={item.id}>
        <TestimonialItem image={item.image} content={item.content} name={item.name} function={item.function}/>
    </li>);
    return (
        <div className="flex flex-col justify-center items-center my-[64px] mx-6  ">
            <h2 className="font-fraunces not-italic font-black text-base leading-5 text-center tracking-[1px] text-[#A7AAAD]  lg:text-xl lg:leading-[25px] lg:tracking-[5px]  ">CLIENT
                TESTIMONIALS</h2>
            <ul className="flex  flex-col gap-y-[64px] lg:flex-row lg:justify-between lg:mx-[165px] lg:gap-y-0  lg:gap-x-[30px] mt-[74px] lg:mt-[70px]">
                {list}
            </ul>

        </div>
    );
};
export default TestimonialList;
