
(function () {
    let searchText = document.querySelector("#search-text")
    let tbody = document.querySelector("tbody")

    history.replaceState(getState(), "", document.location)

    window.onpopstate = function() {
        if(history.state) {
            tbody.innerHTML = history.state.html
            searchText.value = history.state.search

        } 
    }

    document.querySelector("#search-btn").addEventListener("click", searchClicked)

    function searchClicked(e) {
        let toSearch = searchText.value;

        const xhr = new XMLHttpRequest();
        
        let uri = `/leagues/search-partial?search=${toSearch}`
        xhr.open("GET", uri)
        xhr.setRequestHeader("Accept", "application/json")
        
        xhr.onreadystatechange = processResponse;
        xhr.send();
        
        function processResponse() {
            
            if(xhr.readyState == 4) {
                if(xhr.status == 200) {
                    tbody.innerHTML = getHtml(xhr.responseText)
                    history.pushState(getState(), "", `${document.location.pathname}?search=${toSearch}`)       
                } else {
                    console.log(xhr.status);
                }
            }
        }
    }

    function getHtml(text) {
        let leaguesObj = JSON.parse(text)
        let html =  leaguesObj.map(getRow).join('\n')
        console.log(html)
        return html;

        function getRow(league) {
            return `
            <tr>
                <td>
                <a href="/leagues/${league.id}">${league.name}</a>
                 </td>
                <td>${league.acronym}</td>
            </tr>`
        }
    } 
    function getState(push) {
        let toSearch = searchText.value
        let state = {search: toSearch, html: tbody.innerHTML}
        return state;
    }
})();


