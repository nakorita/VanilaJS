// <⚠️ DONT DELETE THIS ⚠️>

// <⚠️ /DONT DELETE THIS ⚠️>
const country = document.querySelector(".country");
country.options[1].value = "KR";
country.options[2].value = "GR";
country.options[3].value = "TK";
country.options[4].value = "FL";

const KEY = "country";

function setting() {
  for (var i = 0; i < country.options.length; i++) {
    country.options[i].removeAttribute("selected");
  }
}

function choooseCountry() {
  let chooseCT = country.options[country.selectedIndex].value;
  localStorage.setItem(KEY, chooseCT);
  setting();
  country.options[country.selectedIndex].setAttribute("selected", "");
}

function loadCountry() {
  const currnetCountry = localStorage.getItem(KEY);
  if (currnetCountry !== null) {
    for (let i = 0; i < country.options.length; i++) {
      if (country.options[i].value === currnetCountry) {
        country.options[i].setAttribute("selected", "");
      }
    }
  } else {
    country.addEventListener("change", choooseCountry);
  }
}

function init() {
  loadCountry();
}

init();
