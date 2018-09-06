const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://rohan-boss-2:Mentality098@127.0.0.1:27017/QUIZ_GAME',(err,client)=>{
    if(err){
        return console.log('Unable to0 connect to Mongodb');
    }
    const db = client.db('QUIZ_GAME');
    console.log('connected to the MongoDb server');

    db.collection('GK_QUESTIONS').insertMany([{
        question:'What is the capital of FRANCE?',
        options:['SYDNEY','PARIS','TOKYO','MONACO'],
        answer:'PARIS' 
    },{
        question:'Which kind of waves are used to make and receive cellphone calls?',
        options:['Radio Waves','Light Waves','Sound Waves','Gravity Waves'],
        answer:'Radio Waves' 
    },{
        question:'A baby blue whale drinks this many liters of milk per day:',
        options:['190','500','100','10'],
        answer:'190'  
    },{
        question:'Who invented the geodesic dome?',
        options:['Samuel Fuller','Samuel Morse','R. Buckminster Fuller','Albert Einstein'],
        answer:'R. Buckminster Fuller' 
    },{
        question:'Who invented the World Wide Web?',
        options:['Apple','Microsoft','the Federal Communications Commission','A laboratory in Switzerland'],
        answer:'A laboratory in Switzerland'  
    },{
        question:'Which of the following technological developments came first?',
        options:['teletype','telegraph','telescope','telephone'],
        answer:'telescope'  
    },{
        question:'When was the first plastic made of artificial materials patented?',
        options:['1855','1845','1945','1909'],
        answer:'1909'   
    },{
        question:'Moths are a member of what order?',
        options:['optica','lepidoptera','octagon','leprosy'],
        answer:'lepidoptera'  
    },{
        question:'For what is the Jurassic period named?',
        options:['a mountain range','a soccer hero','a kind of dinosaur','the French word for "day"'],
        answer:'a mountain range'  
    },{
        question:'Brass gets discoloured in air because of the presence of which of the following gases in air?',
        options:['Oxygen','Hydrogen sulphide','Carbon dioxide','Nitrogen'],
        answer:'Hydrogen sulphide'   
    },{
        question:' Which of the following is a non metal that remains liquid at room temperature?',
        options:['Phosphorous','Oxygen','Bromine','Helium'],
        answer:'Bromine'   
    },{
        question:'Chlorophyll is a naturally occurring chelate compound in which central metal is',
        options:['magnesium','copper','iron','calcium'],
        answer:'magnesium'   
    },{
        question:'Which of the following is used in pencils?',
        options:['Graphite','Silicon','Charcoal','Phosphorous'],
        answer:'Graphite'   
    },{
        question:'Which of the following metals forms an amalgam with other metals?',
        options:['Tin','Mercury','Lead','Zinc'],
        answer:'Mercury'    
    },{
        question:'Chemical formula for water is',
        options:['NaAlO2','H2O','Al2O3','CaSiO3'],
        answer:'H2O'    
    },{
        question:'The gas usually filled in the electric bulb is',
        options:['nitrogen','Oxygen','Helium','Hydrogen'],
        answer:'nitrogen'  
    },{
        question:'Washing soda is the common name for',
        options:['Sodium carbonate','Calcium bicarbonate','Sodium bicarbonate','Calcium carbonate'],
        answer:'Sodium carbonate'  
    },{
        question:'Quartz crystals normally used in quartz clocks etc. is chemically',
        options:['silicon dioxide','germanium oxide','a mixture of germanium oxide and silicon dioxide','sodium silicate'],
        answer:'silicon dioxide' 
    },{
        question:'Which of the gas is not known as green house gas?',
        options:['Methane','Nitrous oxide','Carbon dioxide','Hydrogen'],
        answer:'Hydrogen' 
    },{
        question:'Bromine is a',
        options:['black solid','colourless gas','red liquid','highly inflammable gas'],
        answer:'red liquid' 
    },{
        question:'The hardest substance available on earth is',
        options:['Gold','Iron','Diamond','Platinum'],
        answer:'Diamond' 
    },{
        question:'The variety of coal in which the deposit contains recognisable traces of the original plant material is',
        options:['peat','lignite','anthracite','bitumen'],
        answer:'peat' 
    },{
        question:'Tetraethyl lead is used as',
        options:['petrol additive','mosquito repellent','fire extinguisher','pain killer'],
        answer:'petrol additive' 
    },{
        question:'Which of the following is used as a lubricant?',
        options:['Silica','Graphite','Iron Oxide','Diamond'],
        answer:'Graphite' 
    },{
        question:'The inert gas which is substituted for nitrogen in the air used by deep sea divers for breathing, is',
        options:['Argon','Xenon','Helium','Krypton'],
        answer:'Helium' 
    },{
        question:'The gases used in different types of welding would include',
        options:['oxygen and hydrogen','oxygen, hydrogen, acetylene and nitrogen','oxygen, acetylene and argon','oxygen and acetylene'],
        answer:'oxygen and acetylene'
    },{
        question:'The property of a substance to absorb moisture from the air on exposure is called',
        options:['osmosis','deliquescence','efflorescence','desiccation'],
        answer:'deliquescence'
    },{
        question:'In which of the following activities silicon carbide is used?',
        options:['Making cement and glass','Disinfecting water of ponds','cutting very hard substances','Making casts for statues'],
        answer:'cutting very hard substances'
    },{
        question:'The average salinity of sea water is',
        options:['3%','3.5%','2.5%','2%'],
        answer:'3.5%'
    },{
        question:'Which of the following is used as a moderator in nuclear reactor?',
        options:['Thorium','Graphite','Radium','Ordinary water'],
        answer:'Graphite'
    },{
        question:'Which among the following is a positively charged particle emitted by a radioactive element?',
        options:['Gamma ray','Cathode ray','Alpha ray','Beta ray'],
        answer:'Alpha ray'
    },{
        question:'Atoms are composed of',
        options:['electrons and protons','electrons only','protons only','electrons and nuclei'],
        answer:'electrons and nuclei'
    },{
        question:'In an atomic explosion, enormous energy is released which is due to',
        options:['conversion of chemical energy into heat energy','conversion of mechanical energy into nuclear energy','conversion of mass into energy','conversion of neutrons into protons'],
        answer:'conversion of mass into energy'
    },{
        question:'Isotopes are separated by',
        options:['crystallisation','sublimation','distillation','filtration'],
        answer:'distillation'
    },{
        question:'The wavelength of X-rays is of the order of',
        options:['1 mm','1 cm','1 angstrom','10 micron'],
        answer:'1 angstrom'
    },{
        question:'Mesons are found in',
        options:['X-rays','Laser beam','Gamma Rays','Cosmic rays'],
        answer:'Cosmic rays'
    },{
        question:'Which radioactive pollutant has recently drawn to public, due to its occurrence in the building material?',
        options:['Thorium','Radium','Plutonium','Radan'],
        answer:'Thorium'
    },{
        question:'What is the wavelength of visible spectrum?',
        options:['1300 - 3000 angstrom','3900 - 7600 angstrom','7800 - 8000 angstrom','8500 - 9800 angstrom'],
        answer:'3900 - 7600 angstrom'
    },{
        question:'Which of the following has a least penetrating power?',
        options:['Beta Particles','Alpha particles','Gamma rays','All have same penetrating power'],
        answer:'Alpha particles'
    },{
        question:'Which among the following Kavya of Sanskrit, deal with court intrigues & access to power of Chandragupta Maurya?',
        options:[' Mrichhakatika','Ritusamhara','Kumarasambhava','Mudrarakshahsa'],
        answer:'Mudrarakshahsa' 
    },{
        question:'Which among the following is not a correct pair?',
        options:['Ellora Caves – Rastrakuta Rulers','Mahabalipuram – Pallava Rulers','Khajuraho – Chandellas','Elephanta Caves – Mauyra Era'],
        answer:'Elephanta Caves – Mauyra Era'  
    },{
        question:' On which of the following systems of Hindu Philosophy , Shankaracharya wrote commentary in 9th century AD?',
        options:['Sankhya','Vaisheshika','Yoga',' Uttarmimansa'],
        answer:' Uttarmimansa' 
    },{
        question:'The eighth-century tripartite power struggle was among which of the following?',
        options:['Cholas, Rastrakutas and Yadavas','Chalukyas, Pallavas and Pandyas',' Cholas, Pandyas and Chalukyas',' Chalukyas, Pallavas and Yadavas'],
        answer:'Chalukyas, Pallavas and Pandyas'  
    },{
        question:' Which among the following is not correct',
        options:['The capital of pandyas was Madurai','The capital of Cheras was Vanchi',' Capital of the Videha Kingdom – Mithila','Capital of Gahadwal Dynasty – Kannauj'],
        answer:'Capital of the Videha Kingdom – Mithila'  
    },{
        question:'Which king started the organization of Kumbh fair at Allahabad?',
        options:['Harshavardhana','Dhruvasena Ii','Narshimhvarman',' Akabar'],
        answer:' Harshavardhana'   
    },{
        question:'Upnishads are books on :',
        options:['Social life','Medicine','Philosophy','Politics'],
        answer:' Philosophy'  
    },{
        question:'Who was the first Indian ruler who had territory outside India?',
        options:['Huvishka','Kanishka','Chandragupta Maurya','Ashoka'],
        answer:'Kanishka'  
    },{
        question:'Which of the following statement is wrong?',
        options:['Sunga dynasty was founded by pushyamitra',' Ashoka the great Mauryan king died in 332 BC','Ashoka invaded the kalinga in 261 BC',' Chandragupta Maurya earned the title of the Liberator.'],
        answer:' Ashoka the great Mauryan king died in 332 BC'   
    },{
        question:' Who among the following was worshipped during Early Vedic Civilization?',
        options:[' Varuna','Indra','Surya','All the above'],
        answer:'All the above'   
    },{
        question:' Which among the following is a place in Larkana district of Sind province in Pakistan?',
        options:['Alamgirpur','Harappa',' Rangapur','Mohenjo-Daro'],
        answer:'Mohenjo-Daro'   
    },{
        question:' What led to the end of Indus Valley Civilization?',
        options:['All of these','Earthquakes','Recurrent Floods','Invasion of Aryans'],
        answer:'All of these'   
    },{
        question:'Which empire lasted the longest among the following?',
        options:['The Senas','The Rashtrakutas','The Pratiharas','The Palas'],
        answer:'The Rashtrakutas'    
    },{
        question:'Who was the last Hindu emperor of northern India?',
        options:[' Skandagupta','Rajyavardhana','Pulakesin II','Harsha'],
        answer:'Harsha'    
    },{
        question:'Who designed the Indian parliament Building ?',
        options:['Surendranath Banerjee','Pherozeshah Mehta','Dadabhai Naoroji',' Herbert Bekar'],
        answer:' Herbert Bekar'  
    },{
        question:'Which of the following leader was not present in the very first meeting of Indian National Congress?',
        options:['Surendranath Banerjee','Pherozeshah Mehta','Kashinath Trimbak Telang','Dadabhai Naoroji'],
        answer:'Surendranath Banerjee'  
    },{
        question:' Which of the following statement is not true about the Indian National Congress?',
        options:[' Its founder, Allan Octavian Hume, was a retired British professor in India.','It was formed when 72 delegates from all the presidencies and provinces of India met at Bombay.','W.C. Bannerjee was the first president of congress.','It was formed in 1885'],
        answer:' Its founder, Allan Octavian Hume, was a retired British professor in India.' 
    },{
        question:' Who told that Indian National Congress represents only microscopic minorities?',
        options:['None of these','Lord Minto','Lord Dufferin','Lord Curzon'],
        answer:'Lord Dufferin' 
    },{
        question:'When was congress split?',
        options:['At Surat session in 1906','At Benares session in 1905','At Madras in1908','At Lahore in1909'],
        answer:'At Surat session in 1906' 
    },{
        question:'Which of the following committee and act is associated with the Sedition act?',
        options:['Rowlatt Committee','Muddiman Committee','Butler Committee','Both A & B'],
        answer:'Rowlatt Committee' 
    },{
        question:'When was the Non-Cooperation Movement got momentum under the leadership of Mahatma Gandhi and the Indian National Congress?',
        options:['1920-1922','1922-1924','1987-1989',' 1990-1992'],
        answer:'1920-1922' 
    },{
        question:' Which of the following event compel M.K Gandhi to withdraw the Nation’s cooperation from the British Government? ',
        options:[' Jallianwala massacre','Bhagat singh Hanging','Lathi charge','All of the above'],
        answer:' Jallianwala massacre' 
    },{
        question:'The value of Gold is determined in',
        options:[' Rome ','London','Italy','New york'],
        answer:'London' 
    },{
        question:'Second World war began in ',
        options:['1931','1935','1937','1938'],
        answer:'1938' 
    },{
        question:'Kancheepuram was once the capital of',
        options:['Pandiyas','Cholas ','Cheras','Pallavas'],
        answer:'Pallavas'
    },{
        question:' Rivers Tigris and Euphrates are associated with ?',
        options:['Mesopotamian Civilization','Egyptain Civilization','Harappan Civilization','Chinese Civilization'],
        answer:'Mesopotamian Civilization'
    },{
        question:'Which is considered as oldest civilization of the world ?',
        options:['Mesopotamian Civilization','Egyptain Civilization','Harappan Civilization','Chinese Civilization'],
        answer:'Mesopotamian Civilization'
    },{
        question:' Which among following is called "Gift of the Nile" ?',
        options:['China','India','Iraq','Egypt'],
        answer:'Egypt'
    },{
        question:' Who is considered as the master of Greek comedy ?',
        options:['Aristophanes','Philip','Sophocles','Aeschylus'],
        answer:'Aristophanes'
    },{
        question:'When ancient Olympic games first held ?',
        options:['800 BC','790 BC','780 BC','776 BC'],
        answer:'776 BC'
    },{
        question:'Who is known as the father of Modern Medicine ?',
        options:['Erastosthenes','Hippocrates','Pythagoras','Euclid'],
        answer:'Hippocrates'
    },{
        question:'Rome was founded around ?',
        options:['1600 BC','1400 BC','1200 BC','1000 BC'],
        answer:'1000 BC'
    },{
        question:'Which was not an Roman Philosopher ?',
        options:['Octavian','Lucretius','Seneca','Cicero'],
        answer:'Octavian'
    },{
        question:'Who was among the famous Roman poets ?',
        options:['Marcus','Virgil','Plinky','Tacitus'],
        answer:'Virgil'
    },{
        question:'Marco Polo, Venetian traveller, travelled from Venice to China and Japan in :',
        options:['1295 - 1301','1290 - 96','1288 - 93','1285 - 90'],
        answer:'1288 - 93'
    },{
        question:'Vasco da Gama reached in India in the year ?',
        options:['1498','1497','1496','1495'],
        answer:'1498'
    },{
        question:' Who was the first to sail round the world ?',
        options:['Vasco da Gama','Magellan','Columbus','Francis Drake'],
        answer:'Magellan'
    },{
        question:'America was discovered in ?',
        options:['1494','1493','1492','1491'],
        answer:'1492'
    },{
        question:'Which of the following is the Capital of SWITZERLAND',
        options:['BUENOS AIRES','BERN','STOCKHOLM','LOME'],
        answer:'BERN'  
    },{
        question:'MANDO dance is the famous dance form of which of the following states?',
        options:['Maharashtra','Assam','Rajasthan','Goa'],
        answer:'Maharashtra' 
    },{
        question:'We all know very well that the Pacific Ocean is the earth’s largest ocean. Which of the following represents the percentage area (approximately) of the earth covered by it.',
        options:['25%','30%','35%','44%'],
        answer:'35%'  
    },{
        question:'This place is the wettest place on earth. Can you identify it from the given options?',
        options:['Shimla','Mawsynram','Cherapoonji','Mount Waialua'],
        answer:'Cherapoonji'  
    },{
        question:' The number of non-permanent members of the UN Security Council is….',
        options:['20','15','10','5'],
        answer:'10'   
    },{
        question:' According to the latest population Census, the state with the least population density is ….',
        options:[' Sikkim','Mizoram','Andaman and Nicobar Islands','Arunachal Pradesh'],
        answer:'Arunachal Pradesh'  
    },{
        question:' The number of Union Territories in India is….',
        options:['5','6','7','8'],
        answer:'7'  
    },{
        question:'As per the Constitution of India, the fundamental rights are……. in number.',
        options:['5','6','7','8'],
        answer:'6'   
    },{
        question:' Shakyamuni is another name of….',
        options:['Lord Shiva','Lord Vishnu','Mahavir','Buddha'],
        answer:'Buddha'   
    },{
        question:' The Maratha and The Kesri were the two main newspapers started by….',
        options:['Lala Lajpat Rai','Gopal Krishna Gokhale','Bal Gangadhar Tilak','Madan Mohan Malviya'],
        answer:'Bal Gangadhar Tilak'   
    },{
        question:'National emergency arising out of the war, armed rebellion or external aggression is dealt under….',
        options:['Article 280','Article 356','Article 370','Article 352'],
        answer:'Article 352'   
    },{
        question:' Mahatma Gandhi founded the ______ newspaper in 1903 at South Africa.',
        options:['Indian Opinion',' Indian Speaker','Harijan','India News'],
        answer:'Indian Opinion'    
    },{
        question:'The capital of Ethiopia is….',
        options:['Dar-es-salaam','Addis Ababa','Abuja','Harare'],
        answer:'Dar-es-salaam'    
    },{
        question:' World Human Rights Day is celebrated every year on…….',
        options:['December 1',' December 3','December 10',' December 22'],
        answer:'December 10'  
    },{
        question:'Which of the following represents the year in which NABARD was established?',
        options:['1976','1982','1992','1988'],
        answer:'1982'  
    },{
        question:'Mesopotamia is the former name of……',
        options:['Tanzania','Iran','Iraq','Zambia'],
        answer:'Iraq' 
    },{
        question:'This personality was also known as ‘Blood and Iron Man of Germany’. Can you identify him from the given options?',
        options:['Mustafa Kamal Ataturk',' Benito Mussolini','Bismarck','Hitler'],
        answer:'Bismarck' 
    },{
        question:'Gulliver’s Travels is a famous work of….',
        options:['James Joyce','Jonathan Swift',' James Hilton','Ernest Hemingway'],
        answer:'Jonathan Swift' 
    },{
        question:'Which of the following represents the original number of officially recognized languages enshrined in the Indian Constitution?',
        options:['14','16','18','22'],
        answer:'22' 
    },{
        question:'The first Battle of Panipat took place in……',
        options:['1532','1526','1516','1498'],
        answer:'1526' 
    },{
        question:' Lal Krishna Advani was the _______ Deputy Prime Minister of India.',
        options:['fourth','fifth','sixth','seventh'],
        answer:'seventh' 
    },{
        question:'Which of the following heads the table of Precedence of the Government of India?',
        options:['Vice-President','Prime Minister','President','Chief Justice of India'],
        answer:'President' 
    },{
        question:'The largest automobile manufacturer in the world was…….',
        options:['Ford Motors','General Motors',' Toyota Motors','Honda Motors'],
        answer:'General Motors'
    },{
        question:'The height of the tallest mountain in the world ------- Mount Everest is…….',
        options:['8834 meters','8838 meters','8842 meters','8848 meters'],
        answer:'8848 meters'
    },{
        question:'He is known as the ‘Builder of Modern Turkey’. Can you name him from the given options?',
        options:['Marshal Tito','Anwar Sadat','Mustafa Kamal Ataturk','Benito Mussolini'],
        answer:'Mustafa Kamal Ataturk'
    },{
        question:' Thermo Flask was invented by',
        options:['Dewar','Daimler','Urey','John Napier'],
        answer:'Dewar'
    },{
        question:'Atomic theory was devised by',
        options:['Mosley','John Dalton',' Daimler','none of these'],
        answer:'John Dalton'
    },{
        question:' Simpson and Harrison are associated with the invention of?',
        options:[' None of these','Balloon','Chloroform','Boson'],
        answer:'Chloroform'
    },{
        question:'The field of activity of J.C. Bose was',
        options:['None of these','Chemistry','Botany',' Zoology'],
        answer:'Botany'
    },{
        question:'To an astronaut, the outer space appears',
        options:['Deep Blue','Black','Crimson',' White'],
        answer:'Black'
    },{
        question:'Helicopter was invented by',
        options:[' Drinker','Broquet','Copernicus','Cockrell'],
        answer:'Broquet'
    },{
        question:'Which state To Become 2nd State In Country To Unveil Its Own Flag ?',
        options:['Karnataka','Bihar','Odisha','West Bengal'],
        answer:'Karnataka'
    },{
        question:'Which Money Receives Sebi Nod As Registered Investment Adviser ?',
        options:['Paytm Money','Ola Money','Amazon Seller','Make Money'],
        answer:'Paytm Money'
    },{
        question:'Which airport tie up with Delhi At No. 1 recently ?',
        options:['Hyderabad Airport','Kolkata Airport','Chennai Airport','Mumbai Airport'],
        answer:'Mumbai Airport'
    },{
        question:'Which city Wings India 2018 Event Inaugurated recently ?',
        options:['Mumbai','Chennai','Secunderabad','Hyderabad'],
        answer:'Hyderabad'
    },{
        question:'Which state Launches India  1st State-Led Incubator For Women ?',
        options:['Teleganna','Uttar Pradesh','Arunachal Pradesh','Himachal pradesh'],
        answer:'Teleganna'
    }]);
    client.close();
});