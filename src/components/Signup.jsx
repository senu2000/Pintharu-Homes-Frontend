import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import "../css/Signup.css";
import React, { useState } from "react";
import Img from "../../public/Images/Logo.png";
import { Link } from "react-router-dom";

export default function SignupForm() {
  return (
    <div className="signup-container">
      <table>
        <td className="signupMessageTd">
          <div className="signupMessage">
            WELCOME TO
            <img src={Img} className="homelogo" alt="logo" />
          </div>
        </td>
        <td className="signupformTd">
          <Card className="signupform">
            <h1 className="signupName">SIGN UP</h1>
            <form className="flex flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="email1"
                    value="Email"
                    style={{ fontSize: "20px" }}
                  />
                </div>
                <TextInput
                  id="email1"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="address"
                    value="Address"
                    style={{ fontSize: "20px" }}
                  />
                </div>
                <TextInput
                  id="address"
                  type="text"
                  placeholder="Enter your address"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="Tel"
                    value="Phone Number"
                    style={{ fontSize: "20px" }}
                  />
                </div>
                <TextInput
                  id="Tel"
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="password1"
                    value="Password"
                    style={{ fontSize: "20px" }}
                  />
                </div>
                <TextInput
                  id="password1"
                  type="password"
                  placeholder="Create your password"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="RepeatPassword"
                    value="Repeat Password"
                    style={{ fontSize: "20px" }}
                  />
                </div>
                <TextInput
                  id="RepeatPassword"
                  type="RepeatPassword"
                  placeholder="Confirm password"
                  required
                />
              </div>

              <Button gradientDuoTone="purpleToBlue">
                Register New Account
              </Button>
            </form>
          </Card>
        </td>
      </table>
    </div>
  );
}
