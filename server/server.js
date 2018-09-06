var express = require('express');
var socketIo = require('socket.io');
var path = require('path');
var http = require('http');
var uuidv4 = require('uuid/v4');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);
var passportSocketIo = require("passport.socketio");
var cookieParser = require('cookie-parser');
var passport = require('passport'); 
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');
var multer = require('multer');
var ejs = require('ejs');
const saltRounds = 10;
var im = require('imagemagick');
var gm = require('gm').subClass({imageMagick: true});
var fs = require('fs');
var redirect = require("express-redirect");
var flash = require('connect-flash');
var router = express.Router();
var nodemailer = require('nodemailer');
var useragent = require('useragent');
// var GK_questions = require('./GK_questions');
// var bollywood_questions = require('./bollywood_questions');
// var history_questions = require('./history_questions');
// var movies_questions = require('./movies_questions');
// var tvshows_questions = require('./tvshows_questions');
// var maths_questions = require('./maths_questions');
// var science_questions = require('./science_questions');
// var english_questions = require('./english_questions');
// var sports_questions = require('./sports_questions');
// var cricket_questions = require('./cricket_questions');
// var football_questions = require('./football_questions');

// PAYTM
var checksum = require('./checksum/checksum');
var config = require('./checksum/pg');
var checksum1 = require('./checksum/checksum1');
// var http = require('http');
// var request = require('request');
var request = require('request');

const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
MongoClient.connect('mongodb://rohan-boss-2:Mentality098@127.0.0.1:27017/QUIZ_GAME',(err,client)=>{
 if(err){
     console.log(err);
      return console.log('unable to connect to the MongoDb server');
      
 }
  const db =client.db('QUIZ_GAME');
  

  console.log('connected to the MongoDb server');

//   db.collection('maths_QUESTIONS').drop(); 
//     db.collection('movies_QUESTIONS').drop(); 
//      db.collection('GK_QUESTIONS').drop(); 
//       db.collection('sports_QUESTIONS').drop(); 

//   db.collection('user-details').update({},{$set:{'bot__win':0,'bot__loss':0}},{upsert:false,multi:true});

var app = express();
app.use(router);
redirect(app); 
// require('./routes/admin/testtxn')(app);
// require('./routes/admin/pgredirect')(app);
// require('./routes/admin/response')(app);

const port = process.env.PORT ||8080 ;

const pathjoin = path.join(__dirname, '../public');
const pathjoin1 = path.join(__dirname,'../public/html/GK.html');
const pathjoin2 = path.join(__dirname,'../public/html/maths.html');
// const pathjoin3 = path.join(__dirname,'../public/html/bollywood.html');
const pathjoin4 = path.join(__dirname,'../public/html/movies.html');
// const pathjoin5 = path.join(__dirname,'../public/html/cricket.html');
// const pathjoin6 = path.join(__dirname,'../public/html/football.html');
const pathjoin7 = path.join(__dirname,'../public/html/sports.html');
// const pathjoin8 = path.join(__dirname,'../public/html/science.html');
// const pathjoin9 = path.join(__dirname,'../public/html/history.html');
const pathjoin10 = path.join(__dirname,'../public/contact/contact.html');
// const pathjoin11 = path.join(__dirname,'../public/html/english.html');
const pathjoin12 = path.join(__dirname,'../public/views/login.ejs');
const pathjoin14 = path.join(__dirname,'../public/views/register.ejs');
const pathjoin13 = path.join(__dirname,'../public/views/website.ejs');
// const pathjoin15 = path.join(__dirname,'../public/html/victory.html');
const pathjoin16 = path.join(__dirname,'../public/views/picupload.ejs');
const pathjoin17 = path.join(__dirname,'../public/views/profile.ejs');
const pathjoin18 = path.join(__dirname,'../public/views/rules.ejs');
const pathjoin19 = path.join(__dirname,'../public/views/policy.ejs');
// storage of pic uploads
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req,file,cb){
        cb(null,file.fieldname + '-' + req.user.user_id + Date.now() + path.extname(file.originalname));
    }
});

// Init upload
const upload = multer({
    storage: storage,
    limits: {fileSize: 1000000},
    fileFilter: function(req,file,cb){
        checkFileType(file,cb);
    }
}).single('myImage');

// CHECK FILE-TYPE
function checkFileType(file,cb){
    // Allowed extension
    const filetypes = /jpeg|jpg|gif|png/ ;
    // check extension
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // check mime type
    const mimetype = filetypes.test(file.mimetype);
    
    if(mimetype && extname){
        return cb(null,true);
    }else {
        cb('Error: Images Only!');
    }
}

// var player_lst = [];


var server = http.createServer(app);
var io = socketIo(server,{
    pingInterval: 25000,
    pingTimeout: 80000
});
app.set('view engine','ejs');
app.use(express.static(pathjoin));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());
app.use(session({
    secret: 'secret-messi',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ url: 'mongodb://rohan-boss-2:Mentality098@localhost:27017/QUIZ_GAME' })
    // cookie: { secure: true }
  }));
  var sessionstore = new MongoStore({ url: 'mongodb://rohan-boss-2:Mentality098@localhost:27017/QUIZ_GAME' });
 
app.use(passport.initialize());
app.use(passport.session());
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});
app.use(function(req,res,next){
   res.locals.isAuthenticated = req.isAuthenticated();
   next();
});
io.use(passportSocketIo.authorize({
    cookieParser: cookieParser,       // the same middleware you registrer in express
    key:          'connect.sid',       // the name of the cookie where express/connect stores its session_id
    secret:       'secret-messi',    // the session_secret to parse the cookie
    store:         sessionstore,        // we NEED to use a sessionstore. no memorystore please
    success:      onAuthorizeSuccess,  // *optional* callback on success - read more below
    fail:         onAuthorizeFail,     // *optional* callback on fail/error - read more below
  }));
  function onAuthorizeSuccess(data, accept){
    console.log('successful connection to socket.io');
    accept();
  }
  function onAuthorizeFail(data, message, error, accept){
    if(error)
    accept(new Error(message));
    // this error will be sent to the user as a special error-package
  }
passport.use(new LocalStrategy({passReqToCallback : true},
    function(req,username, password, done) {
        console.log(username);
        console.log(password);
        db.collection('user-details').findOne({user_name:username},(err,result)=>{
            var results = JSON.stringify(result);
            var results = JSON.parse(results);
            if(err) {done(err)};
            if(results == undefined){
                return done(null, false, req.flash('loginMessage', 'No User found or Invalid Password'));
            }else{
            const results = JSON.stringify(result);
            var hash1 = JSON.parse(results);
            var  hash = hash1.password;
            console.log( hash);
            bcrypt.compare(password,hash,function(err,response){
                if(response==true){
                    return done(null,{user_id:hash1._id});
                }else{
                    return done(null,false, req.flash('loginMessage','Invalid Password'));
                }
            });
         }
       });
     }
  ));

//   local strategy for signup
passport.use('local-signup',new LocalStrategy({passReqToCallback : true},
    function(req,username, password, done) {
        console.log(username);
        console.log(password);
        process.nextTick(function(){
            req.checkBody('username','Username field cannot be empty').notEmpty();
            req.checkBody('username','Username should be 4-15 characters long').len(4,15);
            req.checkBody('password','password field cannot be empty').notEmpty();
            req.checkBody('passwordMatch','password field cannot be empty').notEmpty();
            req.checkBody('password','Password should be 6-100 characters long').len(6,100);
            req.checkBody('mobile','Enter your 10 digit paytm registered mobile  number').isMobilePhone('en-IN');
            req.checkBody('mobile','Enter your 10 digit paytm registered mobile  number').len(10);
            // req.checkBody("password", "Password must include one lowercase character, one uppercase character, a number, and a special character.").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/, "i");
            // req.checkBody('passwordMatch', 'Password must be between 7-100 characters long.').len(7, 100);
            req.checkBody('passwordMatch', 'Passwords do not match, please try again.').equals(req.body.password);
            
            var errors = req.validationErrors();
            if(errors){
                var messages = [];
                errors.forEach(function(error){
                    messages.push(error.msg);
                });
                return done(null, false, req.flash('signupMessage', messages));
            }else{
                var username = req.body.username;
                var password =req.body.password;
                db.collection('user-details').findOne({user_name:username},(err,result)=>{
                    if(result){
                        return done(null, false, req.flash('signupMessage', 'That username is  already taken'));
                    }else{
            var username = req.body.username;
            var password =req.body.password;
            var mobile = req.body.mobile;
            bcrypt.hash(password, saltRounds, function(err, hash) {
            db.collection('user-details').insert({user_name:username,password:hash,phone:mobile,picurl:'/web/images/avatar _40.png',wins:0,losses:0,games:0,bot__win:0,bot__loss:0},(err,result)=>{
                console.log(result["ops"][0]["_id"]);
                var user_id = result["ops"][0]["_id"];
                return done(null,{user_id:user_id});
            });
            });
            }});}
        });
    }
        ));


app.get('/register.html', (req,res)=>{
    res.render(pathjoin14,{ message: req.flash('signupMessage') });
});
app.get('/rules', (req,res)=>{
    res.render(pathjoin18);
});
app.get('/Policy',(req,res)=>{
    res.render(pathjoin19);
});
app.get('/contact',(req,res)=>{
    res.sendFile(pathjoin10);
});
app.get('/login.html', (req,res)=>{
    res.render(pathjoin12,{ message: req.flash('loginMessage') });
});
app.post('/login.html',passport.authenticate('local',{
    successRedirect: '/website.html',
    failureRedirect: '/login.html',
    failureFlash: true
}));
app.get('/logout.html',function(req,res){
    req.logout();
    req.session.destroy();
    res.redirect('/login.html');
});
app.get('/website.html',authenticationMiddleware(),(req,res)=>{
    console.log(req.user);
    console.log(req.isAuthenticated());
    var user_id = req.session.passport.user.user_id;
    db.collection('user-details').findOne({_id:ObjectId(user_id)},(err,result)=>{
        var results = JSON.stringify(result);
        var results = JSON.parse(results);
        var name = results.user_name;
        var pic__url = results.picurl;
        var pic__url_big = results.picurlbig;
    // res.render(pathjoin13);
    res.render(pathjoin13,{ 
        file1: pic__url,
        file: pic__url_big,
        username: name 
    });
});
});

app.post('/register.html',passport.authenticate('local-signup',{
    successRedirect: '/website.html',
    failureRedirect: '/register.html',
    failureFlash: true
}));

passport.serializeUser(function(user_id, done) {
    done(null, user_id);
  });
  
  passport.deserializeUser(function(user_id, done) {
      done(null, user_id);
  });
  
  function authenticationMiddleware () {  
	return (req, res, next) => {
		console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);
        
        console.log(useragent.is(req.headers['user-agent']).safari);
        
	    if (req.isAuthenticated() &&(useragent.is(req.headers['user-agent']).chrome) == true) return next();
	    res.redirect('/login.html')
	}
}

// post request for pic uploads
app.post('/upload',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            res.render(pathjoin16,{
                msg: err
            });
        }else{
           if(req.file == undefined){
               res.render(pathjoin16,{
                   msg: 'Error: No File selected!'
               });
           } else{
            console.log(req.file);
                gm( `./public/uploads/${req.file.filename}`)
                   .resizeExact(40,40,'!')
                   .write( `./public/uploads/size/${req.file.filename}`, function (err) {
                   if (!err) console.log('done');
                });
                gm( `./public/uploads/${req.file.filename}`)
                   .resizeExact(100,100,'!')
                   .write( `./public/uploads/newsize/${req.file.filename}`, function (err) {
                   if (!err) console.log('done');
                });
                var pic_url = `/uploads/size/${req.file.filename}`;
                var pic_url_new = `/uploads/newsize/${req.file.filename}`;
                var pic_url_big = `/uploads/${req.file.filename}` ;
                console.log(pic_url);
                db.collection('user-details').update({'_id':ObjectId(req.session.passport.user.user_id)},{$set:{'picurl':pic_url,'picurlbig':pic_url_new}});
                var user_id = req.session.passport.user.user_id;
                db.collection('user-details').findOne({_id:ObjectId(user_id)},(err,result)=>{
                var results = JSON.stringify(result);
                var results = JSON.parse(results);
                var name = results.user_name;
                var mobile = results.phone;
                var win = results.wins;
                var loss = results.losses;
                var game = results.games;
                console.log(mobile);
                res.render(pathjoin13,{ 
                file1: `uploads/size/${req.file.filename}`,
                file: `uploads/newsize/${req.file.filename}`,
                username: name,
                mobile: mobile,
                win :win,
                loss:loss,
                game:game
            });
        }); 
            
           }
        }
    });
});
// get request for pic upload
app.get('/upload',authenticationMiddleware(),(req,res)=>{
    res.render(pathjoin16);
});
app.get('/profile',authenticationMiddleware(),(req,res)=>{
    var user_id = req.session.passport.user.user_id;
    db.collection('user-details').findOne({_id:ObjectId(user_id)},(err,result)=>{
        var results = JSON.stringify(result);
        var results = JSON.parse(results);
        var name = results.user_name;
        var mobile = results.phone;
        var pic__url = results.picurl;
        var pic__url_big = results.picurlbig;
         var win = results.wins;
         var loss = results.losses;
         var game = results.games;
    // res.render(pathjoin13);
    res.render(pathjoin17,{ 
        file: pic__url_big,
        username: name ,
        mobile:mobile,
        win:win,
        loss:loss,
        game:game
    });
});
});


