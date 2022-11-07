document.querySelector("form>button").addEventListener("click",(event)=>{
    const inputSearch=document.getElementById("search").value;
    event.preventDefault();
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://api.giphy.com/v1/gifs/search?rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=1&q="+inputSearch)
    xhr.send();
    xhr.responseType="json";
    xhr.onload=()=>{
        console.log(xhr.response);
        const div=document.createElement("div");
        const image=document.createElement("img");
        image.src=xhr.response.data[0].images.original.url;
        const btn=document.createElement("button");
        btn.textContent="delete"
        div.append(image,btn)
        document.body.appendChild(div);
        btn.addEventListener("click",(event)=>{
            event.preventDefault();
            div.remove()});
    }
})
document.getElementById("deleteAll").addEventListener("click",(event)=>{
    event.preventDefault();
    document.querySelectorAll("div").forEach((element)=>{element.remove()});

})