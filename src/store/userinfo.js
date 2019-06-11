
export function getUsername() {
  return localStorage.username;
}
export  function setUsername(username) {
  return localStorage.username=username;
}
export function removeUsername() {
  return localStorage.removeItem("username");
}
<<<<<<< HEAD
export  function setUserid(userid) {
  return localStorage.userid=userid;
}
export  function removeUserid(userid) {
  return localStorage.removeItem("userid");
}
export function getUserid() {
  return localStorage.userid;
=======
export  function setUserID(userID) {
  return localStorage.userID=userID;
}
export  function removeUserID(userID) {
  return localStorage.removeItem("userID");
}
export function getUserID() {
  return localStorage.userID;
>>>>>>> 已经测试完登录注册 以及baseHeader
}