// app.get('/GK.html',(req,res)=>{
//     res.sendFile(pathjoin1);
// });
// app.get('/maths.html',(req,res)=>{
//     res.sendFile(pathjoin2);
// });
// app.get('/bollywood.html',(req,res)=>{
//     res.sendFile(pathjoin3);
// });
// app.get('/movies.html',(req,res)=>{
//     res.sendFile(pathjoin4);
// });
// app.get('/cricket.html',(req,res)=>{
//     res.sendFile(pathjoin5);
// });
// app.get('/football.html',(req,res)=>{
//     res.sendFile(pathjoin6);
// });
// app.get('/sports.html',(req,res)=>{
//     res.sendFile(pathjoin7);
// });

// app.get('/english.html',(req,res)=>{
//     res.sendFile(pathjoin11);
// });

const pathjoin22 = path.join(__dirname,'../public/views/testtxn');
const pathjoin23 = path.join(__dirname,'../public/views/pgredirect');
const pathjoin24 = path.join(__dirname,'../public/views/response');
// paytm
// app.get('/testtxn', function(req,res){
//   console.log("in restaurant");
// console.log("--------testtxnjs----");
// res.render(pathjoin22);
//   });


// email service

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'info@quiznou.com',
    pass: 'Mentality@123'
  }
});


app.post('/contact',(req,res)=>{
    var from = req.body.email;
    var text = req.body.message;
    var username = req.body.userid;
    
    var mailOptions = {
        from: from,
        to: 'info@quiznou.com',
        subject: from,
        text: ` username: ${username} ;comment:   ` + text
    };
    
    
   transporter.sendMail(mailOptions, function(error, info){
       if (error) {
           console.log(error);
           res.render(pathjoin13);
           
       } else {
           console.log('Email sent: ' + info.response);
            var user_id = req.session.passport.user.user_id;
           db.collection('user-details').findOne({_id:ObjectId(user_id)},(err,result)=>{
           var results = JSON.stringify(result);
           var results = JSON.parse(results);
          var name = results.user_name;
          var pic__url = results.picurl;
          var pic__url_big = results.picurlbig;
    // res.render(pathjoin13);
        res.render(pathjoin13,{ 
         file1: pic__url,
         file: pic__url_big,
         username: name 
        });
     });
        //   res.render(pathjoin13);
       }
   });
    
});









// paytm gratififcation
app.get('/cashbackrohan', function(req,res){
console.log("--------vidi----");
var samarray = new Array();

samarray = 
{"request":
{"requestType":null,
"merchantGuid":"47fe516a-678c-4d2b-b9e0-dff268e3036e",
"merchantOrderId":"ORD233S339543245760051154327656743549200855388452",
"salesWalletName":"quiznoucash",
"salesWalletGuid":"2fc06d2b-fc50-491f-88f1-4d08f88cc98e",
"payeeEmailId":null,
"payeePhoneNumber":"9874365037",
"payeeSsoId":"",
"appliedToNewUsers":"N",
"amount":"1000",
"currencyCode":"INR"},
"metadata":"Testing Data",
"ipAddress":"166.62.39.177",
"platformName":"PayTM",
"operationType":"SALES_TO_USER_CREDIT"};


var finalstring = JSON.stringify(samarray);
 checksum1.genchecksumbystring(finalstring, "@F&BPUt0Wnl52%A#", function (err, result) 
        {
            request({
            url: 'https://trust.paytm.in/wallet-web/salesToUserCredit', //URL to hit
          //  qs: finalstring, //Query string data
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                    'mid': '47fe516a-678c-4d2b-b9e0-dff268e3036e',
                    'checksumhash': result
                     },
            body: finalstring//Set the body as a string
            }, function(error, response, body){
            if(error) {
                console.log(error);
            } else {
                   res.send(body);
            }
                });
        });
  });


// end


// paytm when in movies
 app.get('/paytmmovies',authenticationMiddleware(),function(req, res) {
        console.log("POST Order start");
        var paramlist ={
            ORDER_ID: uuidv4(),
            CUST_ID: req.session.passport.user.user_id,
            INDUSTRY_TYPE_ID: 'Retail109',
            CHANNEL_ID: 'WEB',
            TXN_AMOUNT: '6',
            MID: 'QUIZNO74969684583240',
            WEBSITE: 'WEBPROD',
            PAYTM_MERCHANT_KEY: 'JIcQJglw#ETVm6gi'
            }
  
  
        var paramarray = new Array();
        // console.log('rpohan');
        // console.log(paramlist["ORDER_ID"]);
        //  console.log(paramlist["MID"]);
        console.log(paramlist)
                console.log(response.statusCode, body);
        for (name in paramlist)
        {
          if (name == 'PAYTM_MERCHANT_KEY') {
               var PAYTM_MERCHANT_KEY = paramlist[name] ; 
            }else
            {
            paramarray[name] = paramlist[name] ;
            }
        }
        console.log(paramarray);
        // paramarray['CALLBACK_URL'] = 'https://www.quiznou.com/checkout/paytm/';// in case if you want to send callback
        paramarray['CALLBACK_URL'] = 'https://quiznou.com/movies.html';
        console.log(PAYTM_MERCHANT_KEY);
        checksum.genchecksum(paramarray, PAYTM_MERCHANT_KEY, function (err, result) 
        {
            
              console.log(result);
              
           res.render(pathjoin23,{ 'restdata' : result });
        });

        console.log("POST Order end");

 });

	app.get('/pgredirect', function(req,res){
   console.log("in pgdirect");
console.log("--------testtxnjs----");
res.render(pathjoin23);
  });

var txn_id ={};
var order_id = {};
var refundchecksum = {};

app.post('/movies.html', function(req,res){
   console.log("in response post");
   console.log(req.session.passport.user.user_id);
   var paramlist = req.body;
        var paramarray = new Array();
        console.log(paramlist);
        txn_id[req.session.passport.user.user_id] = paramlist["TXNID"];
        order_id[req.session.passport.user.user_id] = paramlist["ORDERID"];
        
        if(checksum.verifychecksum(paramlist,config.PAYTM_MERCHANT_KEY))
        {
              if(paramlist["STATUS"] == "PENDING"   || paramlist["STATUS"] == "TXN_FAILURE"){
                  res.render(pathjoin13);
                 
              }else if(paramlist["STATUS"] == "TXN_SUCCESS"){
                  console.log("true");
                  res.sendFile(pathjoin4);
              } else{
                  res.render(pathjoin13);
                  console.log('cheat');
              }
               
        }else
        {
           console.log("false");
        //   res.render(pathjoin24,{ 'restdata' : "false" , 'paramlist' : paramlist});
         res.render(pathjoin13);
        
        };
  });


 app.get('/gettxnstatus', function(req,res){
console.log(" vidisha renew");
console.log("renew starts start ");
        
var paramList = {};
paramList["MID"] = "QUIZNO49473602962934";
paramList["ORDER_ID"] = "rohan123451234567";
 var PAYTM_MERCHANT_KEY="HcO4kFeWafEkw1OR"; 
 
 
 checksum.genchecksum(paramList,PAYTM_MERCHANT_KEY, function (err, result) 
        {
            console.log('ahghd');
              console.log(result);
              var encodedhash = encodeURIComponent(result["CHECKSUMHASH"]);
              console.log('helloa');
               console.log(encodedhash);
              
        //   res.render(pathjoin23,{ 'restdata' : result });
        });
        res.send('hello');
  });


// paytm while on maths

app.get('/paytmmaths',authenticationMiddleware(),function(req, res) {
        console.log("POST Order start");
        var paramlist ={
            ORDER_ID: uuidv4(),
            CUST_ID: req.session.passport.user.user_id,
            INDUSTRY_TYPE_ID: 'Retail109',
            CHANNEL_ID: 'WEB',
            TXN_AMOUNT: '6',
            MID: 'QUIZNO74969684583240',
            WEBSITE: 'WEBPROD',
            PAYTM_MERCHANT_KEY: 'JIcQJglw#ETVm6gi'
            }
  
  
        var paramarray = new Array();
        console.log(paramlist)
        for (name in paramlist)
        {
          if (name == 'PAYTM_MERCHANT_KEY') {
               var PAYTM_MERCHANT_KEY = paramlist[name] ; 
            }else
            {
            paramarray[name] = paramlist[name] ;
            }
        }
        console.log(paramarray);
        // paramarray['CALLBACK_URL'] = 'https://www.quiznou.com/checkout/paytm/';// in case if you want to send callback
        paramarray['CALLBACK_URL'] = 'https://quiznou.com/maths.html';
        console.log(PAYTM_MERCHANT_KEY);
        checksum.genchecksum(paramarray, PAYTM_MERCHANT_KEY, function (err, result) 
        {
            
              console.log(result);
              
           res.render(pathjoin23,{ 'restdata' : result });
        });

        console.log("POST Order end");

 });

	app.get('/pgredirect', function(req,res){
   console.log("in pgdirect");
console.log("--------testtxnjs----");
res.render(pathjoin23);
  });



app.post('/maths.html', function(req,res){
   console.log("in response post");
   console.log(req.session.passport.user.user_id); 
   var paramlist = req.body;
        var paramarray = new Array();
        console.log(paramlist);
        txn_id[req.session.passport.user.user_id] = paramlist["TXNID"];
        order_id[req.session.passport.user.user_id] = paramlist["ORDERID"];
        
        if(checksum.verifychecksum(paramlist,config.PAYTM_MERCHANT_KEY))
        {
              if(paramlist["STATUS"] == "PENDING"   || paramlist["STATUS"] == "TXN_FAILURE"){
                  res.render(pathjoin13);
                 
              }else if(paramlist["STATUS"] == "TXN_SUCCESS"){
                  console.log("well done");
                  res.sendFile(pathjoin2);
              } else{
                  res.render(pathjoin13);
                  console.log('cheat');
              }
               
        }else
        {
           console.log("false");
        //   res.render(pathjoin24,{ 'restdata' : "false" , 'paramlist' : paramlist});
         res.render(pathjoin13);
        
        };
  });

// Paytm while on Sports
app.get('/paytmsports',authenticationMiddleware(),function(req, res) {
        console.log("POST Order start");
        var paramlist ={
            ORDER_ID: uuidv4(),
            CUST_ID: req.session.passport.user.user_id,
            INDUSTRY_TYPE_ID: 'Retail109',
            CHANNEL_ID: 'WEB',
            TXN_AMOUNT: '6',
            MID: 'QUIZNO74969684583240',
            WEBSITE: 'WEBPROD',
            PAYTM_MERCHANT_KEY: 'JIcQJglw#ETVm6gi'
            }
  
  
        var paramarray = new Array();
        console.log(paramlist)
        for (name in paramlist)
        {
          if (name == 'PAYTM_MERCHANT_KEY') {
               var PAYTM_MERCHANT_KEY = paramlist[name] ; 
            }else
            {
            paramarray[name] = paramlist[name] ;
            }
        }
        console.log(paramarray);
        // paramarray['CALLBACK_URL'] = 'https://www.quiznou.com/checkout/paytm/';// in case if you want to send callback
        paramarray['CALLBACK_URL'] = 'https://quiznou.com/sports.html';
        console.log(PAYTM_MERCHANT_KEY);
        checksum.genchecksum(paramarray, PAYTM_MERCHANT_KEY, function (err, result) 
        {
            
              console.log(result);
              
           res.render(pathjoin23,{ 'restdata' : result });
        });

        console.log("POST Order end");

 });

	app.get('/pgredirect', function(req,res){
   console.log("in pgdirect");
console.log("--------testtxnjs----");
res.render(pathjoin23);
  });



