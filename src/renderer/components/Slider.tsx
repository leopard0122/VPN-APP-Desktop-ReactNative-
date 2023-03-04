import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselProps } from "react-responsive-carousel/lib/ts/components/Carousel/types";

type SliderProps = CarouselProps;

export default function (props: SliderProps) {
  return (
    <Carousel {...props}>
      <div>
        <img src="../assets/onboarding/slider-img-1.jpg" />
      </div>
      <div>
        <img src="../assets/onboarding/slider-img-2.jpg" />
      </div>
    </Carousel>
  );
}
