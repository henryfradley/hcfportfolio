import { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import Fade from 'react-reveal/Fade';


const Form = (props) => {


  const [message, writeMessage] = useState({
    name: '',
    email: '',
    text: ''
  });

  const [submitted, setSubmit] = useState(false);
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



  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    });

    setSubmit(true);

  };

  const toggleHover = () => {
    setHover(!hover);
  };

  return (
    <div>
      {!submitted ?
      <form class="form" onSubmit={handleSubmit}>
        <input required onChange={handleNameChange} value={message.name} name="name" type="text" placeholder="Your Name"></input>
        <input required onChange={handleEmailChange} value={message.email} type="email" name="email" type="email" placeholder="Email"></input>
        <input required onChange={handleTextChange} value={message.text} name="message" placeholder="Type your message here..." class="big"></input>
        <input class={hover ? "send" : "sendFill"} onMouseEnter={toggleHover} onMouseLeave={toggleHover} type="submit" value="SEND"></input>
      </form>
      :
      <div class="thanks">

        <div class="thanksBox">
          <h1>Thanks for the message! I will be in touch with you soon.</h1>
        </div>

      </div>}
    </div>

  );
};


export default Form;