import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { useState, useEffect } from "react";

function App() {
  const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";
  const [books, setBooks] = useState([]);

  const getBooksData = async () => {
    const res = await fetch(apiURL);
    const books = await res.json();
    console.log(books);
    setBooks(books);
  };

  useEffect(() => {}, []);

  const handleClick = () => {
    getBooksData();
  };

  return (
    <div className="App">
      <h1>Game of Thrones Kitapları</h1>
      <h2>API'den liste alın ve görüntüleyin</h2>

      {/* Fetch data  API */}
      <div>
        <button className="fetch-button" onClick={handleClick}>
          Fetch Data
        </button>
        <br />
      </div>

      {/* API'den gelen veriyi gösterin */}
      {books.map((book, index) => {
        const { name, authors, numberOfPages, country, released } = book;
        return (
          <div className="books" key={index}>
            <div className="book">
              <h3>Book {index + 1}</h3>
              <h2>{name}</h2>

              <div className="details">
                <p>👨: {authors[0]} </p>
                <p>📖: {numberOfPages} </p>
                <p>🏘️: {country}</p>
                <p>⏰: {released}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
