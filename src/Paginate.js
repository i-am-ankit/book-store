
const Paginate = ({postPerPage, totalPosts, paginate}) => {
    const pageNumbers = []
    for(let i=1; i<=Math.ceil(totalPosts/postPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <>
        {/* <button>Prev</button> */}
          {pageNumbers.map(i => (
            <button
            onClick={() => paginate(i)}
            >{i}</button>
          ))} 
        {/* <button>Next</button>  */}
        </>
    )
}

export default Paginate