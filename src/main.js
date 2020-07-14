import Vue from 'vue';
import * as Sentry from '@sentry/browser';
import { Vue as VueIntegration } from '@sentry/integrations';
import App from './App.vue';

Vue.config.productionTip = false;

Sentry.init({
  dsn: 'YOUR_DSN_HERE',
  integrations: [new VueIntegration({ Vue, attachProps: true })],
});

new Vue({
  render: function(h) {
    return h(App);
  },
}).$mount('#app');
