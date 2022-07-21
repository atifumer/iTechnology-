let userEmail = "admin";
let userPassword = "user";

function validate() {
  let username = document.getElementById("username").value;

  let password = document.getElementById("password").value;
  if (username === userEmail) {
    alert("welcom");
    if (password === userPassword) {
      alert("welcome to succsesfully");
    } else {
      alert("Wrong Password");
    }
  } else {
    alert("Wrong Email");
  }
}
// footer js
function footerToggle(footerBtn) {
  $(footerBtn).toggleClass("btnActive");
  $(footerBtn).next().toggleClass("active");
}
