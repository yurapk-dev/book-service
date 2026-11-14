import {Author, Book} from '../models/index.js'

export const addBook = async (book) => Book.create(book);

export const findAuthorById = async(id) => Author.findByPk(id)

export const findBookByIsbn = async isbn => Book.findByPk(isbn, {
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    include: [{
        association: 'authors',
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        through: { attributes: [] }
    }]
});

export const removeBook = async book => {
    await book.setAuthors([]);
    await book.destroy();
    return book;
};

export const updateBookTitle = async (book, title) => {
    await book.update({ title });
    return book;
};