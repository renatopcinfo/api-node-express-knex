module.exports = (app) => {
    app.route("/clients")
        .get(app.api.clients.get)
        .post(app.api.clients.save)

    app.route("/clients/:id")
        .get(app.api.clients.getById)
        .put(app.api.clients.put)
        .delete(app.api.clients.remove)

    app.route("/products")
        .get(app.api.products.get)
        .post(app.api.products.save)

    app.route("/products/:id")
        .get(app.api.products.getById)
        .put(app.api.products.put)
        .delete(app.api.products.remove)

    app.route("/orders")
        .get(app.api.orders.get)
        .post(app.api.orders.save)

    app.route("/orders/:id")
        .get(app.api.orders.getById)
        .put(app.api.orders.put)
        .delete(app.api.orders.remove)        

}