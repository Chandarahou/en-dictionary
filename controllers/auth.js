const User = require('../model/auth')
const bcrypt = require("bcrypt")
const session = require('express-session')

exports.getLogin = (req,res)=>{
    res.render('auth/login',{layout:false})
}

exports.getUser = (req,res)=>{
    User.findAll().then((users)=>{
        res.render('auth/view',{users:users,isAuthenticated:req.session.isLogin,us:req.session.user})
     }).catch((err)=>{
        console.log(err)
     })
}

exports.getCreate =  (req,res)=>{
    res.render('auth/create',{isAuthenticated:req.session.isLogin,us:req.session.user})
}

exports.postCreate = (req,res)=>{
    const{email,userName,password}= req.body
    console.log(email,userName,password)
    bcrypt.hash(password,10).then((pass)=>{
        User.create({email:email,username:userName,password:pass}).then(()=>{
            res.redirect('/user/all')
        }).catch((err)=>console.log(err))
    }).catch((err)=>{
        console.error(err.message);
    })
}

exports.postLogin = (req,res)=>{
    const {email,password} = req.body;

    User.findOne({where:{email:email}}).then( async (user)=>{
        const pass = await bcrypt.compare(password,user.password)
        console.log(pass)
        if(pass == true){
            req.session.isLogin = true
            req.session.user = user
            res.redirect('/')
        }else{
            res.render('auth/login',{layout:false,errors:"Password is incorrect",isAuthenticated:req.session.isLogin,us:req.session.user})
        }
    }).catch((err)=>{
        console.log(err)
        res.render('auth/login',{layout:false,errors:"Email and password is incorrect",isAuthenticated:req.session.isLogin,us:req.session.user})
    })
}

exports.postLogout = (req,res)=>{
    req.session.destroy((err)=>{
        console.log(err)
        res.redirect('/user/login')
    })
}