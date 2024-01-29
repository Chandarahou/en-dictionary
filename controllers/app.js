const Data = require('../model/data')
exports.getHome = (req,res)=>{
    const id = req.session.user.id
    Data.findAll({where:{idUser:id}}).then((datas)=>{
        res.render('app/home',{isAuthenticated:req.session.isLogin,us:req.session.user,datas:datas})
    }).catch((err)=>{console.log(err)})
  
}

exports.getCreate = (req,res)=>{
    res.render('app/create',{isAuthenticated:req.session.isLogin,us:req.session.user})
}
exports.postCreate = (req,res)=>{
    const {engText,khText,imgPath,textArea} = req.body
    const id = req.session.user.id
    console.log(engText,khText,imgPath,textArea,id)
    Data.create({idUser:id,englishText:engText,khmerText:khText,imgPath:imgPath,remark:textArea}).then(()=>{
        res.redirect('/')
    }).catch((err)=>console.log(err))
    res.redirect('/create')
}

exports.postDelete = async (req,res)=>{
    const id  = req.params.id
    await Data.destroy({where:{id:id}})
    res.redirect('/')
}