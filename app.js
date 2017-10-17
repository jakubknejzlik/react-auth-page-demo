var parsedURL = url.parse(window.location.href);

var tokenKey = "my_token";

if (parsedURL.get && parsedURL.get.access_token) {
  localStorage.setItem(tokenKey, parsedURL.get.access_token);
  window.location.href = "?";
}

var token = localStorage.getItem(tokenKey);
if (!token) {
  logout();
}

function logout() {
  localStorage.removeItem(tokenKey);
  window.location.href = "auth/?logout";
}

window.onload = function() {
  var button = document.getElementById("logoutButton");
  button.onclick = logout;
};
