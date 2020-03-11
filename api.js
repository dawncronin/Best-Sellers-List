const LIST_NAME = "hardcover-fiction";
const API_STEM = "https://api.nytimes.com/svc/books/v3/lists";

// import {API_KEY} from 'react-native-dotenv'

const API_KEY = "rxesWtK3gfbu785HyHNLFfGo3ej0uyV0"

export default function fetchBooks(list_name = LIST_NAME) {
  let url = `${API_STEM}/${LIST_NAME}?response-format=json&api-key=${API_KEY}`;
  return fetch(url)
    .then(res => res.json())
    .then(json => {
        return json.results.books
    })
    .catch(error => {
      console.error(error);
    });
}

