import React from "react";
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import "./style.scss";

const ProfileForm = ({ label, type, placeholder }) => {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label className="label">{label}</Label>
          <Input
            className="input-box shadow-none"
            type={type}
            placeholder={placeholder}
          />
        </FormGroup>
      </Form>
    </div>
  );
};

export default ProfileForm;
