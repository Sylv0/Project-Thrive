const infoToggle = (event, elmnt) => {
    event.preventDefault();
    elmnt.parentNode.parentNode.classList.toggle('expanded');
    if (document.querySelectorAll('.info-article.expanded').length > 0) {
        document.querySelectorAll('.info-article:not(.expanded)').forEach((elmnt) => {
            elmnt.classList.add('hide');
        });
    } else if (document.querySelectorAll('.info-article.expanded').length === 0) {
        document.querySelectorAll('.info-article.hide').forEach((elmnt) => {
            elmnt.classList.remove('hide');
        });
    }
    document.querySelector('.landing').classList.toggle('hide');
    window.scrollTo(0, elmnt.parentNode.parentNode.offsetTop);
};

const changeArticle = (event, elemnt, index) => {
    event.preventDefault();
    document.querySelector('.info-article.expanded').classList.add("hide");
    document.querySelector('.info-article.expanded').classList.remove("expanded");
    document.querySelectorAll(".info-article").item(index).classList.add('expanded');
    document.querySelectorAll(".info-article").item(index).classList.remove('hide');
    window.scrollTo(0,0);
};

window.onload = () => {
    if (document.documentElement.clientWidth < 736) {
        const pages = document.querySelector('#info-section').children;
        const page_list = document.querySelector('#page-list');

        let scrolling = false;

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

        for (let i = 0; i < pages.length; i++) {
            if ((window.pageYOffset + (window.innerHeight / 2)) >= (pages[i].offsetTop + (pages[i].offsetHeight / 2))) {
                page_list.children[i].classList.add('active');
                break;
            }
        }

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