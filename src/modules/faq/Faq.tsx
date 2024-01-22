import React from "react";
import OpenIcon from "../icons/OpenIcon";
import CloseIcon from "../icons/CloseIcon";
import "./faq.scss";
function Faq() {
  return (
    <section className="faq-block">
      <div className="faq-block__header">
        <h5>Support</h5>
        <h3>FAQs</h3>
        <p>
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please
          <a href="#"> chat to our friendly team.</a>
        </p>
      </div>
      <div className="faq-block__body">
        <div className="faq-block__body-content">
          <div>
            <h4>
              How many participants can join a ClearLink video conference?
            </h4>
            <p>
              ClearLink offers flexible meeting options. Depending on your
              subscription plan, you can host meetings with varying numbers of
              participants. Our plans are designed to accommodate small team
              collaborations and large-scale webinars, ensuring you have the
              right fit for your needs.
            </p>
          </div>
          <OpenIcon />
        </div>
        <div className="faq-block__body-content">
          <h4>Can I use ClearLink on multiple devices?</h4>
          <CloseIcon />
        </div>
        <div className="faq-block__body-content">
          <h4>
            Is ClearLink compatible with other video conferencing platforms?
          </h4>
          <CloseIcon />
        </div>
        <div className="faq-block__body-content">
          <h4>
            How does ClearLink ensure the security of my video conferences?{" "}
          </h4>
          <CloseIcon />
        </div>
        <div className="faq-block__body-content">
          <h4>Do I need to download any software to use ClearLink?</h4>
          <CloseIcon />
        </div>
        <div className="faq-block__body-content">
          <h4>What kind of customer support does ClearLink provide?</h4>
          <CloseIcon />
        </div>
      </div>
    </section>
  );
}

export default Faq;
