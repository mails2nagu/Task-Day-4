var request = new XMLHttpRequest();
request.open("Get", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();

request.onload=function(){
    var data=JSON.parse(request.response);
                              }

for(var i=0;i<data.length;i++){
console.log(`Country Name: ${data[i].name}`);
console.log(`Region: ${data[i].region}`);
console.log(`Sub Region: ${data[i].subregion}`); 
console.log(`Population: ${data[i].population }`);
}
                            }