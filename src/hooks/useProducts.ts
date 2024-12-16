import { fetchProducts, filterProducts } from "data/api-products";
import { useEffect, useState } from "react"
import { Product } from "types/products"

const useProducts = (searchQuery: string) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);


    useEffect(() => {
        const loadProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
            setFilteredProducts(data);
        };

        loadProducts();
    }, []);

    useEffect(()  =>{
        const filtered = filterProducts(products,searchQuery);
        setFilteredProducts(filtered);
    }, [searchQuery, products]);

    return {filteredProducts, setSearchQuery: setFilteredProducts}
};

export default useProducts;