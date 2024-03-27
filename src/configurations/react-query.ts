import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ globally default to 20 seconds
      staleTime: 1000 * 10,
      networkMode: "always",
    },
    mutations: {
      networkMode: "always",
    },
  },
});

const queries = {};

export { queries, queryClient };
