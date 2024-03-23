import React from 'react'
import BackgroundImage from '../assets/burgerBanner.jpg';
import '../styles/Contact.css';

export const Contact = () => {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage : `url(${BackgroundImage}) `}}>

      </div>
      <div className='rightSide'>
          <h1>Contact Us</h1>
          <form>
            <label>Fullname</label>
            <input type='text' name='name' placeholder='Enter your fullname...'/>
            <label>E-mail</label>
            <input type='email' name='email' placeholder='Enter your e-mail...'/>
            <label>Message</label>
            <textarea rows={6} name='message' placeholder='Enter your message...'>
            </textarea>
          </form>
      </div>
    </div>
  )
}
