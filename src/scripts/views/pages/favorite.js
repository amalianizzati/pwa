/* eslint-disable indent */
import RestaurantSource from '../../data/source';
import '../../component/resto-fav';
import { createRestoItemTemplate } from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';

const Favorite = {
  async render() {
    return `
    <resto-fav></resto-fav>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    // const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantsContainer = document.querySelector('#resto-list');
    restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
  },
};

export default Favorite;
