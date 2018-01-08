Ext.define("BookLib.controller.BookController", {
	extend : 'Ext.app.Controller',

	models : [ 'Book', 'Category', 'Publisher' ],
	stores : [ 'BookStore', 'CategoryStore', 'PublisherStore' ],
	views : [ 'BookGrid', 'book.Form' ],

	init : function() {
		this.control({
			'bookgrid button' : {
				click : this.renderAddBookForm
			},
			'bookform button[action=add]' : {
				click : this.addBook
			}
		});
	},

	renderAddBookForm : function() {
		var view = Ext.widget('bookform');
	},

	addBook : function(button) {
		var bookStore = this.getBookStoreStore();

		console.log("in add puplisher");

		var win = button.up('window'), form = win.down('form'), values = form
				.getValues();

		console.log(values);

		var data = {};
		data.author = values.author;
		data.edision = values.edision;
		data.numberOfBookAvailable = values.numberOfBookAvailable;
		data.name = values.name;
		data.category = {
			"id" : values.categoryId
		};
		data.publisher = {
			"id" : values.publisherId
		};
		data.author = {
			"id" : 1
		};

		console.log(data);

		Ext.Ajax.request({
			url : 'http://localhost:8080/booklib/api/book',
			method : 'POST',
			jsonData : data,
			success : function(book) {
				console.log(data);
				bookStore.sync();
			},
			failure : function(error) {
				console.log("Error: " - error.responseText);
			}
		});

		/*
		 * publisherStore.insert(bookStore.data.length, values);
		 * publisherStore.sync();
		 */
		win.close();

	}
});
