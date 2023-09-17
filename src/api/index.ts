import { GraphQLClient } from "graphql-request";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const client = new GraphQLClient(API_URL, {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

import { home } from "./drivers/home.driver";

export const Api = {
  home,
};
