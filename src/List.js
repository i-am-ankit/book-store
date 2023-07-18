import { useEffect, useState } from "react";
import "./List.css"
import CartButton from "./CartButton";


const List = ({books}) => {
    // console.log("PASSED PROPS",books)
    const [sorted, setSorted] = useState(books)
    // console.log("COPIED PROPS",sorted)

    useEffect(() => {
        setSorted(books)
    }, [books])
    // let sorted = books
    // console.log(sorted)

    function sortYear(){
        console.log(books);
        books.sort((a,b) => (b.year - a.year))
        console.log(books);
        // console.log(sorted);
        // setSorted(books)
    }

    return(
        <>
            <table>
                <tr>
                    {/* <th><button>Id</button></th> */}
                    <th><button>Name</button></th>
                    <th><button>Author</button></th>
                    <th><button >Price</button></th>
                    <th><button onClick={sortYear}>Year</button></th>
                    <th><button >Stock</button></th>
                </tr>
                
                {sorted.map(book => (
                    <tr>
                        {/* <td>1</td> */}
                        <td>{book.name}</td>
                        <td>{book.author}</td>
                        <td>{book.price}</td>
                        <td>{book.year}</td>
                        <td>{book.stock}</td>
                        <td><CartButton bookName={book.name}/></td>
                    </tr>
                ))}
            </table>
        </>
    )
}

export default List;