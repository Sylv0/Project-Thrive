function infoToggle(event,elmnt)
{
    event.preventDefault();
    elmnt.parentNode.parentNode.classList.toggle('expanded');
}