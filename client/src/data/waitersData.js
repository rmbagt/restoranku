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

export const useGetWaiters = () => {
  return useQuery({
    queryKey: ["getWaiters"],
    queryFn: async () => {
      const { data } = await api.get("/waiters");

      if (data) {
        return data;
      }
      return [];
    },
  });
};

export const useAddWaiter = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post("/waiters", data);
      return response.data;
    },
    onSettled: async (_, error) => {
      if (error) {
        console.error(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["getWaiters"],
        });
      }
    },
  });
}

export const useUpdateWaiter = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await api.put(`/waiters/${data.id}`, data);
      return response.data;
    },
    onSettled: async (_, error) => {
      if (error) {
        console.error(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["getWaiters"],
        });
      }
    },
  });
}

export const useDeleteWaiter = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      const response = await api.delete(`/waiters/${id}`);
      return response.data;
    },
    onSettled: async (_, error) => {
      if (error) {
        console.error(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["getWaiters"],
        });
      }
    },
  });
}

export { columns };