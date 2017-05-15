angular
  .module('meetApp', ['ngResource', 'ui.router', 'satellizer', 'checklist-model', 'ui.bootstrap', 'ngAnimate', 'ngMessages'])
  .constant('API_URL', 'https://blooming-harbor-21931.herokuapp.com')
  .config(function() {
    Stripe.setPublishableKey('pk_test_49Ia4OML02cfbOn0FJuTAWuh');
  });
