import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../services/api";

const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "NAME" },
  {
    key: "price",
    label: "PRICE",
  },

];

export const useGetMenus = () => {
  return useQuery({
    queryKey: ["getMenus"],
    queryFn: async () => {
      const { data } = await api.get("/menus");

      if (data) {
        return data;
      }
      return [];
    },
  });
};

export const useAddMenu = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post("/menus", data);
      return response.data;
    },
    onSettled: async (_, error) => {
      if (error) {
        console.error(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["getMenus"],
        });
      }
    },
  });
}

export const useUpdateMenu = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await api.put(`/menus/${data.id}`, data);
      return response.data;
    },
    onSettled: async (_, error) => {
      if (error) {
        console.error(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["getMenus"],
        });
      }
    },
  });
}

export const useDeleteMenu = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      const response = await api.delete(`/menus/${id}`);
      return response.data;
    },
    onSettled: async (_, error) => {
      if (error) {
        console.error(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["getMenus"],
        });
      }
    },
  });
}

export const useAddRecipe = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post("/recipe", data);
      return response.data;
    },
    onSettled: async (_, error) => {
      if (error) {
        console.error(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["getMenus"],
        });
      }
    },
  });
}


export { columns };
