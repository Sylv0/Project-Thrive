// Function to toggle articles when more info is pressed
const infoToggle = (event, elmnt) => {
    event.preventDefault();

    // Toggle expanded class on target
    elmnt.parentNode.parentNode.classList.toggle('expanded');

    // Hide other articles if one is expanded
    if (document.querySelectorAll('.info-article.expanded').length > 0) {
        document.querySelectorAll('.info-article:not(.expanded)').forEach((elmnt) => {
            elmnt.classList.add('hide');
        });
    }
    // Show other articles if not expanded
    else if (document.querySelectorAll('.info-article.expanded').length === 0) {
        document.querySelectorAll('.info-article.hide').forEach((elmnt) => {
            elmnt.classList.remove('hide');
        });
    }

    // Toggle landing and page-bar and scroll to top of target
    document.querySelector('.landing').classList.toggle('hide');
    document.querySelector(".page-bar").classList.toggle("hide");
    window.scrollTo(0, elmnt.parentNode.parentNode.offsetTop);
};

// Change expanded article and sroll to top when pressing prev/next buttons
const changeArticle = (event, elemnt, index) => {
    event.preventDefault();
    document.querySelector('.info-article.expanded').classList.add("hide");
    document.querySelector('.info-article.expanded').classList.remove("expanded");
    document.querySelectorAll(".info-article").item(index).classList.add('expanded');
    document.querySelectorAll(".info-article").item(index).classList.remove('hide');
    window.scrollTo(0,0);
};

// Wait for document to load and check if width is that of a tablet or smaller
window.onload = () => {
    if (document.documentElement.clientWidth < 1024) {

        // Save pages and page-list for later
        const pages = document.querySelector('#info-section').children;
        const page_list = document.querySelector('#page-list');

        // Loop through and add li for each article
        for (let i = 0; i < pages.length; i++) {
            let li = document.createElement('li');
            let index = document.createTextNode(i + 1);
            li.appendChild(index);
            page_list.appendChild(li);
            if (i !== (pages.length - 1)) {
                let span = document.createElement('span');
                page_list.appendChild(span);
            }
        }

        // Loop through and see what page you're on when opening page
        for (let i = 0; i < pages.length; i++) {
            if ((window.pageYOffset + (window.innerHeight / 2)) >= (pages[i].offsetTop + (pages[i].offsetHeight / 2))) {
                page_list.children[i].classList.add('active');
                break;
            }
        }
        // Set first page as default(Thanks Chrome)
        if(document.querySelectorAll('li.active').length === 0)
            page_list.children[0].classList.add('active');

        // Scrolllistener to change active page while scrolling
        window.addEventListener('scroll', (event) => {
            for (let i = 0; i < pages.length; i++) {
                if (window.pageYOffset >= pages[i].offsetTop / 2 &&
                    window.pageYOffset <= pages[i].offsetTop &&
                    !page_list.children[i].classList.contains('active')) {
                    document.querySelector('li.active').classList.remove('active');
                    page_list.querySelectorAll('li')[i].classList.add('active');
                    break;
                }
            }
        });
    }
}