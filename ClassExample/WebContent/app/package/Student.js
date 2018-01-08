Ext.define('HelloExt.package.Student', {
			name : 'unnamed',
			getName : function() {
				return "Student name is" + this.name;
			}
		}, function() {
			alert('Student object created');
		});