var path = window.location.pathname;
var page = path.split("/").pop();

// check retrieval of name is correct
// console.log( page );

// grab button from html
var btn = document.getElementById("contactBtn");
// grab div to add info into
var info = document.getElementById("contactInfo");
btn.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    if (page == "homepage.html"){
        var toGet = 'data.json';
        console.log("homepage.html");   
    }
    else {
        var toGet = '/data.json';
    }
    ourRequest.open('GET', toGet);

    ourRequest.onload = function(){
    // shows in "Inspect" console    
    // reads as string not JSON
    // var ourData = ourRequest.responseText;
    
    // AJAX 
    var ourData = JSON.parse(ourRequest.responseText);
    // testing purposes
    // console.log(ourData[0]);
    renderHTML(ourData);
    };
    ourRequest.send();
    // change css with javascript
    document.getElementById("contactBtn").style.display = "none"; 
});

function renderHTML(data) {
    var htmlString = "";

    // loop through data
    // email listed items are under class "mailing"
    for (i=0; i<data.length; i++){
        htmlString += "<li><a class = 'mailing' href='mailto:" + data[i].email + "'>" + data[i].role + "</a></li>";
    }

    info.insertAdjacentHTML('beforeend', htmlString);
}