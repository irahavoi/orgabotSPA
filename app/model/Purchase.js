Ext.define('AM.model.Purchase' , {
	extend : 'Ext.data.Model',
	fields : [
	    {name : 'description' , type : 'string'},
	    {name : 'cathegory' , type : 'string'},
	    {name : 'date' , type : 'date', dateFormat: 'Y-m-d'},
	    {name : 'price' , type : 'number'},
    ]
});