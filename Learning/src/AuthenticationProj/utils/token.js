export const saveToken = (accessToken, refreshToken) => {
    localStorage.setItem("token", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  };
  
  export const getToken = () => ({
    accessToken: localStorage.getItem("token"),
    refreshToken: localStorage.getItem("refreshToken")
  });
  
  export const removeToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
  };
  