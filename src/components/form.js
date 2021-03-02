import React from 'react'

const Form = () => (
    <div className="sidebar">
    <form name="aquaProContact" method="POST" action="/thank-you" data-netlify="true">
    <input type="hidden" name="form-name" value="aquaProContact" />
<div className="field">
  <label className="label" htmlFor="name">Name</label>
  <div className="control">
    <input className="input" type="text" id="name" placeholder="Your Name" name="name" />
  </div>
</div>
<div className="field">
  <label className="label" htmlFor="email">Email</label>
  <div className="control">
    <input className="input" id="email" type="email" placeholder="Your Email" name="email" />
  </div>
</div>

<div className="field">
  <label className="label" htmlFor="phone">Phone* (required)</label>
  <div className="control">
    <input className="input" id="phone" type="phone" placeholder="Your Phone Number" name="phone" required/>
  </div>
</div>

<div className="field">
  <label className="label" htmlFor="message">Message</label>
  <div className="control">
    <textarea className="textarea" id="message" placeholder="Your Message" name="message"></textarea>
  </div>
</div>


<div className="field is-grouped">
  <div className="control">
    <button type="submit" className="button is-link">Submit</button>
  </div>

</div>
    </form>
</div>
)

export default Form