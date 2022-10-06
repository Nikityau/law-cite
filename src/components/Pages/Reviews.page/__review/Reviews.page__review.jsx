import React from 'react';

const ReviewsPageReview = ({reviewerImage, review, reviewerFullName}) => {
    return (
        <div className={'reviews-page__review-block'}>
            <div className={'reviews-page__reviewer-image'}>
                <img src={reviewerImage} alt={'image'}/>
            </div>
            <div className={'reviews-page__review'}>
               <blockquote>
                   &Prime;
                   { review }
                   &Prime;
               </blockquote>
            </div>
            <div className={'reviews-page__reviewer-full-name'}>
                <span> { reviewerFullName } </span>
            </div>
        </div>
    );
};

export default ReviewsPageReview;