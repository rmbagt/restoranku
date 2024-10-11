import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../services/api";

const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "stock",
    label: "STOCK",
  },
  {
    key: "actions",
    label: "ACTIONS",
  },
];

export const useGetIngredients = () => {
  return useQuery({
    queryKey: ["getIngredients"],
    queryFn: async () => {
      const { data } = await api.get("/ingredients");

      if (data) {
        return data;
      }
      return [];
    },
  });
};

export const useAddIngredient = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post("/ingredients", data);
      return response.data;
    },
    onSettled: async (_, error) => {
      if (error) {
        console.error(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["getIngredients"],
        });
      }
    },
  });
}

export const useUpdateIngredient = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await api.put(`/ingredients/${data.id}`, data);
      return response.data;
    },
    onSettled: async (_, error) => {
      if (error) {
        console.error(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["getIngredients"],
        });
      }
    },
  });
};

export const useDeleteIngredient = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      const response = await api.delete(`/ingredients/${id}`);
      return response.data;
    },
    onSettled: async (_, error) => {
      if (error) {
        console.error(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["getIngredients"],
        });
      }
    },
  });
};


export { columns };