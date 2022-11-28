import HomePage from '../views/home_page.js';
import Header from '../views/header.js';
import AboutMe from '../views/about_me.js';
import UpdateLog from '../views/update_log.js';

let pages = [Header, HomePage, AboutMe, UpdateLog];

pages.forEach(page => {
    document.body.innerHTML += page.innerHTML;
});

changePage("#home-page");
        
