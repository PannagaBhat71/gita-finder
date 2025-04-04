let text = document.getElementById("text");
let text2 = document.getElementById("text2");

const getfacts = async() =>{
    const search = document.getElementById("search").value;
    const shloka = document.getElementById("shloka").value;
    let response = await fetch(`https://vedicscriptures.github.io/slok/${search}/${shloka}`);
    let data = await response.json();
    console.log(data);
    text.innerText = data.slok;
    text2.innerText = data.siva.et;
}