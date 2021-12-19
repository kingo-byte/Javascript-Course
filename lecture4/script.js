let myLeads = [];

let inputbutton = document.querySelector("#input-btn");

const inputEl = document.querySelector("#input-el");

const ulEl = document.querySelector("#ul-el");

const deletebutton = document.querySelector("#delete-btn");

const saveTabButton = document.querySelector("#tab-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

inputbutton.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

deletebutton.addEventListener("dblclick", function () {
  myLeads = [];
  localStorage.clear();
  render(myLeads);
});

saveTabButton.addEventListener("click", function () {
  // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

  // });

  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    function (tabs) {
      myLeads.push(tabs[0].url);
      localStorage.setItem("myLeads", JSON.stringify(myLeads));
      render(myLeads);
    }
  );
});

function render(leads) {
  let listItems = "";

  leads.forEach((element) => {
    listItems += `
    <li>
        <a target='_blank'    href='${element}'>
            ${element} 
        </a>
    </li> `;

    console.log(listItems);
  });

  ulEl.innerHTML = listItems;

  inputEl.value = "";
}
