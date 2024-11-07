import express from 'express';
import BookController from '../book/bookController';

const bookRouter = express.Router();

bookRouter.post('/', BookController.create); // Create a new book
bookRouter.get('/', BookController.readAll); // Get all books
bookRouter.get('/:id', BookController.readById); // Get a book by ID
bookRouter.put('/:id', BookController.update); // Update a book by ID
bookRouter.delete('/:id', BookController.delete); // Delete a book by ID

export default bookRouter;
