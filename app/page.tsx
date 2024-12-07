
import Image from "next/image"
import rev from '@/images/rev.jpg'
import HomeCarousel from "@/components/HomeCarousel"


export default function Home() {
  return (
    <div className="flex justify-center items-center m-4">
      <Image src={rev} alt="Professional Headshot" width={300} className="mr-16 rounded-xl"/>
      <HomeCarousel/>
    </div>
  )
}