app.post('/sports.html', function(req,res){
   console.log("in response post");
   console.log(req.session.passport.user.user_id);
   var paramlist = req.body;
        var paramarray = new Array();
        console.log(paramlist);
        txn_id[req.session.passport.user.user_id] = paramlist["TXNID"];
        order_id[req.session.passport.user.user_id] = paramlist["ORDERID"];
        
        if(checksum.verifychecksum(paramlist,config.PAYTM_MERCHANT_KEY))
        {
              if(paramlist["STATUS"] == "PENDING"   || paramlist["STATUS"] == "TXN_FAILURE"){
                  res.render(pathjoin13);
              }else if(paramlist["STATUS"] == "TXN_SUCCESS"){
                  console.log("true");
                  console.log('sports')
                  res.sendFile(pathjoin7);
              }else{
                  res.render(pathjoin13);
                  console.log('cheat');
              }
               
        }else
        {
           console.log("false");
        //   res.render(pathjoin24,{ 'restdata' : "false" , 'paramlist' : paramlist});
         res.render(pathjoin13);
        
        };
  });

// while on GK paytm

app.get('/paytmGK',authenticationMiddleware(),function(req, res) {
        console.log("POST Order start");
        var paramlist ={
            ORDER_ID: uuidv4(),
            CUST_ID: req.session.passport.user.user_id,
            INDUSTRY_TYPE_ID: 'Retail109',
            CHANNEL_ID: 'WEB',
            TXN_AMOUNT: '6',
            MID: 'QUIZNO74969684583240',
            WEBSITE: 'WEBPROD',
            PAYTM_MERCHANT_KEY: 'JIcQJglw#ETVm6gi'
            }
  
  
        var paramarray = new Array();
        // console.log('rpohan');
        // console.log(paramlist["ORDER_ID"]);
        //  console.log(paramlist["MID"]);
        console.log(paramlist)
        for (name in paramlist)
        {
          if (name == 'PAYTM_MERCHANT_KEY') {
               var PAYTM_MERCHANT_KEY = paramlist[name] ; 
            }else
            {
            paramarray[name] = paramlist[name] ;
            }
        }
        console.log(paramarray);
        // paramarray['CALLBACK_URL'] = 'https://www.quiznou.com/checkout/paytm/';// in case if you want to send callback
        paramarray['CALLBACK_URL'] = 'https://quiznou.com/GK.html';
        console.log(PAYTM_MERCHANT_KEY);
        checksum.genchecksum(paramarray, PAYTM_MERCHANT_KEY, function (err, result) 
        {
            
              console.log(result);
              
           res.render(pathjoin23,{ 'restdata' : result });
        });

        console.log("POST Order end");

 });

	app.get('/pgredirect', function(req,res){
   console.log("in pgdirect");
console.log("--------testtxnjs----");
res.render(pathjoin23);
  });



app.post('/GK.html', function(req,res){
   console.log("in response post");
   console.log(req.session.passport.user.user_id);
   var paramlist = req.body;
        var paramarray = new Array();
        console.log(paramlist);
        txn_id[req.session.passport.user.user_id] = paramlist["TXNID"];
        order_id[req.session.passport.user.user_id] = paramlist["ORDERID"];
        
        if(checksum.verifychecksum(paramlist,config.PAYTM_MERCHANT_KEY))
        {
              if(paramlist["STATUS"] == "PENDING"  || paramlist["STATUS"] == "TXN_FAILURE" ){
                  res.render(pathjoin13); 
                
              }else if(paramlist["STATUS"] == "TXN_SUCCESS"){
                  console.log('gk');
                  console.log("true");
                  res.sendFile(pathjoin1);
              } else{
                  res.render(pathjoin13);
                  console.log('cheat');
              }
               
        }else
        {
           console.log("false");
        //   res.render(pathjoin24,{ 'restdata' : "false" , 'paramlist' : paramlist});
         res.render(pathjoin13);
        
        };
  });








// var room_List_history = {};
var room_List_GK = {};
// var room_List_bollywood = {};
var room_List_movies = {};
var room_List_maths = {};
var room_List_science = {};  
var room_List_sports = {};
// var room_List_football = {};
// var room_List_cricket = {};
// var room_List_tennis = {};
var room_List_english = {};

  // enemies no
    var totalenemies ={};

function room() {
	this.room_id;
	this.player_lst = [];
	this.endlist = [];
	this.max_num = 3;
} 
var id_room = {};
var playerlistbysocket = {};

// GK
function onNewplayer_GK (data) {
	var room_id = find_Roomid_GK(); 
    var room = room_List_GK[room_id]; 
    //join the room
    this.room_id = room_id;
    this.join(this.room_id);
    id_room[this.id] = this.room_id;
    console.log(room_id );
    
    var current_info = {
		id: data.id
	};  	
    var player_lst = room_List_GK[room_id].player_lst;
    for (i = 0; i < player_lst.length; i++) {
		existingPlayer = player_lst[i];
		var player_info = {
			id: existingPlayer		
		};
		//send message to the sender-client only
		this.emit("new_enemyPlayer_GK", player_info);
    }
    this.broadcast.to(room_id).emit('new_enemyPlayer_GK', current_info);
    room.player_lst.push(data.id);
    playerlistbysocket[this.id] = player_lst;
    console.log('no of players connected to this room is ' + player_lst.length);

    if((player_lst.length) === 2 ){
        setTimeout(function(){
            
        if((player_lst.length) === 2 || (player_lst.length) === 3)
        {
            if((player_lst.length) === 2){
                var room = room_List_GK[room_id]; 
                room.max_num = 2;
            }

        var c =0;
        db.collection('GK_QUESTIONS').find({}).toArray().then((docs)=>{
            var GKquesn = JSON.stringify(docs,undefined,2);
            var GKQuesn = JSON.parse(GKquesn);
        var x = Math.floor(Math.random() * (GKQuesn.length));
        io.to(room_id).emit('GK', {
            Question1:GKQuesn[x],
            id:room_id
        });
     var stop =  setInterval(function(){
      var x = Math.floor(Math.random() *  (GKQuesn.length));
      io.to(room_id).emit('GK', {
        Question1:GKQuesn[x],
        id:room_id
    });
    c+=1;
    if(c===8){
        clearInterval(stop);
        io.to(room_id).emit('stop',{text: 'Game Over',roomid: room_id});     
    }
},12000);
        });
     
}

},8000);
}

setTimeout(function(){
    if((player_lst.length) === 1){
        
        // player bot configuration
         var user_id = this.request.user.user_id;
         db.collection('user-details').findOne({_id:ObjectId(user_id)},(err,result)=>{
         var results = JSON.stringify(result);
         var results = JSON.parse(results);
         var botwin = results.bot__win;
         var botloss = results.bot__loss;
     
         if(((botwin - botloss) < 6) ){
             
               var room = room_List_GK[room_id]; 
                room.max_num = 1;
       
        let numbers =  [7,5,6,7,7,7,0,0];
        let numbers1 = [0,8,0,4,4,4,6,0];
        let numbers2 = [8,9,9,7,8,9,8,8];
        let numbers3 = [9,8,0,9,0,1,8,8];
        let numbers4 = [4,3,0,1,0,0,2,0];
        let numbers5 = [0,0,2,5,4,0,0,0];
        
        let shuffle = (o) => {
            for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
          return o;
        };
         
        var random = shuffle(numbers);
        var random1 = shuffle(numbers1);
        var random2 = shuffle(numbers2);
        var random3 = shuffle(numbers3);
        var random4 = shuffle(numbers4);
        var random5 = shuffle(numbers5);
       
        
        var bot = [random,random1,random2,random3,random4,random5];
        var gets = Math.floor(Math.random() * (bot.length));
        var bot__scores = bot[gets];
        var c = 0;
        io.to(room_id).emit('btscore',{num:bot__scores[c]});
         db.collection('GK_QUESTIONS').find({}).toArray().then((docs)=>{
            var GKquesn = JSON.stringify(docs,undefined,2);
            var GKQuesn = JSON.parse(GKquesn);
        var x = Math.floor(Math.random() * (GKQuesn.length));
        io.to(room_id).emit('GK_1', {
            Question1:GKQuesn[x],
            id:room_id
        });
     var stop =  setInterval(function(){
      var x = Math.floor(Math.random() *  (GKQuesn.length));
      io.to(room_id).emit('GK_1', {
        Question1:GKQuesn[x],
        id:room_id
    });
     c+=1;
    io.to(room_id).emit('btscore',{num:bot__scores[c]});
   
    if(c===8){
        clearInterval(stop);
        io.to(room_id).emit('rstop',{text: 'Game Over',roomid: room_id});     
    }
},13000);
        });
      
      let names = ['rohan','seth','kinshuk','ajit07','killer','bhaskar11','punit','adam1','virat','sundar','akash','miki','ricky','rajat08','kuldeep','naveen','puja','preeti','kabir','rashmi','ritwik','ankit','sania','priya','rahul09','raju77'];
            
      var name = Math.floor(Math.random() *  (names.length));
      
      io.to(room_id).emit('renemy_name',{roomid: room_id,name: names[name]});
      
         }else if(((botwin - botloss)>=6) &&((botwin - botloss)<19)){
                var room = room_List_GK[room_id]; 
                room.max_num = 1;
       
        let numbers = [8,7,8,8,8,7,7,7];
        let numbers1 = [8,7,8,8,7,8,8,7];
        let numbers2 = [8,2,0,0,7,0,4,7];
        let numbers3 = [3,0,0,7,0,8,0,8];
        let numbers4 = [7,8,5,7,8,8,8,8];
        let numbers5 =[0,4,3,3,0,8,0,0];
        let numbers6 =[7,8,8,8,9,7,9,9];
        let numbers7 =[9,9,9,8,9,9,9,7];
        
        let shuffle = (o) => {
            for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
          return o;
        };
         
        var random = shuffle(numbers);
        var random1 = shuffle(numbers1);
        var random2 = shuffle(numbers2);
        var random3 = shuffle(numbers3);
        var random4 = shuffle(numbers4);
        var random5 = shuffle(numbers5);
        var random6 = shuffle(numbers6);
        var random7 = shuffle(numbers7);
        
        var bot = [random,random1,random2,random3,random4,random5,random6,random7];
        var gets = Math.floor(Math.random() * (bot.length));
        var bot__scores = bot[gets];
        var c = 0;
        io.to(room_id).emit('btscore',{num:bot__scores[c]});
         db.collection('GK_QUESTIONS').find({}).toArray().then((docs)=>{
            var GKquesn = JSON.stringify(docs,undefined,2);
            var GKQuesn = JSON.parse(GKquesn);
        var x = Math.floor(Math.random() * (GKQuesn.length));
        io.to(room_id).emit('GK_1', {
            Question1:GKQuesn[x],
            id:room_id
        });
     var stop =  setInterval(function(){
      var x = Math.floor(Math.random() *  (GKQuesn.length));
      io.to(room_id).emit('GK_1', {
        Question1:GKQuesn[x],
        id:room_id
    });
     c+=1;
    io.to(room_id).emit('btscore',{num:bot__scores[c]});
   
    if(c===8){
        clearInterval(stop);
        io.to(room_id).emit('rstop',{text: 'Game Over',roomid: room_id});     
    }
},13000);
        });
      
      let names = ['vihaan','reyansh','ritwik','rajan','kunder','kundan','satish','Aryan','Ansh','Kinshuk','krishna','mantosh08','shaurya','dhruv','kuldeep','dhananjay','vicky','mithali','atharva','ishaan','aditi','ishaan','aditya','anik','arush','aarush'];
      var name = Math.floor(Math.random() *  (names.length));
      
      io.to(room_id).emit('renemy_name',{roomid: room_id,name: names[name]});
             
         } else{
               io.to(room_id).emit('end_search', {
                  text:'nn'
             
              });
         }
         });
   
        
        //end of config 
    } 
}.bind(this),20000);
io.to(room_id).emit('waiting', {
    text:'waiting'
 });

}

function find_Roomid_GK(){
    for(var key in room_List_GK){
        var room = room_List_GK[key];
        if(room.player_lst.length < room.max_num){
            // console.log(room.max_num);
            // console.log(room.player_lst.length);
            return key;
        }
    } 
    // did not find a room
	var room_id = create_Room_GK();
    return room_id;
}

function create_Room_GK(){
    var new_roomid = uuidv4();
    var new_room = new room();
    new_room.room_id = new_roomid;
    room_List_GK[new_roomid] = new_room;
    return new_roomid;
}


