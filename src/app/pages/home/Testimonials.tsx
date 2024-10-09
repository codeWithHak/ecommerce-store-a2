import Image from "next/image"
import testimonial1 from "../../../../public/assets/images/testimonial-1.png"
import testimonial2 from "../../../../public/assets/images/testimonial-2.png"
import testimonial3 from "../../../../public/assets/images/testimonial-3.png"
import mail from "../../../../public/assets/images/mail-img.png"
import newsletter from "../../../../public/assets/images/newsletter-img.png"




export default function Testimonials (){
    return(
        <div className="w-[80%] py-0 mx-auto mt-16">
            <h1 className="mb-8 xl:-ml-16 text-center lg:text-start text-4xl sm:text-6xl font-integral-cf transform scale-90 tracking-tighter font-heavy ">OUR HAPPY CUSTOMERS</h1>
            <div>
                <div id="container" className="flex flex-col lg:flex-row gap-6 mb-8">
                  
                  <Image src={testimonial1} alt="testimonial 1" className="w-96 mx-auto h-auto object-cover"/>
                  <Image src={testimonial2} alt="testimonial 1" className="w-96 mx-auto h-auto object-cover"/>
                  <Image src={testimonial3} alt="testimonial 1" className="w-96 mx-auto h-auto object-cover"/>
                  
                </div>
                <div className="w-full bg-gray-900 py-8 rounded-2xl">
                    <div id="container" className="flex flex-col mx-auto lg:mx-0 lg:flex-row w-[90%]  ">

                        <div className="w-full">
                            <h3 className="mb-6 lg:mb-0 max-w-[650px]  text-white text-4xl sm:text-5xl  leading-tight font-heavy font-integral-cf transform scale-90 tracking-tighter ">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h3>
                        </div>

                        <div className=" flex flex-col gap-y-8 my-auto mx-auto lg:mx-0">
                            <Image src={mail} alt="mail"/>
                            <Image src={newsletter} alt="news letter"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}