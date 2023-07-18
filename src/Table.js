import { useState } from "react";
import List from "./List";
import Paginate from "./Paginate";
import { Link } from "react-router-dom";
// import "dotenv/config"


function Table(){
    let [createBookName, setCreateBookName] = useState("")
    let [authorName, setAuthorName] = useState("")
    let [price, setPrice] = useState()
    let [year, setYear] = useState()
    let [deleteBookName, setDeleteBookName] = useState("")
    let [searchBookName, setSearchBookName] = useState("")
    let [book, setBook] = useState({})
    let [books, setBooks] = useState([])
    let [updateBookName, setUpdateBookName] = useState("")
    let [stock, setStock] = useState()

    let [currentPage, setCurrentPage] = useState(1)
    let [postPerPage, setPostPerPage] = useState(3)
    let lastIndex = currentPage * postPerPage
    let firstIndex = lastIndex - postPerPage
    let booksPerPage = books.slice(firstIndex, lastIndex)

    // let [cart, setCart] = useState([])

    function createBook(e){
        e.preventDefault()
        const res =  fetch(process.env.REACT_APP_API_POST_A_BOOK, {
            method: "post",
            body: JSON.stringify({
                createBookName,
                authorName,
                price,
                year
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        res.then(res => {
            return res.json()
        }).then(res => {
            console.log(res)
            alert("Book Created")
        })
        
    }

    function deleteBook(e){
        e.preventDefault()
        const res = fetch(process.env.REACT_APP_API_DELETE_A_BOOK,{
            method: "post",
            body: JSON.stringify({
                deleteBookName
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        res.then(res => {
            return res.json
        }).then(res => {
            console.log(res)
            alert("Book Deleted")
        })
    }

    function searchBook(e){
        e.preventDefault()
        const res = fetch(process.env.REACT_APP_API_SEARCH_A_BOOK,{
            method: "post",
            body: JSON.stringify({
                searchBookName
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        res.then(res => {
            return res.json()
        }).then(res => {
            console.log(res)
            console.log(res.book)
            setBook(res.book)
        })
    }

    function allBooks(){
        const res = fetch(process.env.REACT_APP_API_GET_ALL_BOOKS)
        res.then(res => {
            return res.json()
        }).then(res => {
            console.log(res.books)
            setBooks(res.books)
        })
    }

    function paginate(pageNumber){
        setCurrentPage(pageNumber)
     }

    function updateStock(e){
        e.preventDefault()
        const res = fetch(process.env.REACT_APP_API_UPDATE_BOOK_STOCK,{
            method: "post",
            body: JSON.stringify({
                updateBookName,
                stock
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        res.then(res => {
            return res.json()
        }).then(res => {
            console.log(res)
            alert("Stock Updated")
        })
    }

    
    return(
        <>
        <h1>My Table</h1>
        
        <h1>Create Book Section</h1>
        <form onSubmit={createBook}>
            <input 
            type="text"
            placeholder="Book Name"
            value={createBookName}
            onChange={e => setCreateBookName(e.target.value)}
             />
             <input 
            type="text"
            placeholder="Author Name"
            value={authorName}
            onChange={e => setAuthorName(e.target.value)}
             />
             <input 
            type="text"
            placeholder="Year"
            value={year}
            onChange={e => setYear(e.target.value)}
             />
             <input 
            type="text"
            placeholder="Price"
            value={price}
            onChange={e => setPrice(e.target.value)}
             />
             <button>Create Book</button>
        </form>

        <h1>Update Book Section</h1>
        <form onSubmit={updateStock}>
            <input 
            type="text"
            placeholder="Book Name"
            value={updateBookName}
            onChange={e => setUpdateBookName(e.target.value)}
             />
            <input 
            type="text"
            placeholder="NEW Stock"
            value={stock}
            onChange={e => setStock(e.target.value)}
             />
             <button>Update Book Stock</button>
        </form>

        <h1>Book Collections</h1>
        <button onClick={allBooks}>View Books</button>
        <List books={booksPerPage} />
        <Paginate postPerPage={postPerPage} totalPosts={books.length} paginate={paginate}/>
        <br />
        <Link to="/cart">Go To Cart</Link>
        
        <h1>Delete Book Section</h1>
        <form onSubmit={deleteBook}>
            <input 
            type="text"
            placeholder="Book Name"
            value={deleteBookName}
            onChange={e => setDeleteBookName(e.target.value)}
             />
             <button>Delete Book</button>
        </form>

        <h1>Search Section</h1>
        <form onSubmit={searchBook}>
            <input 
            type="text"
            placeholder="Book Name"
            value={searchBookName}
            onChange={e => setSearchBookName(e.target.value)}
             />
             <button>Search by Book Name</button>
             <h4><u>Name</u> : {book.name} <u>Author</u> : {book.author} <u>Price</u> : {book.price} <u>Year</u> : {book.year}</h4>
        </form>

        </>
    )
}

export default Table;