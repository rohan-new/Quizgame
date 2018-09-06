const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://rohan-boss-2:Mentality098@127.0.0.1:27017/QUIZ_GAME',(err,client)=>{
    if(err){
        return console.log('Unable to0 connect to Mongodb');
    }
    const db = client.db('QUIZ_GAME');
    console.log('connected to the MongoDb server');

    db.collection('sports_QUESTIONS').insertMany([{
        question:'Which cricketers have the record for the highest run patnership at the World Cup ?',
        options:['Sachin Tendulkar and Saurav Ganguly','Saurav Ganguly and Rahul Dravid','Saurav Ganguly and Virender Sehwag','Rahul Dravid and Sachin Tendulkar'],
        answer:' Saurav Ganguly and Rahul Dravid' 
    },{
        question:'Brazil has the most number of World Cup titles to its credit. How many times has it won the World Cup so far?',
        options:['4','5','6','7'],
        answer:'5' 
    },{
        question:' In which year was the football World Cup held for the first time?',
        options:['1928','1930','1924','1932'],
        answer:'1930'  
    },{
        question:'Which country won the first football World Cup?',
        options:['Germany','Uruguay','Argentina','Brazil'],
        answer:'Uruguay' 
    },{
        question:' Paul, a marine creature, which supposedly predicted the outcome of many matches in World Cup 2010 was a/an',
        options:['Seal','Octopus','Walrus','Jelly fish'],
        answer:'Octopus'  
    },{
        question:' In which country is FIFA World Cup 2018 scheduled to be played?',
        options:['France','South Korea','Russia','Qatar'],
        answer:'Russia'  
    },{
        question:'To which country does the famous player Ronaldo, who held the record for most number of World Cup goals, belong?',
        options:['France','Spain','Portugal','Brazil'],
        answer:'Brazil'   
    },{
        question:'In which country are the headquarters of FIFA (International Federation of Association Football) located?',
        options:['The Netherlands','France','Brazil','Switzerland'],
        answer:'Switzerland'  
    },{
        question:'Who has the record for scoring the most goals in World Cup history?',
        options:['Diego Maradona','Ronaldo','Miroslav Klose','Lionel Messi'],
        answer:'Miroslav Klose'  
    },{
        question:'Who of the following won the World Cup both as the captain and coach of his country"s team?',
        options:['Jupp Derwall','Franz Beckenbauer','Mario Zagallo','Diego Maradona'],
        answer:'Franz Beckenbauer'   
    },{
        question:'Which trophy was awarded to the winners of World Cup tournament until 1970?',
        options:['Arsenal Trophy','Heisman Trophy','Grondona Cup','Jules Rimet Trophy'],
        answer:'Jules Rimet Trophy'   
    },{
        question:'How many teams have won the World Cup since its inception in 1930?',
        options:['6','5','7','8'],
        answer:'8'   
    },{
        question:'Who of the following was awarded the Golden Ball or the Best Player Award at the 2014 FIFA World Cup?',
        options:['Mario Gotze','Neymar','Lionel Messi','Paul Pogba'],
        answer:'Lionel Messi'   
    },{
        question:' Who of the following was awarded the Golden Boot Award for most goals in the tournament of 2014?',
        options:['Neymar','Thomas Muller','James Rodriguez','Miroslave Klose'],
        answer:'James Rodriguez'    
    },{
        question:'Who was awarded the Golden Glove award for the best goalkeeper at the World Cup 2014?',
        options:['Manuel Neuer','Tim Krul','Tim Howard','Iker Casillas'],
        answer:'Manuel Neuer'    
    },{
        question:'Who scored the winning goal for Germany against Argentina in the finals of World Cup 2014?',
        options:['Mario Gotze','Miroslave Klose','Mats Hummels','Thomas Muller'],
        answer:'Mario Gotze'  
    },{
        question:'How many countries played at the World Cup 2014 tournament?',
        options:['28','32','30','36'],
        answer:'32'  
    },{
        question:'Who was the captain of the 2014 World Cup winning team from Germany?',
        options:['Philipp Lahm','Manuel Neuer','Miroslave Klose','Mats Hummels'],
        answer:'Philipp Lahm' 
    },{
        question:' How many teams from the Asian continent participated in the FIFA World Cup 2014 tournament?',
        options:['3','1','2','4'],
        answer:'3' 
    },{
        question:'Who of the following players scored a hat-trick of goals in the World Cup 2014?',
        options:['Thomas Muller','Xherdan Shaqiri','Both (a) and (b)','None Of these'],
        answer:'Both (a) and (b)' 
    },{
        question:'At which of the following stadiums was the final match between Germany and Argentina played in World Cup 2014?',
        options:['Arena Da Amazonia','Arena Castelao','Maracana','Mineirao'],
        answer:'Maracana' 
    },{
        question:'Which team was awarded the FIFA Fair Play Award at the World Cup 2014 tournament?',
        options:['Germany','Spain','Columbia','Argentina'],
        answer:'Columbia' 
    },{
        question:'What was the slogan of the FIFA World Cup 2014?',
        options:['A Time To Make Friends','Football For Peace','Celebrate Humanity','All In One Rhythm'],
        answer:'All In One Rhythm' 
    },{
        question:'Who was selected for the Man of the Match Award in the finals of World Cup 2014?',
        options:['Lionel Messi','Mario Gotze','Mats Hummels','Thomas Muller'],
        answer:'Mario Gotze' 
    },{
        question:'All four home nations – England, Scotland, Wales and Northern Ireland – played at the 1958 World Cup. Where did it take place?',
        options:['Brazil','Sweden','Spain','England'],
        answer:'Sweden' 
    },{
        question:'Which city has the most clubs competing in its country"s top division?',
        options:['Moscow','Rome','Tokyo','London'],
        answer:'London'
    },{
        question:'How many of the 20 clubs in MLS are based in Canada?',
        options:['One','Three','Five','Seven'],
        answer:'Three'
    },{
        question:'In which country would you find the world\'s largest football stadium (by capacity)?',
        options:['North Korea','Spain','Mexico','China'],
        answer:'North Korea'
    },{
        question:'Eibar made their debut in La Liga in 2014. Which current Premier League player had a brief spell with the club?',
        options:['Ayoze Pérez','David Silva','Jesús Navas','César Azpilicueta'],
        answer:'David Silva'
    },{
        question:'Who finished the 2014-15 Ligue 1 season as top scorer?',
        options:['Zlatan Ibrahimovic','Edinson Cavani','Alexandre Lacazette','Neymar'],
        answer:'Alexandre Lacazette'
    },{
        question:'Which club have won the most Serie A titles?',
        options:['Juventus','Internazionale','Milan','Roma'],
        answer:'Juventus'
    },{
        question:'Who won the 2015 Africa Cup of Nations?',
        options:['Egypt','Ghana','Ivory Coast','South Africa'],
        answer:'Ivory Coast'
    },{
        question:'Who were the last French club to play in a Champions League final?',
        options:['AS Monaco','Paris Saint-Germain','Saint-Étienne','Marseille'],
        answer:'AS Monaco'
    },{
        question:'Diego Forlán signed for which Japanese club in 2014?',
        options:['Cerezo Osaka','FC Tokyo','Urawa Red Diamonds','Júbilo Iwata'],
        answer:'Cerezo Osaka'
    },{
        question:'Milan legend George Weah represented which African nation?',
        options:['Sierra Leone','Liberia','Ghana','Tanzania'],
        answer:'Liberia'
    },{
        question:'In what year did a Dutch team last win a European club competition?',
        options:['2013','2002','1997','1978'],
        answer:'2002'
    },{
        question:'Which club won the MLS Cup in 2015?',
        options:['Colorado Rapids','Sporting Kansas City','Portland Timbers','LA Galaxy'],
        answer:'Portland Timbers'
    },{
        question:'Argentinian side River Plate won the Copa Libertadores for the third time in 2015, but who are the competition\'s most successful side?',
        options:['Santos','Independiente','Boca Juniors','São Paulo'],
        answer:'Independiente'
    },{
        question:'Who are the only international team to have retained the European Championship?',
        options:['England','Spain','Germany','Italy'],
        answer:'Spain'
    },{
        question:'Against which country did India score their lowest total at the World Cup ?',
        options:['West Indies','England','New Zealand','Australia'],
        answer:'Australia'  
    },{
        question:'Who was the wicket-keeper of the Indian Cricket Team during the World Cup 2003 tournament?',
        options:['Parthiv Patel','Nayan Mongia','Rahul Dravid','Mahendra Singh Dhoni'],
        answer:'Rahul Dravid' 
    },{
        question:'Which Cricketer has scored the most runs at the World Cup ?',
        options:['Sourav Ganguly','Ricky Ponting','Brian Lara','Sachin Tendulkar'],
        answer:'Sachin Tendulkar'  
    },{
        question:'In which year were the World Cup matches reduced to 50 overs from the previous 60 overs?',
        options:['1983','1979','1992','1987'],
        answer:'1987'  
    },{
        question:'Which cricketer has the best bowling figures in an innings at the World Cup ?',
        options:['V Prasad','Kapil Dev','Ashish Nehra','Ajit Agarkar'],
        answer:'Ashish Nehra'   
    },{
        question:'How many runs did India make in its historic World Cup win over West Indies in 1983?',
        options:['165','183','175','374'],
        answer:'183'  
    },{
        question:'Against which country did India score their highest total at the World Cup? ',
        options:['Sri Lanka','Nambibia','Kenya','Bermuda'],
        answer:'Bermuda'  
    },{
        question:'Who was the captain of the Indian team during the first World Cup in England in 1975?',
        options:['S.Venkataraghavan','Abid Ali','Sunil Gavaskar','Gundappa Vishwanath'],
        answer:'S.Venkataraghavan'   
    },{
        question:'During the "Wills World Cup" of 1996, India was eliminated at the stage of',
        options:['Quarter Finals','Semi-Finals','Finals','GROUP STAGES'],
        answer:'Semi-Finals'   
    },{
        question:'Kapil Dev did NOT play for India during the World Cup tournament held in',
        options:['1975','1979','1983','1987'],
        answer:'1975'   
    },{
        question:'Against which country did India win with the largest margin by runs in a World Cup ?',
        options:['Sri Lanka','Australia','Bermuda','Namibia'],
        answer:'Bermuda'   
    },{
        question:'What side did India beat to win their first ever world cup match?',
        options:['Sri Lanka','England','East Africa','West Indies'],
        answer:'West Indies'    
    },{
        question:'Harold (“Dickie”) Bird is best known for his career in cricket as:',
        options:['an administrator','a batsman','an umpire','a bowler'],
        answer:'an umpire'    
    },{
        question:'What is the name given to the biennial international Test cricket series played between England and Australia?',
        options:['the Sheffield-Shield','Border-Gavaskar trophy','the trans-tasman trophy','the ashes'],
        answer:'the ashes'  
    },{
        question:'In which year were the first laws of cricket believed to have been written?',
        options:['1872','1806','1774','1709'],
        answer:'1774'  
    },{
        question:'What is the slang term given to a ball that is bowled so well that it is considered unplayable by the batsman?',
        options:['an over','an inswinger','a volley','a jaffa'],
        answer:'a jaffa' 
    },{
        question:'Cricket umpires use a large variety of signals to make sure that the correct scores are kept. What does it mean if an umpire raises both arms straight above his head?',
        options:['the batsman has scored six runs','the bowler has bowled a wide','the bowler has bowled a no-ball','an over'],
        answer:'the batsman has scored six runs' 
    },{
        question:'Which TWO South African batsmen were involved in the famous run-out incident in the 1999 World Cup semi-final against Australia?',
        options:['Lance Klusener and Allan Donald','Allan Donald and Shaun Pollock','Mark Boucher and Lance Klusner','Jonty Rhodes and Shaun Pollock'],
        answer:'Lance Klusener and Allan Donald' 
    },{
        question:'Which Indian batsman hit Stuart Broad for 6 sixes in one over in 2007?',
        options:['Virat Kohli','Yuvraj Singh','Sachin Tendulkar','MS Dhoni'],
        answer:'Yuvraj Singh' 
    },{
        question:' Which team did Sachin Tendulkar score his 50th test hundred against?',
        options:['Pakistan','England','South Africa','Australia'],
        answer:'South Africa' 
    },{
        question:'At which cricket ground did Brian Lara score 375 to secure the world record?',
        options:['Antigua Recreation Ground – Antigua','Kensington Oval – Barbados','Bourda – Guyana',' Sabina Park – Jamaica'],
        answer:'Antigua Recreation Ground – Antigua' 
    },{
        question:'Who was the first batsman to pass 10,000 test runs among these? ',
        options:['Brian Lara','Sachin Tendulkar','Shivnarine Chanderpaul','Ricky Ponting'],
        answer:'Brian Lara' 
    },{
        question:'Who captained Sri Lanka to victory at the World Cup final in 1996?',
        options:['Kumar Dharmasena','Aravinda de Silva','Sanath Jayasuriya','Arjuna Ranatunga'],
        answer:'Arjuna Ranatunga' 
    },{
        question:' How many runs did Kumar Sangakkara score in his final test match innings?',
        options:['28','18','38','2'],
        answer:'18'
    },{
        question:'How many runs did Australia score in both innings of the famous tied test against the West Indies in 1960?',
        options:['689','698','737','755'],
        answer:'737'
    },{
        question:' What was Matthew Hayden’s final score after breaking Brian Lara’s world record?',
        options:['380','383','375','385'],
        answer:'380'
    },{
        question:'Which batsman scored 175 runs while chasing down 434 runs against Australia?',
        options:['AB de Villiers','Graeme Smith','Jacques Kallis','Herschelle Gibbs'],
        answer:'Herschelle Gibbs'
    },{
        question:'Which batsman has the highest individual score in a first class match?',
        options:['Brian Lara','Sachin Tendulkar','Rahul Dravid','Matthew Hayden'],
        answer:'Brian Lara'
    },{
        question:'How many runs did Shane Warne score in his last innings of test match cricket in 2007?',
        options:['49','71','99','77'],
        answer:'71'
    },{
        question:'What was Shane Warne’s final test wicket count at the end of his career?',
        options:['701','708','700','800'],
        answer:'708'
    },{
        question:'Which West Indian fast bowler took 7 wickets for 1 run against Australia in 1993?',
        options:['Curtly Ambrose','Michael Holding','Ian Bishop','Andy Roberts'],
        answer:'Curtly Ambrose'
    },{
        question:' Which team was Matthew Hayden playing against when he broke Brian Lara’s world record?',
        options:['England','Zimbabwe','West Indies','India'],
        answer:'Zimbabwe'
    },{
        question:' Which Indian batsman did Muttiah Muralitharan dismiss to get to his 800th test wicket?',
        options:['Virat Kohli','MS Dhoni','Pragyan Ojha','Irfan Pathan'],
        answer:'Pragyan Ojha'
    },{
        question:'Which player was appointed captain of the Australian test team after Ricky Ponting retired?',
        options:['Michael Hussey','Steve Smith','Matthew Hayden','Michael Clarke'],
        answer:'Michael Clarke'
    },{
        question:'Which bowler holds the title for the fastest recorded delivery in international (2016)?',
        options:['Andy Roberts','Shoaib Akhtar','Jeff Thomson','Brett Lee'],
        answer:'Shoaib Akhtar'
    },{
        question:' How many wickets did Makhaya Ntini collect during his test career?',
        options:['390','383','376','350'],
        answer:'376'
    },{
        question:'Which Indian batsman scored 281 runs in the 2nd test against Australia in 2001?',
        options:['Sachin Tendulkar','VVS Laxman','Rahul Dravid','Sourav Ganguly'],
        answer:'VVS Laxman'
    },{
        question:'Which cricket team does AB De Villers play for?',
        options:['Australia','India','South Africa','England'],
        answer:'South Africa'
    },{
        question:'Who holds the current record of the most number of ODI stumpings?',
        options:['Mark Boucher','Kumar Sangakkara','Adam Gilchrist','M.S Dhoni'],
        answer:'M.S Dhoni'
    },{
        question:' Which Pakistan cricket player is the husband of the Indian tennis star, Sania Mirza?',
        options:['Shahid Afridi','Abdul Razzaq','Kamran Akmal','Shoaib Malik'],
        answer:'Shoaib Malik'
    },{
        question:'Which cricket team had Brad Hogg played for?',
        options:['Australia','South Africa','England','New Zealand'],
        answer:'Australia'
    },{
        question:'How many double centuries does Rohit Sharma have to his credit in ODIs?',
        options:['1','4','2','3'],
        answer:'3'
    },{
        question:'Who is the current captain of the England test team?',
        options:['Alastair Cook','Ben Stokes','Joe Root','Eoin Morgan'],
        answer:'Joe Root'
    },{
        question:'With what margin did Australia beat England in the recently concluded Ashes test series?',
        options:['3-0','4-1','5-0','4-0'],
        answer:'4-0'
    },{
        question:'Which current Indian cricketer saw a Bollywood biography released in his name in 2017?',
        options:['Yuvraj Singh','Kapil Dev','Virat Kohli','MS Dhoni.'],
        answer:'MS Dhoni.'
    },{
        question:'Which Indian cricketer recently got married to the Bollywood star, Anushka Sharma?',
        options:['K.L. Rahul','M.S Dhoni','Sachin Tendulkar','Virat Kohli'],
        answer:'Virat Kohli'
    },{
        question:'Which country is going to host the upcoming 2019 ODI World Cup?',
        options:['Australia','South Africa','India','England'],
        answer:'England'
    },{
        question:'Which captain won Australia the 2015 ODI World Cup?',
        options:['Steve Smith','Michael Hussey','Michael Bevan','Michael Clarke'],
        answer:'Michael Clarke'
    },{
        question:'Which team won the 2017 ODI ICC Champions Trophy?',
        options:['Pakistan','England','Australia','India'],
        answer:'Pakistan'
    },{
        question:'Who is the current New Zealand captain?',
        options:['martin Guptill','Brendon Mcculum','Ken Williamson.','Joe Root'],
        answer:'Ken Williamson.'
    },{
        question:'Which team does Tim Southee play for?',
        options:['Zimbabwe','New Zealand','England','Australia'],
        answer:'New Zealand'
    },{
        question:'What’s the name of the cricket stadium in Kolkata?',
        options:['Kotla','Chinnasawamy Stadium','Eden Garden','Denim Garden'],
        answer:'Eden Garden'
    },{
        question:'This cricket-playing country has Cape of Good Hope. Which team is this?',
        options:['South Africa','Australia','Zimbabwe','New Zealand'],
        answer:'South Africa'
    },{
        question:'Who is the current Indian head coach?',
        options:['Gary Kirsten','Ravi Shastri','Rahul Dravid','Anil Kumble'],
        answer:'Ravi Shastri'
    },{
        question:'Who is the current Indian fielding coach?',
        options:['Mohammad Kaif','Jhonty Rhodes','Ravi Shastri','Sanjay Bangar'],
        answer:'Sanjay Bangar'
    },{
        question:'Who is the regular test wicket-keeper in the Indian team?',
        options:['Dinesh Kartik','K.L Rahul','M.S Dhoni','Wriddhiman Saha'],
        answer:'Wriddhiman Saha'
    },{
        question:'Who is going to host the 2023 ODI World Cup?',
        options:['South Africa','Australia','Sri Lanka','India'],
        answer:'India'
    },{
        question:'Which is squarer - In cricket field position terms ?',
        options:['extra cover','point','mid on','long off'],
        answer:'point'
    },{
        question:'Which is straighter - In cricket field position terms ?',
        options:['long on','point','cover','short leg'],
        answer:'long on'
    },{
        question:'When was IPL started?',
        options:['2010','2007','2008','2009'],
        answer:'2008'
    },{
        question:'Which team has never won the IPL tournament?',
        options:['Royal Challengers Bangalore','Rajasthan Royals','Sunrisers Hyderabad','Deccan Chargers'],
        answer:'Royal Challengers Bangalore'
    },{
        question:'Who has hit most sixes in all the IPL tournaments?',
        options:['AB de Villiers','Chris Gayle','Suresh Raina','Rohit Sharma'],
        answer:'Chris Gayle'
    },{
        question:'Maximum how many foreign players can play in the playing eleven of the IPL match?',
        options:['Not Fixed','5','4','3'],
        answer:'4'
    },{
        question:'Who has taken most catches in the IPL history so far?',
        options:['Dwayne Bravo','Rohit Sharma','AB de Villiers','Suresh Raina'],
        answer:'Suresh Raina'
    },{
        question:'Who is the costliest player in the IPL auction history?',
        options:['Yuvraj Singh','Yusuf Pathan','Gautam Ghambir','Ben Stokes'],
        answer:'Yuvraj Singh'
    },{
        question:'Which player has taken most numbers of hat-tricks in the IPL so far?',
        options:['Lasith Malinga','Amit Mishra','Praveen Kumar','Yuvraj Singh'],
        answer:'Amit Mishra'
    },{
        question:'Which team has won highest numbers of IPL matches so far?',
        options:['Rajasthan Royals','Royal Challenmgers Bangalore','Mumbai Indians','Chennai Super Kings'],
        answer:'Mumbai Indians'
    },{
        question:'Who hits the fastest Fifty in IPL11?',
        options:['Virat Kohli','A.B DeVilliers','KL Rahul','Yuvraj Singh'],
        answer:'KL Rahul'
    },{
        question:'How many teams are participating in IPL Twnty20 cricket tournament 2018?',
        options:['10','8','7','9'],
        answer:'8'
    },{
        question:'Who was the champion of IPL t20 tournament 2017?',
        options:['Mumbai Indians','Royal Challengers Bangalore','Pune Warriors','Chennai Super Kings'],
        answer:'Mumbai Indians'
    },{
        question:'Which Country Cricket team is referred to Kiwis ?',
        options:['England','Australia','India','Newzealand'],
        answer:'Newzealand'
    },{
        question:'Which Cricket Stadium is called as Mecca of Cricket ?',
        options:['Lords Cricket Ground','Eden Gardens','SCG','MCG'],
        answer:'Lords Cricket Ground'
    },{
        question:'Who is Famous for Helicopter Shot in Cricket ?',
        options:['Virat Kohli','M S Dhoni','Sachin Tendulkar','Virendra Sehwag'],
        answer:'M S Dhoni'
    },{
        question:' Cricket World Cup is held every ______ years ?',
        options:['1','2','5','4'],
        answer:'4'
    },{
        question:'who has taken the most wickets in world cups?',
        options:['wasim akram','shane warne','glen mcgrath','muttiah muraliduran'],
        answer:'glen mcgrath'
    },{
        question:'who won the 1996 world cup',
        options:['pakistan','england','australia','srilanka'],
        answer:'srilanka'
    },{
        question:'what is michael clarkes nick name',
        options:['joy','punter','pup','mr cricket'],
        answer:'pup'
    },{
        question:'what is shane watsons highest score in odi?',
        options:['169','181','178','185'],
        answer:'185'
    },{
        question:'yuvraj singh won how many man of the match in 2011 world cup',
        options:['1','4','2','3'],
        answer:'3'
    },{
        question:'South Africa lost in quarter final against which team',
        options:['India','Pakistan','England','Sri lanka'],
        answer:'Sri lanka'
    },{
        question:'Which player won man of tournament in 2011 world cup',
        options:['Sachin Tendulkar','M.S Dhoni','Dilshan','Yuvraj Singh'],
        answer:'Yuvraj Singh'
    },{
        question:'Where was the the quarter final in 2011 world cup between South africa and Newzealand was played',
        options:['Mohali','Eden Gardens','Dhaka','Colombo'],
        answer:'Colombo'
    },{
        question:'Who hit the winning run for sri lanka in the 1996 world cup final?',
        options:['Roshan Mahanama','Arjuna Ranatunga','Sanath Jayasuriya','Aravinda De Silva'],
        answer:'Arjuna Ranatunga'
    },{
        question:'Name the highest scorer in the 2011 world cup?',
        options:['Yuvraj Singh','T. Dilshan','Sachin Tendulkar','Tharanga'],
        answer:'T. Dilshan'
    },{
        question:'Who made the century on 37 balls against Sri lanka and which team won T20 final in 2009',
        options:['Kamran Akmal and pakistan','Shahid afridi and Pakistan','danniel vettori and New Zealand','Yuvraj singh and India.'],
        answer:'Shahid afridi and Pakistan'
    },{
        question:'WHO IS THE ONLY INDIAN PLAYER TO TAKE 10 WICKET HAUL IN AN INNING OF TEST CRICKET',
        options:['Zaheer Khan','Anil Kumble','Kapil Dev','RAVICHANDRAN ASHWIN'],
        answer:'Anil Kumble'
    },{
        question:'Who Hit The Winning Runs For India In Icc Cricket world cup 2011',
        options:['Gautam gambhir','Sachin Tendulkar','Yuvraj Singh','M.S Dhoni'],
        answer:'M.S Dhoni'
    },{
        question:'Who was the runners up team in the champions trophy 2009',
        options:['India','England','Sri Lanka','Pakistan'],
        answer:'England'
    },{
        question:'Between which teams was the 1st t20 match played?',
        options:['Aus vs SA','Eng vs Aus','Ind vs Pak','Aus vs New zealand'],
        answer:'Aus vs New Zealand'
    },{
        question:'Who has reached semifinal of worldcup most number of  times?',
        options:['Australia','England','Newzealand','South Africa'],
        answer:'Newzealand'
    },{
        question:'Who won the 2010 T20 International Cricket World Cup??',
        options:['Pakistan','England','Australia','India'],
        answer:'England'
    },{
        question:'which cricketer get the fastest century in test cricket in his debut?',
        options:['Shahid Afridi','shikhar dhawan','vivian richards','Virender sehwag'],
        answer:'shikhar dhawan'
    },{
        question:' Who has the record for most number of fifties as well as hundreds in both one day and test Cricket??',
        options:['Sachin Tendulkar','Brian Lara','Ricky Ponting','Viv Richards'],
        answer:'Sachin Tendulkar'
    },{
        question:' Which Cricketer has highest record for most fifties and hundreds for Australian side??',
        options:['Don Bradman','Ricky Ponting','Steve Waugh','Mathew Hayden'],
        answer:'Ricky Ponting'
    },{
        question:'Which team won the ICC 2003 cricket world cup?',
        options:['PAKISTAN','SRI LANKA','AUSTRALIA','INDIA'],
        answer:'AUSTRALIA'
    },{
        question:'What is Sachin tendulkar highest score in ODIS?',
        options:['186','205','200','210'],
        answer:'200'
    }]);
});