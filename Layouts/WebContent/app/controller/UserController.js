Ext
		.define(
				'AM.controller.UserController',
				{
					extend : 'Ext.app.Controller',

					views : [ 'user.List', 'user.Form' ],

					init : function() {
						console
								.log('Initialized Users! This happens before the Application launch function is called');
						this.control({

						/*
						 * 'userlist' : { itemdblclick : this.showUserForm },
						 * 'userlist button[action=add]' : { click :
						 * this.showUserForm }, 'userform button[action=add]' : {
						 * click : this.addOrUpdateUser }, 'userform
						 * button[action=edit]' : { click : this.addOrUpdateUser },
						 */
						});
					},

				});