
// SELECTORS
const darkToggle = document.querySelector('#dark-toggle'); 
let article = document.querySelector('#home');
const articles = document.querySelectorAll('article'); 
const navLinks = document.querySelectorAll('nav a');


// new dark toggle 

darkToggle.addEventListener('click',() => {

    if (article.style.color == "black") {
      articles.forEach(val => {
            val.classList.remove("tolight");
            val.classList.add("todark");
          })
    } 
    
    else {
        articles.forEach(val => {
            val.classList.remove("todark");
            val.classList.add("tolight");
        })
    }
});

// DARK MODE TOGGLE

// darkToggle.addEventListener('click',() => {

//     if (article.style.color == "white") {
//       articles.forEach(val => {
//         val.style.color = 'black';
//         val.style.backgroundColor = '#dae1e7';
//       })
//       document.querySelector('body').style.backgroundColor = "#ffffff";
//       document.querySelectorAll('article a').forEach(val => {
//           val.style.color = '#142850';
//       })

        
//     } else {
//         articles.forEach((val) => {
//             val.style.color = 'white';
//             val.style.backgroundColor = '#2E2E2E';
//         })
//         document.querySelector('body').style.backgroundColor = "black";
//         document.querySelectorAll('article a').forEach(val => {
//             val.style.color = 'white';
//         })
//     }

// });


// PAGE SELECTOR

// Compares new page value with previous and applies class depending on value of each

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

// Change class of nav link to indiciate current page & add eventListener to nav bar and home links

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

document.querySelectorAll('.about-link').forEach(item => {
    item.addEventListener('click',() => {
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
})

document.querySelectorAll('.projects-link').forEach(item => {
    item.addEventListener('click',() => {
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
})


// Change project displayed when project selector is clicked

const projectSelector = document.querySelectorAll('.project-selector li');
const projectDetail = document.querySelectorAll('.project-detail');

for (let i = 0; i < projectSelector.length; i++) {
    projectSelector[i].addEventListener('click', () => {
        if (projectSelector[i]) {
            for (let j = 0; j < projectDetail.length; j++) {
                if (i == j) {
                    projectDetail[j].style.display = 'flex';
                    projectDetail[j].classList.add('slide-down');
                } else {
                    projectDetail[j].style.display = 'none';
                }
            }
    }})
}