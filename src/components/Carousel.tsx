import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CardContainer from "./CardContainer"

export function CarouselP({data}) {
  return (
    <Carousel className="w-full max-w-xs xl:hidden">
      <CarouselContent>
        {data.map((element, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="">
                <CardContent className="flex aspect-square items-center justify-center p-6 ">
                 <CardContainer 
                 name={element.name}
                 path={element.path}
                 image={element.img}
                 description={element.description}
                 />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
