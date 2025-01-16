"use client";

import type { Query } from "@/types/stockFetchData";

const initialQuery: Query = {
  query: {
    filters: [
      {
        metric: "eps_diluted_qtr_growth",
        preset:
          "7b226b657973223a5b2267742e696e636c7573697665222c2267742e7363616c65222c2267742e76616c7565222c226d6574726963225d2c2276616c756573223a5b747275652c312c312c226570735f64696c757465645f7174725f67726f777468225d7d",
      },
    ],
    sort: { metric: "analyst_target_upside", direction: "DESC" },
    prefilters: { primaryOnly: true, market: "US" },
  },
  metrics: [
    "ticker",
    "eps_diluted_qtr_growth",
    "pe_ltm_latest",
    "eps_basic_growth",
    "total_rev_qtr_growth",
    "total_rev_growth",
    "total_rev_cagr_5y",
  ],
  page: { skip: 0, limit: 30 },
};

export const fetcherStock = async (
  url: string,
  query: Query = initialQuery
) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      accept: "*/*",
      "accept-language": "th-TH,th;q=0.9,en;q=0.8",
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzYzNTQ1NzAsImp0aSI6IjI2NTQyMzUzNiIsImlhdCI6MTczNjM1MDk3MCwiaXNzIjoiaW52ZXN0aW5nLmNvbSIsInVzZXJfaWQiOjI2NTQyMzUzNiwicHJpbWFyeV9kb21haW5faWQiOiI1MyIsIkF1dGhuU3lzdGVtVG9rZW4iOiIiLCJBdXRoblNlc3Npb25Ub2tlbiI6IiIsIkRldmljZVRva2VuIjoiIiwiVWFwaVRva2VuIjoiTkhvd2NUUTdOejh5ZG10dFp6WmxZVGRqTkd0aFpEYzJOREEwTkRzNlozRmpkelE2TldJM2NXRnVhU2MzTkRNdk5qOWxaREpuTVRVOVBEZHZNMkF5WWpRNU1HTTBaamR2TW1Gck5tYzBaVEkzWnpROFlXWTNOVFE5TkdVN08yZGtZMlEwWWpVM056WmhaR2swTnpZemJEWWtaWGt5ZGpFZ1BXODNaek55TW5VME96QnhOR1EzYkRKamF6Sm5ObVV4TnpRME9XRm1OMmMwTlRSbU96Um5mMk1vIiwiQXV0aG5JZCI6IiIsIklzRG91YmxlRW5jcnlwdGVkIjpmYWxzZSwiRGV2aWNlSWQiOiIiLCJSZWZyZXNoRXhwaXJlZEF0IjoxNzM4ODcwOTcwfQ.RkONi7D-8nD2rGBWxkh3-AWqDsMTgH7lNGUxs4stcEY",
      "content-type": "application/json",
      "x-requested-with": "investing-client/22c96aa",
      Referer:
        "https://www.investing.com/stock-screener?ssid=v2%24eyJrZXlzIjpbImNvbm5lY3RpdmUiLCJmaWx0ZXJzLjAuZ3QuaW5jbHVzaXZlIiwiZmlsdGVycy4wLmd0LnNjYWxlIiwiZmlsdGVycy4wLmd0LnZhbHVlIiwiZmlsdGVycy4wLm1ldHJpYyIsImxpbWl0IiwicHJlZmlsdGVycy5tYXJrZXQiLCJwcmVmaWx0ZXJzLnByaW1hcnlPbmx5Iiwic29ydC5kaXJlY3Rpb24iLCJzb3J0Lm1ldHJpYyJdLCJ2YWx1ZXMiOlsiQUxMIix0cnVlLDEsMSwiZXBzX2RpbHV0ZWRfcXRyX2dyb3d0aCIsMzAsIlVTIix0cnVlLCJERVNDIiwiYW5hbHlzdF90YXJnZXRfdXBzaWRlIl19",
    },
    body: JSON.stringify(query),
  });

  const data = await response.json();

  return {
    columns: data.columns,
    rows: data.rows,
    total: data.page?.totalItems || 0,
  };
};
