Ext.application({
	requires : ['Ext.container.Viewport'],
    name: 'AM',
    appFolder : 'app',
    controllers : ['Purchases', 'Earnings', 'Savings'],
    launch: function() {
    	Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                {
                    region : 'center',
                    layout : {
                    	type : 'accordion',
                    	align : 'stretch'
                    },
                    items : [
                             {
                            	xtype : 'tabpanel',
                            	title : 'Cashflow',
                             	items : [
                             	      {
                             	    	  xtype: 'purchaselist',
                             	    	  icon : 'images/add_cart.png'
                             	      },
                             	      {
                             	    	  xtype: 'earninglist',
                             	    	 icon : 'images/add_money.png'
                             	      },
                             	      {
                             	    	  xtype: 'savinglist',
                             	    	 icon : 'images/add_savings.png'
                             	      }
                             		]
                             },
                             {
                            	 title : 'Reports'
                             },
                             {
                            	 title : 'TODO'
                             },
                             {
                            	 title : 'Wishlist'
                             }
                             ]
                	
                },
                {
                	region : 'east',
                	title : 'Statistics',
                	split : true,
                	collapsible : true,
                	width : '20%'
                }
            ]
        });
    }
});
