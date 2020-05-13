
// SELECTORS
const darkToggle = document.querySelector('#dark-toggle'); 
const article = document.querySelector('#home');
const articles = document.querySelectorAll('article'); 
const navLinks = document.querySelectorAll('nav a');


// DARK MODE TOGGLE

darkToggle.addEventListener('click',() => {

    if (article.style.color == "white") {
      articles.forEach(val => {
        val.style.color = 'black';
        val.style.backgroundColor = '#dae1e7';
      })
      document.querySelector('body').style.backgroundColor = "#ffffff";
      document.querySelectorAll('article a').forEach(val => {
          val.style.color = '#142850';
      })

        
    } else {
        articles.forEach((val) => {
            val.style.color = 'white';
            val.style.backgroundColor = '#2E2E2E';
        })
        document.querySelector('body').style.backgroundColor = "black";
        document.querySelectorAll('article a').forEach(val => {
            val.style.color = 'white';
        })
    }

});

// PAGE SELECTOR

// Compares new page value with previous and applies correct left/right animation to new page

let currentIndex = 0;

function slider (newIndex, val) {

    if (newIndex > currentIndex) {
        articles.item(currentIndex).classList.remove('slidetoright', 'slidefromright', 'slidefromleft');
        articles.item(currentIndex).classList.add('slidetoleft');
        articles.item(newIndex).classList.remove('slidefromleft', 'slidetoright', 'slidetoleft', 'hide');
        articles.item(newIndex).classList.add('slidefromright'); 
    } 

    else if (newIndex < currentIndex) {
        articles.item(currentIndex).classList.remove('slidetoleft', 'slidefromleft', 'slidefromright');
        articles.item(currentIndex).classList.add('slidetoright');
        articles.item(newIndex).classList.remove('slidefromright','slidetoright', 'slidetoleft','hide');
        articles.item(newIndex).classList.add('slidefromleft');
    }

    console.log(newIndex, currentIndex)

}

// Change class of nav link to indiciate current page

document.querySelector('#home-link').addEventListener('click',() => {

    articles.forEach(val => {
        slider(0, val);
        if (val.id != 'home') {
            navLinks[1].className = '';
            navLinks[2].className = '';
        }
        else {
            navLinks[0].className = 'current-page';
        }
    })
    currentIndex = 0;
})

document.querySelector('#about-link').addEventListener('click',() => {

    articles.forEach(val => {
        slider(1, val);
        if (val.id != 'personal') {
            navLinks[0].className = '';
            navLinks[2].className = '';
        }
        else {
            navLinks[1].className = 'current-page';
        }    
    })
    currentIndex = 1;
})

document.querySelector('#projects-link').addEventListener('click',() => {
    articles.forEach(val => {
        slider(2, val);

        if (val.id != 'projects') {
            navLinks[1].className = '';
            navLinks[0].className = '';
        }
        else {
            navLinks[2].className = 'current-page';
        }        
    })
    currentIndex = 2;     
})