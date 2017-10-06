var navbar = document.getElementById("navbar");
var toggle_nav = document.getElementById('toggle-nav');
var first_section = document.getElementById('first-section');

function toggle()
{
      navbar.classList.toggle("up");
      event.preventDefault();
}

function scrolled(e)
{

}

window.addEventListener('scroll', function()
{
      if(window.pageYOffset > 0 && !navbar.classList.contains('fix')){
            navbar.classList.add("fix");
            first_section.classList.add('top');
      }else if (window.pageYOffset == 0){
            navbar.classList.remove("fix");
            first_section.classList.remove('top');
      }
}, true)
