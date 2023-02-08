const input = document.getElementById("in_style").value;
const button = document.getElementById("btn_1");

button.addEventListener("click", function() {
    url = `http://127.0.0.1:5000/dataresources/${input}`;
    fetch(url, {
            method: 'GET'
        })
        .then((res) => res.json())
        .then((data) => {
            let out_style = `
    <div id="style_3">
    <strong>${data.name}</strong>
    <h3>${data.title}</h3>
    <h3>${data.contact}</h3>
    </div>`;
            document.getElementById("out_style").innerHTML = out_style;
        }).catch((err) => console.log(err));
});