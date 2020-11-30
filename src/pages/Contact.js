import React from "react";

const Contact = () => {
  return (
    <div className="App">

<main>
          <h2>Get your consultancy free!</h2>
          <fieldset className="information">
            <legend>Your Info</legend>
            <br />
            <label htmlFor="name">Full Name</label>
            <br />
            <input type="text" id="name" placeholder="Please enter your name and family name" />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input type="text" id="email" />
            <br />
            <label htmlFor="phoneNo">Phone Number</label>
            <br />
            <input type="text" id="phoneNo" />
            <br />
          </fieldset>
          <fieldset className="details">
            <legend>Details</legend>
            <h4>Description</h4>
            <div className="form-row form-row-yes">
              <textarea rows={4} cols={50} name="comment" defaultValue={"Enter text here..."} />
            </div>                   
            <h4>Service Type</h4>
            <div>
              <input type="checkbox" id="uxui" name="type[]" />
              <label htmlFor="uxui">UX/UI Design</label>
            </div>
            <div>
              <input type="checkbox" id="webdev" name="type[]" />
              <label htmlFor="webdev">Web Development</label>
            </div>
            <div>
              <input type="checkbox" id="project" name="type[]" />
              <label htmlFor="project">Project Management</label>
            </div>
            <div className="form-button button-submit"><button type="submit">Submit</button></div>
          </fieldset>
          
        </main>

    </div>
    );
};

export default Contact;