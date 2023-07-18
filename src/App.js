import { useEffect, useState } from "react";
import Books from "./Books";
import Paginate from "./Paginate";
import { Link } from "react-router-dom";

function App() {
  const [books, setBooks] = useState([])
  const [searchBooks, setSearchBooks] = useState([]) 
  const [text, setText] = useState("")

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = books.slice(indexOfFirstPost, indexOfLastPost);
  
  async function getDetails(){
    const pr = await fetch("https://api.itbook.store/1.0/new")
    const data = await pr.json()
    console.log(data.books)
    setBooks(data.books)
  }

  useEffect(() => {
    getDetails()
  },[])

  async function onSearch(){
    const pr = await fetch(`https://api.itbook.store/1.0/search/${text}`)
    const data = await pr.json()
    console.log(data.books)
    setSearchBooks(data.books)
  }

 function paginate(pageNumber){
    setCurrentPage(pageNumber)
 }

  return (
    <div>
      <Link to="/table">Table</Link>
      <h1>Welcome to Book Store</h1>
      {/* <h2>My Cart {cart}</h2> */}
      <input 
      value={text}
      onChange={(e) => setText(e.target.value)}
      type="text" />
      <button onClick={onSearch}>Search</button>
      <Books books={searchBooks}/>
      <Books books={currentPosts}/>
      <Paginate postPerPage={postsPerPage} totalPosts={books.length} paginate={paginate}/>
    </div>
  );
}

export default App;
