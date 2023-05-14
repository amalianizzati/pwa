/* eslint-disable indent */
/* eslint-disable comma-dangle */
import UrlParser from '../../routes/url-parser';
import {
  createRestoDetailTemplate,
  createLikeButtonTemplate,
} from '../templates/template-creator';
import RestaurantSource from '../../data/source';
import LikeButtonInitiator from '../../utils/like-button-initiator';

import '../../component/resto-detail';

const Detail = {
  async render() {
    return `
    <resto-detail></resto-detail>
    <div id="likeButtonContainer"></div>

    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantById = await RestaurantSource.detailResto(url.id);
    const detail = restaurantById.restaurant;
    const restoContainer = document.querySelector('#resto-detail');
    restoContainer.innerHTML = createRestoDetailTemplate(detail);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      // eslint-disable-next-line no-undef
      restaurant,
      // id: detail.id,
      // city: detail.city,
      // name: detail.name,
      // description: detail.description,
      // rating: detail.rating,
      // pictureId: detail.pictureId,
    });
  },
};
export default Detail;
