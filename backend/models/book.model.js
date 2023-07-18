import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
    "name": String,
    "price": Number,
    "author": String,
    "year": Number,
    stock: {
        type: Number,
        default: 50
    }
}, {timestamps: true})

export default mongoose.model('Book', bookSchema)