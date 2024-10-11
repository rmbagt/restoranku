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
    key: "actions",
    label: "ACTIONS",
  },
];

export const useGetCustomers = () => {
  return useQuery({
    queryKey: ["getCustomers"],
    queryFn: async () => {
      const { data } = await api.get("/customers");

      if (data) {
        return data;
      }
      return [];
    },
  });
};

export const useAddCustomer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post("/customers", data);
      return response.data;
    },
    onSettled: async (_, error) => {
      if (error) {
        console.error(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["getCustomers"],
        });
      }
    },
  });
}

export const useUpdateCustomer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await api.put(`/customers/${data.id}`, data);
      return response.data;
    },
    onSettled: async (_, error) => {
      if (error) {
        console.error(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["getCustomers"],
        });
      }
    },
  });
}

export const useDeleteCustomer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      const response = await api.delete(`/customers/${id}`);
      return response.data;
    },
    onSettled: async (_, error) => {
      if (error) {
        console.error(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["getCustomers"],
        });
      }
    },
  });
}


export { columns };