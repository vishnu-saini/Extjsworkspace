Ext.define('BookLib.model.Book', {
    extend: 'Ext.data.Model',
    idProperty: 'isbn',
    fields: ['isbn', 'name', 'category', 'publisherName', 'assignedCopies', 'unassignedCopies']
});