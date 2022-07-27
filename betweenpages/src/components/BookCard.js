import React from 'react';
import "./BookCard.css";

function BookCard(book) {

    return (
        <div className="onebookcard">
            <div className="bookFullContentWrapper">
                <div className="mainContentButtonWrapper">
                    <div className="bookContentWrapper">
                        <div className="bookTitleWrapper">
                            <div className="bookTitle">{book.title}</div>
                        </div>
                        {book.subtitle && 
                        <div className="bookSubtitleWrapper">
                            <div className="bookSubtitle">{book.subtitle}</div>
                        </div>
                    }
                        <div className="bookAuthorWrapper">
                            <div className="bookAuthor">Written by {book.authors}</div>
                        </div>
                    </div>
                    <div className="bookButtonsWrapper">
                        <div className="viewbookButtonWrapper">
                            <button 
                                className="viewBookButton"
                                target="_blank" 
                                rel="noopener noreferrer" 
                                href={book.link}
                            >View</button>
                        </div>
                        <div className="saveBookButtonWrapper">
                            <button className="saveBookButton">
                            Save</button>
                        </div>
                    </div>
                </div>
                <div className="imageDescriptionWrapper">
                    <div className="bookImageWrapper">
                        <a 
                            href={book.link}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bookImageLink" 
                        >
                            <img 
                            className="bookImage"
                            src={book.image}
                            alt={book.title}
                            />
                        </a>
                    </div>
                    <div className="bookDescriptionWrapper">
                        <div className="bookDescription">{book.description}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard;