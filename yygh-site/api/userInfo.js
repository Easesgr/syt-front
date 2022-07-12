import request from "@/utils/request";
export default {
  login(loginVo) {
    return request({
      url: `/api/user/login`,
      method: "post",
      data: loginVo,
    });
  },
  getCode(phone) {
    return request({
      url: `/api/user/code/${phone}`,
      method: "get",
    });
  },
  getLoginParam() {
    return request({
      url: `/api/ucenter/wx/getLoginParam`,
      method: `get`,
    });
  },
  getUserInfo() {
    return request({
      url: `/api/user/auth/getUserInfo`,
      method: `get`,
    });
  },
  saveUserAuah(userAuah) {
    return request({
      url: `/api/user/auth/userAuth`,
      method: "post",
      data: userAuah,
    });
  },
};
