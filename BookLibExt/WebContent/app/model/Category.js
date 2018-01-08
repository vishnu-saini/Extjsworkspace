Ext.define('BookLib.model.Category', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: ['id', 'name'],
	init : function() {
		console
				.log('in category model');

	}
});