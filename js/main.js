var introClick = () => {
  location.href = "./new-page.html";
};

var checkLogin = () => {
  var username = document.getElementById("username-field").value;
  var password = document.getElementById("password-field").value;
  console.log(username);
  console.log(password);

  if (username === "admin" && password === "test@123") {
    document.getElementById(
      "alert-banner"
    ).innerHTML = `<div class="alert alert-success" role="alert">
  Correct!
</div>`;
  } else {
    document.getElementById(
      "alert-banner"
    ).innerHTML = `<div class="alert alert-danger"  role="alert">
  Invalid credentials!
</div>`;
  }
};
