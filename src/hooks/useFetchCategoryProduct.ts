import { useEffect, useState } from "react";
import apiClient from "../utils/api";
import { Product } from "../types";

export default function useFetchCategoryProduct() {
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await apiClient.get("/api/categories/");
        setCategoryProducts(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return { categoryProducts, loading };
}
