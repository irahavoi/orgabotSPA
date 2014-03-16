Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',
    views : ['user.List' , 'user.Edit'],
    stores : ['Users'],
    models : ['User'],
    init: function() {
        console.log('Initializing Users Controller..');
        
        this.control({
        	'userlist' : {
        		itemclick : this.editUser
        	},
        	'useredit button[action=save]' : {
        		click : this.updateUser
        	}
        });
    },
    
    editUser : function(grid , record){
    	var view = Ext.widget('useredit');
    	console.log(record);
    	view.down('form').loadRecord(record);
    },
    
    updateUser : function(button){
    	var win = button.up('window'),
    		form = win.down('form'),
    		record = form.getRecord(),
    		values = form.getValues();
    	
    	record.set(values);
    	win.close();
    	this.getUsersStore().sync()
    	
    	
    	console.log('todo: update a user');
    }
});