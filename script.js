let people = [
  // {
  //   name: "walter",
  //   points: 0,
  //   id: "a_num",
  // },
  // {
  //   name: "mike",
  //   points: 0,
  //   id: "b_num",
  // },
  // {
  //   name: "saul",
  //   points: 0,
  //   id: "c_num",
  // },
  // {
  //   name: "gus",
  //   points: 0,
  //   id: "d_num",
  // },
  // {
  //   name: "jr",
  //   points: 0,
  //   id: "e_num",
  // },
];

changeDisplay();

function shuffle(o) {
  for (
    var j, x, i = o.length;
    i;
    j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
}

function changeDisplay() {
  people.forEach(function (el) {
    const name = document.getElementById(el.id);
    name.innerHTML = el.name;

    const num = document.getElementById(`${el.id}`);
    num.innerHTML = el.points;
  });
}

function randomize() {
  console.log("button clicked");
  const seed = people.map((el) => people.indexOf(el));

  const selection =
    people.length === 1 ? 0 : Math.floor(Math.random() * people.length);

  // document.getElementById(
  //   `${people[selection].id}_num`
  // ).style.animationIterationCount = 999;

  people[selection].points++;
  document.getElementById(
    "rnd-msg"
  ).textContent = `Given a point to ${people[selection].name}`;

  // document.getElementById(`${people[selection].id}_num`).animation =
  //   "span-scale 1s 1 ease-out forward";

  // setTimeout(function () {
  //   document.getElementById(
  //     `${people[selection].id}_num`
  //   ).style.animationIterationCount = 0;
  // });

  changeDisplay();
}

function addMember() {
  const name = document.getElementById("add-input").value;
  people.push({ name: name, points: 0, id: `${name}_num` });

  const toAdd = `
  <li id="${name}_liid">
    <p id="${name}_id">${name} Points:</p>
    <span id="${name}_num">num</span>
  </li>
  `;

  document.getElementById("names-list").insertAdjacentHTML("afterbegin", toAdd);

  changeDisplay();
}

function resetMembers() {
  people.forEach(function (el) {
    document.getElementById(`${el.name}_liid`).remove();
  });
  document.getElementById("rnd-msg").textContent = "Add a member to randomize!";

  people = [];
}
