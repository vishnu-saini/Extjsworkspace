Ext.define('BookLib.store.BookStore', {
	extend : 'Ext.data.Store',
	model : 'BookLib.model.Book',

	autoLoad : true,
    autoSync: false,

	proxy : {
		type : 'rest',
		url: 'http://localhost:8080/booklib/api/book',
		reader : {
			type : 'json',
			root : 'data',
		}
	}
/*
 * data: [ {name: 'Ed', email: 'ed@sencha.com'}, {name: 'Tommy', email:
 * 'tommy@sencha.com'} ]
 */
});