const Admin = require('../models/Admin')
const bcrypt = require('bcryptjs')
// const JWT = require('jsonwebtoken');

exports.signUp = (req, res, next) => {
    const Name = req.body.name;
    const Mail = req.body.mail;
    const Password = req.body.password;
    bcrypt
        .hash(Password, 12)
        .then(hashedPw => {
            const admin = new Admin(Name, Mail, hashedPw);
            return admin.save();
        })
        .then(admin => {
            res.status(201).json({ message: 'Admin created!'});
        })
        .catch(err => {
            console.log(err)
        });
}


// exports.SignIn = (req, res, next) => {
//     const Name = req.body.adminName;
//     const Mail = req.body.adminMail
//     const Password = req.body.adminPassword;

//     let loadAdmin;
//     Admin.findByName(Name)
//         .then(admin => {
//             if (!admin) {
//                 console.log('This Admin Name not Found')
//                 const adminError = new Error('This Admin Name not Found');
//                 adminError.statusCode = 401;
//                 throw  adminError;
//             }
//             loadAdmin = admin
//             return bcrypt.compare(password, admin.password)
//                 .then(doMatch => {
//                     if (!doMatch) {
//                         console.log('Wrong password!')
//                         const error = new Error('Wrong password!');
//                         error.statusCode = 401;
//                         throw error;
//                     }
//                     const token = JWT.sign({
//                         adminName: loadAdmin.name,
//                         adminId: loadAdmin._id.toString(),
//                         isLogged: true
//                     },
//                     'LibraryManagmentSystemPrivateKey',
//                     { expiresIn: '1h' })

//                     res.json({token: token, isLogged: true})
//                 })
//                 .catch(err => {
//                     if (!err.statusCode) {
//                         err.statusCode = 500;
//                     }
//                     next(err);
//                 });
//         })
//         .catch(err => {
//             next(err)
//         })
// }