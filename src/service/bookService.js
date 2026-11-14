import * as bookRepository from '../repositories/book.repository.js';
import * as publisherRepository from "../repositories/publisher.repository.js";
import * as authorRepository from "../repositories/author.repository.js";

export const addBook = async (book) => {
    const {isbn, title} = book;
    if (await bookRepository.findBookByIsbn(isbn)) {
        throw new Error('Book with the same isbn already exists');
    }
    // Create or find the publisher
    let publisher = await publisherRepository.findPublisherById(book.publisher);
    if (!publisher) {
        await publisherRepository.addPublisher(book.publisher);
    }
    // Process the authors
    const authors = [];
    for (const a of book.authors) {
        let author = await authorRepository.findAuthorById(a.name);
        if (!author) {
            author = await authorRepository.addAuthor(a);
        }
        authors.push(author);
    }
    // Create a new Book
    book = await bookRepository.addBook({isbn, title, publisher: book.publisher});
    await book.setAuthors(authors);
    return book;
}

export const findBookByIsbn = async isbn => {
    return bookRepository.findBookByIsbn(isbn);
};

export const removeBook = async isbn => {
    const book = await bookRepository.findBookByIsbn(isbn);
    if (!book) {
        return null;
    }
    const deletedBook = book.toJSON();
    await bookRepository.removeBook(book);
    return deletedBook;
};

export const updateBookTitle = async (isbn, title) => {
    const book = await bookRepository.findBookByIsbn(isbn);
    if (!book) {
        return null;
    }
    await bookRepository.updateBookTitle(book, title);
    return bookRepository.findBookByIsbn(isbn);
};


export const findBooksByAuthor = async author => {
    // TODO implement findBooksByAuthor functionality, return books list by author
}
export const findBooksByPublisher = publisher => {
    // TODO implement findBooksByPublisher functionality, return book list by publisher
}

