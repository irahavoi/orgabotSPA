Ext.define('AM.controller.Savings', {
    extend: 'Ext.app.Controller',
    views : ['saving.List' , 'saving.Edit'],
    stores : ['Savings'],
    models : ['Saving'],
    init: function() {
        console.log('Initializing Savings Controller..');
        
        this.control({
        	'savinglist' : {
        		itemdblclick : this.editSaving,
        		edit : this.saveSaving,
        	},
        	'savinglist actioncolumn' : {
        		click : this.deleteSaving,
        	},
        	'savingedit button[action=save]' : {
        		click : this.updateSaving
        	}
        	
        	
        });
    },
    
    editSaving : function(grid , record){
    	var view = Ext.widget('savingedit');
    	view.down('form').loadRecord(record);
    },
    
    saveSaving : function(editor, e){
    	this.getSavingsStore().sync();
    },
    
    deleteSaving : function(view, cell, rowIndex, colIndex, e){
    	 var store = this.getSavingsStore();
         var record = store.getAt(rowIndex);
         store.remove(record);
         store.sync();
    
    },
    
    updateSaving : function(button){
    	var win = button.up('window'),
    		form = win.down('form'),
    		record = form.getRecord(),
    		values = form.getValues();
    	
    	record.set(values);
    	win.close();
    	this.getSavingsStore().sync();
    	
    }
});