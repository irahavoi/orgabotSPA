Ext.define("AM.store.Purchases" , {
	extend : 'Ext.data.Store',
	model : 'AM.model.Purchase',
	autoLoad : true,
	proxy: {
        type: 'ajax',
        api: {
            read: 'data/purchases.json',
            create : 'data/createPurchase.json',
            update: 'data/updatePurchase.json',
            destroy: 'data/deletePurchase.json'
        },
        reader: {
            type: 'json',
            root: 'purchases',
            successProperty: 'success'
        }
    }
});