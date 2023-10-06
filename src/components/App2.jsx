// import { Component } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { nanoid } from 'nanoid';
// import { Filter } from './Filter/Filter';
// import { ContactForm } from './ContactForm/ContactForm';

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   // handleFilter = evt => {
//   //   this.state.contacts.filter(contact => {
//   //     const filter = contact.name === contact.filter;
//   //     return this.setState({ contact: filter });
//   //   });
//   // };
//   filterContacts = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };
//   getFilteredContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };
//   handleInputChange = evt => {
//     const { value, name } = evt.currentTarget;
//     this.setState({ [name]: value });
//   };

//   addContact = ({ name, number }) => {
//     if (
//       this.state.contacts.find(
//         contact => contact.name.toLowerCase() === name.toLowerCase()
//       )
//     ) {
//       return alert(`${name} is already in contacts!`);
//     }
//     this.setState(prevState => {
//       return {
//         contacts: prevState.contacts.concat({
//           id: nanoid(),
//           name: values.name,
//           number: values.number,
//         }),
//       };
//     });
//   };
//   render() {
//     const filteredContacts = this.getFilteredContacts();
//     return (
//       <div>
//         <h1>Phonebook</h1>

//         <div>
//           <h2>Contacts</h2>
//           <ContactForm />
//           <span>Find contacts by name</span>
//           <Filter onChange={this.filterContacts} value={this.state.filter} />
//           <ul>
//             {this.state.contacts.length !== 0 &&
//               this.state.contacts.map(({ id, name, number }) => (
//                 <li key={id}>
//                   {name}: {number}
//                 </li>
//               ))}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }
