module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests


    var itemsController = app.controllers.Item;

    app.post('/items/', itemsController.addItem);
    app.delete('/items/:id', itemsController.deleteItem);
    app.put('/items/', itemsController.editItem);
    app.get('/items/', itemsController.getItems);

 
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};