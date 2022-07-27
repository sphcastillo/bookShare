import React, {useState} from 'react';
// import BookCard from '../components/BookCard';
import "./Home.css";
import axios from 'axios';
import BookCard from '../components/BookCard';
import Main from '../components/Main';



function Home() {

    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    const [apiKey, setApiKey] = useState("AIzaSyB4ZD4CRCU37y7fdhjNxaoQ5OpcV3QZRh4");

    const handleSearch = (e) => {

        const book = e.target.value;

        setBook(book);

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Book: " + book);
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=10")
        .then(data => {
            console.log("data: ", data);
            console.log("data.data.items: ", data.data.items);
            setResult(data.data.items);
        })

    }
    return (
        <div>
            <Main />
            <div className="bookSearchWrapper">
                <div className="bookSearchContainer">
                    <div className="bookSearchHeaderWrapper">
                        <div className="bookSearchHeader">Book Search</div>
                    </div>
                    <div className="searchBookInputWrapper">
                    <input 
                        placeholder='Enter Book Name' 
                        type="text"
                        name="search"
                        onChange={handleSearch}
                        // onKeyPress={searchBook}
                    />
                    <button onClick={handleSubmit}>Search</button>
            </div>
                </div>
            </div>


            <div className="bookcardWrapper">
                <div className="resultsExplanationWrapper">
                    <div className="resultWrapper">
                        <div className="resultHeaderWrapper">
                            <div className="results">Results:</div>
                        </div>
                    </div>
                </div>
                <div className="bookCardRows">
                    {result.map(book => (
                        <BookCard
                        key={book.id}
                        title={book.volumeInfo.title}
                        subtitle={book.volumeInfo.subtitle}
                        link={book.volumeInfo.infoLink}
                        authors={book.volumeInfo.authors.join(", ")}
                        description={book.volumeInfo.description}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        />
                    ))}å
                </div>
            </div>
        </div>
    )
}

export default Home;