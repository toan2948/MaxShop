import React from 'react'

const Rating = ({ rating, review, color }) => {
    return (
        <div>
            <span>
            Rating: {rating}/5.0 
            <i style ={{color}}
            className={ 
                rating >=1 
                ?'fas fa-star'
                : rating=0.5
                ?'fas fa-star-half-alt'
                :'far fa-star'} > 
            </i>

            <i style ={{color}}
            className={ 
                rating >=2 
                ?'fas fa-star'
                : rating=1.5
                ?'fas fa-star-half-alt'
                :'far fa-star'} > 
            </i>
            <i style ={{color}}
            className={ 
                rating >=3 
                ?'fas fa-star'
                : rating=2.5
                ?'fas fa-star-half-alt'
                :'far fa-star'} > 
            </i>
            <i style ={{color}}
            className={ 
                rating >=4 
                ?'fas fa-star'
                : rating>=3.5
                ?'fas fa-star-half-alt'
                :'far fa-star'} > 
            </i>
            <i style ={{color}}
            className={ 
                rating >=5 
                ?'fas fa-star'
                : rating>=4.5
                ?'fas fa-star-half-alt'
                :'far fa-star'} > 
            </i>

            <br/> 
            {review} Reviews
            </span>
        </div>
    )
}
Rating.defaultProps = {
    color: '#f8e825'
} 

export default Rating
