import { useState } from "react";
import Button from "./Button";

function Books({books}){

    return(
        <>
            {/* <h1>
                {books.map(book => {
                    {book.title}
                })}
            </h1> */}

            {/* {books.map(book => {
                <h1>{book.title}</h1>
            })} */}

            {/* <ul>
                {books.map((book) => {
                    return(
                        <li>{book.title}</li>
                    )
                })}
            </ul> */}

            {books.map((book) => (
                <h4>
                <img src={book.image}/><br />
                {book.title}<br />
                Price : {book.price}
                <Button />
                </h4>
                
            ))}
        </>
    )
}

export default Books;