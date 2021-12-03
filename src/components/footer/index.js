import React from "react";
import "./style.scss";
import { InputGroup, Input, Button, FormGroup, Label } from "reactstrap";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="footer">
        <h1 className="footerHeading">Get all the updates about NFT’s</h1>
        <p className="latestNews">
          Subscribe for the latest news, drops & collectibles
        </p>
        <InputGroup className="inputGroup">
          <Input className="footer-input shadow-none" />
          <Button className="subscribeBtn shadow-none">Subscribe</Button>
        </InputGroup>
        <p className="privacyPolicy">
          After reading the Privacy Notice, you may subscribe for our newsletter
          to get special offers & surveys delivered to your inbox. Unsubscribe
          at any time by clicking on the link in the email.
        </p>
        <FormGroup check inline className="checkCont">
          <Input className="shadow-none" type="checkbox" />
          <Label check>
            By entering my email and subscribing I confirm and agree to the
            above.
          </Label>
        </FormGroup>
        <h3 className="community">Join our community</h3>
        <div className="socialIconsWrapper">
          <div className="socialIconBox">
            <img src="/images/facebook.svg" />
          </div>
          <div className="socialIconBox">
            <img src="/images/instagram.svg" />
          </div>
          <div className="socialIconBox">
            <img src="/images/twitter.svg" />
          </div>
          <div className="socialIconBox">
            <img src="/images/youtube.svg" />
          </div>
          <div className="socialIconBox">
            <img src="/images/wechat.svg" />
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div>
          <span className="ozoneNetworks">© 2018 - Tribez</span>
        </div>
        <div>
          <span className="privacyPolicy">Privacy Policy</span>
          <span className="termsOfServices">Terms of Service</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
