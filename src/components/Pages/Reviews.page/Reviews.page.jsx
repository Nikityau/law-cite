import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide'

import ReviewsPage__review from "components/Pages/Reviews.page/__review/Reviews.page__review";

import '@splidejs/react-splide/css';

import './style.common/Reviews.page.scss'
import './style.common/__review/Reviews.page__review.scss'

import {reviews} from "./reviews";

const ReviewsPage = () => {
    return (
        <div className={'reviews-page app__container'}>
            <div className={'reviews-page__container'}>
                <div className={'reviews-page__title'}>
                    <h1>Отзывы</h1>
                    <p> Здесь вы можете оставить отзыв или посмотреть наши рекомендации </p>
                </div>
                <div className={'reviews-page__reviews-slider'}>
                    <Splide
                        options={{
                            drag: true,
                            arrows: false,
                            pagination: true
                        }}
                    >
                        {
                            reviews.map((review, index) => (
                                <SplideSlide
                                    key={index}
                                >
                                   <ReviewsPage__review
                                        review={review.review}
                                        reviewerImage={review.reviewer_image}
                                        reviewerFullName={review.reviewer_full_name}
                                   />
                                </SplideSlide>
                            ))
                        }
                    </Splide>
                </div>
            </div>
        </div>
    );
};

export default ReviewsPage;