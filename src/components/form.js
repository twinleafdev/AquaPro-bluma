import React from 'react'

const Form = () => (
    <div className="sidebar">
    <form name="contact" method="POST" data-netlify="true">
<div className="field">
  <label className="label">Name</label>
  <div className="control">
    <input className="input" type="text" placeholder="Your Name" />
  </div>
</div>
<div className="field">
  <label className="label">Email</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input" type="email" placeholder="Your Email"  />
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  {/* <p className="help is-danger">This email is invalid</p> */}
</div>

<div className="field">
  <label className="label">Message</label>
  <div className="control">
    <textarea className="textarea" placeholder="Your Message"></textarea>
  </div>
</div>


<div className="field is-grouped">
  <div className="control">
    <button className="button is-link">Submit</button>
  </div>

</div>
    </form>
</div>
)

export default Form