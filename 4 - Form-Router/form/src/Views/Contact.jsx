import React from "react";
import { Helmet } from "react-helmet";

import './contact.scss'

const Contact = () => {
  return (
    <>
      <Helmet defer={false}>
        <titre>Mon super titre</titre>
      </Helmet>
      <div>
        <h1>Contact</h1>
        <form>
          <input type="text" name="" id=""></input>
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
