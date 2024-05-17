import { api } from ".";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getUsers: build.query({
      query: () => ({
        url: "/products",
      }),
      providesTags: ["product"],
    }),
  }),
});
export const { useGetUsersQuery } = productApi;
