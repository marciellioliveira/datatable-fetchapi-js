async function getData() {

    try {
        const records = await fetch("https://dummyjson.com/users");
    const data = await records.json();
    
    let tab = "";
    data.users.forEach(function(user) {
        tab += `<tr>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.age}</td>
            <td>${user.email}</td>
            <td>${user.gender}</td>
        </tr>`
    })

    document.getElementById("tbody").innserHTML = tab;

    $("#myDataTableJS").DataTable({
        "data":data.users,
        "columns":[
            {"data": "firstName"},
            {"data": "lastName"},
            {"data": "age"},
            {"data": "email"},
            {"data": "gender"}

        ]
    })
    } catch(e) {
        console.log("Erro: ", e)
    }

}