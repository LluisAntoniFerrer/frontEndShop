import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselProducts() {

    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.phonehouse.es/res_static/cmsmaker/21B20E3B684BE8D2959326FAFF67AA17.jpg?&auto=format"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.phonehouse.es/res_static/cmsmaker/B8AD8A260CAA9E89CBBE830BBA5DC48B.jpg?&auto=format"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.phonehouse.es/res_static/cmsmaker/AD1344AE59D57FBA9AB73972C86D933D.jpg?&auto=format"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselProducts
