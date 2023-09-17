import { gql } from "graphql-request";

import { client } from "../index";

export const menus = {
  getMenus: () => {
    const query = gql`
      query menusQuery {
        menus {
          data {
            attributes {
              name
              description
              image {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
            }
          }
        }
      }
    `;

    return client.request(query);
  },
};
