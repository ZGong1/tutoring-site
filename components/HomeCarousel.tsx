import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const HomeCarousel = () => {
    return ( 
        <Carousel className="w-full max-w-xs">
      <CarouselContent>
      <CarouselItem key={1}>
              <Card>
                <CardContent className="flex aspect-square justify-center p-6">
                  <span className="text-4xl font-semibold">
                    <h1>Classes:</h1><br/>
                    <ul className="text-base font-normal">
                      <li>- MATH151</li>
                      <li>- MATH152</li>
                      <li>- Most Programming Class</li>
                    </ul>
                  </span>
                </CardContent>
              </Card>
          </CarouselItem>
          <CarouselItem key={2}>
              <Card>
                <CardContent className="flex aspect-square justify-center p-6">
                  <span className="text-4xl font-semibold">
                    <h1>Locations:</h1><br/>
                    <ul className="text-base font-normal">
                      <li>- Zachary Engineering Complex</li>
                      <li>- Peterson Building</li>
                      <li>- Zoom</li>
                    </ul>
                  </span>
                </CardContent>
              </Card>
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
     );
}
 
export default HomeCarousel;