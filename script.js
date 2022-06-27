 document.addEventListener('DOMContentLoaded', () => {
    
    const selectDrop = document.getElementById("countries");


fetch('https://restcountries.com/v3.1/all').then(res =>{
    return res.json();
}).then(data => {
    let output ="";
    data.forEach(country => {
         output += `<option value="${country.name}">${country.name}</option>`;
    })
    selectDrop.innerHTML = output;
}).catch(err =>{
    console.log(err);
})

});
// const countriesList = document.getElementById("countries");
// let countries;


// fetch('https://restcountries.com/v3.1/all')
// .then(res => res.json())
// .then(data => initialize(data))
// .catch(err => console.log("Error:", err));

// function initialize(countriesData){
//     countries=countriesData;
//     let options="";
//     // for(let i=0; i<countries.length; i++){
//     //     options += `<option value="${countries[i].alpha3Code}">${countries[i].name}</option>`;
//     // }
//   countries.forEach(country => options+=`<option value="${country.alpha3Code}">${country.name}</option>`)
//     countriesList .innerHTML = options;
