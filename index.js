let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

localStorage.clear()
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
   
    console.log(localStorage.getItem("myLeads"))
})


function renderLeads() {
    let listItem = " "
    for (let i = 0; i < myLeads.length; i++) {

        // listItem += "<li><a target='_blank' href=' " + myLeads[i] + "'>" + myLeads[i] + "</a></li>"

        // template strings - uses ``
        listItem +=`
            <li>
                <a target='_blank' href='${ myLeads[i]}'>
                    ${myLeads [i]}
                </a>
            </li>
        `
        //alternative
        // create element
        // set text content
        // append to ul

        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItem
}
