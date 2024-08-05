import React, { useState } from "react";
import "./Signup.css";
import { useDispatch } from "react-redux";
import * as AuthApi from "../../api/authRequest";
import { authLogin, authRegister } from "../../Reducer/authReducer";

const Signup = () => {
  const [signup, setSignup] = useState(false);

  const dispatch = useDispatch();
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  //we submit the login here
  //before we login, we interact with the database
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!signup) {
      console.log(signup);
      try {
        //we interact with the database, compare our login with what is in database
        const dataSent = await AuthApi.login(data);
        if (dataSent) {
          dispatch(authLogin({ type: "AUTH_SUCCESS", data: dataSent }));

          return console.log("you have logged in successfully");
        } else {
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(signup);
      try {
        console.log("register started");
        const dataReg = await AuthApi.register(data);
        console.log(dataReg);
        if (dataReg) {
          dispatch(authRegister({ type: "AUTH_SUCCESS", data: dataReg }));
        } else {
          console.log("we cant send to reducer latter");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const changeSignup = (e) => {
    e.preventDefault();
    console.log("change sign");
    setSignup((prev) => !prev);
  };
  return (
    <>
      <div className="main-container">
        <div className="outside-container">
          <div className="left-container">
            <h2>
              <span>Start keeping Your Secret</span> <p>For Free</p>
            </h2>
            <p>No future charges Just FREE</p>
          </div>
          <div className="right-container">
            <h1>Sign Up </h1>

            <form>
              {signup && (
                <div>
                  <input
                    required
                    onChange={handleChange}
                    name="firstname"
                    type="text"
                    placeholder="firstname"
                  />
                  <input
                    required
                    onChange={handleChange}
                    name="lastname"
                    type="text"
                    placeholder="lastname"
                  />
                </div>
              )}
              <input
                required
                onChange={handleChange}
                name="username"
                type="email"
                placeholder="username"
              ></input>

              <input
                required
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="password"
              ></input>
              <p style={{ marginTop: "0", color: "#3d88de" }}>
                Forgot password?
              </p>
              <button onClick={handleSubmit}>
                {signup ? "Signup" : "Login"}
              </button>
            </form>

            <p>
              Create an account.{" "}
              <span onClick={changeSignup}> .Signup now</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
