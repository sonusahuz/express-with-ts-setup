import { Request, Response } from 'express';
import Book from './bookModel';

class BookController {
  async create(req: Request, res: Response) {
    try {
      const book = await Book.create(req.body);
      res.status(201).json(book);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : 'An unknown error occurred';
      res.status(400).json({ message: errorMessage });
    }
  }

  async readAll(req: Request, res: Response) {
    try {
      const books = await Book.find();
      res.status(200).json(books);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : 'An unknown error occurred';
      res.status(400).json({ message: errorMessage });
    }
  }

  async readById(req: Request, res: Response) {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) {
        res.status(404).json({ message: 'Book not found' });
      } else {
        res.status(200).json(book);
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : 'An unknown error occurred';
      res.status(400).json({ message: errorMessage });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!book) {
        res.status(404).json({ message: 'Book not found' });
      } else {
        res.status(200).json(book);
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : 'An unknown error occurred';
      res.status(400).json({ message: errorMessage });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const book = await Book.findByIdAndDelete(req.params.id);
      if (!book) {
        res.status(404).json({ message: 'Book not found' });
      } else {
        res.status(200).json({ message: 'Book deleted successfully' });
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : 'An unknown error occurred';
      res.status(400).json({ message: errorMessage });
    }
  }
}

export default new BookController();
