function save(){
    fetch('http://localhost:8000/carros'), {
        method: "POST",
        header:{
            "Content-Type": "application/json"
        },
        dody: JSON.stringify({
            marca: marca.value,
        })
    }
}

function add(){
    return `
        <form onsumbmit="save()">
            <label form="marca">Marca</table>
            <input id="marca" class="form-control mb-3">
        </form>`
}