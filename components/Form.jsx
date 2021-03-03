import { useState } from 'react';
import Image from 'next/image';


const Form = (props) => {


  const [message, writeMessage] = useState({
    name: '',
    email: '',
    text: ''
  });

  const [ hover, setHover ] = useState(true);


  const handleNameChange = (event) => {
    event.persist();
    writeMessage((values) => ({
      ...values,
      name: event.target.value,
    }));
  };

  const handleEmailChange = (event) => {
    event.persist();
    writeMessage((values) => ({
      ...values,
      email: event.target.value,
    }));
  };

  const handleTextChange = (event) => {
    event.persist();
    writeMessage((values) => ({
      ...values,
      text: event.target.value,
    }));
  };

  const toggleHover = () => {
    setHover(!hover);
  };




  return (
    <form class="form">
      <input onChange={handleNameChange} value={message.name} name="name" type="text" placeholder="Your Name"></input>
      <input onChange={handleEmailChange} value={message.email} name="email" type="email" placeholder="Email"></input>
      <input onChange={handleTextChange} value={message.text} name="message" placeholder="Type your message here..." class="big"></input>


        <input class={hover ? "send" : "sendFill"}
         onMouseEnter={toggleHover}
      onMouseLeave={toggleHover} type="submit" value="SEND"></input>




    </form>
  );
};


export default Form;