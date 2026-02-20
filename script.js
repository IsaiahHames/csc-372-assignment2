//creates favorite section and adds to bottom of main section
const favSec = document.createElement('section');
const favTitle = document.createElement('h3');
const favTotal = document.createElement('h4');
const favList = document.createElement('ul');
favSec.id = 'fav-sec';
favTotal.id = 'total';
favList.id = 'fav-list';
favTitle.textContent = 'Your Favorite Dishes';
favTotal.textContent = 'Total: $0.00';
favSec.appendChild(favTitle);
favSec.appendChild(favTotal);
favSec.appendChild(favList);
const main = document.querySelector('main');
main.appendChild(favSec);

//creates favorite buttons and adds to each figure card
const favBTN = document.createElement('button');
favBTN.classList.add('fav-btn');
favBTN.textContent = 'Add to Favorites';
const figure = document.querySelectorAll('figure');
for (let index = 0; index < figure.length; index++) {
    const element = figure[index];
    element.prepend(favBTN.cloneNode(true));
}

//adds event listener to each favorite button
const favBTNArray = document.querySelectorAll('.fav-btn');
for (let index = 0; index < favBTNArray.length; index++) {
  const element = favBTNArray[index];
  element.addEventListener('click', favoriteDish);
}
function favoriteDish() {

    if(this.classList.contains('selected')) {
        this.classList.remove('selected');
        this.parentElement.style.border = 'none';

        const dishinfo = this.parentElement.querySelector('strong').textContent;
        const dishName = dishinfo.split(' | ')[0];
        const dishPrice = dishinfo.split(' $')[1];

        const favorites = document.getElementById('fav-list');
        const favItems = favorites.getElementsByTagName('li');
        for (let i = 0; i < favItems.length; i++) {
            if (favItems[i].textContent === dishName + ' - $' + dishPrice) {
                favorites.removeChild(favItems[i]);
                break;
            }
        }

        const total = document.getElementById('total').textContent;
        let currentTotal = total.split(' $')[1];
        currentTotal = parseFloat(currentTotal) - parseFloat(dishPrice);
        document.getElementById('total').textContent = 'Total: $' + currentTotal.toFixed(2);

    }else {
        this.classList.add('selected');
        this.parentElement.style.border = 'solid';

        const dishinfo = this.parentElement.querySelector('strong').textContent;
        const dishName = dishinfo.split(' | ')[0];
        const dishPrice = dishinfo.split(' $')[1];
    
        const favorites = document.getElementById('fav-list');
            const newFav = document.createElement('li');
            newFav.textContent = dishName + ' - $' + dishPrice;
            favorites.appendChild(newFav);
    
        const total = document.getElementById('total').textContent;
            let currentTotal = total.split(' $')[1];
            currentTotal = parseFloat(currentTotal) + parseFloat(dishPrice);
            document.getElementById('total').textContent = 'Total: $' + currentTotal.toFixed(2);
    }
}