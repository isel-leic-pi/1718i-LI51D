let th = document.getElementById("name")
let img = document.getElementById("img-sort-name")
let tbody = document.getElementById("league-rows")
let ascending = false;

th.addEventListener("click", function(e) {
    ascending = !ascending;
    let imgName = ascending ? "up" : "down"
    img.src = `images/sort-${imgName}.jpg`
    
    let rows = tbody.getElementsByTagName("tr");
    let rowsArr = Array.from(rows)
    

    //tbody.innerHTML = "";
    
    let rowsSorted = rowsArr.sort(compareLeagueNames)
    console.log("rowsSorted")
    console.log(rowsArr)

    rowsSorted.forEach(tr => tbody.appendChild(tr))

    function compareLeagueNames(r1, r2) {
        let textR1 = r1.getElementsByTagName("td")[0].innerText
        let textR2 = r2.getElementsByTagName("td")[0].innerText
        let ret =  textR1.localeCompare(textR2) * (ascending ? 1 : -1)

        console.log(`${textR1} - ${textR2}=${ret}`)

        return ret;
    }
})
