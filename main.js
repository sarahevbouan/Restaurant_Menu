let main = document.querySelector('main');
let menuWrap = document.createElement('div');
    menuWrap.classList.add('menu-wrap');
    main.appendChild(menuWrap);
let menuArray = [];

let getMenu = async () => {
    let response = await fetch('main.json');
    let data = await response.json();
    return data;
};

let returnedMenu = () => {getMenu().then(data => {
    data.forEach(menu => {
        let menuContainer = document.createElement('div');
       menuContainer.classList.add('menu-container');
       menuContainer.classList.add(menu.schedule);
       let imageContainer = document.createElement('div');
       let image = document.createElement('img');
       image.src = menu.image;
       imageContainer.appendChild(image);
       menuContainer.appendChild(imageContainer);
       let descriptionContainer = document.createElement('div');
       let descriptionHeader = document.createElement('h4');
       descriptionHeader.textContent = menu.name;
       let price = document.createElement('span');
       price.textContent = menu.price;
       descriptionHeader.appendChild(price);
       let description = document.createElement('p');
       description.textContent = menu.content;
       descriptionContainer.appendChild(descriptionHeader);
       descriptionContainer.appendChild(description);
       menuContainer.appendChild(descriptionContainer);
       menuWrap.appendChild(menuContainer);
       menuArray.push(menuContainer);
    });
});
};

window.addEventListener('load', returnedMenu);

    let filteringFunction = (schedule) => {
        menuArray.forEach(menu => {
            if(menu.classList.contains(schedule)){
                menu.style.display = 'flex';
            }

            else{
                menu.style.display = 'none';
            }
        });
    };
    
    main.addEventListener('click', (event) => {
        if(event.target.classList.contains('breakfast')){
            filteringFunction('breakfast');
        }

        else if(event.target.classList.contains('lunch')){
            filteringFunction('lunch');
        }

        else if(event.target.classList.contains('shakes')){
            filteringFunction('shakes');
        }

        else if(event.target.classList.contains('dinner')){
            filteringFunction('dinner');
        }

        else if(event.target.classList.contains('all')){
            filteringFunction('menu-container');
        }
    });


    let html = document.querySelector('html');
    console.log(html.offsetWidth);

    let ul = document.querySelector('ul');
    console.log(ul.classList);