import { useEffect, useState } from "react";
import apiClient from "../utils/api";
import { Product } from "../types";

export default function useFetchProduct() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await apiClient.get("/api/productos/");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return { products, loading };
}
