import Picture from "../Picture";
import Box from "./Box";
import GraphicBox from "./GraphicBox";

const Content = () => {
    return (

        <article className="flex flex-col justify-center items-center lg:flex-none lg:w-full lg:grid lg:grid-cols-2 lg:gap-x-0 lg:gap-y-0  ">
            <Picture order="lg:col-start-2 lg:row-start-1" imageName="image-transform.jpg"/>
            <Box order="lg:col-start-1 lg:row-start-1" color="#FAD400" title="Transform your brand"
                 description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."/>
            <Picture order="lg:col-start-1 lg:row-start-2" imageName="image-stand-out.jpg"/>
            <Box order="lg:col-start-2 lg:row-start-2" color="#FE7766" title="Stand out to the right audience"
                 description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. "/>
            <div className="flex flex-col justify-end  bg-graphicDesign_bg bg-desktop_graphicDesign_bg bg-cover bg-center   bg-no-repeat w-full  lg:h-[600px]   ">
                <GraphicBox  title="Graphic Design"
                            description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."/>

            </div>
            <div className="flex  flex-col justify-end  bg-photography_bg  bg-desktop_photography_bg bg-cover bg-center   bg-no-repeat w-full  lg:h-[600px] ">
                <GraphicBox title="Photography"
                            description="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."/>

            </div>

        </article>
    );
};
export default Content;