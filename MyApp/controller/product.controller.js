const db = require('../db');

module.exports.index = (req, res) => {
    const page = Number(req.query.page || 1); //n = inPage
    const perPage = 8; // x = SL Element
    const start = ( page - 1 ) * perPage;
    const end = page * perPage;
    const products = db.get('products').value().slice(start, end);
    res.render('products/index', {
        products
    });
};
