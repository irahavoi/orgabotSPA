Ext.define("AM.store.Savings" , {
	extend : 'Ext.data.Store',
	model : 'AM.model.Saving',
	autoLoad : true,
	proxy: {
        type: 'ajax',
        api: {
            read: 'data/savings.json',
            update: 'data/updateSaving.json',
            destroy: 'data/deleteSaving.json'
        },
        reader: {
            type: 'json',
            root: 'savings',
            successProperty: 'success'
        }
    }
});