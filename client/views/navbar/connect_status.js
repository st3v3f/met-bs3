//Template.connectStatus.onRendered({
///FIXME!! - setup nice bs3 tooltips to show txt of connection status.
//  $('[data-toggle="tooltip"]').tooltip();
//)};

Template.connectStatus.helpers({

  connectedStatus: function () {
    return Meteor.status().connected ? "connected" : "disconnected";
  }


});

Template.connectStatus.events({
  'click .connect-status': function (event, templateInst) {

    console.log(JSON.stringify(this,null,2));
      alert(JSON.stringify(Meteor.status()));
  }
});
