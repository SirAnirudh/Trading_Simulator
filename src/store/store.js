import Vue from 'vue';
import Veux from "vuex";

import  stocks from './modules/stock';
import portfolio from './modules/portfolio';

Vue.use(Veux);

export default new Veux.Store({
    modules: {
      stocks,
      portfolio
    }
});
