import React from "react";
import dividerImg from "../../media/divider.jpg";

export default class SpecificsE extends React.Component {
  render() {
    return (
      <div className="">
        <div>
          <img className="divider" src={dividerImg} alt="KOB Translation" />
          <h2>Translation Services and more</h2>
          <hr />
        </div>
        <h3>Translation services</h3>
        <p>
          We traslate all sorts of documents, lettrs, brochures, flyers, namuals, websites (language traslation only, no website development services), and more
        </p>
        <h3>Delivery</h3>
        <p>
          We deliver our services by email.  Other delivery methods may require additional fees and/or shipping charges.  
        </p>
        <h3>Rate and invoice</h3>
        <h5>Rates</h5>
        <p>
          Rates can vary depending on factors such as length or how quickly you need it translated.  Please contact us below for a quote. 
        </p>
        <h5>Payment</h5>
        <p>
          We accept Paypal and bank transfers.  Payment is due within two weeks upon completion of the services.
        </p>
          
          
        <p>
          <a
            href="https://www.paypal.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            PayPal
          </a>{" "}
          is a safe and easy online payment service used by over 250 million
          people worldwide. We pay the payment fee for paypal, so you can pay
          with no fee. Paypal's annual membership and registration fees are
          free.
        </p>
        <p>Transaction fees for bank transfers must be covered by the customer.</p>
      </div>
    );
  }
}
