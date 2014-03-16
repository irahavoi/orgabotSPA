Ext.define('AM.controller.Earnings', {
    extend: 'Ext.app.Controller',
    views : ['earning.List' , 'earning.Edit'],
    stores : ['Earnings'],
    models : ['Earning'],
    init: function() {
        console.log('Initializing Earnings Controller..');
        
        this.control({
        	'earninglist' : {
        		itemdblclick : this.editEarning,
        		edit : this.saveEarning,
        	},
        	'earninglist actioncolumn' : {
        		click : this.deleteEarning,
        	},
        	'earningedit button[action=save]' : {
        		click : this.updateEarning
        	}
        	
        	
        });
    },
    
    editEarning : function(grid , record){
    	var view = Ext.widget('earningedit');
    	view.down('form').loadRecord(record);
    },
    
    saveEarning : function(editor, e){
    	this.getEarningsStore().sync();
    },
    
    deleteEarning : function(view, cell, rowIndex, colIndex, e){
    	 var store = this.getEarningsStore();
         var record = store.getAt(rowIndex);
         store.remove(record);
         store.sync();
    
    },
    
    updateEarning : function(button){
    	var win = button.up('window'),
    		form = win.down('form'),
    		record = form.getRecord(),
    		values = form.getValues();
    	
    	record.set(values);
    	win.close();
    	this.getEarningsStore().sync();
    	
    }
});