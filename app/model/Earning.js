Ext.define('AM.model.Earning' , {
	extend : 'Ext.data.Model',
	fields : [
	    {name : 'description' , type : 'string'},
	    {name : 'date' , type : 'date', dateFormat: 'Y-m-d'},
	    {name : 'sum' , type : 'number'},
    ]
});