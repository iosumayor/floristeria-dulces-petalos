import React from 'react';
import 'styles/DetailProductDescriptionStyles.css';
import { PRODUCT_TEXTS } from 'constants/textPaths';

interface DetailProductDescriptionProps{
    name: string;
    binomialName: string;
    price: number;
    wateringsPerWeek: number;
    fertilizerType: "nitrogen" | "phosphorus";
    heightInCm: number;
}

const DetailProductDescription: React.FC<DetailProductDescriptionProps> = ({
    name,
    binomialName,
    price,
    wateringsPerWeek,
    fertilizerType,
    heightInCm,
}) => {
    return( 
        <div className='description-container'>
            <h2>{name}</h2>
            <p><strong>{PRODUCT_TEXTS.SCIENTIFIC_NAME}</strong> {binomialName}</p>
            <p><strong>{PRODUCT_TEXTS.PRICE}</strong>{price.toFixed(2)} €</p>
            <p><strong>{PRODUCT_TEXTS.WATERINGS_PER_WEEK}</strong>{wateringsPerWeek}</p>
            <p><strong>{PRODUCT_TEXTS.FERTILIZER}</strong>{fertilizerType === "nitrogen"? "Nitrogenado" : "Fosforado"}</p>
            <p><strong>{PRODUCT_TEXTS.HEIGHT}</strong>{heightInCm}</p>
        </div>
    );
};

export default DetailProductDescription;