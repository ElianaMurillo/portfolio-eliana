import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const form = useRef();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorName, setErrorName] = useState(null);
  const [errorText, setErrorText] = useState(null);

  useEffect(() => {
    localStorage.setItem('emailLocalStorage', JSON.stringify(email));
    setEmail(email);
  }, [email]);

  const alertSentMessage = () => toast.success('Thanks for your message '+ name + '! ' + ' I will get in touch as soon as possible.',{
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7tfjkah",
        "template_fj1l2o7",
        form.current,
        "RWiYXExJ4e77s5-Ji"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    event.preventDefault();
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeText = (event) => {
    setText(event.target.value);
  }

  const handleSendEmail = (event) => {
    event.preventDefault();
    const structureEmail = /\S+@\S+\.\S+/;
    const isValidateEmail = structureEmail.test(email);
    setErrorEmail(null);
    setErrorName(null);
    setErrorText(null);
    if (isValidateEmail && name.length > 1 && text.length > 1) {
      console.log(name.length);
      console.log(text.length);
      console.log({ email });
      console.log({ name });
      console.log({ text });
      console.log(isValidateEmail);
      sendEmail(event);
      alertSentMessage();
    } if (name.length < 1) {
      setErrorName('Name is required');
    } if (text.length < 1) {
      setErrorText('Message is required.');
    } if (!isValidateEmail) {
      setErrorEmail("Valid email required.");
    }
  };

  return (
    <div>
      {errorEmail && (
        <form ref={form} className="contact-me-form">
            <div className="container-title-and-error-contact-me">
              <p>Name</p>
              <div className="message-error">
                {errorName}
              </div>
            </div>
              <label className="labelName" htmlFor='text'></label>
              <input
                className="error-design"
                type="text"
                name="user_name"
                onChange={handleChangeName}
                value={name}
              />
            <div className="container-title-and-error-contact-me">
              <p>Email address</p>
              <div className="message-error">
                {errorEmail}
              </div>
            </div>
            <label className="labelEmail" htmlFor="email"></label>
            <input
              className="error-design"
              id="email"
              name="user_email"
              type="email"
              placeholder="email@company.com"
              onChange={handleChangeEmail}
              value={email}
            />
          <div className="container-title-and-error-contact-me">
            <p>Message</p>
            <div className="message-error">
              {errorText}
            </div>
          </div>
            <textarea 
              className="error-design"
              name="message"
              onChange={handleChangeText}
              value={text}/>
        </form>
      )
      }{!errorEmail && (
        <form ref={form} className="contact-me-form">
            <div className="container-title-and-error-contact-me">
              <p>Name</p>
              <div className="message-error">
                {errorName}
              </div>
            </div>
              <label className="labelName" htmlFor='text'></label>
              <input
                className="no-error-design"
                type="text"
                name="user_name"
                onChange={handleChangeName}
                value={name}
              />
            <div className="container-title-and-error-contact-me">
              <p>Email address</p>
              <div className="message-error">
                {errorEmail}
              </div>
            </div>
            <label className="labelEmail" htmlFor="email"></label>
            <input
              className="no-error-design"
              id="email"
              name="user_email"
              type="email"
              placeholder="email@company.com"
              onChange={handleChangeEmail}
              value={email}
            />
          <div className="container-title-and-error-contact-me">
            <p>Message</p>
            <div className="message-error">
              {errorText}
            </div>
          </div>
            <textarea 
              className="no-error-design"
              name="message"
              onChange={handleChangeText}
              value={text}/>
        </form>
      )
      }
      <div className="container-btn-sent-email">
        <button
          className="button-secondary-style"
          onClick={handleSendEmail}
        >
          Send Email
        </button>
        <ToastContainer  />
      </div>
    </div >
  );
};

export default Contact;