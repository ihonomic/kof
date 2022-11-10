export const submitFormAPI = async (formData) => {

    console.log(formData, "API");

    try {
        const response = await fetch("http://127.0.0.1:8000/submit", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ ...formData })
        });
        let data = await response.json();

        if (response.status === 200) {
            return { status: "success", message: data.success }
        } else {
            return { status: "error", message: "Server Error" }
        }
    } catch (e) {
        console.log("Error", e);
        return { status: "error", message: "Server Error, Contact Host" }
    }
};


// const submitFormAPI = (formData) => {
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     var raw = JSON.stringify({ ...formData });
//     // var raw = JSON.stringify({
//     //     "firstName": "Ihon",
//     //     "lastName": "Oseghale",
//     //     "age": "45",
//     //     "email": "onosetaleoseghale@gmail.com",
//     //     "phoneNumber": "09022345566",
//     //     "state": "Edo state",
//     //     "lga": "Esan North Easy",
//     //     "category": "Barber",
//     //     "shopName": "laker"
//     // });

//     var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: raw,
//         redirect: 'follow'
//     };

//     fetch("http://127.0.0.1:8000/submit", requestOptions)
//         .then(response => response.text())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));
// }