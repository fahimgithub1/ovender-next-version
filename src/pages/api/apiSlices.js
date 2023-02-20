import { apiSlices } from "./baseApi";

export const productsApi = apiSlices.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "api/products",
    }),
  }),

  endpoints: (builder) => ({
    getAllCategoris: builder.query({
      query: () => "api/categories",
    }),
  }),
})

export const { useGetAllProductsQuery, useGetAllCategorisQuery } = productsApi;
