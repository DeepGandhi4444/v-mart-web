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

// export const CREATE_POST_MUTATION = gql`
//   mutation CreatePost($input: PostInput!) {
//     createPost(input: $input) {
//       id
//       title
//       body
//     }
//   }
// `;