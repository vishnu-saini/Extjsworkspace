Ext.define('BookLib.store.PublisherStore', {
	extend : 'Ext.data.Store',
	model : 'BookLib.model.Publisher',
	autoLoad : true,
	proxy : {
		type : 'rest',
		url : 'http://localhost:8080/booklib/api/bookPublisher',
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