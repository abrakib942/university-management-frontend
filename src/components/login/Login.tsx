"use client";

import { Button, Col, Row, message } from "antd";
import loginImage from "@/assets/login-image.png";
import Image from "next/image";
import FormInput from "@/components/form/FormInput";
import { SubmitHandler } from "react-hook-form";
import CustomForm from "@/components/form/Form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";

type FormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
      // console.log("res", res);

      if (res?.accessToken) {
        router.push("/profile");

        message.success("User Logged in Successfully");
      }

      storeUserInfo({ accessToken: res?.accessToken });
      console.log(res);
    } catch (error) {}
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="login image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          First login your account
        </h1>
        <div>
          <CustomForm submitHandler={onSubmit}>
            <div>
              <FormInput name="id" type="text" size="large" label="User Id" />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
              />
            </div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </CustomForm>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
