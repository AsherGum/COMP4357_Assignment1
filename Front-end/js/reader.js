
const endPointRoot = "https://ashergum.com/Comp4537/assignment/1"
const xhttp = new XMLHttpRequest();

function getAll() {
    (async() => {
        let result = await fetch(endPointRoot).then((res) => {
            if (res.ok) {
                return res.json();
            }
        }).then((res) => {
            document.getElementById("container").innerHTML = "";
            for(let i = 0; i < res.length; i++){
                generateQuote(res[i]);
            }
        })
    })();
};

function getOne(){
    (async() => {
        let result = await fetch(endPointRoot).then((res) => {
            if (res.ok) {
                return res.json();
            }
        }).then((res) => {
            document.getElementById("container").innerHTML = "";
            generateQuote(res[res.length-1]);
            
        })
    })();
}

function generateQuote(quoteObj) {
    let cont = document.getElementById("container");

    let quoteBox = document.createElement("DIV");
    quoteBox.className = "quoteBox";

    let h1 = document.createElement("H2");
    h1.innerHTML = "Quote:";
    let text = document.createElement("P").innerHTML = quoteObj.Quote;
    let h1_2 = document.createElement("H2");
    h1_2.innerHTML = "Author:";
    let auth = document.createElement("P").innerHTML = quoteObj.Author;

    quoteBox.append(h1)
    quoteBox.append(text)
    quoteBox.append(h1_2)
    quoteBox.append(auth)
        
    cont.append(quoteBox);

}