import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../services/api";


const columns = [
  {
    key: "id",
    label: "ORDER ID",
  },
  {
    key: "customerName",
    label: "CUSTOMER NAME",
  },
  {
    key: "waiterName",
    label: "WAITER NAME",
  },
  {
    key: "price",
    label: "TOTAL PRICE",
  },
  {
    key: "tableNumber",
    label: "TABLE NUMBER",
  },
  {
    key: "actions",
    label: "ACTIONS",
  },
];


export const useGetOrders = () => {
  return useQuery({
    queryKey: ["getOrders"],
    queryFn: async () => {
      const { data } = await api.get("/orders");

      if (data) {
        return data;
      }
      return [];
    },
  });
};

export const useAddOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post("/orders", data);
      return response.data;
    },
    onSettled: async (_, error) => {
      if (error) {
        console.error(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["getOrders"],
        });
        await queryClient.invalidateQueries({
          queryKey: ["getHistories"],
        });
      }
    },
  });
}

export const useDeleteOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      const response = await api.delete(`/orders/${id}`);
      return response.data;
    },
    onSettled: async (_, error) => {
      if (error) {
        console.error(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["getOrders"],
        });
        await queryClient.invalidateQueries({
          queryKey: ["getHistories"],
        });
      }
    },
  });
}

export const useGetHistories = () => {
  return useQuery({
    queryKey: ["getHistories"],
    queryFn: async () => {
      const { data } = await api.get("/history");

      if (data) {
        return data;
      }
      return [];
    },
  });
};

export const useAddOrderDtl = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post("/orderdtl", data);
      return response.data;
    },
    onSettled: async (_, error) => {
      if (error) {
        console.error(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["getOrders"],
        });
        await queryClient.invalidateQueries({
          queryKey: ["getHistories"],
        });
      }
    },
  });
}

export { columns };
