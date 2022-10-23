import milkMobile from "../../images/mobile/image-gallery-milkbottles.jpg";
import milkDesktop from "../../images/desktop/image-gallery-milkbottles.jpg";
import orangeMobile from  "../../images/mobile/image-gallery-orange.jpg";
import orangeDesktop from "../../images/desktop/image-gallery-orange.jpg";
import coneMobile from  "../../images/mobile/image-gallery-cone.jpg";
import coneDesktop from "../../images/desktop/image-gallery-cone.jpg";
import sugarMobile from  "../../images/mobile/image-gallery-sugar-cubes.jpg";
import sugarDesktop from "../../images/desktop/image-gallery-sugarcubes.jpg";

const PicturesBox=()=>{
    return(
        <div className="grid grid-cols-2 w-full gap-x-0  gap-y-0 lg:flex  lg:flex-row lg:gap-x-0 lg:h-[447px]">

            <picture  >
                <source media="(max-width:1023px)" srcSet={milkMobile} />
                <source media="(min-width:1024px)" srcSet={milkDesktop}/>
                <img src={milkMobile} alt="image"
                />
            </picture>
            <picture  >
                <source media="(max-width:1023px)" srcSet={orangeMobile} />
                <source media="(min-width:1024px)" srcSet={orangeDesktop}/>
                <img src={orangeMobile} alt="image"
                />
            </picture>
            <picture  >
                <source media="(max-width:1023px)" srcSet={coneMobile} />
                <source media="(min-width:1024px)" srcSet={coneDesktop}/>
                <img src={coneMobile} alt="image"
                />
            </picture>
            <picture  >
                <source media="(max-width:1023px)" srcSet={sugarMobile} />
                <source media="(min-width:1024px)" srcSet={sugarDesktop}/>
                <img src={sugarMobile} alt="image"
                />
            </picture>

        </div>
    );
};
export default PicturesBox;