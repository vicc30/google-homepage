/**
 * Odin project Excercise.
 * Foundations
 * PROJECT: GOOGLE HOMEPAGE
 * https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/html-css
 * 
 * This is my solution for this excercise.
 * 
 * Victor C.
 */

// Elements shortcut
const btn = document.getElementById('search-btn');
const icon = document.getElementById('icon-search')
const input = document.getElementsByTagName('input')[0];

//Event listener click search
btn.addEventListener('click', search);
icon.addEventListener('click', search);

//Event listener press keyboar enter
input.addEventListener('keyup', (e) => {
    if (e.code === 'Enter') search();
});

//Function that opens search in existing tab
function search() {
    const qry = input.value
    if (qry != "") {
        console.log(qry);
        window.location.replace(`https://www.google.com/search?q=${qry}`);
    } 
}
