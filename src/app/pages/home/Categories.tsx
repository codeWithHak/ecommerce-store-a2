import casualImg from "../../../../public/assets/images/casual-img.png";
import formalImg from "../../../../public/assets/images/formal-img.png";
import partyImg from "../../../../public/assets/images/party-img.png";
import gymImg from "../../../../public/assets/images/gym-img.png";
import Image from "next/image";

export default function Categories() {
  return (
    <section id="categories">
    <div className=" w-[80%] max-w-[1500px] bg-[#F0F0F0] py-12 px-4 mx-auto rounded-3xl">
            <h1 className="text-center mb-9 text-4xl sm:text-6xl font-integral-cf font-heavy transform scale-90 tracking-tighter">BROWSE BY DRESS STYLE</h1>
            <div id="grid" className="grid grid-cols-6 p-x-0 gap-4 md:px-12  p-6">
            <Image src={casualImg} alt="casual image" className="rounded-2xl w-full h-44 sm:h-72 mx-auto col-span-6 sm:col-span-3 lg:col-span-2 "/>
            <Image src={formalImg} alt="casual image" className="rounded-2xl w-full h-44 sm:h-72 mx-auto col-span-6 sm:col-span-3 lg:col-span-4"/>
            <Image src={partyImg}  alt="casual image" className="rounded-2xl w-full h-44 sm:h-72 mx-auto col-span-6 sm:col-span-3 lg:col-span-4 "/>
            <Image src={gymImg}    alt="casual image" className="rounded-2xl w-full h-44 sm:h-72 mx-auto col-span-6 sm:col-span-3 lg:col-span-2"/>
            </div>
        </div>
        </section>







    
  );
}


