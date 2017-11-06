import Vue from 'vue';

[
  'search-bar'
].forEach(el => Vue.component(el, require(`./${el}.vue`).default));
