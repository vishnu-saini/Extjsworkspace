Ext.define('BookLib.store.CategoryStore', {
	extend : 'Ext.data.Store',
	model : 'BookLib.model.Category',
	autoLoad : true,
	proxy : {
		type : 'rest',
		url : 'http://localhost:8080/booklib/api/bookCategory',
		reader : {
			type : 'json',
			root : 'data'
		}
	},
	init : function() {
		console
				.log('in category store');

	}
});