// MOVIES
function onNewplayer_movies (data) {
	var room_id = find_Roomid_movies(); 
    var room = room_List_movies[room_id]; 
    //join the room
    this.room_id = room_id;
    this.join(this.room_id);
    id_room[this.id] = this.room_id;

 
    var current_info = {
		id: data.id
	};  	
    var player_lst = room_List_movies[room_id].player_lst;
    // room.player_lst.push(data.id);
    
    for (i = 0; i < player_lst.length; i++) {
		existingPlayer = player_lst[i];
		var player_info = {
			id: existingPlayer		
		};
		
		//send message to the sender-client only
		this.emit("new_enemyPlayer_movies", player_info);
	}
    this.broadcast.to(room_id).emit('new_enemyPlayer_movies', current_info);
    room.player_lst.push(data.id);
    playerlistbysocket[this.id] = player_lst;

    console.log('no of players connected to this room is ' + player_lst.length);
    if((player_lst.length) === 2)
    {
         setTimeout(function(){
            
        if((player_lst.length) === 2 || (player_lst.length) === 3)
        {
            if((player_lst.length) === 2){
                var room = room_List_movies[room_id]; 
                room.max_num = 2;
            }

        var c =0;
        db.collection('movies_QUESTIONS').find({}).toArray().then((docs)=>{
            var moviesquesn = JSON.stringify(docs,undefined,2);
            var moviesQuesn = JSON.parse(moviesquesn);
        var x = Math.floor(Math.random() * (moviesQuesn.length));
        io.to(room_id).emit('movies', {
            Question1:moviesQuesn[x],
            id:room_id
        });
      var stop =  setInterval(function(){
      var x = Math.floor(Math.random() *  (moviesQuesn.length));
      io.to(room_id).emit('movies', {
        Question1:moviesQuesn[x],
        id:room_id
    });
    c+=1;
    if(c===8){
        clearInterval(stop);
        io.to(room_id).emit('stop',{text: 'Game Over',roomid: room_id});      
    }
},12000);
        });
     
}

},8000);
}

setTimeout(function(){
    if((player_lst.length) === 1){
         // player bot configuration
         var user_id = this.request.user.user_id;
         db.collection('user-details').findOne({_id:ObjectId(user_id)},(err,result)=>{
         var results = JSON.stringify(result);
         var results = JSON.parse(results);
         var botwin = results.bot__win;
         var botloss = results.bot__loss;
         
         if(((botwin - botloss) < 6) ){
             
              var room = room_List_movies[room_id]; 
              room.max_num = 1;
                
       let numbers =  [7,7,6,7,7,7,8,0];
        let numbers1 = [0,8,0,7,7,8,6,0];
        let numbers2 = [0,9,0,7,8,9,8,8];
        let numbers3 = [1,1,0,3,0,1,2,4];
        let numbers4 = [4,3,0,1,0,0,2,0];
        let numbers5 = [0,0,2,5,4,0,0,0];
        
        let shuffle = (o) => {
            for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
          return o;
        };
         
        var random = shuffle(numbers);
        var random1 = shuffle(numbers1);
        var random2 = shuffle(numbers2);
        var random3 = shuffle(numbers3);
        var random4 = shuffle(numbers4);
        var random5 = shuffle(numbers5);
        
        
        var bot = [random,random1,random2,random3,random4,random5];
        var gets = Math.floor(Math.random() * (bot.length));
        var bot__scores = bot[gets];
        var c = 0;
        io.to(room_id).emit('btscore',{num:bot__scores[c]});
         db.collection('movies_QUESTIONS').find({}).toArray().then((docs)=>{
            var moviesquesn = JSON.stringify(docs,undefined,2);
            var moviesQuesn = JSON.parse(moviesquesn);
        var x = Math.floor(Math.random() * (moviesQuesn.length));
        io.to(room_id).emit('movies_1', {
            Question1:moviesQuesn[x],
            id:room_id
        });
     var stop =  setInterval(function(){
      var x = Math.floor(Math.random() *  (moviesQuesn.length));
      io.to(room_id).emit('movies_1', {
        Question1:moviesQuesn[x],
        id:room_id
    });
     c+=1;
    io.to(room_id).emit('btscore',{num:bot__scores[c]});
   
    if(c===8){
        clearInterval(stop);
        io.to(room_id).emit('rstop',{text: 'Game Over',roomid: room_id});     
    }
},13000);
        });
      
      let names = ['rohan','abhishek','ritwik','rajan','kunder','quiz','sachin','giresh','virat','suraj','ahilya','manjhi','rahul','rranjit','kuldeep','abhi1','raj2','micky3','kabir','sanju','aditi','dia','mirza','sunny','qwerty','raju77'];
            
      var name = Math.floor(Math.random() *  (names.length));
      
      io.to(room_id).emit('renemy_name',{roomid: room_id,name: names[name]});
      
         }else if(((botwin - botloss)>=6) &&((botwin - botloss)<25)){
              var room = room_List_movies[room_id]; 
              room.max_num = 1;
                
        let numbers = [0,0,0,0,3,8,4,7];
        let numbers1 = [2,7,0,8,0,1,0,8];
        let numbers2 = [2,2,2,8,0,0,0,7];
        let numbers3 = [7,4,3,7,3,0,8,8];
        let numbers4 = [8,8,8,8,8,8,8,8];
        let numbers5 =[8,8,8,8,8,8,7,7];
        let numbers6 =[7,8,7,8,8,8,7,7];
        let numbers7 =[8,8,2,7,8,0,8,8];
        
        let shuffle = (o) => {
            for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
          return o;
        };
         
        var random = shuffle(numbers);
        var random1 = shuffle(numbers1);
        var random2 = shuffle(numbers2);
        var random3 = shuffle(numbers3);
        var random4 = shuffle(numbers4);
        var random5 = shuffle(numbers5);
        var random6 = shuffle(numbers6);
        var random7 = shuffle(numbers7);
        
        var bot = [random,random1,random2,random3,random4,random5,random6,random7];
        var gets = Math.floor(Math.random() * (bot.length));
        var bot__scores = bot[gets];
        var c = 0;
        io.to(room_id).emit('btscore',{num:bot__scores[c]});
         db.collection('movies_QUESTIONS').find({}).toArray().then((docs)=>{
            var moviesquesn = JSON.stringify(docs,undefined,2);
            var moviesQuesn = JSON.parse(moviesquesn);
        var x = Math.floor(Math.random() * (moviesQuesn.length));
        io.to(room_id).emit('movies_1', {
            Question1:moviesQuesn[x],
            id:room_id
        });
     var stop =  setInterval(function(){
      var x = Math.floor(Math.random() *  (moviesQuesn.length));
      io.to(room_id).emit('movies_1', {
        Question1:moviesQuesn[x],
        id:room_id
    });
     c+=1;
    io.to(room_id).emit('btscore',{num:bot__scores[c]});
   
    if(c===8){
        clearInterval(stop);
        io.to(room_id).emit('rstop',{text: 'Game Over',roomid: room_id});     
    }
},13000);
        });
      
      let names = ['vihaan','reyansh','ritwik','rajan','kunder','kundan','satish','Aryan','Ansh','Kinshuk','krishna','mantosh08','shaurya','dhruv','kuldeep','dhananjay','vicky','mithali','atharva','ishaan','aditi','ishaan','aditya','anik','arush','aarush'];
            
      var name = Math.floor(Math.random() *  (names.length));
      
      io.to(room_id).emit('renemy_name',{roomid: room_id,name: names[name]});
             
         }else{
               io.to(room_id).emit('end_search', {
                  text:'nn'
             
              });
         }
         });
   
        
        //end of config 
    } 
}.bind(this),20000);
io.to(room_id).emit('waiting', {
    text:'waiting'
 });
}
        

function find_Roomid_movies(){
    for(var key in room_List_movies){
        var room = room_List_movies[key];
        if(room.player_lst.length < room.max_num){
            // console.log(room.max_num);
            // console.log(room.player_lst.length);
            return key;
        }
    } 
    // did not find a room
	var room_id = create_Room_movies();
    return room_id;
}

function create_Room_movies(){
    var new_roomid = uuidv4();
    var new_room = new room();
    new_room.room_id = new_roomid;
    room_List_movies[new_roomid] = new_room;
    return new_roomid;
}

// SPORTS
function onNewplayer_sports (data) {
	var room_id = find_Roomid_sports(); 
    var room = room_List_sports[room_id]; 
    //join the room
    this.room_id = room_id;
    this.join(this.room_id);
    id_room[this.id] = this.room_id;
    
    var current_info = {
		id: data.id
	};  	
    var player_lst = room_List_sports[room_id].player_lst;
    // room.player_lst.push(data.id);
    
    for (i = 0; i < player_lst.length; i++) {
		existingPlayer = player_lst[i];
		var player_info = {
			id: existingPlayer		
		};
		//send message to the sender-client only
		this.emit("new_enemyPlayer_sports", player_info);
	}
    this.broadcast.to(room_id).emit('new_enemyPlayer_sports', current_info);
    room.player_lst.push(data.id);
    playerlistbysocket[this.id] = player_lst;
    console.log('no of players connected to this room is ' + player_lst.length);
    if((player_lst.length) === 2){
     setTimeout(function(){
            
        if((player_lst.length) === 2 || (player_lst.length) === 3)
        {
            if((player_lst.length) === 2){
                var room = room_List_sports[room_id]; 
                room.max_num = 2;
            }

        var c =0;
        db.collection('sports_QUESTIONS').find({}).toArray().then((docs)=>{
            var sportsquesn = JSON.stringify(docs,undefined,2);
            var sportsQuesn = JSON.parse(sportsquesn);
        var x = Math.floor(Math.random() * (sportsQuesn.length));
        io.to(room_id).emit('sports', {
            Question1:sportsQuesn[x],
            id:room_id
        });
      var stop =  setInterval(function(){
      var x = Math.floor(Math.random() *  (sportsQuesn.length));
      io.to(room_id).emit('sports', {
        Question1:sportsQuesn[x],
        id:room_id
    });
    c+=1;
    if(c===8){
        clearInterval(stop);
        io.to(room_id).emit('stop',{text: 'Game Over',roomid: room_id});     
    }
},12000);
        });
     
}

},10000);
}

setTimeout(function(){
    if((player_lst.length) === 1){
         // player bot configuration
         var user_id = this.request.user.user_id;
         db.collection('user-details').findOne({_id:ObjectId(user_id)},(err,result)=>{
         var results = JSON.stringify(result);
         var results = JSON.parse(results);
         var botwin = results.bot__win;
         var botloss = results.bot__loss;
        
         if(((botwin - botloss) < 6) ){
             
        var room = room_List_sports[room_id]; 
        room.max_num = 1;
        let numbers =  [7,5,6,7,7,7,0,0];
        let numbers1 = [0,8,0,4,4,4,6,0];
        let numbers2 = [0,9,0,7,8,9,8,8];
        let numbers3 = [1,1,0,3,0,1,2,4];
        let numbers4 = [4,3,0,1,0,0,2,0];
        let numbers5 = [0,0,2,5,4,0,0,0];
        
        let shuffle = (o) => {
            for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
          return o;
        };
         
        var random = shuffle(numbers);
        var random1 = shuffle(numbers1);
        var random2 = shuffle(numbers2);
        var random3 = shuffle(numbers3);
        var random4 = shuffle(numbers4);
        var random5 = shuffle(numbers5);
        
        var bot = [random,random1,random2,random3,random4,random5];
        var gets = Math.floor(Math.random() * (bot.length));
        var bot__scores = bot[gets];
        var c = 0;
        io.to(room_id).emit('btscore',{num:bot__scores[c]});
         db.collection('sports_QUESTIONS').find({}).toArray().then((docs)=>{
            var sportsquesn = JSON.stringify(docs,undefined,2);
            var sportsQuesn = JSON.parse(sportsquesn);
        var x = Math.floor(Math.random() * (sportsQuesn.length));
        io.to(room_id).emit('sports_1', {
            Question1:sportsQuesn[x],
            id:room_id
        });
     var stop =  setInterval(function(){
      var x = Math.floor(Math.random() *  (sportsQuesn.length));
      io.to(room_id).emit('sports_1', {
        Question1:sportsQuesn[x],
        id:room_id
    });
     c+=1;
    io.to(room_id).emit('btscore',{num:bot__scores[c]});
   
    if(c===8){
        clearInterval(stop);
        io.to(room_id).emit('rstop',{text: 'Game Over',roomid: room_id});     
    }
},13000);
        });
      
      let names = ['rithik','abhhishek','rajat1','raman','kajal','ahilya','anjani','aditi','praveen','bengal','akash','ajit','Rajat09','rajesh','kuldeep','abhimanyu','turampa','rumpa','kabir','sanju','ranvijay','diksha','mirza','himesh7','bhaskar4','raju77'];
            
      var name = Math.floor(Math.random() *  (names.length));
      
      io.to(room_id).emit('renemy_name',{roomid: room_id,name: names[name]});
      
         }else if(((botwin - botloss)>=6) && ((botwin - botloss)<25)){
        var room = room_List_sports[room_id]; 
        room.max_num = 1;
        let numbers = [3,3,8,3,0,2,0,0];
        let numbers1 = [8,7,8,3,0,0,0,0];
        let numbers2 = [8,0,0,0,2,6,2,7];
        let numbers3 = [8,8,8,2,7,2,1,8];
        let numbers4 = [7,8,9,7,8,8,8,8];
        let numbers5 =[7,8,7,8,7,8,7,7];
        let numbers6 =[7,8,7,6,7,7,6,8];
        let numbers7 =[7,7,8,5,0,7,5,0];
        
        let shuffle = (o) => {
            for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
          return o;
        };
         
        var random = shuffle(numbers);
        var random1 = shuffle(numbers1);
        var random2 = shuffle(numbers2);
        var random3 = shuffle(numbers3);
        var random4 = shuffle(numbers4);
        var random5 = shuffle(numbers5);
        var random6 = shuffle(numbers6);
        var random7 = shuffle(numbers7);
        
        var bot = [random,random1,random2,random3,random4,random5,random6,random7];
        var gets = Math.floor(Math.random() * (bot.length));
        var bot__scores = bot[gets];
        var c = 0;
        io.to(room_id).emit('btscore',{num:bot__scores[c]});
         db.collection('sports_QUESTIONS').find({}).toArray().then((docs)=>{
            var sportsquesn = JSON.stringify(docs,undefined,2);
            var sportsQuesn = JSON.parse(sportsquesn);
        var x = Math.floor(Math.random() * (sportsQuesn.length));
        io.to(room_id).emit('sports_1', {
            Question1:sportsQuesn[x],
            id:room_id
        });
     var stop =  setInterval(function(){
      var x = Math.floor(Math.random() *  (sportsQuesn.length));
      io.to(room_id).emit('sports_1', {
        Question1:sportsQuesn[x],
        id:room_id
    });
     c+=1;
    io.to(room_id).emit('btscore',{num:bot__scores[c]});
   
    if(c===8){
        clearInterval(stop);
        io.to(room_id).emit('rstop',{text: 'Game Over',roomid: room_id});     
    }
},13000);
        });
      
      let names = ['vihaan','reyansh','ritwik','rajan','kunder','kundan','satish','Aryan','Ansh','Kinshuk','krishna','mantosh08','shaurya','dhruv','kuldeep','dhananjay','vicky','mithali','atharva','ishaan','aditi','ishaan','aditya','anik','arush','aarush'];
            
      var name = Math.floor(Math.random() *  (names.length));
      
      io.to(room_id).emit('renemy_name',{roomid: room_id,name: names[name]});
         } else{
               io.to(room_id).emit('end_search', {
                  text:'nn'
             
              });
         }
         });
   
        
        //end of config 
    } 
}.bind(this),20000);
io.to(room_id).emit('waiting', {
    text:'waiting'
 });
}
   

