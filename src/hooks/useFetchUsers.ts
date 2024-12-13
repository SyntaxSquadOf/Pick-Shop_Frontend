import { useEffect, useState } from "react";
import apiClient from "../utils/api";
import { User } from "../types";

const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const response = await apiClient.get("/api/users/");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return { users, loading };
};
export default useFetchUsers;
