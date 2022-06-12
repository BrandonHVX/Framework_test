import React from 'react';
import {ISlideConfig, PageSlides, SlideParallaxType} from '@re_point/react-page-slides';
import Img from "../../images/img1.jpg"
import Img2 from "../../images/img2.jpg"

export default  () => {
    const slides: ISlideConfig[] = [
        {
            content: <div>first page content</div>,
            style: {
                backgroundImage: `url(${Img})`
            }
        },
        {
            content: <div>second page content</div>,
            style: {
                backgroundImage: `url(${Img2})`
            }
        },
        {
            content: <div>third page content</div>,
            style: {
                backgroundImage: 'url("public/photo/photo_2.jpg")'
            }
        },
    ];
    return (
        <PageSlides
            enableAutoScroll={true}
            transitionSpeed={1000}
            slides={slides}
            parallax={{
                offset: 0.6,
                type: SlideParallaxType.reveal
            }}
        />
    )
};