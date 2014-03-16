Ext.define('AM.view.purchase.List' , {
	extend : 'Ext.grid.Panel',
	alias : 'widget.purchaselist',
	title : 'Expenses',
	store : 'Purchases',
	id : 'purchaseListGrid',
	selType: 'rowmodel',
	collapsible : true,
	dockedItems: [{
	    xtype: 'toolbar',
	    dock: 'top',
	    items: [
	        { 
              xtype : 'button',
	          icon: 'images/add.png',
	          tooltip: 'Add purchase',
	          id : 'addPurchaseBtn',
	          action : 'add'
             }
	    ]
	}],
	listeners: {
	     beforeedit: function (grid, e, eOpts) {
	       return e.column.xtype !== 'actioncolumn';
	       }
	},
	 
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
        	pluginId: 'rowEditing',
            clicksToEdit: 1
        })
        ],
	initComponent : function(){
		this.columns = [
            {header: 'Description',  dataIndex: 'description',  flex: 2, editor: {xtype :'textfield'}},
            {
            	header: 'Cathegory', dataIndex: 'cathegory', flex: 1,
            	editor: {
            		xtype : 'combobox',
            		editable : false,
            		mode : 'local',
            		store : 'PurchaseCategories',
            		queryMode : 'local',
	                valueField : 'value',
	                displayField : 'value'
            	} 
            
            },
            {header: 'Date', dataIndex: 'date', xtype:'datecolumn',  flex: 1, editor : 'datefield', format: 'Y-m-d'},
            {header: 'Price', dataIndex: 'price', flex: 1, editor: 'numberfield'},
            {
                xtype: 'actioncolumn',
                width: 20,
                items: [
                    {
                        icon: 'images/delete.png',
                        tooltip: 'Delete'
                    }
                ]
            }
        ];
		
		this.callParent(arguments);
	}
});