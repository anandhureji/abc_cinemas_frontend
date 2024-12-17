import React from 'react'
import Slider from 'react-slick';
import './MovieSlider.css'
import poster1 from '../img/1200_454 (1).jpg';
import poster2 from '../img/1200_454 (2).jpg';
import poster3 from '../img/1200_454 (3).jpg';
import poster4 from '../img/1200_454 (4).jpg';

const movies = [
    {id:1,imageUrl:poster1},
    {id:2,imageUrl:poster2},
    {id:3,imageUrl:poster3},
    {id:4,imageUrl:poster4}
    
]


const MovieSlider = () => {

    const settings = {
        dots: true,
        infinite: false, // Set to false to check for duplication
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        arrows: true
    };

  return (
    <div >
         <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
    </div>
  )
}

export default MovieSlider