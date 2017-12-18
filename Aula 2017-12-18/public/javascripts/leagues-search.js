
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
        
        xhr.onreadystatechange = processResponse;
        xhr.send();
        
        function processResponse() {
            if(xhr.readyState == 4 && xhr.status == 200) {
                tbody.innerHTML = xhr.responseText
                history.pushState(getState(), "", `${document.location.pathname}?search=${toSearch}`)       
            }
        }
    }

    function getState(push) {
        let toSearch = searchText.value
        let state = {search: toSearch, html: tbody.innerHTML}
        return state;
    }
})();


