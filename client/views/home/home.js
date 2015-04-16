Template.hello.helpers({

  greeting: function () {
    return "Welcome to met-bs3.";
  }


});

Template.hello.events({
  'click input': function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
  }
});
