// https://randomuser.me/api/?results=24

let usersData = [];

const fetchUsers = async () => {
  await fetch("https://dummyjson.com/users?limit=24")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      usersData = data.users;
      console.log(usersData);
    });
};

const displayUsers = async () => {
  await fetchUsers();
  console.log("test 1 ", usersData);
  usersData.map((user) => {
    document.body.innerHTML += `<div class="card">
    <h3>${user.firstName}</h3>
    </div>`;
  });
};

displayUsers();
