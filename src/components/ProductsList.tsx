import { useEffect, useState } from "react";

const ProductsList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    setProducts(["Clothing", "Household"]);
    console.log("Fetching products in " + category);
  }, [category]);
  return <div>ProductsList</div>;
};

export default ProductsList;
