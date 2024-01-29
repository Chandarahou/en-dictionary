module.exports = (req,res,next)=>{
    if(!req.session.isLogin){
        res.redirect('/user/login')
    }
    next();
}