import { gql } from '@apollo/client';

export const getList = gql`
    query Product {
        getProducts {
        name
        synonyms
        }
    }

 `;

export const getProducts = gql`
query Product {
    getProducts {
      name
      mrp
      image
      desc
    }
  }
        
`;