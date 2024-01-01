import React from "react";
import imgLogin from "./imgLogin.jpg";
import { Button, Checkbox, Form, Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const Register = () => {
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
          <div className="content2">
            <Form
              className=""
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
                <h2 className=""> Sign Up</h2>
              </div>
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your name account!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                label="Phone"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Birthday"
                name="birthday"
                rules={[
                  {
                    required: true,
                    message: "Please input your birthday!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Role"
                name="role"
                rules={[
                  {
                    required: true,
                    message: "Please input your role!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Skill"
                name="skill"
                rules={[
                  {
                    required: true,
                    message: "Please input your skill!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Certification"
                name="certification"
                rules={[
                  {
                    required: true,
                    message: "Please input your certification!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button className="bg-red-500 text-white w-full" htmlType="submit">
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
export default Register;
