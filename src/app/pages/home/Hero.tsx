import Image from "next/image";
import heroImage from "../../../../public/assets/images/bg-hero-0.png";
import star from "../../../../public/assets/images/star.png";
import versaceLogo from "../../../../public/assets/images/versace-logo.png";
import gucciLogo from "../../../../public/assets/images/gucci-logo.png";
import pradaLogo from "../../../../public/assets/images/prada-logo.png";
import zaraLogo from "../../../../public/assets/images/zara-logo.png";
import ckLogo from "../../../../public/assets/images/ck-logo.png";

export default function Hero() {
  return (
    <>
      <div className="bg-[#F0F0F0] xl:bg-hero lg:bg-right lg:bg-no-repeat bg-cover 2xl:bg-contain  sm:py-6 md:py-0 xl:py-14 2xl:py-16 ">
        <div className=" xl:w-[90%] w-full mx-auto ">
          <div id="hero__text" className="mx-auto xl:mx-0 w-[90%] ">
            <Image
              src={star}
              alt="star"
              className="hidden xl:block above1700:hidden absolute xl:top[10%] 2xl:top-[25%] right-[5%]"
            />
            <Image
              src={star}
              alt="star"
              className="hidden xl:block  above1700:hidden absolute w-14 top-96 right-[37rem]"
            />
            <h1 className="tracking-tighter text-4xl sm:text-6xl md:text-7xl  2xl:text-[5rem] sm:mx-auto xl:mx-0 xl:text-7xl  w-full  sm:max-w-[640px] md:max-w-[770px] xl:max-w-[550px] 2xl:max-w-[680px] transform scale-y-90 font-integral-cf font-heavy">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className=" min-w-[360px] sm:max-w-[630px] md:max-w-[770px] xl:max-w-[650px] w-[95%] sm:mx-auto xl:mx-0 py-1 pb-3 md:pt-1 md:pb-6  md:text-2xl xl:text-xl sm:text-xl opacity-80 text-gray-9080 ">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="w-full xl:max-w-52  text-xl inline-block mb-6 py-2 md:py-4  md:px-18 rounded-full bg-gray-900 text-white md:mb-8 ">
              Shop Now
            </button>
            <div className="flex lg:pb-0 lg:gap-3 2xl:gap-8 ">
              <div className="sm:mx-auto xl:mx-0">
                <h2 className="text-4xl md:text-5xl  font-integral-cf font-light  transform scale-y-90">
                  200+
                </h2>
                <p className="opacity-80 pt-[2px] text-lg">
                  International Brands
                </p>
              </div>
              <div className="w-0 lg:w-[2px] h-16 lg:h-20 bg-[#dcdada]"></div>
              <div className="sm:mx-auto xl:mx-0">
                <h2 className="text-4xl md:text-5xl font-integral-cf font-light transform scale-y-90">
                  2,000+
                </h2>
                <p className="opacity-80 pt-[2px] text-lg">
                  High-Quality Products
                </p>
              </div>
              <div className="w-0 lg:w-[2px] h-12 lg:h-20 bg-[#dcdada]"></div>
              <div className="sm:mx-auto xl:mx-0">
                <h2 className="flex  text-4xl md:text-5xl   font-integral-cf font-light transform scale-y-90">
                  30,00+
                </h2>
                <p className="opacity-80 pt-[3px]  text-lg">Happy Customers</p>
              </div>
            </div>
            <div className="mx-auto ">
              {/* <Image src={star} alt="star" className="absolute sm:hidden bottom-[17rem] w-16 right-8  xl:w-24  2xl:w-28 lg:right-14"/> */}
              <Image
                src={heroImage}
                alt="hero image"
                className="w-full max-w-[750px] sm:ml-8 md:pl-10 lg:pl-28 xl:hidden "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-5">
        <div className="mx-auto w-[80%]">
          <div
            id="logo__text"
            className="w-full grid xl:flex xl:gap-12 2xl:gap-24 grid-cols-10 grid-rows-3 xl:grid-rows-0 items-center  "
          >
          
              <Image src={versaceLogo} alt="versace" className="col-start-2 xl:col-start-1 col-span-2" />
          
            
              <Image src={zaraLogo} alt="zara" className="col-start-6 xl:col-start-3 col-span-2 xl:col-span-1 pr-3" />
           
              <Image src={gucciLogo} alt="gucci" className=" col-start-9 xl:col-start-4 col-span-3 xl:col-span-2" />
       
              <Image src={pradaLogo} alt="prada" className="xl:row-start-1 row-start-3 col-start-3 xl:col-start-6 col-span-3 xl:col-span-2" />
          
              <Image src={ckLogo} alt="ck" className="xl:row-start-1 row-start-3 col-start-7  xl:col-start-8 col-span-3 xl:col-span-2" />
        
          </div>
        </div>
      </div>
    </>
  );
}

