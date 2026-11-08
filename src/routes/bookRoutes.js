import { Router } from 'express'
import * as controller from '../controller/bookController.js'

const bookRoutes = Router()

bookRoutes.post('/book/', controller.addBook)
bookRoutes.get('/book/:isbn', controller.getBook)
bookRoutes.delete('/book/:isbn', controller.removeBook)
bookRoutes.patch('/book/:isbn/title/:title', controller.updateBookTitle)
bookRoutes.get('/books/author/:author', controller.findBooksByAuthor)
bookRoutes.get('/books/publisher/:publisher', controller.findBooksByPublisher)
bookRoutes.get('/authors/book/:isbn', controller.findBookAuthors)
bookRoutes.get('/publishers/author/:author', controller.findPublishersByAuthor)
bookRoutes.delete('/author/:author', controller.removeAuthor)

export default bookRoutes
