/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
import FavoriteRestaurantIdb from '../../data/favorite-restaurants-idb';

const Favorite = {
  async render() {
    return `
             <h2  id="list"></h2>
             <div id="restoList" class="cards"></div>
        `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restoList');
    const restaurantTitle = document.querySelector('#list');
    const restaurantCards = document.createElement('restaurant-item');
    const skeletonCard = document.createElement('skeleton-card');
    const restaurantHeader = document.querySelector('hero-section');

    if (restaurantHeader === null) {
      document.querySelector('.hero').appendChild(document.createElement('hero-section'));
    }
    for (let i = 0; i < 20; i++) {
      restaurantsContainer.appendChild(skeletonCard.cloneNode(true));
    }
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    restaurantsContainer.innerHTML = '';
    restaurantTitle.textContent = restaurants.length === 0
      ? "There's no favorite Restaurant"
      : 'Favorite Restaurants List';
    restaurants.forEach((restaurant) => {
      restaurantCards.restaurant = restaurant;
      restaurantsContainer.appendChild(restaurantCards.cloneNode(true));
    });
  },
};

export default Favorite;
