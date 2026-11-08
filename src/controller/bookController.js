import * as service from '../service/bookService.js'

export const addBook = async (req, res) => {
    const book = await service.addBook(req.body)
    return (book) ? res.message('true') : res.status(404).send()
}

export const getBook = async (req, res) => {
    const book = await service.getBook(req.params.isbn)
    return (book) ? res.json(book) : res.status(404).send()
}

export const removeBook = async (req, res) => {
    const book = await service.removeBook(req.params.isbn)
    return (book) ? res.json(book) : res.status(404).send()
}

export const updateBookTitle = async (req, res) => {
    const book = await service.updateBookTitle(req.params.isbn, req.params.title)
    return (book) ? res.json(book) : res.status(404).send()
}

export const findBooksByAuthor = async (req, res) => {
    const books = await service.findBooksByAuthor(req.params.author)
    return (books?.length) ? res.json(books) : res.status(404).send()
}

export const findBooksByPublisher = async (req, res) => {
    const books = await service.findBooksByPublisher(req.params.publisher)
    return (books?.length) ? res.json(books) : res.status(404).send()
}

export const findBookAuthors = async (req, res) => {
    const authors = await service.findBookAuthors(req.params.isbn)
    return (authors?.length) ? res.json(authors) : res.status(404).send()
}

export const findPublishersByAuthor = async (req, res) => {
    const publishers = await service.findPublishersByAuthor(req.params.author)
    return (publishers?.length) ? res.json(publishers) : res.status(404).send()
}

export const removeAuthor = async (req, res) => {
    const author = await service.removeAuthor(req.params.author)
    return (author) ? res.json(author) : res.status(404).send()
}


