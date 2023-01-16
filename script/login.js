let baseUrl = "https://tasty-ant-waders.cyclic.app/";

let login = document.getElementById("loginbtn").addEventListener("click", userLogin);

async function userLogin(event) {
       event.preventDefault();
       let email = document.getElementById("email").value;
       let password = document.getElementById("password").value;

       let userObj = {
              email, password
       };

       let login_request = await fetch(`${baseUrl}/user/login`, {
              method: "POST",
              headers: {
                     "Content-Type": "application/json",
              },
              body: JSON.stringify(userObj)
       }).then((res) => res.json())
              .then((data) => {
                     console.log(data);
                     localStorage.setItem("token", data.token);
                     alert(data.msg);
                     window.location.href = "./post.html";
              })
}

