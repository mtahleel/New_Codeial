module.exports.home = (req, res) => {
    // return res.end('<h1>Express is up for codeial!</h1>')
    return res.render('home', {
        title: 'EJS Home'
    })
}
