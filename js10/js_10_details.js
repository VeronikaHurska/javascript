let check = (value) => {
    if (value === null) {
        return false;
    }
    return (typeof value === 'object')
}
let print = (obj) => {
    for (const value in obj) {
        if (check(obj[value])) {
            print(obj[value])
        } else {
            let div = document.createElement('div');
            div.innerText = `${value} -- ${obj[value]}`
            document.body.append(div);

        }
    }
}

let url = new URL(location.href);
let id = url.searchParams.get('id')
fetch(`https://jsonplaceholder.typicode.com/users/` + id)
    .then(response => response.json())
    .then(user => {

        print(user)

    })