import React from "react";
import Header from "components/Header";
import BackButton from "components/BackButton";
import DetailProductImage from "components/DetailProductImage";
import DetailProductDescription from "components/DetailProductDescription";
import { Product } from "types/products";
import 'styles/DetailViewStyles.css';
import useProductById from "hooks/useProdcutsById";
import { useParams } from "react-router-dom";
import { APP_TEXTS } from "constants/textPaths";



const DetailView: React.FC = () => {
    const { id } = useParams();

    const { product, loading, error } = useProductById(id);


  if (loading) {
    return <div>{APP_TEXTS.LOADING}</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  if (!product) {
    return <div>{APP_TEXTS.NOT_FOUND_PRODUCT}</div>;
  }

    return (
        <div className="product-details">
            <Header></Header>
            <div className="details-container">
                <BackButton></BackButton>
                <div className="details-image-description">
                  <DetailProductImage imgUrl={product.imgUrl} name={product.name}></DetailProductImage>
                  <DetailProductDescription
                      name={product.name}
                      binomialName={product.binomialName}
                      price={product.price}
                      wateringsPerWeek={product.wateringsPerWeek}
                      fertilizerType={product.fertilizerType}
                      heightInCm={product.heightInCm}                    
                  ></DetailProductDescription>
                </div>
            </div>
        </div>
    );
};

export default DetailView;