function find_Roomid_sports(){
    for(var key in room_List_sports){
        var room = room_List_sports[key];
        if(room.player_lst.length < room.max_num){
            // console.log(room.max_num);
            // console.log(room.player_lst.length);
            return key;
        }
    } 
    // did not find a room
	var room_id = create_Room_sports();
    return room_id;
}

function create_Room_sports(){
    var new_roomid = uuidv4();
    var new_room = new room();
    new_room.room_id = new_roomid;
    room_List_sports[new_roomid] = new_room;
    return new_roomid;
}


function onNewplayer_maths (data) {
	var room_id = find_Roomid_maths(); 
    var room = room_List_maths[room_id]; 
    //join the room
    this.room_id = room_id;
    this.join(this.room_id);
    id_room[this.id] = this.room_id;
   
    var current_info = {
		id: data.id
	};  	
    var player_lst = room_List_maths[room_id].player_lst;
    // room.player_lst.push(data.id);
    console.log(player_lst.length);
    for (i = 0; i < player_lst.length; i++) {
		existingPlayer = player_lst[i];
		var player_info = {
			id: existingPlayer		
		};
		//send message to the sender-client only
		this.emit("new_enemyPlayer_maths", player_info);
	}
    this.broadcast.to(room_id).emit('new_enemyPlayer_maths', current_info);
    room.player_lst.push(data.id);
    playerlistbysocket[this.id] = player_lst;
    console.log('no of players connected to this room is ' + player_lst.length);
    if((player_lst.length) === 2 ){
        setTimeout(function(){
            
        if((player_lst.length) === 2 || (player_lst.length) === 3)
        {
            if((player_lst.length) === 2){
                var room = room_List_maths[room_id]; 
                room.max_num = 2;
            }

        var c =0;
        db.collection('maths_QUESTIONS').find({}).toArray().then((docs)=>{
            var mathsquesn = JSON.stringify(docs,undefined,2);
            var mathsQuesn = JSON.parse(mathsquesn);
        var x = Math.floor(Math.random() * (mathsQuesn.length));
        io.to(room_id).emit('maths', {
            Question1:mathsQuesn[x],
            id:room_id
        });
      var stop =  setInterval(function(){
      var x = Math.floor(Math.random() *  (mathsQuesn.length));
      io.to(room_id).emit('maths', {
        Question1:mathsQuesn[x],
        id:room_id
    });
    c+=1;
    if(c===8){
        clearInterval(stop);
        io.to(room_id).emit('stop',{text: 'Game Over',roomid: room_id});     
    }
},15000);
        });
     
}

},10000);
}

setTimeout(function(){
    if((player_lst.length) === 1){
    
//      // player bot configuration
        var user_id = this.request.user.user_id;
         db.collection('user-details').findOne({_id:ObjectId(user_id)},(err,result)=>{
         var results = JSON.stringify(result);
         var results = JSON.parse(results);
         var botwin = results.bot__win;
         var botloss = results.bot__loss;
         if(((botwin - botloss) < 6) ){
             
        var room = room_List_maths[room_id]; 
        room.max_num = 1;
        let numbers =  [10,8,10,10,10,10,9,9];
        let numbers1 = [10,8,9,9,10,10,10,9];
        let numbers2 = [10,9,9,10,9,9,10,10];
        let numbers3 = [10,10,10,9,9,9,9,10];
        let numbers4 = [4,9,0,1,9,9,2,9];
        let numbers5 = [7,9,9,9,4,9,8,9];
        
        let shuffle = (o) => {
            for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
          return o;
        };
         
        var random = shuffle(numbers);
        var random1 = shuffle(numbers1);
        var random2 = shuffle(numbers2);
        var random3 = shuffle(numbers3);
        var random4 = shuffle(numbers4);
        var random5 = shuffle(numbers5);
        
        var bot = [random,random1,random2,random3,random4,random5];
        var gets = Math.floor(Math.random() * (bot.length));
        var bot__scores = bot[gets];
        var c = 0;
        io.to(room_id).emit('btscore',{num:bot__scores[c]});
         db.collection('maths_QUESTIONS').find({}).toArray().then((docs)=>{
            var mathsquesn = JSON.stringify(docs,undefined,2);
            var mathsQuesn = JSON.parse(mathsquesn);
        var x = Math.floor(Math.random() * (mathsQuesn.length));
        io.to(room_id).emit('maths_1', {
            Question1:mathsQuesn[x],
            id:room_id
        });
     var stop =  setInterval(function(){
      var x = Math.floor(Math.random() *  (mathsQuesn.length));
      io.to(room_id).emit('maths_1', {
        Question1:mathsQuesn[x],
        id:room_id
    });
     c+=1;
    io.to(room_id).emit('btscore',{num:bot__scores[c]});
   
    if(c===8){
        clearInterval(stop);
        io.to(room_id).emit('rstop',{text: 'Game Over',roomid: room_id});     
    }
},15000);
        });
      
      let names = ['aarav','vivaan','sundar','roshan','aditya','vihaan','arjun','arjun7','reyansh','tauseef','azam','abhas','ricky','rajesh','kuldeep','abhi1','raj2','micky3','kabir','sanju','ranbir','deeksha','mirza','salman','adarsh','badal'];
            
      var name = Math.floor(Math.random() *  (names.length));
      
      io.to(room_id).emit('renemy_name',{roomid: room_id,name: names[name]});
      
         }else if(((botwin - botloss)>=6) && ((botwin - botloss)<25)){
        var room = room_List_maths[room_id]; 
        room.max_num = 1;
        let numbers = [0,5,5,4,5,5,2,7];
        let numbers1 = [0,10,4,4,4,0,8,9];
        let numbers2 = [10,0,9,8,9,0,9,9];
        let numbers3 = [8,8,8,8,7,8,8,9];
        let numbers4 = [7,8,8,7,8,8,8,8];
        let numbers5 =[9,10,10,10,10,9,8,9];
        let numbers6 =[9,8,8,9,8,10,9,9];
        let numbers7 =[9,9,8,8,8,9,10,8];
        
        let shuffle = (o) => {
            for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
          return o;
        };
         
        var random = shuffle(numbers);
        var random1 = shuffle(numbers1);
        var random2 = shuffle(numbers2);
        var random3 = shuffle(numbers3);
        var random4 = shuffle(numbers4);
        var random5 = shuffle(numbers5);
        var random6 = shuffle(numbers6);
        var random7 = shuffle(numbers7);
        
        var bot = [random,random1,random2,random3,random4,random5,random6,random7];
        var gets = Math.floor(Math.random() * (bot.length));
        var bot__scores = bot[gets];
        var c = 0;
        io.to(room_id).emit('btscore',{num:bot__scores[c]});
         db.collection('maths_QUESTIONS').find({}).toArray().then((docs)=>{
            var mathsquesn = JSON.stringify(docs,undefined,2);
            var mathsQuesn = JSON.parse(mathsquesn);
        var x = Math.floor(Math.random() * (mathsQuesn.length));
        io.to(room_id).emit('maths_1', {
            Question1:mathsQuesn[x],
            id:room_id
        });
     var stop =  setInterval(function(){
      var x = Math.floor(Math.random() *  (mathsQuesn.length));
      io.to(room_id).emit('maths_1', {
        Question1:mathsQuesn[x],
        id:room_id
    });
     c+=1;
    io.to(room_id).emit('btscore',{num:bot__scores[c]});
   
    if(c===8){
        clearInterval(stop);
        io.to(room_id).emit('rstop',{text: 'Game Over',roomid: room_id});     
    }
},15000);
        });
      
      let names = ['vihaan','reyansh','ritwik','rajan','kunder','kundan','satish','Aryan','Ansh','Kinshuk','krishna','mantosh08','shaurya','dhruv','kuldeep','dhananjay','vicky','mithali','atharva','ishaan','aditi','ishaan','aditya','anik','arush','aarush'];
      var name = Math.floor(Math.random() *  (names.length));
      
      io.to(room_id).emit('renemy_name',{roomid: room_id,name: names[name]});
             
         } else{
               io.to(room_id).emit('end_search', {
                  text:'nn'
             
              });
         }
         });
    }
        //end of config 
}.bind(this),20000);

io.to(room_id).emit('waiting', {
    text:'waiting'
 });
}





function find_Roomid_maths(){
    for(var key in room_List_maths){
        var room = room_List_maths[key];
        if(room.player_lst.length < room.max_num){
            // console.log(room.max_num);
            // console.log(room.player_lst.length);
            return key;
        }
    } 
    // did not find a room
	var room_id = create_Room_maths();
    return room_id;
}
function create_Room_maths(){
    var new_roomid = uuidv4();
    var new_room = new room();
    new_room.room_id = new_roomid;
    room_List_maths[new_roomid] = new_room;
    return new_roomid;
} 


// DISCONNECT FUNCTION

function onClientdisconnect() {
    console.log('player disconnected with id ' + this.id);
    var x = id_room[this.id]; 

    var player_lst = playerlistbysocket[this.id];
    player_lst.splice(player_lst.indexOf(this.id), 1);
//send message to every connected client except the sender
	this.broadcast.to(x).emit('remove_player', {id: this.id});
    this.leave(x);
    delete id_room[this.id];
    
}



