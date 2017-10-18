window.addEventListener('DOMContentLoaded', function(){

  // Variables for all things needed(what can I say?)
  var navbar = document.getElementById("navbar");
  var toggle_nav = document.getElementById('toggle-nav');
  var first_section = document.getElementById('first-section');
  var link_list = document.getElementById('link-list');
  var margin_div = document.getElementById('margin');

  // Toggles "up"-class on navbar to... bring it up.
  function toggle()
  {
    navbar.classList.toggle("up");
    event.preventDefault();
  }

  Array.prototype.slice.call(document.getElementsByTagName('section')).forEach(function(value, index){
    value.innerHTML += value.getBoundingClientRect().top;
  });

  // Listen for scroll-event and change classes accordingly
  window.addEventListener('scroll', function(e)
  {
    toggle_nav.innerHTML = window.pageYOffset;
    if(window.pageYOffset > 0){
      if(!navbar.classList.contains('fix'))
      {
        navbar.classList.add("fix");
        first_section.classList.add('top');
        margin_div.classList.add('show');
      }
    }else if (window.pageYOffset == 0){
      navbar.classList.remove("fix");
      first_section.classList.remove('top');
      margin_div.classList.remove('show');
    }
  }, true)

  navbar.addEventListener('click', function(e)
  {
    //console.log(window.innerWidth);
    if(navbar != e.target || window.innerWidth > 768) return;
    link_list.classList.toggle('selected');
  })
})
