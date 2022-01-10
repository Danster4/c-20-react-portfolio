import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers';

function Contact() {

  const [formState, setFormState] = useState({ name: '', email: '', message: ''});
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if(e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if(!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      } 
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if(!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value })
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState)
  }

  return (
    <section className='bg-slate-800 flex grid'>
      
    
    <div className="bg-slate-800 grid gap-3 items-center flex place-content-center justify-center">
      <h1 className="items-center font-semibold text-white lg:text-5xl md:text-4xl sm:text-4xl text-3xl mt-8 mb-2 mx-3">
        Contact Me 
      </h1>
      
      <h2 className="grid flex gap-3 text-white text-xl mx-3">
        If you are interested in collaborating together on a project, or just want to say hi, send me a message using the contact form below. 
        <br /> <br className='sm:hidden md:hidden lg:hidden xl:hidden'/> 
        Thanks for reaching out and I'll get back to you as soon as I can!
      </h2>
      
    


  <div class="w-full md:w-96 md:max-w-full mx-auto">
  
  <div class="p-6">
    
    <form id="contact-form" onSubmit={handleSubmit}>
      <label class="block mb-6">
        <span class="flex justify-start text-white">Full name</span>
        <input
          type="text"
          name="name"
          defaultValue={name} 
          onBlur={handleChange}
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="Jeremy Bergman"
        />
      </label>
      <label class="block mb-6">
        <span class="flex justify-start text-white">Email address</span>
        <input
          name="email"
          type="email"
          defaultValue={email} 
          onBlur={handleChange}
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="j.bergman@example.com"
          required
        />
      </label>
      <label class="block mb-6">
        <span class="flex justify-start text-white">Message</span>
        <textarea 
          name="message"
          defaultValue={message} 
          onBlur={handleChange}
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          rows="3"
          placeholder="Message goes here!"
        ></textarea>
      </label>
      {errorMessage && (
          <div>
            <p className="error-text text-white mb-4">{errorMessage}</p>
          </div>
        )}
      <div class="mb-6">
        <button 
          data-testid="button" 
          className="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-white font-medium hover:border-primary hover:bg-primary hover:text-lime-400 transition" 
          type="submit">
          Send ➟
        </button>
      </div>
      
    </form>
  </div>
</div>

    </div>
      
    </section>
  );
}

export default Contact;