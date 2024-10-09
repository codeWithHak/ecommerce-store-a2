"use client";


import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function (){

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function toggleMenu(){
        setIsMenuOpen(!isMenuOpen)
    }
    return(
        <div className="px-2 md:px-20 lg:px-24 py-6 bg-white">
            <div className="flex ">

                <div id="nav__content" className="mx-auto  items-center justify-between gap-14 lg:gap-10  min-w-[300px] flex sm:min-w-[620px]  lg:max-w-[1400px] lg:w-11/12">
                <div className="flex gap-3 items-center">
                    <Image src="/assets/images/burger-menu.png" alt="menu" width={22} height={22} className="transition hover:-translate-y-1 flex lg:hidden" onClick={toggleMenu}/>
                        <h2 className="transition hover:-translate-y-1 text-3xl 2xl:text-4xl font-integral-cf font-heavy transform scale-y-90 uppercase text-gray-900 tracking-tighter">shop.co</h2>
                </div>
                    <ul className="hidden lg:flex gap-7 w-3/12 min-w-96 text-lg text-center">
                        <li className="transition hover:-translate-y-1 cursor-pointer rounded px-1 py-1 "><Link href='#new-arrivals'>Shop</Link></li>
                        <li className="transition hover:-translate-y-1 cursor-pointer rounded px-1 py-1 "><Link href='#new-arrivals'>New Arrivals</Link></li>
                        <li className="transition hover:-translate-y-1 cursor-pointer rounded px-1 py-1 "><Link href='#top-selling'>On Sale</Link></li>
                        <li className="transition hover:-translate-y-1 cursor-pointer rounded px-1 py-1 "><Link href='#categories'>Browse</Link></li>
                    </ul>
                    {isMenuOpen &&(
                        <div className="lg:hidden absolute z-10 rounded-lg bg-white top-10 left-0 h-[95%] w-full transition active:translate-x-2">
                            <Image src="/assets/images/cross1.png" className="absolute mx-4 my-4 w-10" onClick={toggleMenu} alt="cross" width={25} height={25} />
                            <ul className="lg:hidden flex flex-col pl-6 pt-16 text-xl gap-5 ">
                                <li ><Link href="#new-arrivals">Shop</Link></li>
                                <li ><Link href="#new-arrivals">New Arrivals</Link></li>
                                <li ><Link href="#top-selling">On Sale</Link></li>
                                <li ><Link href="#categories">Browse</Link></li>
                            </ul>
                        </div>
                    )}
                    <div className="w-5/12 hidden 2xl:flex">
                    <input type="text" placeholder="Search for products..." className="w-full px-12 py-[0.70rem] bg-[url(/assets/images/search.png)]  bg-no-repeat  bg-[#F0F0F0] bg-[position:1rem]  rounded-full "/>
                    </div>
                    <div className="flex gap-3 lg:gap-5">
                    <Image className="transition hover:-translate-y-1" src="/assets/images/cart.png" alt="cart" width={25} height={25}/>
                    <Image className="transition hover:-translate-y-1" src="/assets/images/profile.png" alt="crofile" width={25} height={25}/>
                    <Image className="transition hover:-translate-y-1" src="/assets/images/search-black1.png" alt="crofile" width={25} height={25}/>
                                </div>
                </div>
            </div>
        </div>
    )
}