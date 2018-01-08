Ext.application({
			name : 'HelloExt',
			appFolder : 'app',
			requires : ['HelloExt.package.Computer'],
			launch : function() {
				var dellComputer = HelloExt.package.Computer.factory('Dell');
				var appleComputer = HelloExt.package.Computer.factory('Mac');

				alert(appleComputer.getBrand()); // using the auto-generated
													// getter to get the value
													// of a config property.
													// Alerts "Mac"

				alert(HelloExt.package.Computer.instanceCount); // Alerts "2"

			}
		});