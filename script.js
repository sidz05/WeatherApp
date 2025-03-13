
let input = document.getElementById("input");
let search_btn = document.getElementById("search-btn");

const locationElement = document.getElementById("location");
const temp = document.getElementById("temp");

async function getData(cty) {
    let data = await fetch(`http://api.weatherapi.com/v1/current.json?key=a0d712ef4a574216a2950111240707&q=${cty}&aqi=no`);
    return await data.json();
}

search_btn.addEventListener("click", async () => {
    const cityname = input.value;
    const ans = await getData(cityname);
    locationElement.innerText = ans.location.name;
    temp.innerText = ans.current.temp_c;

});
