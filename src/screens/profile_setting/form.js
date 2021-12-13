import React from "react";
import { Row, Col, Label } from "reactstrap";
import ProfileForm from "../../components/profile_form";
const ProfileDetail = () => {
  return (
    <div>
      <Row className="d-flex justify-content-between">
        <Col lg="5">
          <ProfileForm label={"Username"} type={"text"} />
          <ProfileForm label={"Name"} type={"text"} />
          <ProfileForm label={"Email"} type={"email"} />
          <ProfileForm label={"Password"} type={"text"} />
        </Col>
        <Col lg="5">
          <Label className="label">Links</Label>
          <div className="links-wrapper">
            <li className="form-links">
              <img src="/images/twiter.svg" />
              <span>www.twitter.com/tribez</span>
            </li>
            <li className="form-links-mid">
              <img src="/images/wchat.svg" />
              <span>www.twitter.com/tribez</span>
            </li>
            <li className="form-links">
              <img src="/images/binance.svg" />
              <span>www.twitter.com/tribez</span>
            </li>
          </div>
          <ProfileForm
            label={"Wallet Address"}
            type={"text"}
            placeholder={"023022swsnjanjn12213412n1wwwl21213"}
          />
          <button className="profile-save-button">Save</button>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileDetail;
