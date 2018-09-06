const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://rohan-boss-2:Mentality098@127.0.0.1:27017/QUIZ_GAME',(err,client)=>{
    if(err){
        return console.log('Unable to connect to Mongodb');
    }
    const db = client.db('QUIZ_GAME');
    console.log('connected to the MongoDb server');

    db.collection('movies_QUESTIONS').insertMany([{
        question:'For which film did Leonardo DiCaprio win his first Academy Award?',
        options:['Steve Jobs','The Revenant','Titanic','Trumbo'],
        answer:'The Revenant' 
    },{
        question:'Aishwarya Rai was crowned Miss World in which year?',
        options:['1994','1995','1996','1993'],
        answer:'1994'  
    },{
        question:'Lata Mangeshkar made her debut in Hindi playback singing with the movie...?',
        options:['Andaaz','Deewar','Aap ke Sewa Main','Barsaat'],
        answer:'Aap ke Sewa Main'  
    },{
        question:' Tabu\'s real name is...?',
        options:['Shakeela Merchant','Taslim Khan','Tabassum Fatima Hashmi','Tabakul'],
        answer:'Tabassum Fatima Hashmi'  
    },{
        question:'Before Akshay Kumar became an actor, he worked as a...?',
        options:['Clerk','Journalist','Reporter','Waiter'],
        answer:'Waiter'   
    },{
        question:'What were John Abraham and Akshay Kumar\'s professions in Garam Masala?',
        options:['Lawyers','Professors','Photographers ','Reporter'],
        answer:'Photographers '  
    },{
        question:' What was Shah Rukh\'s mantra to woo a girl in Kal Ho Naa Ho?',
        options:['Do din ladki in','Che din ladki in','Ek din ladki in','Saat din ladki in'],
        answer:'Che din ladki in' 
    },{
        question:'Madhuri Dixit\'s name in N Chandra\'s \'Tezaab\' was...?',
        options:['Madhuri','Mohini','Pooja','Neha'],
        answer:'Mohini' 
    },{
        question:'The name of Kajol\'s character in Sohail Khan\'s Pyar Kiya Toh Darna Kya was...?',
        options:['Anjali','Simran','Heena','Muskan'],
        answer:'Muskan' 
    },{
        question:'The name of Saif Ali Khan\'s daughter is...?',
        options:['Rhea','Tara','Zara','Sara'],
        answer:'Sara'
    },{
        question:'In which film did Aishwarya Rai pretended to play twins?',
        options:['Devdas','Dhoom2','Jeans','Josh'],
        answer:'Jeans'
    },{
        question:'This movie was initially titled High Jump. The movie is said to have been inspired from the biography of the legendary Japanese filmmaker Akiro Kurosawa. What movie is being talked about here?',
        options:['Luck By Chance','Wake Up Sid','3 Idiots','Taare Zameen Par'],
        answer:'Taare Zameen Par'
    },{
        question:'This song is also the opening song of the second act of A.R. Rahman, Don Black, Shekhar Kapur, and Andrew Lloyd Webber\'s musical Bombay Dreams. Identify the song.',
        options:['Chhaiya Chhaiya','Jai Ho','Shakalaka Baby','Yeh Taara Woh Taara'],
        answer:'Chhaiya Chhaiya'
    },{
        question:'Shehenshah is one of the most iconic movies of Bollywood history. Who wrote the original story of Shehenshah?',
        options:['Jaya Bachchan','Javed Akhtar','Salim Khan','Inder Raj Anand'],
        answer:'Jaya Bachchan'
    },{
        question:'A famous Bollywood star said in a statement that this song is dedicated to Sachin Tendulkar who was then playing his final test match at Wankhede.Identify the song.',
        options:['Havan Karenge','Get on the dance floor','Dhoom Machale (Dhoom 3)','Race 2 title track'],
        answer:'Dhoom Machale (Dhoom 3)'
    },{
        question:' In "Sholay", what was the name of Basanti\'s horse?',
        options:['Jay','Dhano','Asha','Leela'],
        answer:'Dhano'
    },{
        question:'What was the name of the alien in "Koi Mil Gaya"?',
        options:[' Baloo','Jadoo','E.T.','Roy'],
        answer:'Jadoo'
    },{
        question:'What was the name of the lead \'bad-guy\' in Dhoom ?',
        options:['Kabir','Rohit',' Jay','Anthony'],
        answer:'Kabir'
    },{
        question:'What was Ramprasad Sharma"s military rank in the movie "Main hoon Na"?',
        options:['Captain','Major','General','Lieutenant'],
        answer:'Major'
    },{
        question:' What kind of movie was "Hungama"?',
        options:['Romance','Comedy','Horror','Mystery'],
        answer:'Comedy'
    },{
        question:'Saachi saachi teri nazrein ek darpan,Dede mann ki yeh khabrein ek pal chin, Adharon ne kuch na kaha re... Naino ne keh diya..."These are the lyrics to which Bollywood song?',
        options:['Munni Badnaam','Tere Mast Mast Do Nain','chori Kiya Re Jiya','Hud Hud Dabangg'],
        answer:'chori Kiya Re Jiya'  
    },{
        question:' The following lyrics are from which song?"Ab se koi khushi nahi,Jiski tum wajah nahi, Ab se koi din nahi,Jiski tum subah nahi,',
        options:['Tumse Hi Tumse','Anjaana Anjaani ki Kahani','Aas Pas Hai Khuda','Hairat'],
        answer:'Tumse Hi Tumse' 
    },{
        question:'Tumhe kaise main bataun, kya main paa gaya hoon, Tum jo mere saath ho,Mujhko duniya mil gayi hai, zindagi badal gayi haiTum jo mere saath ho..."These are the lyrics to...?',
        options:['O Bekhabar','Hey Ya','Uff Teri Ada','Dhak Dhak Dhak'],
        answer:'Hey Ya'  
    },{
        question:'"Dil kho gaya, ho gaya kisi ka,Ab raasta mil gaya kushi ka"These are the lyrics to which of the following songs?',
        options:['Teri Ore','Ajab Si',' Ore Saawariya','Main Agar Kahoon'],
        answer:'Teri Ore'   
    },{
        question:' Which song are these lyrics a part of?"Jis pal na chaha tujhko,Uss pal sazayein maangi,Paya hai maine phir tujhe"',
        options:['Marjaani','Love Mera Hit Hit','Sajde Kiye hai Lakhon','Nanachi Taang'],
        answer:'Sajde Kiye hai Lakhon'  
    },{
        question:' Who composed the albums of Imtiaz Ali\'s latest films',
        options:['Sajid - Wajid','Pritam','Vishal - Shekar','A.R Rahman'],
        answer:'A.R Rahman'  
    },{
        question:'Which movie star has two-joint thumbs',
        options:['Varun Dhawan','Hrithik Roshan','Shah Rukh Khan','Saif Ali khan'],
        answer:'Hrithik Roshan'   
    },{
        question:'Saif Ali Khan starred in which 2014 film?',
        options:['Phantom','Fanaa','Dil Bole Hadippa','Happy Ending'],
        answer:'Happy Ending'   
    },{
        question:'Bade Bade Deshon Mein.That was a quote from which movie....',
        options:['Dilwale','K3G','CHENNAI EXPRESS','DDLJ'],
        answer:'DDLJ'   
    },{
        question:'Bade Bade Deshon Mein...',
        options:['Aisi Baat Hoti Rehti Hai','Aisi Gandi Gandi Baatein Hoti Rehti Hai','Aisi Badi Badi Baatein Hoti Rehti Hai','Aisi Choti Choti Baatein Hoti Rehti Hai'],
        answer:'Aisi Choti Choti Baatein Hoti Rehti Hai'   
    },{
        question:'What was the title of the popular song from the film \'Khoobsurat\'',
        options:['Abhi Toh Party Shuru Hui Hai','Abhi tu party Shuru nai ho sakti','Abhi tu party ke samaapt ho gaya hai','Abhi tu party kharaab kar diya hai'],
        answer:'Abhi Toh Party Shuru Hui Hai'    
    },{
        question:'Which film had this plot; A slim guy and a fat woman go through an arranged marriage and find love between them',
        options:['Tanu Weds Manu','Dum Laga Ke Haisha','Mere Brother Ki Dulhan','PIKU'],
        answer:'Dum Laga Ke Haisha'  
    },{
        question:'The Director of Shah Rukh Khan\'s first film of 2016, Fan, previously did two consecutive movies with the same pair, who was the male of the pair?',
        options:['Boman Irani','Ranveer Singh','Varun Dhawan','Shahid Kapoor'],
        answer:'Ranveer Singh' 
    },{
        question:'One of the first box office mega hits was the 1960 historical film, Mughal-E-Azam. Who portrayed the role of Emperor Akbar in the movie?',
        options:['Dilip Kumar','Prithviraj Kapoor','Manoj Kumar',' Sohrab Modi'],
        answer:'Prithviraj Kapoor' 
    },{
        question:'In the late 1970s and the 1980s, Bollywood had one superstar Amitabh Bachchan. One of his super hit movies was Don released in 1978. Who played the role of the Don?',
        options:['Ashok Kumar','Pran','Amitabh Bachchan','Ifthikar'],
        answer:'Amitabh Bachchan' 
    },{
        question:'Sholay released in 1975 is without doubt one of the greatest Hindi movies. The movie created many cult characters, which of the following is the odd one out?',
        options:['Asrani :Jailer','Hema Malini :Radha','Amjad Khan :Gabbar Singh','Sanjeev Kumar Thakur'],
        answer:'Hema Malini :Radha' 
    },{
        question:' In which of the following films did Shah Rukh Khan play the role of a villain?',
        options:['Darr','Kuch Kuch Hota Hai','Dilwale Dulhaniya Le Jayenge','Pardes'],
        answer:'Darr' 
    },{
        question:'This film starred Aamir Khan and Juhi Chawla. Do you know the name of the film?',
        options:['Maine Pyar Kiya','Aashiqi','Qayamat Se Qayamat Tak','Dil'],
        answer:'Dil' 
    },{
        question:'Kabhi Khushi Kabhie Gham\' was released in 2001. Who among the following did NOT act in the movie?',
        options:['Shah Rukh Khan','Salman Khan','Hrithik Roshan','Amitabh Bachchan'],
        answer:'Salman Khan'
    },{
        question:'"Rangeela" starred Urmila Matondkar, Aamir Khan And?',
        options:['jackie shroff','salman khan','amitabh bacchan','ajay devgan'],
        answer:'jackie shroff'
    },{
        question:'What was Kajol’s screen name in her comeback film ‘Fanaa’?',
        options:['Neha','Ruby','Nafisa','Zooni'],
        answer:'Zooni'
    },{
        question:'Who played the role of Shahrukh Khan’s sister in the film Josh?',
        options:['Priyanka Chopra','Rani Mukherji','Aishwarya Rai','Priya Gill'],
        answer:'Aishwarya Rai'
    },{
        question:'Which was the first film in which Kajol was paired opposite SRK?',
        options:['K3G','Baazigar','Karan Arjun','DDLJ'],
        answer:'Baazigar'
    },{
        question:'Shahrukh Khan’s Date of Birth',
        options:['2 December 1965','25 October 1966','2 November 1965','2October 1965'],
        answer:'2October 1965'
    },{
        question:'Shah Rukh says, “Jahan se main dekh raha hoon, wahan se aap sab kuch haar gaye.” Identify the film and the other actor',
        options:['Amitabh Bachchan, Mohabbatein','Amitabh Bachchan, KKKG','Amrish Puri, DDLJ','Sathyaraj, Chennai Express'],
        answer:'Amitabh Bachchan, Mohabbatein'
    },{
        question:'Which of these films had Kajol in a double role?',
        options:['Dushman','Dilwale Dulhania Le Jayenge','Duplicate','Diljale'],
        answer:'Dushman'
    },{
        question:'Shahrukh Khan is the founder/owner of two production companies. One is Red Chillies Entertainment. Which is the other?',
        options:['Dreamz Unlimited','Dreams Limited','Big Chillies Entertainment',' Yellow Chillies Entertainment'],
        answer:'Dreamz Unlimited'
    },{
        question:'The film had Saif Ali Khan and Aditya Pancholi fighting it out to for Kajol’s love. Name the film.',
        options:['Baazigar','Yeh Dillagi','Bambai Ka Babu','Hamesha'],
        answer:'Hamesha'
    },{
        question:'Shahrukh Khan’s First Film as a Producer',
        options:['Asoka','Dil Se B. Dil To Pagal Hai','Josh','Phir Bhi Dil Hai Hindustani'],
        answer:'Phir Bhi Dil Hai Hindustani'
    },{
        question:'Which film had actor Jeetendra playing Kajol’s grandfather?',
        options:['Udhar Ki Zindagi',' Hulchul','Hamesha','Ishq'],
        answer:'Udhar Ki Zindagi'
    },{
        question:'What movie is the song \'Kajra Re\' from?',
        options:['Kabhi Khushi Kabhie Gham','Dus','Salaam Namaste','Bunty Aur Babli'],
        answer:'Bunty Aur Babli'  
    },{
        question:'\'Where\'s the Party Tonight\', \'Rock and Roll Soniye\', and \'Mitwa\' are songs from what popular movie?',
        options:['Kal Ho Naa Ho','Dhoom 2','Don (2006)','Kabhi Alvida Naa Kehna'],
        answer:'Kabhi Alvida Naa Kehna' 
    },{
        question:'Which of these is a song from the movie "Veer-Zaara"?',
        options:['Silsila Ye Chahaat Ka','Main Yahaan Hoon','Chand Sifarish','Chup Chup Ke'],
        answer:'Main Yahaan Hoon'  
    },{
        question:'Which of these people sang a part in the song \'Maahi Ve\'?',
        options:['Loy Mendosa','Alka Yagnik','Shaan','Sadhana Sargam'],
        answer:'Sadhana Sargam'  
    },{
        question:'Who starred in the song \'You Are My Soniya\'?',
        options:['Abhishek & Aishwarya','Saif & Rani','Shahrukh & Preity','Hrithik & Kareena'],
        answer:'Hrithik & Kareena'   
    },{
        question:'The song \'Salaam Namaste\' took place where?',
        options:['in the mountains','a dance club','a party','a beach'],
        answer:'a beach'  
    },{
        question:'What movie is the song \'Ladki Kyon\' from?',
        options:['Bunty Aur Babli','Hum Tum','Devdas','Fanaa'],
        answer:'Hum Tum'  
    },{
        question:'The song \'Crazy Kiya Re\' is sung by what popular singer?',
        options:['Shreya Ghoshal','Alka Yagnik','Alisha Chinnai','Sunidhi Chauhan'],
        answer:'Sunidhi Chauhan'   
    },{
        question:'The movie "Saathiya" included which of the following songs?',
        options:['Tere Liye','Chhalka Re','Aao Na','Dola Re Dola'],
        answer:'Chhalka Re'   
    },{
        question:'The song \'Tumhe Jo Maine Dekha\' starred which of these people?',
        options:['Shahrukh & Preity','Shahrukh & Sushmita','Shahrukh & Rani','Shahrukh and Aishwarya'],
        answer:'Shahrukh & Sushmita'   
    },{
        question:'One of the superstars of Bollywood was Rajesh Khanna. Who was the famous singer who was known as the voice of Rajesh Khanna?',
        options:[' Mohammed Rafi','Kishore Kumar','Mukesh','Talat Mahmood'],
        answer:'Kishore Kumar'  
    },{
        question:'\'Dilwale Dulhaniya Le Jayenge (DDLJ)\' was a musical hit starring Shahrukh and Kajol. Which of these songs is from the film DDLJ?',
        options:['Mehndi Laga Ke Rakhna','Chak De India','Yeh Kaali Kaali Ankhen','Dard E Disco'],
        answer:'Mehndi Laga Ke Rakhna' 
    },{
        question:'In which film did Shreya Ghoshal made her debut in Bollywood as a playback singer ?',
        options:['Singham','Devdas','Paa','Student of the year'],
        answer:'Devdas' 
    },{
        question:'in film ek tha tiger what was the name of katrina kaif',
        options:['zARA','sophia','zoya','meera'],
        answer:'zoya'
    },{
        question:'what are john abrahm and akshay kumar\'s profession in garam masaala',
        options:['reporter','professor','photographer','lawyer'],
        answer:'photographer'
    },{
        question:'Who plays the female lead in the movie \'Chandni Chowk to China\'?',
        options:['Kajol','Rani Mukherjee','Deepika Padukone','Kareena kapoor'],
        answer:'Deepika Padukone'
    },{
        question:'Mehmood was an actor, director and producer who was known for playing comic roles.Who among the following is his son?',
        options:['Lucky','Salman','Saif','Naseeruddin'],
        answer:'Lucky'
    },{
        question:'Which of the following actors appeared in the comedies “Munnabhai MBBS”, “Anthony Kaun Hai”, “Lage Raho Munnabhai” and “Golmaal”?',
        options:['Boman Irani','Jimmy Shergill','Arshad Warsi','Sanjay Dutt'],
        answer:'Arshad Warsi'
    },{
        question:'In the Bollywood movie Black, Amitabh Bachchan suffers from…',
        options:['Parkinson\'s Disease','Alzheimer\'s Disease','Tuberculosis','Blindness'],
        answer:'Alzheimer\'s Disease'
    },{
        question:'Which Bollywood actor did PETA (People for the Ethical Treatment of Animals) vote as ‘the hottest vegetarian’ alive?',
        options:['Kajol','Amitabh Bachchan','Aishwarya Rai','Shahrukh Khan'],
        answer:'Amitabh Bachchan'
    },{
        question:'these are the lyrics to which song?"Dhandha Hai Yeh Uska Puraana,Hai Ram, Kudiyon Ko Daale Daana."',
        options:['Ek Do Teen','Bahut Pyaar Karate Hain','O Priyaa Priyaa','Didi Tera Dewar Diwana'],
        answer:'Didi Tera Dewar Diwana'
    },{
        question:'"Doli mein bitha ke,Sitaro se sajake,Zamane se churake,Lejayega ek roj tera udke jiya..."These lyrics are from which song?',
        options:['Saawariya','Tujh Mein Rab Dikta Hai','Dance Pe Chance','Kuch Kuch Hota Hai'],
        answer:'Saawariya'
    },{
        question:'“Kaal”, “Zinda”, “Taxi No 9211”, “Dhoom” and “Kabul Express” were films where a love story was not the main plot. Which of the following actors or actresses appeared in all these five films?',
        options:['Lara Dutta','John Abraham','Arshad Warsi','Salman Khan'],
        answer:'John Abraham' 
    },{
        question:'Which was the first monochrome film to be fully converted into colour in 2004?',
        options:['Pari','Guide','Mother India','Mughal-e-Azam'],
        answer:'Mughal-e-Azam'  
    },{
        question:'“Kuch Kuch Hota Hain”, “Kabhi Khushi Kabhie Gham”, “Kal Ho Na Ho” and “Kabhi Alvida Na Kehna” were produced by Dharma Productions. Which of the following actors or actresses appeared in all four films?',
        options:['Amitabh Bachchan','Shahrukh Khan','Preity Zinta','Salman Khan'],
        answer:'Shahrukh Khan'  
    },{
        question:'"Chaiyya Chaiyya"  in the film Dil Se was filmed on which actress?',
        options:['Manisha Koirala','Malikka Sherawat','Malaika Arora','Madhuri Dixit'],
        answer:'Malaika Arora'  
    },{
        question:'Which actress i bollywood is kown as the Dhak Dhak girl? ',
        options:['Sonam','Juhi Chawla','Sridevi','Madhuri Dixit'],
        answer:'Madhuri Dixit'  
    },{
        question:'Arjun Kapoor,son of film producer Boney Kapoor is making his debut in bollywood through which film',
        options:['Ishaqzaade','Bitto Boss','Vicky Donor','Janat 2'],
        answer:'Ishaqzaade'   
    },{
        question:'Which actress played the lead role in thriller/black comedy movie "7 Khoon Maaf"?',
        options:['Rani Mukherjee','Priyanka Chopra','Vidya Balan','Nandita das'],
        answer:'Priyanka Chopra'  
    },{
        question:'Nargis Fakhri, who made her debut opposite Ranbir Kapoor in film Rockstar in 2011,is a ciizen of which country?',
        options:['Pakistan','Afghansitan','Czech Republic','USA'],
        answer:'USA' 
    },{
        question:'Bollywood actor Ritesh Deshmukh,son of maharashtra chief minister Vilasrao Deshmukh,recently married to which actress?',
        options:['Genelie D\'souza','Lara Dutta','Jacqueline Fernandez','Shilpa Shetty'],
        answer:'Genelie D\'souza' 
    },{
        question:'What is the name of Salman Khan\'s father who is also a celebrated bollywood script writer?',
        options:['Irfan Khan','Kader Khan',' Sanjay Khan','Salim Khan'],
        answer:'Salim Khan' 
    },{
        question:'What is the name of the character played by Salman Khan in the film Hum Dil De Chuke Sanam?',
        options:['Sameer','Salman','Prem','Rahul'],
        answer:'Sameer' 
    },{
        question:'Name the debut film of Salman Khan.',
        options:['Maine Pyar Kiya','Biwi Ho To Aisi','Hum Aapke Hain Kaun','Saajan'],
        answer:'Biwi Ho To Aisi' 
    },{
        question:'Name the Sooraj Barjatya directed romantic family drama in which Salman Khan played the leading role alongside famous actress Madhuri Dixit?',
        options:['Hum Aapke Hain Kaun','Maine Pyar Kiya',' Hum Tumhare Hain Sanam','Saajan'],
        answer:'Hum Aapke Hain Kaun'
    },{
        question:'In which city was Salman Khan born?',
        options:['Mumbai','Indore','Bangalore','New Delhi'],
        answer:'Indore'
    },{
        question:'Which actress played the lead role opposite Salman Khan in the Sooraj Barjatya directed superhit film Maine Pyar Kiya?',
        options:['Madhuri Dixit','Karishma Kapoor','Bhagyashree','Rani Mukherjee'],
        answer:'Bhagyashree'
    },{
        question:'In which David Dhavan comedy does Salman Khan play the role of a married man having an affair with a model, played by Sushmita Sen?',
        options:['Baghban','Main Aur Mrs Khanna','Kal Ho Na Ho','Biwi No. 1'],
        answer:'Biwi No. 1'
    },{
        question:'	Who played the role of Salman Khan\'s Boss in the film Hello Brother?',
        options:['Anupam Kher','Shakti Kapoor','Dalip Tahil','Amitabh Bachchan'],
        answer:'Shakti Kapoor'
    },{
        question:'What role does Salman Khan play in the film Veer?',
        options:['Warrior','King','God','Police Inspector'],
        answer:'Warrior'
    },{
        question:'Who played the role of Salman Khan\'s brother in the film Chal Mere Bhai?',
        options:['Sanjay Dutt','Sohail Khan','Jackie Shroff','Arbaaz Khan'],
        answer:'Sanjay Dutt'
    },{    question:'Who plays the lead star in the movie ‘Page 3’?',
        options:['Rani Mukherjee','Nandita Das','Konkana Sen','Kajol'],
        answer:'Konkana Sen'
    },{
        question:'Which Indian movie gained entry into Hollywood’s Oscar Awards in 2003?',
        options:['Dil Chahta hai','Devdas','Asoka','The Legend of Bhagatsingh'],
        answer:'Devdas'
    },{
        question:'In which 1995 film directed by Rakesh Roshan did Salman Khan co-star with famous actor Shahrukh Khan',
        options:['Kuch Kuch Hota Hai','Karan Arjun','Om Shanti Om','Hum Tumhare Hain Sanam'],
        answer:'Karan Arjun'  
    },{
        question:'What role did Salman Khan play in the film God Tussi Great Ho? ',
        options:['Television Anchor ','God','Businessman','Television Reporter'],
        answer:'Television Anchor ' 
    },{
        question:'Shahrukh khan\'s first film',
        options:['Chamatkaar','Darr','Deewana','Baazigar'],
        answer:'Deewana'  
    },{
        question:'Shahrukh khan\'s first television apperence',
        options:['Ishq','Circus','Dil dariya','Fauji'],
        answer:'Dil dariya'  
    },{
        question:'Shahrukh Khan\'s wife\'s name',
        options:['Pakkezzah Khan','Suhana Khan','Suzzanne Khan','Gauri Khan'],
        answer:'Gauri Khan'   
    },{
        question:'For which film Shahrukh Khan got first filmfare best actor award',
        options:['darr','Yes Boss','Baazigar','Dilwale Dulhania Le Jayenge'],
        answer:'Baazigar'  
    },{
        question:'Shahrukh Khan\'s Date of Birth',
        options:['2 November 1965','2 October 1965','2 November 1967','4 November 1965'],
        answer:'2 November 1965'  
    },{
        question:'In Shahrukh\'s movie "FAN", what were the two roles played by him?',
        options:['Director Rahul & Actor AbRam','Superstar Aryan & Fan Gaurav','Superstar Gaurav & Fan Aryan','Actor Raj & Teacher Mohan'],
        answer:'Superstar Aryan & Fan Gaurav'   
    },{
        question:'Shah Rukh Khan lends his voice to the Hindi-dubbed version of which of these English films?',
        options:['Shrek','The Incredibles','Bolt','Turbo'],
        answer:'The Incredibles'   
    },{
        question:'What is the name of Shahrukh\'s mansion in Mumbai?',
        options:['Paradise','Villa Khan','Mannat','Jannat'],
        answer:'Mannat'   
    },{
        question:'In which of these movies does Shahrukh Khan NOT play a negative role?',
        options:['Baadshah','Anjaam','Darr','Baazigar'],
        answer:'Baadshah'    
    },{
        question:'Shah Rukh Khan and Juhi Chawla have worked together in how many films?',
        options:['12','11','10','9'],
        answer:'11'  
    },{
        question:'Before making his acting debut, how was Ranbir Kapoor related to films?',
        options:['Casting Director','Assistant Director','Script Writer','Director'],
        answer:'Assistant Director' 
    },{
        question:'Which Adele song broke a YouTube record by receiving a billion views in 87 days?',
        options:['Remedy','Hello','When We Were Young','I Miss You'],
        answer:'Hello'  
    },{
        question:'Who is the Director of Dabangg?',
        options:['Ram Gopal Verma','Anurag Kashyap','Abhinav Kashyap','Arbaz khan'],
        answer:'Arbaz khan'
    },{
        question:'Who is the Music Director of Rang de Basanti?',
        options:['A.R Rehman','Shankar-Ehsaan-Loy','Nadeem Shravan','Jatin Lalit'],
        answer:'A.R Rehman'
    },{
        question:'In which of these movies Amitabh Bachhan played a negative role?',
        options:['Family','Khakee','Ek Ajnabee','Baabul'],
        answer:'Family'
    },{
        question:'What was the name of Sunil Shetty\'s Character in the movie Hera Pheri?',
        options:['Shyam','Khadak Singh','Babubhai','Raju'],
        answer:'Shyam'
    },{
        question:'From where does Veeru propose to Basanti in Sholay?',
        options:['Top of a hill','Top of a roof','Top of a water tank','Top of a tree'],
        answer:'Top of a water tank' 
    },{
        question:'Who is the director of the movie "Dil to Pagal Hai"?',
        options:['Yash Chopra','Suraj Barjatya','Karan Johar','Aditya Chopra'],
        answer:'Yash Chopra'
    },{
        question:'Amrita Rao made her Bollywood debut with which movie?',
        options:['The Legend of Bhagat Singh','Ab ke Baras','Main Hoon Naa','Ishq Vishk'],
        answer:'Ishq Vishq'
    },{
        question:'WHICH ACTOR\'S REAL NAME IS RAJIV OM BHATIA?',
        options:['OM PURI','SUNNY DEOL','AJAY DEVGAN','AKSHAY KUMAR'],
        answer:'AKSHAY KUMAR'
    },{
        question:'who is the female actor in kya kehna',
        options:['Kareena kapoor','priety zinta','juhi chawla','kajol'],
        answer:'priety zinta'
    },{
        question:'Who was the co-star of Aishwariya Rai in Raavan??',
        options:['Rajnikant','Abhishekh Bachchan','Amitabh Bachchan','Akshay Kumar'],
        answer:'Abhishekh Bachchan'
    },{
        question:'Which of these is the song of Action Replayy??',
        options:['De Dhana Dhan','Singh Is King','Kajraare','Zor Ka Jhatka'],
        answer:'Zor Ka Jhatka'
    },{
        question:'Which of these songs is the one of Break Ke Baad??',
        options:['Bin Tere','Om Shanti Om','Dhoop Ke Makaan','Khuda Jaane'],
        answer:'Dhoop Ke Makaan'
    },{
        question:'Which one of these films has Abhishekh Bachchan acted??',
        options:['Khele Hum Jee Jaan Sey','Break Ke Baad','I Hate Luv Storys','Bhoothnath'],
        answer:'Khele Hum Jee Jaan Sey'
    },{
        question:'Katrina _________??',
        options:['Khalif','Khan','Kaif','Kaleen'],
        answer:'Kaif'
    },{
        question:'What is the name of katrina kaif in ajab prem ki ghazab kahani?',
        options:['kimmy','sandra','jenny','sophia'],
        answer:'jenny'
    },{
        question:'In the movie Dhoom 2 , who replaced John Abraham?',
        options:['Akshay Kumar','Salman','Hrithik','Shahrukh'],
        answer:'Hrithik'
    },{
        question:'who is the director turned actor turned singer?',
        options:['Sonu Nigam','Shaan','Farhan Akhtar','Kunal kholi'],
        answer:'Farhan Akhtar'
    },{
        question:'Who is Shahrukh Khan\'s wife?',
        options:['Kareena','Suhana','Gauri','Kajol'],
        answer:'Gauri'
    },{
        question:'In the film " Bhool Bhoolya", Vidya Balan was haunted by the spirit of:-',
        options:['Manorama','Mandakini','Manjulika','Madhurima'],
        answer:'Manjulika'
    },{
        question:'which movie akshay kumar is god?it is in 2012 movie.',
        options:['Khiladi 420','oh my god.','ek tha tiger','3 idots'],
        answer:'oh my god.'
    },{
        question:'Who is the actress of the movie \'krish',
        options:['KAREENA KAPOOR','PRIYANKA CHOPRA','PREETY ZINTA','KATRINA KAIF'],
        answer:'PRIYANKA CHOPRA'
    },{
        question:'In which movie is the phrase \'ALL IS WELL\'',
        options:['ROCK ON','DE DANA DAN','BLUE','3 IDIOTS'],
        answer:'3 IDIOTS'
    },{
        question:'What is Katrina Kaif\'s name in Yuvvraaj?',
        options:['Anjali Meher','Kirti Gupta','Anushka Banton','Muskaan Meher'],
        answer:'Anushka Banton'
    },{
        question:'What is Katrina Kaif\'s name in Race?',
        options:['Sukirti','Sophia','Sushmita','Sonia'],
        answer:'Sonia'
    },{
        question:'What is Katrina Kaif\'s name in Namastey London?',
        options:['Jennifer Winget','Jasmeet Malhotra','Sukirti Khandpal','Shilpa Gupta'],
        answer:'Jasmeet Malhotra'
    },{
        question:'In which of these movies is Salman\'s name \'PREM\'?',
        options:['PARTNER','CHORI CHORI CHUPKE CHUPKE','HUM APKE HAI KAUN','WANTED'],
        answer:'PARTNER'
    },{
        question:'\'JALWA\' THIS SONG IS FROM WHICH MOVIE',
        options:['RACE3','PARTNER','DABANG','WANTED'],
        answer:'WANTED'
    },{
        question:'\'EK BAR JO MAINE COMMITTMENT KARLI, TO PHIR USKE BAAD MEIN APNE AAP KI BHI NAHI SUNTA\' THIS IS FROM WHICH MOVIE?',
        options:['JANEMAN','WANTED','DABANG','PARTNER'],
        answer:'WANTED'
    },{
        question:'What is Shahrukh Khan\'s name in Dilwale Dulhania Le Jayenge?',
        options:['Karan Malhotra','Sanju','Arjun Saagar','Raj Malhotra'],
        answer:'Raj Malhotra'
    },{
        question:'What is Shahrukh Khan\'s name in Kuch Kuch Hota Hai?',
        options:['Karan Malhotra','Anil Bhansa','Rahul Khanna','Karan'],
        answer:'Rahul Khanna'
    },{
        question:'Who is the singer of the song, \'Saadda Haq\' from Rockstar?',
        options:['Sonu Nigam','Hard Kaur','Mika Singh','Mohit Chauhan'],
        answer:'Mohit Chauhan'
    },{
        question:'What is the name of the character played by Shahrukh Khan in the film My Name Is Khan?',
        options:['','','',''],
        answer:'  '
    },{
        question:'Complete the movie title: Kyunki Main...',
        options:['Deewana Hoon Tera','Udna Chahta Hoon','Itna Pyar Krta Hoon','Jhooth Nahi Bolta'],
        answer:'Jhooth Nahi Bolta'
    },{
        question:'Complete the movie title: Yeh Jawaani Hai...',
        options:['Mere Yaaron','Dilbaro','Mastani','Deewani'],
        answer:'Deewani'
    },{
        question:'Complete the movie title: Jagga...',
        options:['Deewani','Zindagi','Jasoos','Kaanoon'],
        answer:'Jasoos'
    },{
        question:'Complete the Alia Bhatt movie title: Dear...',
        options:['Dilbar','Mother','Friend','Zindagi'],
        answer:'Zindagi'
    },{
        question:'Complete the Ranbir Kapoor movie title: Wake Up...',
        options:['Raj','Man','Sid','Dude'],
        answer:'Sid'
    },{
        question:'Complete the movie title: ...',
        options:['','','',''],
        answer:'  '
    },{
        question:'Upon which bollywood celebrity\'s life was the movie SANJU made?',
        options:['Sunil Dutt','Sanjay Dutt','Rishi Kapoor','Salman Khan'],
        answer:'Sanjay Dutt'
    },{
        question:'Complete the movie title: Rehna Hai Tere _______ Mein',
        options:['Dil','Ghar','Dhadkan','Zindagi'],
        answer:'Dil'
    },{
        question:'Complete the movie title:Mere _______ ki Dulhan',
        options:['Yaar','Bhai','Dost','Brother'],
        answer:'Brother'
    },{
        question:'Complete the movie title:_________ na Milegi Dobaara',
        options:['Zindagi','Yaar','Pyaar','Mohabbat'],
        answer:'Zindagi'
    },{
        question:'Complete the movie title:Kuch Kuch ___________ Hai',
        options:['Hoti','Hota','Mera','Mehnga'],
        answer:'Hota'
    },{
        question:'Complete the movie title:Phata Poster Nikala ____________',
        options:['Brother','Villain','Superstar','Hero'],
        answer:'Hero'
    },{
        question:'Complete the movie title:Aamdani Athanni Kharcha _____________',
        options:['Pada Mehnga','Khajana','Sikka','Rupaiyya'],
        answer:'Rupaiyya'
    },{
        question:'Complete the movie title:Hum dil de chuke ___________',
        options:['Kasam','Kalam','Balam','Sanam'],
        answer:'Sanam'
    },{
        question:'Complete the movie title:Jish desh mein ________ rehta hai',
        options:['Bhai','Yaar','Ganga','Dost'],
        answer:'Ganga'
    },{
        question:'Complete the movie title:Ajab prem ki _________ kahani',
        options:['Sundar','Ajeeb','Gajab','Gareeb'],
        answer:'Ghajab'
    },{
        question:'Complete the movie title:Bachna Ae __________',
        options:['Yaaron','Naujawaano','Kameeno','Haseeno'],
        answer:'Haseeno'
    },{
        question:'Complete the movie title:Bade Miyan _________ Miyan',
        options:['Naya','Buddhe','Bade','Chote'],
        answer:'Chote'
    },{
        question:'Complete the movie title:Mein prem ki ________ hoon',
        options:['Zindagi','Pyaar','Yaar','Deewani'],
        answer:'Deewani'
    },{
        question:'Complete the movie title:Phir bhi dil hai _________',
        options:['Yaaron','Pagal','Jawaani','Hindustani'],
        answer:'Hindustani'
    },{
        question:'Complete the movie title:_________ ne bana di Jodi',
        options:['Love','Life','Rab','papa'],
        answer:'Rab'
    },{
        question:'Complete the movie title:Na Tum __________ Naa Hum',
        options:['Socho','Bhaago','Maano','Jaano'],
        answer:'Jaano'
    },{
        question:'Complete the movie title:Kaho Naa ________ Hai',
        options:['Yaar','Pyaar','Love','Ishq'],
        answer:'Pyaar'
    },{
        question:'Complete the movie title:My name is ______________',
        options:['Surya','Khan','Malhotra','Raja'],
        answer:'Khan'
    },{
        question:'Complete the movie title:Kabhi ________ na kahna',
        options:['Aisa','Juda','Durr','Alvida'],
        answer:'Alvida'
    },{
        question:'Complete the movie title:Hum ___________ hai sanam',
        options:['Tumhare','Deewane','Aise','Pagal'],
        answer:'Tumhare'
    },{
        question:'Complete the movie title:Jo Jeeta Wo _________',
        options:['Baazigar','Sikander','Winner','Loser'],
        answer:'Sikander'
    },{
        question:'Complete the movie title:Tiger __________',
        options:['jeet gya','Bhaag gya','Zinda hai','Marr gya'],
        answer:'Zinda hai'
    },{
        question:'Complete the Salman Khan movie title:Ek tha ______ ',
        options:['Pyar','yaar','Tiger','Dushman'],
        answer:'Tiger'
    },{
        question:'Complete the movie title: Bajrangi ______',
        options:['Maherbaan','Sultan','Bhaijaan','Bhagwan'],
        answer:'Bhaijaan'
    },{
        question:'Complete the movie title: Veere Di _______',
        options:['Shaadi','Jaan','Khusboo','Wedding'],
        answer:'Wedding'
    },{
        question:'Complete the movie title: Chori chori _____',
        options:['Kiya re','Thodi thodi','Chupke Chupke','Bhaag Ke'],
        answer:'Chupke Chupke'
    },{
        question:'Complete the movie title:Har Dil Jo ______',
        options:['Sanam','Dill dega','Pyar karega','Pyar'],
        answer:'Pyar karega'
    },{
        question:'Complete the movie title:Rowdy ______',
        options:['Kumar','Mathur','Singh','Rathore'],
        answer:'Rathore'
    },{
        question:'Complete the movie title: _____:Ek Prem Katha',
        options:['Janam','Deewana','Toilet','London'],
        answer:'Toilet'
    },{
        question:'Complete the movie title:Namaste ______',
        options:['Punjab','Yaaron','New York','London'],
        answer:'London'
    },{
        question:'Complete the movie title: Waqt:______',
        options:['The Love','The Judgement','The Race Against Time','The Killer'],
        answer:'The Race Against Time'
    },{
        question:'Complete the movie title: Ae Dil Hai _________',
        options:['kasam','Sanam','Mushkil','Aasaan'],
        answer:'Mushkil'
    },{
        question:'Complete the movie title: Bajirao ______',
        options:['Ramleela','Ki Rasleela','Deewani','Mastani'],
        answer:'Mastani'
    },{
        question:'Complete the movie title:Band Baaja _____',
        options:['Masti','Nikaah','Shaadi','Baaraat'],
        answer:'Baaraat'
    },{
        question:'Complete the movie title: Dil ______DO',
        options:['Jalne','Machalne','Dhadakne','Bajne'],
        answer:'Machalne'
    },{
        question:'Complete the movie title:Badrinath Ki ______',
        options:['Biwi','Dulhania','Masti','Zindagi'],
        answer:'Dulhania'
    },{
        question:'Complete the movie title:Humpty Sharma Ki ______',
        options:['Biwi','Dulhania','Masti','Zindagi'],
        answer:'Dulhania'
    },{
        question:'Complete the Deepika Padukone movie title:Chennai _____',
        options:['Meri Shaan','Express','Meri Jaan','city'],
        answer:'Express'
    },{
        question:'Complete the movie title:Chandni Chowk To _________',
        options:['China','Punjab','America','London'],
        answer:'China'
    },{
        question:'Complete the movie title:Om _____ Om',
        options:['Om','Shanti','Masti','Sanam'],
        answer:'Shanti'
    },{
        question:'Complete the movie title: Jab We ______',
        options:['Married','Loved','Met','Kissed'],
        answer:'Met'
    },{
        question:'Complete the Katrina Kaif movie title: Bang ___',
        options:['Fall','Push','Zinda Hai','Bang'],
        answer:'Bang'
    },{
        question:'Complete the movie title:Taare _____Par',
        options:['Aakash','Zameen','Dilon','Aasmaan'],
        answer:'Zameen'
    },{
        question:'Complete the Ranbir Kapoor movie title:Bombay _______ ',
        options:['Crime','Returns','Velvet','Meri Jaan'],
        answer:'Velvet'
    },{
        question:'Complete the movie title: _______ki Rasleela Ramleela',
        options:['Bajrang','Mastani','Goliyon','Bajirao'],
        answer:'Goliyon'
    },{
        question:'Complete the Deepika-Saif starrer movie title:Love _____ ',
        options:['Aaj kal','Mastani','Ishq','Shove'],
        answer:'Aaj kal'
    },{
        question:'Identify the Ranbir Kapoor movie :',
        options:['Wake Up Sid','Bajirao Mastani','Love Aaj Kal','Jab We Met'],
        answer:'Wake Up Sid'
    },{
        question:'Identify the Ranbir Kapoor movie :',
        options:['Sanju','Dangal','My Name Is Khan','Fukrey'],
        answer:'Sanju'
    },{
        question:'Identify the Ranbir Kapoor movie :',
        options:['dangal','Ae Dil Hai Mushkil','Harry Met Sejal','Dabangg'],
        answer:'Ae Dil Hai Mushkil'
    },{
        question:'Identify the Ranbir Kapoor movie :',
        options:['Yeh Jawani Hai Deewani','Kabhie Khushi Kabhie Gham','Namastey london','Veere Di Wedding'],
        answer:'Yeh Jawani Hai Deewani'
    },{
        question:'Identify the Ranbir Kapoor movie :',
        options:['Secret Superstar','Rockstar','Dhoom','dhoom3'],
        answer:'Rockstar'
    },{
        question:'Identify the Ranbir-Katrina starrer movie :',
        options:['Ajab Prem Ki Ghajab Kahani','Rajneeti','Both A and B','None Of These'],
        answer:'Both A and B'
    },{
        question:'Identify the Salman-Katrina starrer movie : ',
        options:['Race3','Dhoom2','Dabangg','Ek Tha Tiger'],
        answer:'Ek Tha Tiger'
    },{
        question:'Identify the Aamir Khan movie :',
        options:['Dhoomm2','Dangal','Rockstar','Both A and B'],
        answer:'Dangal'
    },{
        question:'Identify the Salman-Shahrukh starrer  movie :',
        options:['Karan Arjun','Hum Tumhare Hai Sanam','Kuch Kuch Hota Hai','All of the above'],
        answer:'All of the above'
    },{
        question:'Identify the Ranveer Singh movie :',
        options:['Band Baaja Baraat','Wake Up Sid','Rockstar','Phantom'],
        answer:'Band Baaja Baraat'
    },{
        question:'Identify the Ranveer Singh movie :',
        options:['Grand Masti','Jab We Met','Bachna Ae Haseeno','Befikre'],
        answer:'Befikre'
    },{
        question:'Identify the Ranveer Singh-Priyanka Chopra Kapoor starrer movie : ',
        options:['Blue','Anjana Anjaani','Padmaavat','Gunday'],
        answer:'Gunday'
    },{
        question:'Identify the Ranbir-Priyanka starrer  movie :',
        options:['Rockstar','Wake Up Sid','Rajneeti','Anjaana Anjaani'],
        answer:'Anjaana Anjaani'
    },{
        question:'Identify the Salman Khan movie :',
        options:['Dabangg','Hum Dil De Chuke Sanam','Ek Tha Tiger','All Of These'],
        answer:'All Of These'
    },{
        question:'Identify the Salman Khan-Sonam Kapoor starrer movie movie :',
        options:['Sultan','Race3','Prem Ratan Dhan Payo','All of these'],
        answer:'Prem Ratan Dhan Payo'
    },{
        question:'Identify the female lead of Shahrukh Khan movie :Raees',
        options:['Katrina Kaif','Mahira Khan','Deepika Padukone','Priety Zinta'],
        answer:'Mahira Khan'
    },{
        question:'Identify the male lead of Katrina Kaif movie :Phantom',
        options:['Akshay Kumar','Salman Khan','Saif Ali Khan','Arjun Kapoor'],
        answer:'Saif Ali Khan'
    },{
        question:'Identify the male lead of Katrina Kaif movie :Fitoor',
        options:['Siddharth Malhotra','Salman Khan','Saif Ali Khan','Aditya Roy Kapoor'],
        answer:'Aditya Roy Kapoor'
    },{
        question:'Identify the male lead of Kareena Kapoor movie :Ki & Ka',
        options:['Shahrukh Khan','Siddharth Malhotra','Arjun Kapoor','Shahid Kapoor'],
        answer:'Arjun Kapoor'
    },{
        question:'Identify the Arjun Kapoor-Alia Bhatt starrer movie :',
        options:['Ishaqzaade','Highway','2 States','Raazi'],
        answer:'2 States'
    },{
        question:'Identify the male lead of Alia Bhatt movie :Highway',
        options:['Randeep Hooda','Arjun Rampal','SIddharth Malhotra','Arjun Kapoor'],
        answer:'Randeep Hooda'
    },{
        question:'Who played the role of Sarabjit\'s sister in the movie:Sarabjit',
        options:['Vidya balan','Konkana Sen ','Kareena Kapoor','Aishwarya Rai Bachchan'],
        answer:'Aishwarya Rai Bachchan'
    },{
        question:'Identify the Vidya Balan movie in which she plays the role of a Spy :',
        options:['Begum Jaan','Kahaani','Bhool-Bhulaiyya','Parineeta'],
        answer:'Kahaani'
    },{
        question:'Identify the male lead of the movie :RAID',
        options:['Ranbir Kapoor','Akshay Kumar','Ajay Devgan','Salman Khan'],
        answer:'Ajay Devgan'
    },{
        question:'Who played the role of CIRCUIT in the movie:Lage Raho Munna Bhai',
        options:['Boman Irani','Arjun Rampal','Sanjay Dutt','Arshad Warsi'],
        answer:'Arshad Warsi'
    },{
        question:'Identify the Director of the movie :Lage Raho Munna Bhai',
        options:['Anurag Basu','Karan Johar','Raj Kumar Hirani','Vidhu Vinod Chopra'],
        answer:'Raj Kumar Hirani'
    },{
        question:'Identify the Arjun Kapoor movie  :',
        options:['Talvaar','Half Girlfriend','Jab We Met','Parineeta'],
        answer:'Half Girlfriend'
    },{
        question:'Identify the female lead of Saif Ali Khan starrer movie :Kurbaan',
        options:['Konkana Sen','Deepika Padukone','Kareena Kapoor','Sonam Kapoor'],
        answer:'Kareena Kapoor'
    },{
        question:'Identify the female actresses of the Saif Ali Khan starrer movie :Cocktail',
        options:['Deepika Padukone,Alia Bhatt','Deepika Padukone,Diana Penty','Deepika Padukone,Priyanka Chopra','Deepika Padukone,Sonam Kapoor'],
        answer:'Deepika Padukone,Diana Penty'
    },{
        question:'Identify the Kangna Ranaut movie :',
        options:['Dabangg','Besharam','Queen','Cocktail'],
        answer:'Queen'
    },{
        question:'Identify the male lead opposite Kangna Ranaut in the movie :Tanu Weds Manu',
        options:['Kartik AAryan','Shahid Kapoor','Saif Ali Khan','R. Madhavan'],
        answer:'R. Madhavan'
    },{
        question:'Identify the star cast of the movie :3 Idiots',
        options:['Aamir Khan,Abhay Deol,Sharman Joshi','Aamir Khan,R.Madhvan,Sharman Joshi','Aamir Khan,R.Madhvan,Ranbir Kapoor','Aamir Khan,R.Madhvan,Shahid Kapoor'],
        answer:'Aamir Khan,R.Madhvan,Sharman Joshi'
    },{
        question:'Identify the Male Lead actors of the movie :Zindagi Na Milegi Dobara',
        options:['Hrithik Roshan,Abhay Deol,Kartik Aryan','Hrithik Roshan,R.Madhvan,Farhan Akthar','Hrithik Roshan,Abhay Deol,Farhan Akthar','Aamir Khan,R.Madhvan,Sharman Joshi'],
        answer:'Hrithik Roshan,Abhay Deol,Farhan Akthar'
    },{
        question:'Name the movie which was made on the Phogat sisters',
        options:['Mary Kom','Sultan','Dangal','Dabangg'],
        answer:'Dangal'
    },{
        question:'Who played the role of Mary Kom in her biopic movie?',
        options:['Alia Bhatt','Parineeti Chopra','Priyanka Chopra','Vidya Balan'],
        answer:'Priyanka Chopra'
    },{
        question:'Who played the role of Geeta Phogat in the movie Dangal?',
        options:['Aamir Khan','Sakshi Tanwar','Sanya Malhotra','Fatima Sana Shaikh'],
        answer:'Fatima Sana Shaikh'
    },{
        question:'Identify the male lead actors of the movie :Dil Chahta Hai',
        options:['Aamir Khan,Saif Ali Khan,Akshaye Khanna','Aamir Khan,Saif Ali Khan,Abhay Deol','Aamir Khan,Akshay Kumar,Akshaye Khanna','Aamir Khan,Saif Ali Khan,Sharman Joshi'],
        answer:'Aamir Khan,Saif Ali Khan,Akshaye Khanna'
    },{
        question:'Identify the Akshay Kumar movie :',
        options:['Rustom','Rowdy Rathore','Welcome Back','Both A and B'],
        answer:'Both A and B'
    },{
        question:'Identify the Akshay Kumar-Priyanka Chopra starrer movie',
        options:['Rustom','Padman','Jaanwar','Andaaz'],
        answer:'Andaaz'
    },{
        question:'Identify the female lead of Akshay Kumar starrer movie: Rustom',
        options:['Kareena kapoor','Ileana D\'Cruz','Sonakshi Sinha','Parineeti Chopra'],
        answer:'Ileana D\'Cruz'
    },{
        question:'Identify the movie which has not been directed by Karan Johar :',
        options:['Yeh Jawaani Hai Deewani','Ae Dil Hai Mushkil','Kuch Kuch Hota Hai','Kabhie Khushi Kabhie Gham'],
        answer:'Yeh Jawaani Hai Deewani'
    },{
        question:'Identify the movie which hass not been directed by Raj Kumar Hirani :',
        options:['Lage Raho Munnabhai','PK','Dangal','3 Idiots'],
        answer:'Dangal'
    },{
        question:'To whom is Akshay Kumar married to? ',
        options:['Karishma Kapoor','Dia Mirza','Twinkle Khanna','Twinkle Chopra'],
        answer:'Twinkle Khanna'
    },{
        question:'Identify the singer of the popular title song of the movie Kal Ho Naa Ho',
        options:['Atif Aslam','Arijit singh','Sonu Nigam','Shankar Mahadevan'],
        answer:'Sonu Nigam'
    },{
        question:'Identify the singer of the popular song from the movie Ajab Prem Ki Ghazab Kahani: Tera Hona Lga Hoon',
        options:['Arijit Singh','Atif Aslam','A.R Rahman','Sonu Nigam'],
        answer:'Atif Aslam'
    },{
        question:'Identify the singer of the popular song from the movie Dabangg: Fevicol Se ',
        options:['Mamta Sharma','Sunidhi Chauhan',' Alka Yagnik','Shreya Ghoshal'],
        answer:'Mamta Sharma'
    },{
        question:'Identify the singer of the popular song from the movie 3 Idiots:Zoobi Doobi(male) ',
        options:['Shaan','Sonu Nigam','Udit Narayan','Atif Aslam'],
        answer:'Sonu Nigam'
    },{
        question:'Identify the singer of the popular song from the movie Dabangg: Tere Mast Mast Do Nain',
        options:['Udit Narayan','Sukhwinder Singh','Rahat Fateh Ali Khan','Sonu Nigam'],
        answer:'Rahat Fateh Ali Khan'
    },{
        question:'Identify the singer of the popular song:Munni Badnaam Hui',
        options:['Shreya Ghoshal','Shabab Sabri','Sunidhi Chauhan','Mamta Sharma'],
        answer:'Mamta Sharma'
    },{
        question:'Identify the singer of the popular song from the movie Raazi:Dilbaro',
        options:['Shreya Ghoshal','Harshdeep Kaur','Sunidhi Chauhan','Shabab Sabri'],
        answer:'Harshdeep Kaur'
    },{
        question:'Identify the singer of the popular song from the movie New York:Mere Sang',
        options:['Alka Yagnik','Harshdeep Kaur','Sunidhi Chauhan','Shreya Ghoshal'],
        answer:'Sunidhi Chauhan'
    },{
        question:'Identify the singer of the popular song: Channa Mereya',
        options:['Sukhwinder Singh','Armaan Malik','Arijit Singh','Sonu Nigam'],
        answer:'Arijit Singh'
    },{
        question:'Identify the singer of the popular song from the movie Kapoor & Sons:Buddhu Sa Mann ',
        options:['Sonu Nigam','Arijit Singh','Amal Malik','Armaan Malik'],
        answer:'Armaan Malik'
    },{
        question:'Identify the singer of the popular song featuring Hrithik and Sonam: Dheere Dheere',
        options:['Ali Afzar','Arman Malik','Arijit Singh','Honey Singh'],
        answer:'Honey Singh'
    },{
        question:'Identify the singer of the popular song from the movie Yaariyan: Sunny Sunny',
        options:['Armaan Malik','Arijit Singh','Honey Singh','Baadshah'],
        answer:'Honey Singh'
    },{
        question:'Who was the singer of the song Jai Ho from the movie: Slumdog Millionaire',
        options:['Zayn Malik','A.R Rahman','Mika Singh','Sukhwinder Singh'],
        answer:'A.R Rahman'
    },{
        question:'Identify the actress in the movie :Highway',
        options:['Kangna ranaut','Deepika Padukone','Alia Bhatt','Priyanka Chopra'],
        answer:'Alia Bhatt'
    },{
        question:'Who was the director of the movie Jab We Met starring Shahid Kapoor ?',
        options:['Zoya Akthar','Farhan Akthar','Imtiaz Ali','Karan Johar'],
        answer:'Imtiaz Ali'
    },{
        question:'Nmae the female lead in the movie Devdas',
        options:['Aishwarya Rai','Madhuri Dixit','Shilpa Shetty','Sonali Bendre'],
        answer:'Aishwarya Rai'
    }]);
    client.close();
});