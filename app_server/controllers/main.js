/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'book store applications' });
   };
module.exports = {
index
};