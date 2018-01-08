Ext.application({
			name : 'HelloExt',
			appFolder : 'app',
			requires : ['HelloExt.package.OwnWindow'],
			launch : function() {

				var myWindow1 = Ext.create('HelloExt.package.OwnWindow');
				alert(myWindow1.getBottomBar().height);

				var myWindow = Ext.create('HelloExt.package.OwnWindow', {
							title : 'Hello World',
							bottomBar : {
								height : 60
							}
						});

				alert(myWindow.getTitle()); // alerts "Hello World"

				myWindow.setTitle('Something New');

				alert(myWindow.getTitle()); // alerts "Something New"

				myWindow.setTitle(null); // alerts "Error: Title must be a
				// valid non-empty string"

				myWindow.setBottomBar({
							height : 100
						}); // Bottom bar's height is changed to 100

				alert(myWindow.getBottomBar().height);
			}
		});