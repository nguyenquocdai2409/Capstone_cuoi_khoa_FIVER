import { http } from "../../api/config";
import { message } from "antd";
import { USER_LOGIN, USER_INFO } from "../constant/user";

export const loginAction = (values, navigate) => {
  return (dispatch) => {
    http
      .post(`api/auth/signin`, values)
      .then((res) => {
        dispatch({
          type: USER_LOGIN,
          payload: res.data.content,
        });
        const dataJson = JSON.stringify(res.data.content);
        localStorage.setItem(USER_INFO, dataJson);
        message.success("Đăng nhập thành công");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        message.error("Đã có lỗi xảy ra");
      });
  };
};
