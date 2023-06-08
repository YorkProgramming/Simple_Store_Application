const StoreController = require("../controllers/store.controllers")

module.exports = app => {
    app.get("/api", StoreController.index);
    app.post("/api/stores/new", StoreController.createStore);
    app.get("/api/stores", StoreController.getAllStores);
    app.get("/api/stores/:id", StoreController.getOneStore);
    app.put("/api/stores/edit/:id", StoreController.updateStore);
    app.delete("/api/stores/delete/:id", StoreController.deleteStore);
    }