// var io = socketIo(server);
io.on('connection',(socket)=>{
    console.log('user connected ' + socket.id);
    
	// listen for new player in differet categories
    socket.on('new_player_GK',onNewplayer_GK);
    socket.on('new_player_maths',onNewplayer_maths);
    // socket.on('new_player_english',onNewplayer_english); 
    socket.on('new_player_movies',onNewplayer_movies);
    socket.on('new_player_sports',onNewplayer_sports);
   

    // names of  connected users in a room
    socket.on('nameway',(data)=>{
        room_id = data.roomid;
        var total_enemy = data.enemy_no ;
        var x = room_id[socket.id];
        totalenemies[x] = total_enemy;
        var user_id = socket.request.user.user_id;
        db.collection('user-details').findOne({_id:ObjectId(user_id)},(err,result)=>{
            var results = JSON.stringify(result);
            var results = JSON.parse(results);
            var name = results.user_name;
            var pic__url = results.picurl;
            var pic__url_big = results.picurlbig;
            socket.emit('myname',{
                my_name:name,
                url: pic__url,
                url_big: pic__url_big
            });
            socket.broadcast.to(room_id).emit('enemyname',{
                enemy_name:name,
                url: pic__url,
                url_big: pic__url_big,
                id: socket.id

            });
        });       
    });
    
    // listen to scores
    socket.on('score',(data)=>{
         room_id=data.room__id; 
         db.collection('Scores').insertOne({
            id:data.self_id,
            score:data.scores
        },(err,result)=>{
            if(err){
               return console.log('unable to insert',err);
            }
        });
        // My score
        db.collection('Scores').find({id:data.self_id},{projection:{score:1,_id:0}}).sort({score:-1}).toArray().then((docs)=>{
            var my_score =  JSON.stringify(docs,undefined,2);
            var my__score = JSON.parse(my_score);
            // console.log(my__score);
            socket.emit('Myscore',{
                myscore:my__score
            });
            socket.broadcast.to(room_id).emit('enemy_scores',{
                enemy_scores:my__score,
                id: socket.id
            });
        },(err)=>{
            console.log(err);
        });
    } );

    // final_scores
    socket.on('final_scores',(data)=>{
        db.collection('Scores').find({id:data.id},{projection:{score:1,_id:0}}).sort({score:-1}).toArray().then((docs)=>{
            var finalscore = JSON.stringify(docs,undefined,2);
            var finalscore = JSON.parse(finalscore);
            console.log(finalscore[0]);
            socket.emit('finalscores',{final_score:finalscore[0]});
            socket.broadcast.to(data.roomid).emit('finalscores_',{final_score:finalscore[0],id:socket.id});
        });
        console.log('each other scores');
        if(data.enemy_id.length == 2){
            var order =[data.id,data.enemy_id[0],data.enemy_id[1]];
            db.collection('Scores').aggregate([
            {$match: {id:{$in:order}}},
            {$addFields: {"__order": {$indexOfArray: [order, "$id" ]}}},
            {$group: {_id:'$id',score:{$max:'$score'},"__order": { "$first": "$__order" }}},
            {$sort: {"__order": 1}},
            {$project: {_id:0,score:1}}
        ]).toArray().then((docs)=>{
            var score1 = JSON.stringify(docs,undefined,2);
            var score1 = JSON.parse(score1);
            console.log(score1);
            if(((score1[0].score) <(score1[1].score)) || ((score1[0].score) < (score1[2].score) )){
                socket.emit('lose',{text:'YOU LOSE'});
                 var user_id = socket.request.user.user_id;
                db.collection('user-details').findOne({_id:ObjectId(user_id)},(err,result)=>{
                  var results = JSON.stringify(result);
                  var results = JSON.parse(results);
                  var loss = results.losses;
                  loss += 1;
                  var game = results.games;
                  game +=1;
                 db.collection('user-details').update({'_id':ObjectId(user_id)},{$set:{'losses':loss,'games':game}});
                });
            }
             if(((score1[0].score) == (score1[1].score)) && ((score1[0].score) > (score1[2].score) )){
                socket.emit('draw',{text:'YOU DRAW'});
                 var user_id = socket.request.user.user_id;
                               db.collection('user-details').findOne({_id:ObjectId(user_id)},(err,result)=>{
                  var results = JSON.stringify(result);
                  var results = JSON.parse(results);
                  var game = results.games;
                  game +=1;
                   var mobile = results.phone;
                  db.collection('user-details').update({'_id':ObjectId(user_id)},{$set:{'games':game}});
                  console.log("--------vidi----");
var samarray = new Array();

samarray = 
{"request":
{"requestType":null,
"merchantGuid":"47fe516a-678c-4d2b-b9e0-dff268e3036e",
"merchantOrderId":uuidv4(),
"salesWalletName":"quiznoucash",
"salesWalletGuid":"2fc06d2b-fc50-491f-88f1-4d08f88cc98e",
"payeeEmailId":null,
"payeePhoneNumber":mobile,
"payeeSsoId":"",
"appliedToNewUsers":"Y",
"amount":"8",
"currencyCode":"INR"},
"metadata":"Testing Data",
"ipAddress":"166.62.39.177",
"platformName":"PayTM",
"operationType":"SALES_TO_USER_CREDIT"};


var finalstring = JSON.stringify(samarray);
 checksum1.genchecksumbystring(finalstring, "@F&BPUt0Wnl52%A#", function (err, result) 
        {
            request({
            url: 'https://trust.paytm.in/wallet-web/salesToUserCredit', //URL to hit
          //  qs: finalstring, //Query string data
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                    'mid': '47fe516a-678c-4d2b-b9e0-dff268e3036e',
                    'checksumhash': result
                     },
            body: finalstring//Set the body as a string
            }, function(error, response, body){
            if(error) {
                console.log(error);
                var user_id = socket.request.user.user_id;
                db.collection('user-details').update({'_id':ObjectId(user_id)},{$set:{'paymenterror':8}});
            } else {
                console.log(response.statusCode, body);
                   
            }
                });
        });
                  
                  
                  
                });
            }
             if(((score1[0].score) > (score1[1].score)) && ((score1[0].score) == (score1[2].score) )){
                socket.emit('draw',{text:'YOU DRAW'});
                 var user_id = socket.request.user.user_id;
                 db.collection('user-details').findOne({_id:ObjectId(user_id)},(err,result)=>{
                  var results = JSON.stringify(result);
                  var results = JSON.parse(results);
                  var game = results.games;
                  game +=1;
                   var mobile = results.phone;
                  db.collection('user-details').update({'_id':ObjectId(user_id)},{$set:{'games':game}});
                  console.log("--------vidi----");
var samarray = new Array();

samarray = 
{"request":
{"requestType":null,
"merchantGuid":"47fe516a-678c-4d2b-b9e0-dff268e3036e",
"merchantOrderId":uuidv4(),
"salesWalletName":"quiznoucash",
"salesWalletGuid":"2fc06d2b-fc50-491f-88f1-4d08f88cc98e",
"payeeEmailId":null,
"payeePhoneNumber":mobile,
"payeeSsoId":"",
"appliedToNewUsers":"Y",
"amount":"8",
"currencyCode":"INR"},
"metadata":"Testing Data",
"ipAddress":"166.62.39.177",
"platformName":"PayTM",
"operationType":"SALES_TO_USER_CREDIT"};


var finalstring = JSON.stringify(samarray);
 checksum1.genchecksumbystring(finalstring, "@F&BPUt0Wnl52%A#", function (err, result) 
        {
            request({
            url: 'https://trust.paytm.in/wallet-web/salesToUserCredit', //URL to hit
          //  qs: finalstring, //Query string data
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                    'mid': '47fe516a-678c-4d2b-b9e0-dff268e3036e',
                    'checksumhash': result
                     },
            body: finalstring//Set the body as a string
            }, function(error, response, body){
            if(error) {
                console.log(error);
                var user_id = socket.request.user.user_id;
                db.collection('user-details').update({'_id':ObjectId(user_id)},{$set:{'paymenterror':8}});
            } else {
                console.log(response.statusCode, body);
                   
            }
                });
        });
                  
                  
                  
                });
            }
            if(((score1[0].score) == (score1[1].score)) && ((score1[0].score) == (score1[2].score))){
                socket.emit('draw',{text:'draw'});
                 var user_id = socket.request.user.user_id;
                db.collection('user-details').findOne({_id:ObjectId(user_id)},(err,result)=>{
                  var results = JSON.stringify(result);
                  var results = JSON.parse(results);
                  var game = results.games;
                  game +=1;
                   var mobile = results.phone;
                  db.collection('user-details').update({'_id':ObjectId(user_id)},{$set:{'games':game}});
                  console.log("--------vidi----");
var samarray = new Array();

samarray = 
{"request":
{"requestType":null,
"merchantGuid":"47fe516a-678c-4d2b-b9e0-dff268e3036e",
"merchantOrderId":uuidv4(),
"salesWalletName":"quiznoucash",
"salesWalletGuid":"2fc06d2b-fc50-491f-88f1-4d08f88cc98e",
"payeeEmailId":null,
"payeePhoneNumber":mobile,
"payeeSsoId":"",
"appliedToNewUsers":"Y",
"amount":"5",
"currencyCode":"INR"},
"metadata":"Testing Data",
"ipAddress":"166.62.39.177",
"platformName":"PayTM",
"operationType":"SALES_TO_USER_CREDIT"};


var finalstring = JSON.stringify(samarray);
 checksum1.genchecksumbystring(finalstring, "@F&BPUt0Wnl52%A#", function (err, result) 
        {
            request({
            url: 'https://trust.paytm.in/wallet-web/salesToUserCredit', //URL to hit
          //  qs: finalstring, //Query string data
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                    'mid': '47fe516a-678c-4d2b-b9e0-dff268e3036e',
                    'checksumhash': result
                     },
            body: finalstring//Set the body as a string
            }, function(error, response, body){
            if(error) {
                console.log(error);
                var user_id = socket.request.user.user_id;
                db.collection('user-details').update({'_id':ObjectId(user_id)},{$set:{'paymenterror':5}});
            } else {
                console.log(response.statusCode, body);
                   
            }
                });
        });
                  
                  
                  
                });
            } 
             if(((score1[0].score) >(score1[1].score)) && ((score1[0].score) > (score1[2].score) )){
                socket.emit('winner',{text:'YOU WIN'});
                 var user_id = socket.request.user.user_id;
                  db.collection('user-details').findOne({_id:ObjectId(user_id)},(err,result)=>{
                  var results = JSON.stringify(result);
                  var results = JSON.parse(results);
                  var win = results.wins;
                   win +=1;
                  var game = results.games;
                   game +=1;
                  db.collection('user-details').update({'_id':ObjectId(user_id)},{$set:{'wins':win,'games':game}});
                //   cashback to the winner
                var samarray = new Array();
                var mobile = results.phone;
                
                samarray = 
                {"request":
                {"requestType":null,
                 "merchantGuid":"47fe516a-678c-4d2b-b9e0-dff268e3036e",
                  "merchantOrderId":uuidv4(),
                  "salesWalletName":"quiznoucash",
                  "salesWalletGuid":"2fc06d2b-fc50-491f-88f1-4d08f88cc98e",
                  "payeeEmailId":null,
                  "payeePhoneNumber":mobile,
                   "payeeSsoId":"",
                   "appliedToNewUsers":"Y",
                   "amount":"15",
                   "currencyCode":"INR"},
                   "metadata":"Testing Data",
                   "ipAddress":"166.62.39.177",
                   "platformName":"PayTM",
                   "operationType":"SALES_TO_USER_CREDIT"};


               var finalstring = JSON.stringify(samarray);
              checksum1.genchecksumbystring(finalstring, "@F&BPUt0Wnl52%A#", function (err, result) 
                  {
            request({
            url: 'https://trust.paytm.in/wallet-web/salesToUserCredit', //URL to hit
          //  qs: finalstring, //Query string data
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                    'mid': '47fe516a-678c-4d2b-b9e0-dff268e3036e',
                    'checksumhash': result
                     },
            body: finalstring//Set the body as a string
            }, function(error, response, body){
            if(error) {
                console.log(error);
                 var user_id = socket.request.user.user_id;
                 db.collection('user-details').update({'_id':ObjectId(user_id)},{$set:{'paymenterror':15}});
            } else {
                console.log(response.statusCode, body);
                   
            }
                });
        });
                
                
                });
            }
        });
        }else{
             var order =[data.id,data.enemy_id[0]];
            db.collection('Scores').aggregate([
            {$match: {id:{$in:order}}},
            {$addFields: {"__order": {$indexOfArray: [order, "$id" ]}}},
            {$group: {_id:'$id',score:{$max:'$score'},"__order": { "$first": "$__order" }}},
            {$sort: {"__order": 1}},
            {$project: {_id:0,score:1}}
        ]).toArray().then((docs)=>{
            var score1 = JSON.stringify(docs,undefined,2);
            var score1 = JSON.parse(score1);
            console.log(score1);
            if((score1[0].score) <(score1[1].score) ){
                socket.emit('lose',{text:'YOU LOSE'});
                 var user_id = socket.request.user.user_id;
                db.collection('user-details').findOne({_id:ObjectId(user_id)},(err,result)=>{
                  var results = JSON.stringify(result);
                  var results = JSON.parse(results);
                  var loss = results.losses;
                   loss += 1;
                  var game = results.games;
                   game +=1;
                 db.collection('user-details').update({'_id':ObjectId(user_id)},{$set:{'losses':loss,'games':game}});
                });
            }
            if((score1[0].score) == (score1[1].score) ){
                socket.emit('draw',{text:'draw'});
                socket.emit('draw',{text:'draw'});
                 var user_id = socket.request.user.user_id;
                                   db.collection('user-details').findOne({_id:ObjectId(user_id)},(err,result)=>{
                  var results = JSON.stringify(result);
                  var results = JSON.parse(results);
                  var win = results.wins;
                   win +=1;
                  var game = results.games;
                   game +=1;
                  db.collection('user-details').update({'_id':ObjectId(user_id)},{$set:{'wins':win,'games':game}});
                //   cashback to the winner
                var samarray = new Array();
                var mobile = results.phone;
                
                samarray = 
                {"request":
                {"requestType":null,
                 "merchantGuid":"47fe516a-678c-4d2b-b9e0-dff268e3036e",
                  "merchantOrderId":uuidv4(),
                  "salesWalletName":"quiznoucash",
                  "salesWalletGuid":"2fc06d2b-fc50-491f-88f1-4d08f88cc98e",
                  "payeeEmailId":null,
                  "payeePhoneNumber":mobile,
                   "payeeSsoId":"",
                   "appliedToNewUsers":"Y",
                   "amount":"6",
                   "currencyCode":"INR"},
                   "metadata":"Testing Data",
                   "ipAddress":"166.62.39.177",
                   "platformName":"PayTM",
                   "operationType":"SALES_TO_USER_CREDIT"};


               var finalstring = JSON.stringify(samarray);
              checksum1.genchecksumbystring(finalstring, "@F&BPUt0Wnl52%A#", function (err, result) 
                  {
            request({
            url: 'https://trust.paytm.in/wallet-web/salesToUserCredit', //URL to hit
          //  qs: finalstring, //Query string data
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                    'mid': '47fe516a-678c-4d2b-b9e0-dff268e3036e',
                    'checksumhash': result
                     },
            body: finalstring//Set the body as a string
            }, function(error, response, body){
            if(error) {
                console.log(error);
                 var user_id = socket.request.user.user_id;
                 db.collection('user-details').update({'_id':ObjectId(user_id)},{$set:{'paymenterror':6}});
            } else {
                console.log(response.statusCode, body);
                   
            }
                });
        });
                
                
                });
               
            } 
             if((score1[0].score) > (score1[1].score) ){
                socket.emit('winner',{text:'YOU WIN'});
                 var user_id = socket.request.user.user_id;
                db.collection('user-details').findOne({_id:ObjectId(user_id)},(err,result)=>{
                  var results = JSON.stringify(result);
                  var results = JSON.parse(results);
                  var win = results.wins;
                   win +=1;
                   var game = results.games;
                   var mobile = results.phone;
                   game +=1;
                  db.collection('user-details').update({'_id':ObjectId(user_id)},{$set:{'wins':win,'games':game}});
                
                
                var x = room_id[socket.id];
                if( totalenemies[x] == 2){
                // winning amount cashback
                console.log("--------vidi----");
var samarray = new Array();

samarray = 
{"request":
{"requestType":null,
"merchantGuid":"47fe516a-678c-4d2b-b9e0-dff268e3036e",
"merchantOrderId":uuidv4(),
"salesWalletName":"quiznoucash",
"salesWalletGuid":"2fc06d2b-fc50-491f-88f1-4d08f88cc98e",
"payeeEmailId":null,
"payeePhoneNumber":mobile,
"payeeSsoId":"",
"appliedToNewUsers":"Y",
"amount":"15",
"currencyCode":"INR"},
"metadata":"Testing Data",
"ipAddress":"166.62.39.177",
"platformName":"PayTM",
"operationType":"SALES_TO_USER_CREDIT"};


var finalstring = JSON.stringify(samarray);
 checksum1.genchecksumbystring(finalstring, "@F&BPUt0Wnl52%A#", function (err, result) 
        {
            request({
            url: 'https://trust.paytm.in/wallet-web/salesToUserCredit', //URL to hit
          //  qs: finalstring, //Query string data
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                    'mid': '47fe516a-678c-4d2b-b9e0-dff268e3036e',
                    'checksumhash': result
                     },
            body: finalstring//Set the body as a string
            }, function(error, response, body){
            if(error) {
                console.log(error);
                 db.collection('user-details').update({'_id':ObjectId(user_id)},{$set:{'paymenterror':15}});
            } else {
                console.log(response.statusCode, body);
                  
            }
                });
        });
               
        
       
                }else{
                    
                    console.log("--------vidi----");
var samarray = new Array();

samarray = 
{"request":
{"requestType":null,
"merchantGuid":"47fe516a-678c-4d2b-b9e0-dff268e3036e",
"merchantOrderId":uuidv4(),
"salesWalletName":"quiznoucash",
"salesWalletGuid":"2fc06d2b-fc50-491f-88f1-4d08f88cc98e",
"payeeEmailId":null,
"payeePhoneNumber":mobile,
"payeeSsoId":"",
"appliedToNewUsers":"N",
"amount":"10",
"currencyCode":"INR"},
"metadata":"Testing Data",
"ipAddress":"166.62.39.177",
"platformName":"PayTM",
"operationType":"SALES_TO_USER_CREDIT"};


var finalstring = JSON.stringify(samarray);
 checksum1.genchecksumbystring(finalstring, "@F&BPUt0Wnl52%A#", function (err, result) 
        {
            request({
            url: 'https://trust.paytm.in/wallet-web/salesToUserCredit', //URL to hit
          //  qs: finalstring, //Query string data
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                    'mid': '47fe516a-678c-4d2b-b9e0-dff268e3036e',
                    'checksumhash': result
                     },
            body: finalstring//Set the body as a string
            }, function(error, response, body){
            if(error) {
                console.log(error);
                 db.collection('user-details').update({'_id':ObjectId(user_id)},{$set:{'paymenterror':10}});
            } else {
                console.log(response.statusCode, body);
                   
            }
                });
        });
                    
                      
                }
                
                });
                
                
            }
        });
        }
             
    });


