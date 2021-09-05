import {gql} from "@apollo/client";

export const GET_ALL_BOOKS = gql`
query GetAllBooks {
    books {
        id
        publisher
        title
        release_date
        number_of_purchases
        likes
        rating
        price
        available_copies
        featured
        subtitle
        currency
        image_url
        published_at
        id
        authors {
          name
          history
          rating
        }
        genres {
            name
        }
        tags {
            name
        }
    }
}
`
export const GET_BOOK = gql`
query GetBook($id: ID!) {
    book(id: $id) {
        id
        publisher
        title
        release_date
        number_of_purchases
        likes
        rating
        price
        available_copies
        featured
        subtitle
        currency
        image_url
        published_at
        full_description
        id
        authors {
          name
          history
          rating
        }
        genres {
            name
        } 
        tags {
            name
        }
    }
}
`