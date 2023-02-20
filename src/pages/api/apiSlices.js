import { apiSlices } from "./baseApi";

export const productsApi = apiSlices.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "api/products",
    }),

    getAllCategoris: builder.query({
      query: () => "api/categories",
    }),

    getSlider: builder.query({
      query: () => "api/sliders",
    }),
  }),
})

export const { useGetAllProductsQuery, useGetAllCategorisQuery, useGetSliderQuery } = productsApi;
