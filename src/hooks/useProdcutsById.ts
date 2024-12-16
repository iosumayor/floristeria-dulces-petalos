import { useState, useEffect } from "react";
import { fetchProductById } from "data/api-products";
import { Product } from "types/products";

const useProductById = (id: string | undefined) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const loadProduct = async () => {
        setLoading(true);
        setError(null);

        try {
          const productData = await fetchProductById(id);
          setProduct(productData);
        } catch (err) {
          setError("Error al cargar el producto");
        } finally {
          setLoading(false);
        }
      };

      loadProduct();
    } else {
      setError("No se proporcionó un ID de producto");
      setLoading(false);
    }
  }, [id]);

  return { product, loading, error };
};

export default useProductById;
