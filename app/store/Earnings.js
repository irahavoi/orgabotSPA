Ext.define("AM.store.Earnings" , {
	extend : 'Ext.data.Store',
	model : 'AM.model.Earning',
	autoLoad : true,
	proxy: {
        type: 'ajax',
        api: {
            read: 'data/earnings.json',
            update: 'data/updateEarning.json',
            destroy: 'data/deleteEarning.json'
        },
        reader: {
            type: 'json',
            root: 'earnings',
            successProperty: 'success'
        }
    }
});