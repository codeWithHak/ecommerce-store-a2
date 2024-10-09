import Card from "@/app/components/Card";

import blackShirt from "../../../../public/assets/images/black-shirt.png"
import blueJeans  from "../../../../public/assets/images/blue-jeans.png"
import checkShirt  from "../../../../public/assets/images/check-shirt.png"
import orangeStripShirt  from "../../../../public/assets/images/orang-strip-shirt.png"

import fourPointFive from "../../../../public/assets/images/rating-45.png"
import threePointFive from "../../../../public/assets/images/rating-35.png"


export default function NewArrivals() {
    return (
        <section id="new-arrivals">
        <div className="bg-white py-16">
            <h1 className="text-center text-5xl sm:text-6xl font-integral-cf font-heavy transform scale-90 tracking-tighter mb-20 w-full">NEW ARRIVALS</h1>
            <div id="cards" className="grid grid-cols-2 xl:grid-cols-4 px-4 xl:px-32 gap-x-4  gap-y-6">
                <Card image={blackShirt} title="T-Shirt With Tape" ratings={fourPointFive} price="$120" />
                <Card image={blueJeans}  title="Skinny Fit Jeans" ratings={threePointFive} price="$240" />
                <Card image={checkShirt} title="Checkered Shirt" ratings={fourPointFive} price="$180" />
                <Card image={orangeStripShirt} title="Stripped T-shirt" ratings={fourPointFive} price="$130" />
              
            </div>
            <button className="flex  mx-auto mt-12 mb-12 border border-gray-900 border-opacity-15 text-xl py-2 lg:py-4 px-14 lg:px-20 rounded-full text-center">View All</button>
            <hr />
        </div>
        </section>
    );
}


