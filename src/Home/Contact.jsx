import React from "react";
import MailChimpForm from "./MailChimpForm";
require("dotenv").config();
function Contact() {
  return (<>

    {/* <!-- START SECTION CONTACT --> */}
    <section className="section_contact" id="contact">
      <div className="container">

        <h2 className="h1-responsive font-weight-bold text-center">Keep In Touch With <span className="text-dark">JusticeCoin</span>?</h2>

        <h5 className="text-center w-responsive mx-auto mb-5 mt-5" style={{ fontSize: "20px", fontWeight: "semi-bold" }}>Sign up for our mailing list and stay up to date! You can also email us at <strong> <a
          href="mailto:contact@justicecoin.org">contact@JusticeCoin.com.</a></strong></h5>
      </div>
      <div className="container">
        <div className="col-md-12 mb-md-0 mb-5 text-center email-form">

        <MailChimpForm url={process.env.REACT_APP_MAILCHIMP_URL}/>
          {/* <form className="text-center" name="email_form" action="/">
            <input type="email" id="email" name="email_address" className="form-control form-control-lg" placeholder="Your Email" />
            <br />
            <button type="submit" className="btn btn-large btn-outline-success btn-lg" name="submit_email"><strong>Sign Up</strong></button>
          </form> */}
        </div>
      </div>

    </section>
    {/* <!-- END SECTION CONTACT --> */}
  </>)
}

export default Contact;