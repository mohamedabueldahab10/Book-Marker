var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteUrl");

var siteList;
if (localStorage.getItem("siteContainer") == null) 
{
    siteList = []
}
else {
    siteList = JSON.parse(localStorage.getItem("siteContainer"))
    displaySite()
}



function addSite() {
    var site = {
        name: siteNameInput.value,
        url: siteUrlInput.value
    }
    siteList.push(site);
    // console.log(siteList)
    localStorage.setItem("siteContainer", JSON.stringify(siteList));
    displaySite()
}

function displaySite() {
    var temp = "";
    for(var i = 0; i < siteList.length; i++){
        temp+=`<div id="siteBody" class="container bg-transparent bg-opacity-25 bg-gradient h-50 py-5 px-5 my-4 mx-auto text-center">
        <tr>
        <td>
            <h2 class="text-start me-5">${siteList[i].name}</h2>
        </td>
        
            <a class="btn btn-primary ms-5" href="${siteList[i].url}" target="_blank">Visit</a>
        </td>
        <td>
        <button class="btn btn-danger btndelete ms-3" onclick="deleteSite(${i})">Delete</button>
        </td>
    </tr>
    </div>`
    document.getElementById("siteBody").innerHTML = temp;
    }
}
function deleteSite(remove){
    // console.log(remove);
    siteList.splice(remove,1);
    localStorage.setItem("siteContainer", JSON.stringify(siteList));
    displaySite()
}