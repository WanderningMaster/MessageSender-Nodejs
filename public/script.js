const JSONform = (id) => {
    const form = document.getElementById(id);
    const elements = form.querySelectorAll("input, textarea");

    const obj = {}
    for(const element of elements){
        if(element.name)
            obj[element.name] = element.value;
    }
    return JSON.stringify(obj);
}

form.addEventListener('submit', async (e) => {
    const data = JSONform("form");
    await fetch('/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });
});
