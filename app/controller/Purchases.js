Ext.define('AM.controller.Purchases', {
    extend: 'Ext.app.Controller',
    views : ['purchase.List' , 'purchase.Edit', 'purchase.Add'],
    stores : ['Purchases' , 'PurchaseCategories'],
    models : ['Purchase' , 'PurchaseCategory'],
    init: function() {
        console.log('Initializing Purchases Controller..');
        
        this.control({
        	'purchaselist' : {
        		itemdblclick : this.editPurchase,
        		edit : this.savePurchase,
        	},
        	'purchaselist actioncolumn' : {
        		click : this.deletePurchase,
        	},
        	'purchaseadd button[action=save]' : {
        		click : this.createPurchase
        	},
        	'purchaselist button[action=add]' : {
        		click: this.addPurchase
        	}
        	
        	
        });
    },
    
/*    addPurchase : function(){
    	var editPlugin = Ext.ComponentQuery.query('purchaselist')[0].getPlugin('rowEditing');
    	var pm = this.getPurchaseModel();
    	var store = this.getPurchasesStore();
        var purchase = Ext.create(pm, {
        	price : 0,
        	date : new Date()
        });
        editPlugin.cancelEdit();
        store.insert(0, purchase);
        editPlugin.startEdit(0, 0);
    },*/
    
    addPurchase : function(){
    	Ext.widget('purchaseadd');
    },
    
    editPurchase : function(grid , record){
    	var view = Ext.widget('purchaseedit');
    	view.down('form').loadRecord(record);
    },
    
    savePurchase : function(editor, e){
    	this.getPurchasesStore().sync();
    },
    
    deletePurchase : function(view, cell, rowIndex, colIndex, e){
    	 var store = this.getPurchasesStore();
         var record = store.getAt(rowIndex);
         store.remove(record);
         store.sync();
    
    },
    
    createPurchase : function(button){
    	var win = button.up('window'),
    	form = win.down('form'),
    	values = form.getValues();
    	
    	if(form.isValid()){
    		this.getPurchasesStore().insert(0 , values);
        	win.close();
        	this.getPurchasesStore().sync();	
    	}
    },
    
    updatePurchase : function(button){
    	var win = button.up('window'),
    		form = win.down('form'),
    		record = form.getRecord(),
    		values = form.getValues();
    	
    	record.set(values);
    	win.close();
    	this.getPurchasesStore().sync();
    	
    }
});