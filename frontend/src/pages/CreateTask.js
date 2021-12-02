import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

<p>create task</p>

// class CreateBook extends Component {
//     constructor() {
//         super();
//         this.state = {
//             title: '',
//             isbn: '',
//             author: '',
//             description: '',
//             published_date: '',
//             publisher: ''
//         };
//     }

//     onChange = e => {
//         this.setState( { [e.target.name]: e.target.value });
//     };

//     onSubmit = e => {
//         e.preventDefault();

//         const data = {
//             title: this.state.title,
//             isbn: this.state.isbn,
//             author: this.state.author,
//             description: this.state.description,
//             published_date: this.state.published_date,
//             publisher: this.state.publisher,
//         }

//         axios
//             .post('http://localhost:8153/api/books', data)
//             .then(res => {
//                 this.setState[{
//                     title: '',
//                     isbn: '',
//                     author: '',
//                     description: '',
//                     published_date: '',
//                     publisher: ''
//                 }]
//                 this.props.history.push('/');
//             })
//             .catch(err => {
//                 console.log("Error in CreateBook!");
//             });
//     }

//     render() {
//         return(
//             <div>
//                 <div>
//                     <Link to='/'>
//                         Show Book List
//                     </Link>
//                 </div>
//                 <div>
//                     <h1>Add Book</h1>
//                     <p>Create new book</p>
//                     <form noValidate onSubmit={this.onSubmit}>
//                         <input
//                             type='text'
//                             placeholder="Title of the Book"
//                             name="title"
//                             value={this.state.title}
//                             onChange={this.onChange}
//                         />
//                         <input
//                             type='text'
//                             placeholder="ISBN"
//                             name="isbn"
//                             value={this.state.isbn}
//                             onChange={this.onChange}
//                         />
//                         <input
//                             type='text'
//                             placeholder="Describe this book"
//                             name="description"
//                             value={this.state.description}
//                             onChange={this.onChange}
//                         />
//                         <input
//                             type='text'
//                             placeholder="Publisher of this book"
//                             name="publisher"
//                             value={this.state.publisher}
//                             onChange={this.onChange}
//                         />
//                         <input 
//                             type="submit"
//                         />
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }

// export default CreateBook;