const Picture = (props: {imageName:string,order:string}) => {
    // const getGridOrder=()=>{
    //     if (!!!props.order)
    //     {
    //         return "lg:order-"+props.order+"";
    //
    //     }
    //     return "";
    // }
    const pictureClass=` w-full mt-0  h-[312px] lg:h-full lg:w-full lg:flex ${props.order}`;
    return (
        <picture className={pictureClass} >
            <source media="(max-width:1023px)" srcSet={require(`../images/mobile/${props.imageName}`)}/>
            <source media="(min-width:1024px)" srcSet={require(`../images/desktop/${props.imageName}`)}/>
            <img src={require(`../images/mobile/${props.imageName}`)} alt="image" className="lg:grow"
                 />
        </picture>
    )

};


export default Picture;
