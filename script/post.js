let baseUrl = "https://tasty-ant-waders.cyclic.app/";
let token = localStorage.getItem("token");

// function for adding post
let createPost = document.getElementById("addPost").addEventListener("click", create_post);

async function create_post(event) {
       event.preventDefault();
       console.log("Registration")
       let title = document.getElementById("title").value;
       let body = document.getElementById("body").value;
       let device = document.getElementById("device").value;

       let postObj = {
              title, body, device
       };
       console.log(postObj)

       let register_request = await fetch(`${baseUrl}/post/create`, {
              method: "POST",
              headers: {
                     "Content-Type": "application/json",
                     authorization: token
              },
              body: JSON.stringify(postObj)
       }).then((res) => res.json())
              .then((data) => {
                     console.log(data);
                     alert(data.msg);
                     window.location.reload();
              })
              .catch(err => { console.log(err); });
}


// function for rendering data on DOM
async function show_data(query) {
       if (token) {
              try {
                     let request = await fetch(`${baseUrl}/post/`, {
                            method: "GET",
                            headers: {
                                   "Content-Type": "application/json",
                                   authorization: token
                            }
                     });
                     let data = await request.json();
                     console.log(data);
                     displayTable(data);


              } catch (error) {
                     console.log(error);
              }
       }
       else {
              alert("Please Login First");
              window.location.href = "./login.html";
       }
}

show_data();

function displayTable(detailsObj) {
       document.querySelector("tbody").innerHTML = null;
       console.log(detailsObj.length)
       detailsObj.forEach(element => {
              let row = document.createElement("tr");

              let td1 = document.createElement("td");
              td1.innerText = element.title;

              let td2 = document.createElement("td");
              td2.innerText = element.body;

              let td3 = document.createElement("td");
              td3.innerText = element.device;

              let td4 = document.createElement("td");
              td4.innerText = "Update";
              td4.addEventListener("click", async function(){
                     let 
              })

              let td5 = document.createElement("td");
              td5.innerText = "Delete";
              td5.addEventListener("click", async function () {
                     let request = await fetch(`${baseUrl}/post/delete/${element._id}`, {
                            method: "DELETE",
                            headers: {
                                   "Content-Type": "application/json",
                                   "authorization": token
                            }
                     })
                     let data = await request.json();
                     alert(data.msg);
                     window.location.reload();
              });


              row.append(td1, td2, td3, td4, td5);
              document.querySelector("tbody").append(row);
       });
}