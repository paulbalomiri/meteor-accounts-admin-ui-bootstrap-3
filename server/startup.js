/* global Roles */
"use strict";

Meteor.startup(function() {
	// create an admin role if it doesn't exist
	if ( AccountsAdmin.createAdminIfNotExists && Meteor.roles.find({name: AccountsAdmin.config.adminRole}).count() < 1 ) {
		Roles.createRole(AccountsAdmin.config.adminRole);
	}
});
