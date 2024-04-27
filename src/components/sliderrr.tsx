import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./card";

const YourComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed in milliseconds (e.g., 3000ms = 3 seconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div style={{width:"80%",marginInline:"auto"}} >
      <Slider {...settings}>
        <div>
          <Card
            name="LDce"
            date="12-12-12"
            imageURL="https://images.unsplash.com/photo-1712312640787-a0b0cc94356e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            text="hello in the ldce there happeneed something"
          />
        </div>
        <div>
          <Card
            name="ldce"
            imageURL="https://images.unsplash.com/photo-1712312640787-a0b0cc94356e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            date="12-11-14"
            text="hello in the ldce there happeneed something"
          />
        </div>
        <div>
          <Card
            name="LDce"
            date="12-12-12"
            imageURL="https://images.unsplash.com/photo-1712312640787-a0b0cc94356e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            text="hello in the ldce there happeneed something"
          />
        </div>{" "}
        <div>
          <Card
            name="LDce"
            date="12-12-12"
            imageURL="https://images.unsplash.com/photo-1712312640787-a0b0cc94356e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            text="hello in the ldce there happeneed something"
          />
        </div>{" "}
        <div>
          <Card
            name="LDce"
            date="12-12-12"
            imageURL="https://images.unsplash.com/photo-1712312640787-a0b0cc94356e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            text="hello in the ldce there happeneed something"
          />
        </div>{" "}
        <div>
          <Card
            name="LDce"
            date="12-12-12"
            imageURL="https://images.unsplash.com/photo-1712312640787-a0b0cc94356e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            text="hello in the ldce there happeneed something"
          />
        </div>{" "}
        <div>
          <Card
            name="LDce"
            date="12-12-12"
            imageURL="https://images.unsplash.com/photo-1712312640787-a0b0cc94356e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            text="hello in the ldce there happeneed something"
          />
        </div>
        {/* Add more Card components here */}
      </Slider>
    </div>
  );
};

export default YourComponent;
