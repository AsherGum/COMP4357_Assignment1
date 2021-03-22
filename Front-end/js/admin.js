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

function generateQuote(quoteObj){
    let section = document.createElement("SECTION");
    section.className = "content";
        let form = document.createElement("FORM");
            let div1 = document.createElement("DIV");
            div1.className = "mb-3";
                let label1 = document.createElement("LABEL");
                label1.className = "form-label";
                label1.htmlFor = "quote";
                label1.innerHTML = "Quote:";
                let input1 = document.createElement("INPUT");
                input1.className = "quote";
                input1.id = "quote";
                input1.type = "text";
            let div2 = document.createElement("DIV");
            div2.className = "mb-3";
                let label2 = document.createElement("LABEL");
                label2.className = "form-label";
                label2.htmlFor = "author";
                label2.innerHTML = "Author";
                let input2 = document.createElement("INPUT");
                input2.className = "author";
                input2.type = "text";
                input2.id = "author";
        let div3 = document.createElement("DIV");
        div3.className = "tools";
            let deleteBtn = document.createElement("BUTTON");
            deleteBtn.type = "button";
            deleteBtn.innerHTML = "Delete";
            deleteBtn.className = "btn btn-danger";
            let updateBtn = document.createElement("BUTTON");
            if (quoteObj == null){
                updateBtn.innerHTML = "Save to Database";
            } else {
                updateBtn.innerHTML = "Update in DB";
            }
            updateBtn.type = "button";
            updateBtn.className = "btn btn-success";

    

    section.append(form);
    form.append(div1, div2, div3);
    div1.append(label1, input1);

    input1.required = true;
    input2.required = true;

    if (quoteObj != null){
        input1.value = quoteObj.Quote;
        input2.value = quoteObj.Author;
    }

    div2.append(label2, input2);
    div3.append(deleteBtn,updateBtn);
    document.getElementById("container").append(section);

    updateBtn.addEventListener("click", function (){
        quoteText = input1.value;
        authorText = input2.value;
        let confirm = document.createElement("P");
        confirm.id = "confirm";
        if (quoteObj == null){
            postRequest(quoteText, authorText);
            confirm.innerHTML = "Saved to Database";
        } else {
            putRequest(quoteText, authorText, quoteObj.QuoteID);
            confirm.innerHTML = "Database Updated";
        }


        section.append(confirm);
        const delay = ms => new Promise(res => setTimeout(res, ms));
        const yourFunction = async () => {
            await delay(2000);
            confirm.style.display = "none";
            getAll();
        }
        yourFunction();
    })

    deleteBtn.addEventListener("click", function (){
        if (quoteObj == null){
            section.parentNode.removeChild(section);
        } else {
            deleteRequest(quoteObj.QuoteID);
            section.parentNode.removeChild(section);
        }
    })
}

function deleteRequest(id) {
    (async () => {
        let result = await fetch(endPointRoot, {
            method: "delete",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: id,
            }),
          }
        ).then((res) => {
          if (res.ok) {
            return res.json();
          }
        });
      })();
}

function postRequest(quote, author){
    (async() => {
        let result = fetch(endPointRoot, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                quote: quote,
                author: author
            })
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
    })();
}

function putRequest(quote, author, id){
    (async() => {
        let result = fetch(endPointRoot, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id,
                quote: quote,
                author: author
            })
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
    })();
}

getAll();