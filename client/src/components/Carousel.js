
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import Carousel_1 from './src/assets/carousel_1.svg'; 


export class ImageCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    {/* <img src="/src/assets/movie_btn.png" /> */}
                    <img src="/images/carousel_1.svg" />
                    {/* <img src={Carousel_1} alt='Carousel_1' /> */}
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="/images/movie_qb.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="/images/music_btn.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default ImageCarousel;