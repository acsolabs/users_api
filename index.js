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

  const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return newDate;
  };

  document.body.innerHTML = usersData
    .map(
      (user) =>
        `
       <div class="card">
       <img src="${user.picture.large}"><img>
       <h3>${user.name.first} ${user.name.last}</h3>
        <p>${user.location.city}, ${dateParser(user.dob.date)}<p>
        <em>membre depuis : ${user.registered.date}</em>
      </div>
      `,
    )
    .join(" ");
};
displayUsers();
