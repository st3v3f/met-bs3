Router.map(function() {

  this.route('home', {
    path: '/',
    template: 'home',
    layoutTemplate: 'layout'
  });

  this.route('about', {
    layoutTemplate: 'layout'
  });


});
