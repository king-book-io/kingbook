const bookRouter = require("./books");
const userRouter = require("./users");
const orderRouter = require("./orders");

module.exports = (app) => {
    app.use("/api/users", userRouter);
    app.use("/api/books", bookRouter);
    app.use("/api/orders", orderRouter);
};
