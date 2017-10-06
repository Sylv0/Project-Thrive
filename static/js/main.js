// Variables for all things needed(what can I say?)
var navbar = document.getElementById("navbar");
var toggle_nav = document.getElementById('toggle-nav');
var first_section = document.getElementById('first-section');

// Toggles "up"-class on navbar to... bring it up.
function toggle()
{
      navbar.classList.toggle("up");
      event.preventDefault();
}

// Listen for scroll-event and change classes accordingly
window.addEventListener('scroll', function()
{
      if(window.pageYOffset > 0){
            if(!navbar.classList.contains('fix'))
            {
                  navbar.classList.add("fix");
                  first_section.classList.add('top');
            }
      }else if (window.pageYOffset == 0){
            navbar.classList.remove("fix");
            first_section.classList.remove('top');
      }
}, true)
