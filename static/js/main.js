function infoToggle(event,elmnt)
{
    event.preventDefault();
    elmnt.parentNode.parentNode.classList.toggle('expanded');
}

const pages = document.getElementById("info-section").children;
const page_list = document.getElementById("page-list");

for(let i = 0; i < pages.length; i++){
    let li = document.createElement('li');
    let index = document.createTextNode(i+1);
    li.appendChild(index);
    page_list.appendChild(li);
    if(i !== (pages.length-1)){
        let span = document.createElement('span');
        page_list.appendChild(span);
    }
}