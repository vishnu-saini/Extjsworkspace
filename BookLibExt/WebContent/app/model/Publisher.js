Ext.define('BookLib.model.Publisher', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: ['id', 'name'],
	init : function() {
		console
				.log('in publisher model');

	}
});