import Book from "../models/book.model.js";

export const createBook = async (req,res) => {
    console.log("INSIDE CREATE BOOK")
    const {createBookName,price,authorName,year} = req.body
    console.log(createBookName,price,authorName,year)
    console.log(req.body)
    const book = await Book.create({
        name: createBookName,
        price,
        author: authorName,
        year
    })
    res.status(200).json({
        success: true,
        book
    })
};

export const deleteBook = async (req,res) => {
    console.log("INSIDE DELETE BOOK")
    const {deleteBookName} = req.body
    // const book = await Book.findOne({deleteBookName})
    await Book.deleteOne({name: deleteBookName})
    res.status(200).json({
        success: true
    })
}

export const searchBook = async(req,res) => {
    console.log("Inside Search Book")
    const {searchBookName} = req.body
    console.log(searchBookName)
    const book = await Book.findOne({name: searchBookName})
    res.status(200).json({
        success: true,
        book
    })
}

export const allBooks = async (req,res) => {
    const books = await Book.find({}) 
    res.status(200).json({
        books
    })
}

export const updateStock = async (req,res) => {
    const {stock, updateBookName} = req.body
    // const book = await Book.findOne({name: updateBookName})
    console.log(stock, updateBookName)
    const book = await Book.updateOne({name: updateBookName}, {stock})
    console.log(book)
    res.status(200).json({
        success: true,
        book
    })
}