/* global AccountsAdmin */
"use strict";

AccountsAdmin.subscribe = function() {
  return [Meteor.subscribe(AccountsAdmin.config.rolesPublishName),
  Meteor.subscribe(AccountsAdmin.config.filteredUsersPublishName, {
    filter: Session.get('accountsAdminUserFilter') || '',
    skip: Session.get("accountsAdminSkip") || null,
    sort: Session.get("accountsAdminSortKey") || null,
  })];
};


Meteor.startup(function() {
  if (!AccountsAdmin.config.manualSubscriptions) {
    Tracker.autorun(function() {
      AccountsAdmin.subscribe();
    });
  }
});
