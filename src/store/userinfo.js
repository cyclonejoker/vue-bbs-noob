
export function getUsername() {
  return localStorage.username;
}
export  function setUsername(username) {
  return localStorage.username=username;
}
export function removeUsername() {
  return localStorage.removeItem("username");
}
export  function setUserid(userid) {
  return localStorage.userid=userid;
}
export  function removeUserid(userid) {
  return localStorage.removeItem("userid");
}
export function getUserid() {
  return localStorage.userid;
}

