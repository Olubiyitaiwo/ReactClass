import React, { useState } from 'react'
import styles from "./BookList.module.css"

export const BookList = () => {

    const bookList = [
        "Name of the Wind",
        "The Wise Man's Fear",
        "Kafka on the Shore",
        "The Master and the Margarita"
    ];

     const [books, setBooks] = useState(bookList);
     const [newBook, setNewBook] = useState();
     const [searchBookValue, setSearchBookValue] = useState(""); 
     console.log(books)
     console.log(newBook)


    const deleteHandler = (removeBook) =>{
        setBooks(books.filter((book)=> book !== removeBook))
    }

    const collectBookTitle=(e)=>{
        setNewBook(e.target.value.trim())
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(newBook){
            setBooks(prevBook=>[...prevBook, newBook])
        }
    }

    const handleFilterBooks =(e)=>{
        // e.preventDefault();
        let searchValue = e.target.value.toLowerCase();
        setSearchBookValue(searchValue)
    //    console.log(filteredBooks)
    }

    const filteredBooks = books.filter((book)=> book.toLocaleLowerCase().includes(searchBookValue));


    return (

  	<div id={styles.wrapper}>
	    <header>
	    	<div id={styles.pageBanner}>
	    		<h1 className={styles.title}> Book Collections</h1>
          <p>Books</p>
          <form id={styles.bookSearch}>
            <input type="text" placeholder="Search-books..." onKeyUp={handleFilterBooks}/>
          </form>
	    	</div>
	    </header>
	    <div id={styles.booklist}>
	    	<h2 className={styles.title}>Books to Read</h2>
	    	<ul>
	    		{/* <li>
	    			<span className={styles.name}>Name of the Wind</span>
	    			<span className={styles.delete}>delete</span>
	    		</li>
	    		<li>
	    			<span className={styles.name}>The Wise Man's Fear</span>
	    			<span className={styles.delete}>delete</span>
	    		</li>
	    		<li>
	    			<span className={styles.name}>Kafka on the Shore</span>
	    			<span className={styles.delete}>delete</span>
	    		</li>
	    		<li>
	    			<span className={styles.name}>The Master and the Margarita</span>
	    			<span className={styles.delete}>delete</span>
	    		</li> */}
                {
                    filteredBooks.map((book, index)=>(
                        <li key= {index}>
                            <span className={styles.name}>{book}</span>
                            <span className={styles.delete} onClick={()=> deleteHandler(book)}>delete</span>
                        </li>
                    ))
                }
	    	</ul>
	    </div>
	    <form onSubmit={handleSubmit} id={styles.addBook}>
	    	<input type="text" placeholder="Add a book..." onChange={collectBookTitle}/>
	    	<button>Add</button>
	    </form>

    </div>
    )
}

export default BookList