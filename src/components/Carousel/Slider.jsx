import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useId } from "react";
import '../../reset.css';
import '../../App.css';
import tip_calculator from '../../assets/projects/tip-calculator.png';
import sign_up_validation from '../../assets/projects/sign-up-validation.png';
import encryptor from '../../assets/projects/encryptor.png';
import search_countries from '../../assets/projects/search-countries-rest-api.png';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const sliderCarouselProjects = [
  //First image url
  {
    image: tip_calculator,
    name: 'Tip Calculator',
    linkRepo: 'https://github.com/ElianaMurillo/tip-calculator.git',
  },
  //Second image url
  {
    image: sign_up_validation,
    name: 'Sign Up Newsletter',
    linkRepo: "https://github.com/ElianaMurillo/Sign-Up---Newsletter.git",
  },
  //Third image url
  {
    image: encryptor,
    name: 'Encryptor',
    linkRepo: "https://github.com/ElianaMurillo/encryptor-with-keys.git",
  },
  //Fourth image url
  {
    image: search_countries,
    name: 'Search Countries with Rest API',
    linkRepo: "https://github.com/ElianaMurillo/search-countries-with-rest-api.git",
  },
];

const Slider = ({ imageProject, nameProject }) => {
  return (
    <div className="container-carousel">
      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {
          sliderCarouselProjects.map((cardCarouselObj) => {

            return (
              <div className="card-my-projects" key={useId()}>
                <img className="img-project" src={cardCarouselObj.image}></img>
                <p className="name-card-project"><a href={ cardCarouselObj.linkRepo } target="_blank" rel="noopener noreferrer">{ cardCarouselObj.name }</a></p>
              </div>
            );
          })
        }
      </Carousel>
    </div>
  );
};

export default Slider;
