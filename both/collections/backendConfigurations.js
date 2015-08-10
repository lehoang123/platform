ApiBackendConfigurations = new FS.Collection("apiBackendConfigurations", {
  // TODO: Determine how to upload files within the project directory without hardcoding FS path
  stores: [new FS.Store.FileSystem("apiBackendConfigurations", {path: "~/Dev/meteorApps/api-umbrella-dashboard/uploads/apiBackendConfigs"})]
});

ApiBackendConfigurations.filters({
  allow: {
    // ~ 10Mbs.
    maxSize: 10048567,
    extensions: ['json', 'yaml', 'txt']
  },
  onInvalid: function (message) {
    // Show error message if it doesn't pass filter settings
    FlashMessages.sendError(message);
  }
});

if (Meteor.isServer) {
  ApiBackendConfigurations.allow({
    insert: function (userId, doc) {
      // allow insert by default
      // TODO: determine proper upload/insert permisison
      return true;
    },
    update: function (userId, doc) {
      return true;
    }
  });
}
