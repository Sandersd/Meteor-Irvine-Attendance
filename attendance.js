if (Meteor.isClient) {

  Template.people.helpers({
    twitterUsers: function () {
      return Meteor.users.find();
    }
  });


}
