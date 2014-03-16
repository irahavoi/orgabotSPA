Ext.define('AM.view.purchase.Edit' , {
	extend : 'Ext.window.Window',
	alias : 'widget.purchaseedit',
	title : 'Edit Purchase',
	layout: 'fit',
	autoShow : true,
	initComponent : function(){
		this.items = [
	      {
	          xtype: 'form',
	          items: [
	              {
	                  xtype: 'textfield',
	                  name : 'description',
	                  fieldLabel: 'Description'
	              },
	              {
	                  xtype: 'combobox',
	                  store : 'PurchaseCategories',
	                  name : 'cathegory',
	                  valueField : 'value',
	                  displayField : 'value',
	                  fieldLabel: 'Cathegory'
	              },
	              {
	                  xtype: 'datefield',
	                  name : 'date',
	                  format : 'Y-m-d',
	                  fieldLabel: 'Date'
	              },
	              {
	                  xtype: 'numberfield',
	                  name : 'price',
	                  fieldLabel: 'Price'
	              }
	          ]
	      }
	  ];
	
	  this.buttons = [
	      {
	          text: 'Save',
	          action: 'save'
	      },
	      {
	          text: 'Cancel',
	          scope: this,
	          handler: this.close
	      }
	  ];
	
	  this.callParent(arguments);
	}
});