(function () {
    const url_string = `${window.location.href}`;
    const url = new URL(url_string);
    const fname = url.searchParams.get("name");
    const lname = url.searchParams.get("lastName");
    document.querySelector("div").textContent=fname+" "+lname;    
})()