Ext.define('AM.view.purchase.Add' , {
	extend : 'Ext.window.Window',
	alias : 'widget.purchaseadd',
	title : 'New Purchase',
	width : 400,
	layout: 'fit',
	modal : true,
	autoShow : true,
	initComponent : function(){
		this.items = [
	      {
	          xtype: 'form',
	          layout : 'vbox',
	          layoutConfig : {
	  			align : 'stretch'
	  		  },
	  		  defaults :{
	  			width: "100%"
	  		  },
	          items: [
	              {
	                  xtype: 'textarea',
	                  name : 'description',
	                  fieldLabel: 'Description',
	                  allowBlank : false
	              },
	              {
	                  xtype: 'combobox',
	                  store : 'PurchaseCategories',
	                  name : 'cathegory',
	                  valueField : 'value',
	                  displayField : 'value',
	                  fieldLabel: 'Cathegory',
	                  allowBlank : false
	              },
	              {
	                  xtype: 'datefield',
	                  name : 'date',
	                  format : 'Y-m-d',
	                  fieldLabel: 'Date',
	                  allowBlank : false
	              },
	              {
	                  xtype: 'numberfield',
	                  name : 'price',
	                  fieldLabel: 'Price',
	                  allowBlank : false
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