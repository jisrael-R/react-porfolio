import React,{ useState } from "react";
import { validateEmail } from "../../utils/helpers";
import './style.css'

function Contact(){
    
   const [formState, setFormState] = useState({
        name: "",
          email: "",
          message: "",
        });
      
        const [errorMessage, setErrorMessage] = useState("");
        const { name, email, message } = formState;
      
        const handleSubmit = (e) => {
          e.preventDefault();
          if (!errorMessage) {
            console.log("Submit Form", formState);
          }
        };
      
        const handleChange = (e) => {
          if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
              setErrorMessage("Your email is invalid.");
            } else {
              setErrorMessage("");
            }
          } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage("");
            }
          }
          if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log("Handle Form", formState);
          }
    };

    


 return(
  <section className="contact-form" id="contact">
      <h1  className="c-title">Contact Me</h1>
       <form className="form-inp" onSubmit={handleSubmit}>
         <div className="change">
            <div>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                        type="text"
                        name="name"
                        defaultValue={name}
                        onBlur={handleChange}
                        />
                        </div>
                        <div>
                        <label htmlFor="email">Email</label>
                        <input
                        type="text"
                        name="email"
                        defaultValue={email}
                        onBlur={handleChange}
                        />
                    </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
          <button data-testid="button" type="submit">
          Submit
        </button>
            </div>
            <div>
            <label htmlFor="message">Message</label>
            <textarea
            type="text"
            rows="5"
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            />
            </div>
          </div>
          
       </form>
  </section>
 );

}

export default Contact;