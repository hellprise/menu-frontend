import { gql } from "graphql-request";

import { HomeResponse } from "@/types";

import { client } from "../index";

export const home = {
  getHomepage: () => {
    const query = gql`
      query homeQuery {
        home {
          data {
            attributes {
              heading
              Grid {
                id
                Text
                images {
                  data {
                    id
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
              }
              Features {
                Heading
                ListItems {
                  id
                  heading
                  text
                }
              }
              Faq {
                Heading
                ListItems {
                  id
                  heading
                  text
                }
              }
            }
          }
        }
      }
    `;

    return client.request<HomeResponse>(query);
  },
};
