// https://randomuser.me/api/?results=24

let usersData = [];

const fetchUsers = async () => {
  await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results[0]);
      usersData = data.results;
    });
};

const displayUsers = async () => {
  await fetchUsers();

  document.body.innerHTML = usersData
    .map(
      (user) =>
        `
       <div class="card">
        <h3>${user.name.first} ${user.name}</h3>
      </div>
      `,
    )
    .join(" ");
};
displayUsers();
