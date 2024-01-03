import React, { useEffect } from "react";
import imgLogin from "./imgLogin.jpg";
import { Button, Checkbox, Form, Input, message } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { https } from "../../api/config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const onFinish = (values) => {
    https
      .post("/api/auth/signin", values)
      .then((res) => {
        console.log(res);
        message.success("login success!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        message.error("login fail!");
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${imgLogin})`,
          backgroundSize: "cover",
          position: "fixed",
          width: "100%",
          height: "100%",
        }}
      >
        <h1
          style={{ padding: "40px 0", fontSize: "50px" }}
          className="text-white text-center"
        >
          OFFICIAL SIGNUP FORM
        </h1>
        <div className="content">
          <div className="content1">
            <h2 className="agileit1">Official</h2>
            <p className="agileit2">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
            </p>
          </div>
          <div className="content2 mt-24">
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <div
                className="text-center text-red-500 space-y-3 mb-5 ml-40"
                style={{ fontSize: 30 }}
              >
                <FontAwesomeIcon icon={faUser} />
                <h2 className=""> Sign In</h2>
              </div>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <h2
                  onClick={() => {
                    navigate("/register");
                  }}
                  className="text-right text-blue-500 my-2 cursor-pointer font-medium"
                >
                  If you don't have account, please register!
                </h2>
                <Button
                  className="bg-red-500 text-white w-full"
                  htmlType="submit"
                >
                  Sign in
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
