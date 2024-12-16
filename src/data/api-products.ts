import { Product } from "types/products";

///Llamada a la API para tomar la información de los productos
export const fetchProducts = async ():Promise<Product[]> =>{
    try {
        const response = await fetch("https://dulces-petalos.jakala.es/api/product");
        const data = await response.json();
        return data;
    }catch(error){
        console.error("Error al cargar los productos: ", error);
        return [];
    }
};

/// Llamada a la API para obtener un producto por su ID
export const fetchProductById = async (id: string): Promise<Product | null> => {
  try {
      const response = await fetch(`https://dulces-petalos.jakala.es/api/product/${id}`);
      if (!response.ok) {
          throw new Error("Producto no encontrado");
      }
      const data = await response.json();
      return data; // Retorna el producto
  } catch (error) {
      console.error("Error al cargar el producto por ID: ", error);
      return null; 
  }
};

/// Se nos pide filtar por nombre o nombre cientifico, solo se hara la busqueda para estos dos parametros
export const filterProducts = (products :Product[], query: string) : Product[] => {
    return products.filter((product) => 
        product.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
        product.binomialName.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
};