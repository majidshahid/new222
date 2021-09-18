import {useState} from "react";
function Foo() {
var [weather,setWeater]=useState("");
  fetch('https://api.openweathermap.org/data/2.5/weather?q=islamabad&appid=fe9d7fb9909efd59085a7fb2570342bc&units=metric')
    .then(response => response.json())
    .then(j => {
     setWeater(j)
  
    })
    .catch((err) => {
     
    })
  return (
<h1>{weather.name}</h1>
  )
}
     
export default Foo;