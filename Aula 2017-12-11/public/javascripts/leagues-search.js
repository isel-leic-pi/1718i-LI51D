
(function () {
    document.getElementById("search-btn").addEventListener("click", searchClicked)

    let searchText = document.getElementById("search-text")

    




    function searchClicked(e) {
        let toSearch = searchText.value;

        const xhr = new XMLHttpRequest();
        xhr.open("GET", `/leagues/search-partial?search=${toSearch}`)
        xhr.onreadystatechange = processResponse;
        xhr.send();
        

        function processResponse() {
            if(xhr.readyState == 4 && xhr.status == 200) {
                alert(xhr.responseText)
            }
        }
    }
})();


