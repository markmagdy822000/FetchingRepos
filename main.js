// https://api.github.com/users/markmagdy822000/repos
"use strict";

let userName = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

getButton.onclick = function () {
  getRepo();
};

function getRepo() {
  if (userName.value == "") {
    reposData.innerHTML = "<span>Please Enter Usename.</span>";
  }
  let url = "https://api.github.com/users/" + userName.value + "/repos";
  fetchingData(url);
}

function fetchingData(url) {
  fetch(url)
    .then((res) => res.json())
    .then((repos) => toPage(repos));
}

function toPage(repos) {
  reposData.innerHTML = "";
  repos.forEach((repo) => {
    let mainDiv = document.createElement("div");
    mainDiv.className = "repo-box";
    mainDiv.appendChild(document.createTextNode(repo.name));

    let url = document.createElement("a");
    url.href = "https://github.com/" + userName.value + "/" + repo.name;
    // https://github.com/markmagdy822000/ICPC
    url.innerHTML = "Visit";
    mainDiv.append(url);

    let sp = document.createElement("span");
    sp.innerHTML = `Stars Count: ${repo.stargazers_count}`;
    mainDiv.append(sp);
    reposData.appendChild(mainDiv);
  });
}
