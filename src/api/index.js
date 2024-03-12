import request from "../utils/request/"
//引入配置好的axios实例
// portal/findAllTypes

// 登陆接口
export const Login = (params) => {
  console.log(params)
    return request({
        method: "get",
        url: "/api/oauth/auth",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        params: params
        
  });
};

//获取菜单数据的接口
export const getMenu = () => {
  return request.get("api/v1/account/menu");
};


//获取用户个人数据的接口
export const getProfile = () => {
  return request.get("api/v1/account/profile");
};

