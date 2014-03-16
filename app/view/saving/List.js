Ext.define('AM.view.saving.List' , {
	extend : 'Ext.grid.Panel',
	alias : 'widget.savinglist',
	title : 'Savings',
	store : 'Savings',
	selType: 'rowmodel',
	collapsible : true,
	dockedItems: [{
	    xtype: 'toolbar',
	    dock: 'top',
	    items: [
	        { 
              xtype : 'button',
	          icon: 'images/add.png',
	          tooltip: 'Add savings',
	          id : 'addSavingsBtn'
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
            clicksToEdit: 1
        })
        ],
	initComponent : function(){
		this.columns = [
            {header: 'Description',  dataIndex: 'description',  flex: 2, editor: 'textfield'},
            {header: 'Date', dataIndex: 'date', flex: 1, editor: 'datefield', xtype:'datecolumn', format: 'Y-m-d'},
            {header: 'Sum', dataIndex: 'sum', flex: 1, editor: 'numberfield'},
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