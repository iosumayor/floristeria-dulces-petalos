import React from "react";
import "styles/DetailProductImageStyles.css"

interface DetailProductImageProprs{
    imgUrl: string;
    name: string;
}

const DetailProductImage: React.FC<DetailProductImageProprs> = ({imgUrl, name}) => {
    return(
        <div className="image-container">
            <img src={imgUrl} alt={name}></img>
        </div>
    );
};

export default DetailProductImage;