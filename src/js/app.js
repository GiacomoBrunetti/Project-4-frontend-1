angular
  .module('meetApp', ['ngResource', 'ui.router', 'satellizer', 'checklist-model', 'ui.bootstrap', 'ngAnimate', 'ngMessages'])
  .constant('API_URL', 'http://localhost:3000/api')
  .config(function() {
    Stripe.setPublishableKey('pk_test_49Ia4OML02cfbOn0FJuTAWuh');
  });
