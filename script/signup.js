let baseUrl = "https://tasty-ant-waders.cyclic.app/";

let register = document.getElementById("submitBtn").addEventListener("click", userRegistration);


async function userRegistration(event) {
       event.preventDefault();
       console.log("Registration")
       let name = document.getElementById("name").value;
       let email = document.getElementById("email").value;
       let gender = document.getElementById("gender").value;
       let password = document.getElementById("password").value;

       let userObj = {
              name, email,gender, password
       };
       console.log(userObj)

       let register_request = await fetch(`${baseUrl}/user/register`, {
              method: "POST",
              headers: {
                     "Content-Type": "application/json",
              },
              body: JSON.stringify(userObj)
       }).then((res) => res.json())
              .then((data) => {
                     console.log(data);
                     alert(data.msg);
                     window.location.href = "./login.html";
              })
              .catch(err => {console.log(err);});
}

