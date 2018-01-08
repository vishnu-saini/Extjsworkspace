Ext.application({
    name: 'HelloExt',
    appFolder:'app',
    requires  : ['HelloExt.package.Student'],
    launch: function() {
        var student = Ext.create('HelloExt.package.Student');
        student.name='Vishnu';
        console.log('hii');
		alert(student.getName());
    }
});