Ext.define("AM.store.PurchaseCategories" , {
	extend : 'Ext.data.Store',
	model : 'AM.model.PurchaseCategory',
	storeId : 'purchaseCategories',
	autoLoad : true,
	proxy: {
        type: 'ajax',
        api: {
            read: 'data/purchaseCategories.json',
        },
        reader: {
            type: 'json',
            root: 'categories',
            successProperty: 'success'
        }
    }
});