
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import VueChatScroll from 'vue-chat-scroll';
import VueTimeago from 'vue-timeago';

Vue.use(VueChatScroll);
Vue.component('chat-room' , require('./components/laravel-video-chat/ChatRoom.vue'));
Vue.component('group-chat-room', require('./components/laravel-video-chat/GroupChatRoom.vue'));
Vue.component('video-section' , require('./components/laravel-video-chat/VideoSection.vue'));
Vue.component('file-preview' , require('./components/laravel-video-chat/FilePreview.vue'));

Vue.component('example-component', require('./components/ExampleComponent.vue'));

Vue.use(VueTimeago, {
    name: 'timeago', // component name, `timeago` by default
    locale: 'en-US',
    locales: {
        // you will need json-loader in webpack 1
        'en-US': require('date-fns/locale/en')
    }
})

const app = new Vue({
    el: '#app'
});