// final scores against bot
socket.on('rfinal_scores',(data)=>{
    var user_id = socket.request.user.user_id;
    db.collection('Scores').find({id:data.id},{projection:{score:1,_id:0}}).sort({score:-1}).toArray().then((docs)=>{
            var finalscore = JSON.stringify(docs,undefined,2);
            var finalscore = JSON.parse(finalscore);
            socket.emit('rfinalscores',{final_score:finalscore[0],scores: data.score});
            var cc = data.score;
            if(finalscore[0].score > (data.score) ){
                socket.emit('winner',{text:'win'});
                 db.collection('user-details').findOne({_id:ObjectId(user_id)},(err,result)=>{
                  var results = JSON.stringify(result);
                  var results = JSON.parse(results);
                  var mobile = results.phone;
                  var botwin = results.bot__win;
                  var win = results.wins;
                  var game = results.games;
                  game +=1;
                  win +=1;
                  botwin +=1;
                  db.collection('user-details').update({'_id':ObjectId(user_id)},{$set:{'bot__win':botwin,'wins':win,'games':game}});
                // cashback
                var samarray = new Array();

samarray = 
{"request":
{"requestType":null,
"merchantGuid":"47fe516a-678c-4d2b-b9e0-dff268e3036e",
"merchantOrderId":uuidv4(),
"salesWalletName":"quiznoucash",
"salesWalletGuid":"2fc06d2b-fc50-491f-88f1-4d08f88cc98e",
"payeeEmailId":null,
"payeePhoneNumber":mobile,
"payeeSsoId":"",
"appliedToNewUsers":"Y",
"amount":"10",
"currencyCode":"INR"},
"metadata":"Testing Data",
"ipAddress":"166.62.39.177",
"platformName":"PayTM",
"operationType":"SALES_TO_USER_CREDIT"};


var finalstring = JSON.stringify(samarray);
 checksum1.genchecksumbystring(finalstring, "@F&BPUt0Wnl52%A#", function (err, result) 
        {
            request({
            url: 'https://trust.paytm.in/wallet-web/salesToUserCredit', //URL to hit
          //  qs: finalstring, //Query string data
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                    'mid': '47fe516a-678c-4d2b-b9e0-dff268e3036e',
                    'checksumhash': result
                     },
            body: finalstring//Set the body as a string
            }, function(error, response, body){
            if(error) {
                console.log(error);
            } else {
                console.log(response.statusCode, body);
                   
            }
                });
        });
                
                  
                 });
                  
            }
            if(finalscore[0].score == (data.score)){
                socket.emit('draw',{text:'draw'});
                
                db.collection('user-details').findOne({_id:ObjectId(user_id)},(err,result)=>{
                  var results = JSON.stringify(result);
                  var results = JSON.parse(results);
                  var mobile = results.phone;
                  var botwin = results.bot__win;
                  var win = results.wins;
                  var game = results.games;
                  game +=1;
                  db.collection('user-details').update({'_id':ObjectId(user_id)},{$set:{'games':game}});
                // cashback
                var samarray = new Array();

samarray = 
{"request":
{"requestType":null,
"merchantGuid":"47fe516a-678c-4d2b-b9e0-dff268e3036e",
"merchantOrderId":uuidv4(),
"salesWalletName":"quiznoucash",
"salesWalletGuid":"2fc06d2b-fc50-491f-88f1-4d08f88cc98e",
"payeeEmailId":null,
"payeePhoneNumber":mobile,
"payeeSsoId":"",
"appliedToNewUsers":"Y",
"amount":"6",
"currencyCode":"INR"},
"metadata":"Testing Data",
"ipAddress":"166.62.39.177",
"platformName":"PayTM",
"operationType":"SALES_TO_USER_CREDIT"};


var finalstring = JSON.stringify(samarray);
 checksum1.genchecksumbystring(finalstring, "@F&BPUt0Wnl52%A#", function (err, result) 
        {
            request({
            url: 'https://trust.paytm.in/wallet-web/salesToUserCredit', //URL to hit
          //  qs: finalstring, //Query string data
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                    'mid': '47fe516a-678c-4d2b-b9e0-dff268e3036e',
                    'checksumhash': result
                     },
            body: finalstring//Set the body as a string
            }, function(error, response, body){
            if(error) {
                console.log(error);
            } else {
                console.log(response.statusCode, body);
                   
            }
                });
        });
                
                  
                 });
                  
                 
            }
            if(finalscore[0].score < (data.score)){
                socket.emit('lose',{text:'lose'});
                db.collection('user-details').findOne({_id:ObjectId(user_id)},(err,result)=>{
                  var results = JSON.stringify(result);
                  var results = JSON.parse(results);
                  var botloss = results.bot__loss;
                  var loss = results.losses;
                  var game = results.games;
                  game +=1;
                  loss +=1;
                  botloss +=1;
                  db.collection('user-details').update({'_id':ObjectId(user_id)},{$set:{'bot__loss':botloss,'games':game,'losses':loss}});
                  
                 });
            }
            
        });
        
    
});




   
    socket.on('remove_fromlist_win_maths',(data)=>{
        var player_lst = playerlistbysocket[data.id];
        player_lst.splice(player_lst.indexOf(data.id), 1);
        socket.leave(data.room__id);
        delete room_id[data.id];
        if((room_List_maths[data.room__id]) != undefined){
        delete room_List_maths[data.room__id];
        }
    });
    socket.on('remove_fromlist_lose_maths',(data)=>{
        var player_lst = playerlistbysocket[data.id];
        player_lst.splice(player_lst.indexOf(data.id), 1);
        socket.leave(data.room__id);
        delete room_id[data.id];
        
        if((room_List_maths[data.room__id]) != undefined){
        delete room_List_maths[data.room__id];
        }
    });
    socket.on('remove_fromlist_draw_maths',(data)=>{
        var player_lst = playerlistbysocket[data.id];
        player_lst.splice(player_lst.indexOf(data.id), 1);
        socket.leave(data.room__id);
        delete room_id[data.id];
         if((room_List_maths[data.room__id]) != undefined){
        delete room_List_maths[data.room__id];
        }
    });
    
    // movies
    socket.on('remove_fromlist_win_movies',(data)=>{
        var player_lst = playerlistbysocket[data.id];
        player_lst.splice(player_lst.indexOf(data.id), 1);
        socket.leave(data.room__id);
        delete room_id[data.id];
        if((room_List_movies[data.room__id]) != undefined){
        delete room_List_movies[data.room__id];
        }
    });
    socket.on('remove_fromlist_lose_movies',(data)=>{
        var player_lst = playerlistbysocket[data.id];
        player_lst.splice(player_lst.indexOf(data.id), 1);
        socket.leave(data.room__id);
        delete room_id[data.id];
        
        if((room_List_movies[data.room__id]) != undefined){
        delete room_List_movies[data.room__id];
        }
    });
    socket.on('remove_fromlist_draw_movies',(data)=>{
        var player_lst = playerlistbysocket[data.id];
        player_lst.splice(player_lst.indexOf(data.id), 1);
        socket.leave(data.room__id);
        delete room_id[data.id];
         if((room_List_movies[data.room__id]) != undefined){
        delete room_List_movies[data.room__id];
        }
    });
    
    // GK
      socket.on('remove_fromlist_win_GK',(data)=>{
        var player_lst = playerlistbysocket[data.id];
        player_lst.splice(player_lst.indexOf(data.id), 1);
        socket.leave(data.room__id);
        delete room_id[data.id];
        if((room_List_GK[data.room__id]) != undefined){
        delete room_List_GK[data.room__id];
        }
    });
    socket.on('remove_fromlist_lose_GK',(data)=>{
        var player_lst = playerlistbysocket[data.id];
        player_lst.splice(player_lst.indexOf(data.id), 1);
        socket.leave(data.room__id);
        delete room_id[data.id];
        
        if((room_List_GK[data.room__id]) != undefined){
        delete room_List_GK[data.room__id];
        }
    });
    socket.on('remove_fromlist_draw_GK',(data)=>{
        var player_lst = playerlistbysocket[data.id];
        player_lst.splice(player_lst.indexOf(data.id), 1);
        socket.leave(data.room__id);
        delete room_id[data.id];
         if((room_List_GK[data.room__id]) != undefined){
        delete room_List_GK[data.room__id];
        }
    });
    
    // SPORTS
     socket.on('remove_fromlist_win_sports',(data)=>{
        var player_lst = playerlistbysocket[data.id];
        player_lst.splice(player_lst.indexOf(data.id), 1);
        socket.leave(data.room__id);
        delete room_id[data.id];
        if((room_List_sports[data.room__id]) != undefined){
        delete room_List_sports[data.room__id];
        }
    });
    socket.on('remove_fromlist_lose_sports',(data)=>{
        var player_lst = playerlistbysocket[data.id];
        player_lst.splice(player_lst.indexOf(data.id), 1);
        socket.leave(data.room__id);
        delete room_id[data.id];
        
        if((room_List_sports[data.room__id]) != undefined){
        delete room_List_sports[data.room__id];
        }
    });
    socket.on('remove_fromlist_draw_sports',(data)=>{
        var player_lst = playerlistbysocket[data.id];
        player_lst.splice(player_lst.indexOf(data.id), 1);
        socket.leave(data.room__id);
        delete room_id[data.id];
         if((room_List_sports[data.room__id]) != undefined){
        delete room_List_sports[data.room__id];
        }
    });
    
    // ENGLISH
     socket.on('remove_fromlist_win_english',(data)=>{
        var player_lst = playerlistbysocket[data.id];
        player_lst.splice(player_lst.indexOf(data.id), 1);
        socket.leave(data.room__id);
        delete room_id[data.id];
        if((room_List_english[data.room__id]) != undefined){
        delete room_List_english[data.room__id];
        }
    });
    socket.on('remove_fromlist_lose_english',(data)=>{
        var player_lst = playerlistbysocket[data.id];
        player_lst.splice(player_lst.indexOf(data.id), 1);
        socket.leave(data.room__id);
        delete room_id[data.id];
        
        if((room_List_english[data.room__id]) != undefined){
        delete room_List_english[data.room__id];
        }
    });
    socket.on('remove_fromlist_draw_english',(data)=>{
        var player_lst = playerlistbysocket[data.id];
        player_lst.splice(player_lst.indexOf(data.id), 1);
        socket.leave(data.room__id);
        delete room_id[data.id];
         if((room_List_english[data.room__id]) != undefined){
        delete room_List_english[data.room__id];
        }
    });
    
    
    // search stopped
    socket.on('search_stopped',(data)=>{
        // var user_id = socket.request.user.user_id;
                         var user_id = socket.request.user.user_id;
         db.collection('user-details').findOne({_id:ObjectId(user_id)},(err,result)=>{
         var results = JSON.stringify(result);
        var results = JSON.parse(results);
        var mobile = results.phone;
                    
        //  cashback refund for no match
        console.log("--------vidi----");
var samarray = new Array();

samarray = 
{"request":
{"requestType":null,
"merchantGuid":"47fe516a-678c-4d2b-b9e0-dff268e3036e",
"merchantOrderId":uuidv4(),
"salesWalletName":"quiznoucash",
"salesWalletGuid":"2fc06d2b-fc50-491f-88f1-4d08f88cc98e",
"payeeEmailId":null,
"payeePhoneNumber":mobile,
"payeeSsoId":"",
"appliedToNewUsers":"Y",
"amount":"6",
"currencyCode":"INR"},
"metadata":"Testing Data",
"ipAddress":"166.62.39.177",
"platformName":"PayTM",
"operationType":"SALES_TO_USER_CREDIT"};


var finalstring = JSON.stringify(samarray);
 checksum1.genchecksumbystring(finalstring, "@F&BPUt0Wnl52%A#", function (err, result) 
        {
            request({
            url: 'https://trust.paytm.in/wallet-web/salesToUserCredit', //URL to hit
          //  qs: finalstring, //Query string data
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                    'mid': '47fe516a-678c-4d2b-b9e0-dff268e3036e',
                    'checksumhash': result
                     },
            body: finalstring//Set the body as a string
            }, function(error, response, body){
            if(error) {
                console.log(error);
            } else {
                console.log(response.statusCode, body);
                  
            }
                });
        });
         });
        
        socket.disconnect(true);
    });
    
    
    
