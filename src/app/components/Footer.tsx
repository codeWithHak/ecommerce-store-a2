import Image from "next/image"
import socialIcons from "../../../public/assets/images/socials.png"

export default function Footer (){
    return(
        <div className=" bg-[#F0F0F0]">
            <div className="w-[80%] pt-10 mx-auto">
                <div className="grid grid-cols-11 mx-auto">
                    <div className="col-span-11 md:col-span-3 lg:mx-auto">
                    <h2 className="text-3xl 2xl:text-4xl font-integral-cf font-heavy transform scale-y-90 uppercase text-gray-900 tracking-tighter mb-3">shop.co</h2>    
                    <p className="max-w-[300px] md:max-w-[160px] lg:max-w-[230px] opacity-70 mb-4 text-sm">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                    <Image src={socialIcons} alt="social icons" className="pb-6 lg:pb-0"/>
                    </div>
                    <div className="col-span-5 md:col-span-2 lg:mx-auto pb-6">
                        <div className="flex flex-col gap-y-2">
                        <h4 className="font-semibold pb-1">COMPANY</h4>
                        <h5 className="opacity-70">About</h5>
                        <h5 className="opacity-70">Feature</h5>
                        <h5 className="opacity-70">Works</h5>
                        <h5 className="opacity-70">Career</h5>
                        </div>
                    </div>
                    <div className="col-span-5 md:col-span-2 lg:mx-auto pb-6 ">
                        <div className="flex flex-col gap-y-2">
                        <h4 className="font-semibold pb-1">HELP</h4>
                        <h5 className="opacity-70">Support</h5>
                        <h5 className="opacity-70">Details</h5>
                        <h5 className="opacity-70">Works</h5>
                        <h5 className="opacity-70">Career</h5>
                        </div>
                    </div>
                    <div className="col-span-5  md:col-span-2 pb-4 lg:mx-auto">
                        <div className="flex flex-col gap-y-2">
                        <h4 className="font-semibold pb-1">FAQ</h4>
                        <h5 className="opacity-70">Account</h5>
                        <h5 className="opacity-70">Deliveries</h5>
                        <h5 className="opacity-70">Orders</h5>
                        <h5 className="opacity-70">Payments</h5>
                        </div>
                    </div>
                    <div className="col-span-5  md:col-span-2 pb-4 lg:mx-auto">
                        <div className="flex flex-col gap-y-2">
                        <h4 className="font-semibold pb-1">RECOURCES</h4>
                        <h5 className="opacity-70">eBooks</h5>
                        <h5 className="opacity-70">Development</h5>
                        <h5 className="opacity-70">Blog</h5>
                        <h5 className="opacity-70">Youtube</h5>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}