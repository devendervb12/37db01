sap.ui.controller("zdb_property.EmpRegForm", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zdb_property.EmpRegForm
*/
	onInit: function() {

		// instantiating JSON Model
		var oModel = new sap.ui.model.json.JSONModel();
		//load data into Model
		oModel.loadData("model/companyData.json"); // http://..../poData		
		//setting model to view for data binding
		this.getView().setModel(oModel);
		
		//property binding at controller
		
		var oTextCity = this.getView().byId("idCity");
		oTextCity.bindProperty("text", "/address/city");
			
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zdb_property.EmpRegForm
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zdb_property.EmpRegForm
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zdb_property.EmpRegForm
*/
//	onExit: function() {
//
//	}

});