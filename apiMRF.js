var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/all');
request.send();
request.onload=function() {
    var data=JSON.parse(this.response);
    let result=[];
  
   for(let i=0;i<data.length;i++){
    result.push(data[i]);
   }

//    Get all the countries from the Asia continent /region using the Filter function
      
const asianCountries=result.filter(data=>data.region=="Asia")
console.log(asianCountries);

// Get all the countries with a population of less than 2 lakhs using Filter function

const countriesBelow2L=result.filter(data=>data.population<200000)
console.log(countriesBelow2L);  
//Print the following details name, capital, flag using forEach function

result.forEach(data=>{
    console.log(`name:${data.name}, Capital:${data.capital}, Flag:${data.flag}`)
})

// Print the total population of countries using reduce function

const totalPopulation=result.reduce((acc,data)=>acc+=data.population,0);
console.log(totalPopulation)

//Print the country which uses US Dollars as currency.

const dollarUsCountry=result.filter(data=>data.currencies!==undefined)
.filter(data=>{
    if(data.currencies[0].name=="United States dollar")
    return data.name;
})
console.log(dollarUsCountry);
}


//     var request=new XMLHttpRequest();
// request.open('GET','https://restcountries.com/v2/all');
// request.send();
// request.onload=function() {
//     var data=JSON.parse(this.response);
//     var countries=data.filter((data)=>population<200000)
  
//    console.log(countries);
//     }

//     var request=new XMLHttpRequest();
//     request.open('GET','https://restcountries.com/v2/all');
//     request.send();
//     request.onload=function() {
//         var data=JSON.parse(this.response);
//         var countries=data.map((data)=>{
//            return (data.name,data.capital,data.flag)
//         })
      
//        console.log(countries);
//         }

//         var request=new XMLHttpRequest();
// request.open('GET','https://restcountries.com/v2/all');
// request.send();
// request.onload=function() {
//     var data=JSON.parse(this.response);
//     var population=data.reduce((acc,init)=>{
//         return acc+init;
//     },0)
  
//    console.log(population);
//     }