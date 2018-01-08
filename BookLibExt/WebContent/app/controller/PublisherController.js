Ext
		.define(
				'BookLib.controller.PublisherController',
				{
					extend : 'Ext.app.Controller',
					views : [ 'PublisherGrid', 'publisher.Form' ],
					stores : [ 'PublisherStore' ],
					models : [ 'Publisher' ],
					init : function() {
						console
								.log('Initialized Users! This happens before the Application launch function is called');

						this.control({

							'publishergrid' : {
								itemdblclick : this.editPublisher
							},
							'publisherform button[action=edit]' : {
								click : this.updatePublisher
							},

							'publishergrid button' : {
								click : this.renderAddPublisherForm
							},
							'publisherform button[action=add]' : {
								click : this.addPublisher
							},
							'publishergrid' : {
								render : this.onEditorRender,
								beforeedit : this.beforeBookEdit,
								edit : this.afterBookEdit,
								bookEdit : this.onBookEdit,
								bookDelete : this.onBookDelete
							},
						/*
						 * 'publishereditor button' : { click : this.addBook }
						 */
						});
					},

					editPublisher : function(grid, record) {
						console.log('Double clicked on ' + record.get('name'));
						var view = Ext.widget('publisherform');
						console.log(view.down('button'));
						view.down('form').loadRecord(record);
					},

					updatePublisher : function(button) {
						console.log("in update puplisher");

						var win = button.up('window'), form = win.down('form'), record = form
								.getRecord(), values = form.getValues();

						record.set(values);
						win.close();
						this.getPublisherStoreStore().sync();
					},

					renderAddPublisherForm : function() {
						var view = Ext.widget('publisherform');
					},

					addPublisher : function(button) {
						var publisherStore = this.getPublisherStoreStore();

						console.log("in add puplisher");

						var win = button.up('window'), form = win.down('form'), values = form
								.getValues();

						console.log(publisherStore);
						publisherStore.insert(publisherStore.data.length,
								values);
						publisherStore.sync();

						win.close();

					},
					beforeBookEdit : function(e) {
						console.log("this is before edit");
						console.log(e);
					},

					onEditorRender : function() {
						// cache a reference to the bookEditor and rowEditor
						console.log("book editor rendered");
						this.bookEditor = Ext.ComponentQuery
								.query('publishergrid')[0];
						this.rowEditor = this.bookEditor.rowEditor;
					},

					onBookEdit : function(evtData) {
						console.log("on bok edit called");
						var bookStore = this.getStore('BookStore');
						var record = bookStore.getAt(evtData.rowIndex);
						if (record) {
							this.rowEditor.startEdit(record,
									this.bookEditor.columns[evtData.colIndex]);
						}
					},

					onBookDelete : function(evtData) {
						console.log("on book delete called");
						console.log("deleteBook", evtData.rowIndex,
								evtData.colIndex);
						var bookStore = this.getStore('BookStore');
						var record = bookStore.getAt(evtData.rowIndex);
						if (record) {
							bookStore.remove(record);
							bookStore.sync();
						}
					},

					afterBookEdit : function() {
						console.log("after book edit called");
						var bookStore = this.getStore('BookStore');
						bookStore.sync();
					},

					addBook : function() {
						console.log("add book called");
						var newBook, bookStore = this.getStore('BookStore');

						// add blank item to store -- will automatically add new
						// row to grid
						newBook = bookStore.add({
							title : '',
							year : ''
						})[0];

						// TODO: remove added row if edit is cancelled
						this.rowEditor.startEdit(newBook,
								this.bookEditor.columns[0]);

					}

				});