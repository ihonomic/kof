const getLGA = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f63eb11c0cmshcb75fbba7169793p1b24a7jsn4726e6508cc2',
            'X-RapidAPI-Host': 'nigeria-states-and-lga.p.rapidapi.com'
        }
    };

    fetch('https://nigeria-states-and-lga.p.rapidapi.com/lgalists', options)
        .then(response => response.json())
        .then(response => {
            console.log("===>", response);
            // setLgaData(response)

            // console.log(lgaData, "LGA DATA");
        })
        .catch(err => console.error(err));
}


export const LGAARRAY = [
    "Aba North",
    "Aba South",
    "Arochukwu",
    "Bende",
    "Ikwuano",
    "Isiala Ngwa North",
    "Isiala Ngwa South",
    "Isuikwuato",
    "Obi Ngwa",
]