async function print() {
    let liste = document.querySelector("#liste");
    const data = await fetch("https://restcountries.eu/rest/v2/all").then(response => response.json()).then(response => response)
    let items = "";
    data.forEach((i) => {
       items +=`<li>${i.name}</li>`;
    })
    liste.innerHTML=items;
}
print()
//print fonksiyonunda önce ul listemizi tanımladık, data adı ile verimizi api den fetch ettik(await demezsek verilerin gelmesini beklemeden çalışmaya devam eder) ve json a çevirdik. boş bir items oluşturup forEach ile her ülke ismini (i.name) ul listemizin içine attık.