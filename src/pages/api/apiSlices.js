import { apiBaseSlices } from "./baseApi";

export const productsApi = apiBaseSlices.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "api/products",
    }),

    getSingleProducts: builder.query({
      query: (id) => `api/products/${id}`,
    }),

    getAllCategoris: builder.query({
      query: () => "api/categories?limit=20",
    }),

    getSlider: builder.query({
      query: () => "api/sliders",
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductsQuery,
  useGetAllCategorisQuery,
  useGetSliderQuery,
} = productsApi;
