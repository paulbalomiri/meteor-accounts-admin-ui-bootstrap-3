/* global AccountsAdmin:true */
/* jshint strict: false */

AccountsAdmin = function() {};

AccountsAdmin.config = {
  userStatus: true,
  allowImpersonation: false,
  impersonationSuccess: null, //iron-router route for impersonation
  maxUsersPerPage: 25,
  manualSubscriptions: false,
  adminRole: 'admin',
  rolesPublishName: "roles",
  filteredUsersPublishName: "filteredUsers",
  createAdminIfNotExists:true,

};
