Ext
		.define(
				'BookLib.controller.CategoryController',
				{
					extend : 'Ext.app.Controller',

					views : [ 'CategoryGrid' ],

					stores : [ 'CategoryStore' ],

					models : [ 'Category' ],

					init : function() {
						console
								.log('Initialized Users! This happens before the Application launch function is called');

					}

				});