
function search() {
    var input,filter,ul,li,a,i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase()
    ul = document.getElementById("mymenu");
    li = ul.getElementsByTagName("li");

    for (let i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1){
             li[i].style.display = "";
        } else {
            li[i].style.display = "none"
        }
        
    }
}