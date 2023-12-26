function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  let heading = document.querySelector(".container .text .title");
  let name = document.getElementById("name");
  let ans = document.querySelector(".views");
  let time = document.querySelector(".time");
  let length = document.getElementById("length");
  let body = document.querySelector(".container");
  let image = document.getElementById("Myimage");
  let box = document.getElementById("box1");
  let p = document.querySelectorAll(".span");
  let million = 1000000;
  let k = 1000;
  if (views >= million) {
    let v = Math.floor(views / million) + "M";
    v = v.toString();
    ans.innerText = `${v}`;
  } else if (views >= k) {
    let v = Math.floor(views / k); // Update the variable views here
    v = v.toString();
    ans.innerText = `${v}k`;
  } else {
    views = views.toString();
    ans.innerText = `${views}`;
  }

  heading.innerText = `${title}`;
  name.innerText = `${cName}`;
  time.innerText = `${monthsOld}`;
  length.innerText = `${duration}`;
  image.src = thumbnail;
  heading.style.padding = "10px";
  body.style.background = "black";
  box.style.padding = "10px";

  p.forEach((p) => {
    p.style.padding = "10px";
  });
}
let title = [
  "JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73",
  "JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #76",
  "JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #78",
  "JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #79",
];
let cName = "Code with Harry";
let views = [7000000, 10000, 90878, 324241, 572258];
let monthsOld = ["2months", "5months", "6months", "1year"];
let duration = ["30:50", "10:50", "40:50", "30:50"];
let thumbnail = "./hello.webp";

var btn = document.querySelector("button");
btn.addEventListener("click", function () {
  var originalContainer = document.querySelector(".container");
  var clonedContainer = originalContainer.cloneNode(true);
  originalContainer.insertAdjacentElement("afterend", clonedContainer);

  // Generate random indices
  let randomTitleIndex = Math.floor(Math.random() * title.length);
  let randomViewsIndex = Math.floor(Math.random() * views.length);
  let randomMonthsOldIndex = Math.floor(Math.random() * monthsOld.length);
  let randomDurationIndex = Math.floor(Math.random() * duration.length);

  // Creating a new card in the cloned container
  createCard(
    title[randomTitleIndex],
    cName,
    views[randomViewsIndex],
    monthsOld[randomMonthsOldIndex],
    duration[randomDurationIndex],
    thumbnail
  );
});
