import Image from "next/image"



export default function Card ({image,title,ratings,price}:{title:string,ratings:string,price:string,image:string}){
    return(
        <div className="w-[90%] max-w-[300px] mx-auto ">
            <Image src={image} alt="black shirt"  className={`rounded-3xl h-44 sm:h-72 w-full   `}/>
            <div className="flex flex-col gap-2 pt-4">
                <h3 className="font-semibold text-lg">{title}</h3>
                <Image src={ratings} alt="black shirt" className="rounded-3xl"/>
                <h3 className="font-semibold text-2xl">{price}</h3>
            </div>
        </div>
    )
} 
