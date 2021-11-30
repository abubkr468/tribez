import React from "react";
import { Row, Col } from "reactstrap";
import "./style.scss";
import Page from "../../components/page";

const ProfileSetting = () => {
  return (
    <Page>
      <div className="profile-settings-wrapper">
        <Row>
          <Col lg="3">
            <div className="settings">SETTINGS</div>
          </Col>
          <Col lg="9">
            <div className="profile-settings">Profile Settings</div>
          </Col>
        </Row>
      </div>
    </Page>
  );
};

export default ProfileSetting;
