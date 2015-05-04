/* global AccountsAdmin */
"use strict";
Meteor.startup( function(){
  Meteor.publish(AccountsAdmin.config.rolesPublishName, function (){
  	return Meteor.roles.find({});
  });


  var positiveInteger = Match.Where(function(x) {
    check(x, Match.Integer);
    return x >= 0;
  });

  // var plainString = Match.Where(function(x) {
  //   check(x, String);
  //   return !!x.match(/^\w*$/);
  // });

  Meteor.publish(AccountsAdmin.config.filteredUsersPublishName, function(options) {
    var self = this;
    check(options, Match.ObjectIncluding({
      filter: String,
      skip: Match.OneOf(positiveInteger, undefined, null),
      sort: Match.OneOf(Object, undefined, null)
      // sort: Match.OneOf(Match.ObjectIncluding({ direction: Match.OneOf(1, -1), key: String }), null, undefined)
    }));

    return AccountsAdmin.filteredUserQuery(self.userId, options);
  });
});//Meteor.startup