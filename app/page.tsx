import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex justify-center">
    <Button>Click me</Button>
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
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}
