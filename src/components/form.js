import React from 'react'

const Form = () => (
    <div className="sidebar">
    <form name="aquaProContact" method="POST" action="/thank-you" netlify>
<div className="field">
  <label className="label">Name</label>
  <div className="control">
    <input className="input" type="text" placeholder="Your Name" name="name" />
  </div>
</div>
<div className="field">
  <label className="label">Email</label>
  <div className="control">
    <input className="input" type="email" placeholder="Your Email" name="email" />
  </div>
</div>

<div className="field">
  <label className="label">Message</label>
  <div className="control">
    <textarea className="textarea" placeholder="Your Message" name="message"></textarea>
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