ApiFlags.schema = new SimpleSchema({
  reason: {
    type: String,
    allowedValues: [
      'Inappropriate',
      'Defunct'
    ]
  },
  comments: {
    type: String,
    autoform: {
      rows: 5
    }
  },
  createdBy: {
    type: String,
    autoValue: function () {

      // Check if the field is not already set
      if (!this.isSet) {

        // Autofill current user id
        return Meteor.userId();
      }
    }
  },
  apiBackendId: {
    type: String,
    autoValue: function () {

      // Check if the field is not already set
      if (!this.isSet) {

        // Autofill current api backend id
        return Router.current().params._id;
      }
    }
  }
});

ApiFlags.attachSchema(ApiFlags.schema);
