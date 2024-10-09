import Card from "@/app/components/Card";

import greenShirt from "../../../../public/assets/images/green-check-shirt.png"
import orangeGraphicShirt from "../../../../public/assets/images/orange-graphic-shirt.png"
import blueShorts from "../../../../public/assets/images/blue-shorts.png"
import blackJeans from "../../../../public/assets/images/black-jeans.png"

import fourPointFive from "../../../../public/assets/images/rating-45.png"
import ratingThree from "../../../../public/assets/images/rating-3.png"
import ratingFour from "../../../../public/assets/images/rating-4.png"
import ratingFive from "../../../../public/assets/images/rating-5.png"

export default function TopSelling() {
    return (
        <section id="top-selling">
        <div className="bg-white py-16 ">
        <h1 className="text-center text-5xl sm:text-6xl font-integral-cf font-heavy transform scale-90 tracking-tighter mb-12 w-full">TOP SELLING</h1>
        <div id="cards" className="grid grid-cols-2 xl:grid-cols-4 px-4 xl:px-32 gap-x-4  gap-y-6">
                <Card image={greenShirt} title="Green Checkered" ratings={ratingThree} price="$120" />
                <Card image={orangeGraphicShirt} title="Skinny Fit Jeans" ratings={ratingFour} price="$240" />
                <Card image={blueShorts} title="Checkered Shirt" ratings={ratingFive} price="$180" />
                <Card image={blackJeans}  title="Black Jeans" ratings={fourPointFive} price="$130" />
              
            </div>
            <button className="flex  mx-auto mt-20 border border-gray-900 border-opacity-15  py-2 lg:py-4 px-14 lg:px-20 text-xl rounded-full text-center">View All</button>
        </div>
        </section>
    );
}
