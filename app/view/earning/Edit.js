Ext.define('AM.view.earning.Edit' , {
	extend : 'Ext.window.Window',
	alias : 'widget.earningedit',
	title : 'Edit Earning',
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
	                  xtype: 'datefield',
	                  name : 'date',
	                  format : 'Y-m-d',
	                  fieldLabel: 'Date'
	              },
	              {
	                  xtype: 'numberfield',
	                  name : 'sum',
	                  fieldLabel: 'Sum'
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