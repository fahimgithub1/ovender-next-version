// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlices = createApi({
  reducerPath: "Api",
  endpoints: () => ({}),
  tagTypes: [],
  baseQuery: fetchBaseQuery({ 
    baseUrl: "https://dms-ecommerce.digitalmarketingservicebd.com/" 
  }),
});