import React from "react";
import Header from "../components/Header";
import SearchBar from "components/SearchBar";
import ProductItem from "components/ProductItem";
import { useSearch } from "hooks/useSearch";
import useProducts from "hooks/useProducts";
import { APP_TEXTS } from "constants/textPaths";
import "styles/HomeStyles.css";

const Home: React.FC = () => {
  const { searchQuery, handleSearch } = useSearch(); // Para la búsqueda
  const { filteredProducts } = useProducts(searchQuery); // Para los productos

  return (
    <div className="home-container">
      <Header />
      <div className="search-and-products">
        <div>
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductItem
                key={product.id}
                id={product.id}
                image={product.imgUrl}
                name={product.name}
                binomialName={product.binomialName}
                price={product.price}
              />
            ))
          ) : (
            <p>{APP_TEXTS.NOT_FOUND_ITEMS}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