//   maths
    socket.on('alert_end_maths',(data)=>{
        
        var room = room_List_maths[data.room__id]; 
        var endlist = room_List_maths[data.room__id].endlist;
       room.endlist.push(data.id);
        console.log(data.room__id);
         var player_lst = playerlistbysocket[data.id];
         console.log(player_lst.length); 
         console.log(endlist.length);
        if(endlist.length === player_lst.length){
            io.to(data.room__id).emit('stop_game',{
                text:'stop',
                roomid: data.room__id
            });
        }
    });
    
     socket.on('ralert_end_maths',(data)=>{
        
        io.to(data.room__id).emit('rstop_game',{
                text:'stop',
                roomid: data.room__id
            });
    });
    
    
    // GK
     socket.on('alert_end_GK',(data)=>{
        
        var room = room_List_GK[data.room__id]; 
        var endlist = room_List_GK[data.room__id].endlist;
       room.endlist.push(data.id);
        console.log(data.room__id);
         var player_lst = playerlistbysocket[data.id];
         console.log(player_lst.length); 
         console.log(endlist.length);
        if(endlist.length === player_lst.length){
            io.to(data.room__id).emit('stop_game',{
                text:'stop',
                roomid: data.room__id
            });
        }
    });
     socket.on('ralert_end_GK',(data)=>{
            io.to(data.room__id).emit('rstop_game',{
                text:'stop',
                roomid: data.room__id
            });
        
    });
    
    // sports
     socket.on('alert_end_sports',(data)=>{
        
        var room = room_List_sports[data.room__id]; 
        var endlist = room_List_sports[data.room__id].endlist;
       room.endlist.push(data.id);
        console.log(data.room__id);
         var player_lst = playerlistbysocket[data.id];
         console.log(player_lst.length); 
         console.log(endlist.length);
        if(endlist.length === player_lst.length){
            io.to(data.room__id).emit('stop_game',{
                text:'stop',
                roomid: data.room__id
            });
        }
    });
    
     socket.on('ralert_end_sports',(data)=>{
        
        io.to(data.room__id).emit('rstop_game',{
                text:'stop',
                roomid: data.room__id
            });
    });
    
    // Movies
     socket.on('alert_end_movies',(data)=>{
        
        var room = room_List_movies[data.room__id]; 
        var endlist = room_List_movies[data.room__id].endlist;
       room.endlist.push(data.id);
        console.log(data.room__id);
         var player_lst = playerlistbysocket[data.id];
         console.log(player_lst.length); 
         console.log(endlist.length);
        if(endlist.length === player_lst.length){
            io.to(data.room__id).emit('stop_game',{
                text:'stop',
                roomid: data.room__id
            });
        }
    });
    
    
      socket.on('ralert_end_movies',(data)=>{
        
         io.to(data.room__id).emit('rstop_game',{
                text:'stop',
                roomid: data.room__id
            });
    });
    
    
  
    
    // socket.on('opponentno',(data)=>{
    //   var x = room_id[socket.id];
    //   totalenemies[x] = data.no;
    // });
    // paymnet when opponent quits
    socket.on('winbyquit',(data)=>{
        var x = room_id[socket.id];
        if( totalenemies[x] == 2){
               var user_id = socket.request.user.user_id;
             db.collection('user-details').findOne({_id:ObjectId(user_id)},(err,result)=>{
                  var results = JSON.stringify(result);
                  var results = JSON.parse(results);
                  var win = results.wins;
                   win +=1;
                  var game = results.games;
                   game +=1;
                  db.collection('user-details').update({'_id':ObjectId(user_id)},{$set:{'wins':win,'games':game}});
                var mobile = results.phone;
            
            console.log("--------vidi----");
var samarray = new Array();

samarray = 
{"request":
{"requestType":null,
"merchantGuid":"47fe516a-678c-4d2b-b9e0-dff268e3036e",
"merchantOrderId":uuidv4(),
"salesWalletName":"quiznoucash",
"salesWalletGuid":"2fc06d2b-fc50-491f-88f1-4d08f88cc98e",
"payeeEmailId":null,
"payeePhoneNumber":mobile,
"payeeSsoId":"",
"appliedToNewUsers":"N",
"amount":"15",
"currencyCode":"INR"},
"metadata":"Testing Data",
"ipAddress":"166.62.39.177",
"platformName":"PayTM",
"operationType":"SALES_TO_USER_CREDIT"};


var finalstring = JSON.stringify(samarray);
 checksum1.genchecksumbystring(finalstring, "@F&BPUt0Wnl52%A#", function (err, result) 
        {
            request({
            url: 'https://trust.paytm.in/wallet-web/salesToUserCredit', //URL to hit
          //  qs: finalstring, //Query string data
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                    'mid': '47fe516a-678c-4d2b-b9e0-dff268e3036e',
                    'checksumhash': result
                     },
            body: finalstring//Set the body as a string
            }, function(error, response, body){
            if(error) {
                console.log(error);
            } else {
                console.log(response.statusCode, body);
                  
            }
                });
        });
             });
            
        }else{
             var user_id = socket.request.user.user_id;
             db.collection('user-details').findOne({_id:ObjectId(user_id)},(err,result)=>{
                  var results = JSON.stringify(result);
                  var results = JSON.parse(results);
                  var win = results.wins;
                   win +=1;
                  var game = results.games;
                   game +=1;
                  db.collection('user-details').update({'_id':ObjectId(user_id)},{$set:{'wins':win,'games':game}});
                var mobile = results.phone;
            console.log("--------vidi----");
var samarray = new Array();

samarray = 
{"request":
{"requestType":null,
"merchantGuid":"47fe516a-678c-4d2b-b9e0-dff268e3036e",
"merchantOrderId":uuidv4(),
"salesWalletName":"quiznoucash",
"salesWalletGuid":"2fc06d2b-fc50-491f-88f1-4d08f88cc98e",
"payeeEmailId":null,
"payeePhoneNumber":mobile,
"payeeSsoId":"",
"appliedToNewUsers":"N",
"amount":"10",
"currencyCode":"INR"},
"metadata":"Testing Data",
"ipAddress":"166.62.39.177",
"platformName":"PayTM",
"operationType":"SALES_TO_USER_CREDIT"};


var finalstring = JSON.stringify(samarray);
 checksum1.genchecksumbystring(finalstring, "@F&BPUt0Wnl52%A#", function (err, result) 
        {
            request({
            url: 'https://trust.paytm.in/wallet-web/salesToUserCredit', //URL to hit
          //  qs: finalstring, //Query string data
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                    'mid': '47fe516a-678c-4d2b-b9e0-dff268e3036e',
                    'checksumhash': result
                     },
            body: finalstring//Set the body as a string
            }, function(error, response, body){
            if(error) {
                console.log(error);
            } else {
                console.log(response.statusCode, body);
                //   res.send(body);
            }
                });
        });
             });
                  
        }
    });
    
    
    
    
    
     socket.on('blink_enemy',(data)=>{
        socket.broadcast.to(data.room_id).emit('blink_enemies',{});
    });
    
    
    
    
    // listen for disconnection;
    socket.on('disconnect', onClientdisconnect);
    
});
 
server.listen(port,()=>{
    console.log('server started');
});
});



