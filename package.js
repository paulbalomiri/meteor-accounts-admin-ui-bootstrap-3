"use strict";

Package.describe({
	summary: "A roles based account management system using bootstrap 3",
  version: "0.3.2",
  git: "https://github.com/kaoskeya/meteor-accounts-admin-ui-bootstrap-3.git",
  name: 'kaoskeya:accounts-admin-ui-bootstrap-3'
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@1.0");

  api.use(
    [
      'underscore',
    ],
    ['client','server']
  );


  api.use(['templating'], 'client');
  api.use('check');
  api.use('mizzao:user-status@0.6.4', 'client', { weak: true });
  api.use('alanning:roles', ['server', 'client'])

  api.addFiles('lib/config.js', ['client', 'server']);
	api.addFiles('lib/user_query.js', ['client', 'server']);
	api.addFiles('client/startup.js', 'client');
	api.addFiles('client/accounts_admin.html', 'client');
	api.addFiles('client/accounts_admin.js', 'client');
	api.addFiles('client/delete_account_modal.html', 'client');
	api.addFiles('client/delete_account_modal.js', 'client');
	api.addFiles('client/info_account_modal.html', 'client');
	api.addFiles('client/info_account_modal.js', 'client');
	api.addFiles('client/update_account_modal.html', 'client');
	api.addFiles('client/update_account_modal.js', 'client');
	api.addFiles('client/update_roles_modal.html', 'client');
	api.addFiles('client/update_roles_modal.js', 'client');
  api.addFiles('client/impersonate_account_modal.html', 'client');
  api.addFiles('client/impersonate_account_modal.js', 'client');

	api.addFiles('style/style.css', 'client');

	api.addFiles('server/startup.js', 'server');
	api.addFiles('server/publish.js', 'server');
	api.addFiles('server/methods.js', 'server');

  api.export("AccountsAdmin");
});
