function getCountries(){
    const data=new XMLHttpRequest();
    data.open("GET","https://restcountries.com/v3.1/all");
    data.send();
    data.responseType="json";
    data.onload=() => {
        const countriesinfo=data.response;
        console.log(countriesinfo);

 // display all the country flags in console
        countriesinfo.forEach(country => {
            console.log(`${country.name.common} - ${country.flag}`)
        });

//print all countries name, region, sub region and population
        countriesinfo.forEach(country => {
            console.log(`
            Name:${country.name.common}
            Region:${country.region}
            Subregion:${country.subregion}
            Population:${country.population}`)
        }) 
    }     
}
getCountries();

// Task Restcountry API is not working so I used another Restcountry API