// this line used to load the corresponding js files of Viewport, before
// application runs
Ext.require('Ext.container.Viewport');

Ext.application({
			name : 'HelloExt',
			launch : function() {
				var childPanel3 = Ext.create('Ext.panel.Panel', {
							width : 400,
							height : 200,
							title : 'Container Panel',
							layout : 'column',
							items : [{
										xtype : 'panel',
										title : 'Child Panel 1',
										height : 100,
										columnWidth : 0.5
									}, {
										xtype : 'panel',
										title : 'Child Panel 2',
										height : 100,
										columnWidth : 0.5
									}]
						});

				var childPanel1 = Ext.create('Ext.panel.Panel', {
							title : 'Child Panel 1',
							html : 'A Panel'
						});

				var childPanel2 = Ext.create('Ext.panel.Panel', {
							title : 'Child Panel 2',
							html : 'Another Panel'
						});

				Ext.create('Ext.container.Viewport', {
							items : [childPanel1, childPanel2,childPanel3]
						});
			}
		});
