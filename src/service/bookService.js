export const addBook = async book => {
    // TODO implement addBook functionality, return true if a book is added successful
}

export const getBook = async isbn => {
    // TODO implement findBook functionality, return book if a book founded
}

export const removeBook = async isbn => {
    //TODO implement removeBook functionality, return deleted book
}

export const updateBookTitle = async (isbn, title) => {
    // TODO implement updateBookTitle functionality, return updated book
}

export const findBooksByAuthor = async author => {
    // TODO implement findBooksByAuthor functionality, return books list by author
}
export const findBooksByPublisher = publisher => {
    // TODO implement findBooksByPublisher functionality, return book list by publisher
}

export const findBookAuthors = async isbn => {
    // TODO implement findBookAuthors functionality, return authors by isbn
}

export const findPublishersByAuthor = author => {
    // TODO implement findPublishersByAuthor functionality, return publishers list by author
}
export const removeAuthor = async author => {
    // TODO implement removeAuthor functionality, return deleted author
}