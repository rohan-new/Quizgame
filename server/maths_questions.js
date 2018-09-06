const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://rohan-boss-2:Mentality098@127.0.0.1:27017/QUIZ_GAME',(err,client)=>{
    if(err){
        return console.log('Unable to0 connect to Mongodb');
    }
    const db = client.db('QUIZ_GAME');
    console.log('connected to the MongoDb server');

    db.collection('maths_QUESTIONS').insertMany([{
        question:'19 + ……. = 42',
        options:['42','61','0','23'],
        answer:'23' 
    },{
        question:'What is the value of pi?',
        options:['3.33','2.66','2.14','3.14'],
        answer:'3.14'  
    },{
        question:'Arrange the numbers in ascending order: 36, 12, 29, 21, 7.',
        options:['7, 12, 21, 36, 29 ','7, 12, 21, 29, 36 ','36, 29, 7, 21, 12',' 36, 29, 21, 12, 7 '],
        answer:'7, 12, 21, 29, 36 ' 
    },{
        question:'What is the greatest two digit number?',
        options:['90','10','91','99'],
        answer:'99'  
    },{
        question:'How much is 90 – 19?',
        options:['61','60','71','70'],
        answer:'71'  
    },{
        question:' 20 is divisible by ……… .',
        options:['1','7','3','4'],
        answer:'4'   
    },{
        question:'Find the value of x; if x = (2 × 3) + 11',
        options:['192','35','17','55'],
        answer:'17'  
    },{
        question:' What is the smallest three digit number? ',
        options:['100','900','100','999'],
        answer:'100'  
    },{
        question:'How much is 190 – 87 + 16?',
        options:['87','261','103','119'],
        answer:'119'   
    },{
        question:'What is 1000 × 1 equal to?',
        options:['100','1','1000','0'],
        answer:'1000'   
    },{
        question:'Find the sum of 111 + 222 + 333',
        options:['656','766','700','666'],
        answer:'666'   
    },{
        question:' Subtract 457 from 832',
        options:['275','376','57','375'],
        answer:'375'   
    },{
        question:'50 times 5 is equal to',
        options:['500',' 150','250','25000'],
        answer:'250'    
    },{
        question:'Simplify: 26 + 32 - 12',
        options:['0','32','56','46'],
        answer:'46'    
    },{
        question:' Find the product of 72 × 3',
        options:['203','216','226','622'],
        answer:'216'  
    },{
        question:'200 – (96 ÷ 4)',
        options:['105','144','176','186'],
        answer:'176'  
    },{
        question:'24 + 4 ÷ 4',
        options:['25','28','20','32'],
        answer:'25' 
    },{
        question:'3 + 6 x (5 + 4) ÷ 3 - 7',
        options:['24','11','14','15'],
        answer:'14' 
    },{
        question:'150 ÷ (6 + 3 x 8) - 5',
        options:['6','0','5','2'],
        answer:'0' 
    },{
        question:'How many digits are there in 1000?',
        options:['One digit','Two digit','Three digit','Four digit'],
        answer:'Four digit' 
    },{
        question:'Complete the sequence 13, 16, ……, 22.',
        options:['20','19','18','17'],
        answer:'19' 
    },{
        question:'What is the largest two digits prime number?',
        options:['96','97','98','99'],
        answer:'97' 
    },{
        question:' 1 dime = …….. dollar',
        options:['0.01','0.10','10','0.20'],
        answer:'0.10' 
    },{
        question:'How many factors are there in 71?',
        options:['1','2','3','None Of These'],
        answer:'2' 
    },{
        question:'Which is the largest number in 15/17, 15/18, 15/19, 15/21?',
        options:['15/17','15/18','15/19','15/21'],
        answer:'15/17'
    },{
        question:'What is the average value of 25, 20, 23 and 22?',
        options:['20','21.5','22.5','24'],
        answer:'22.5'
    },{
        question:'2 is a …………… number.',
        options:[' Odd','Prime','Composite','None Of These'],
        answer:'Prime'
    },{
        question:'What is the sum of one digit prime numbers?',
        options:['11','13','15','17'],
        answer:'17'
    },{
        question:'How many hours in 90 minutes?',
        options:['1.5 hours','1.3 hours','1.0 hours','2 hours'],
        answer:'1.5 hours'
    },{
        question:' Name a triangle whose two angles are equal.',
        options:['Right angle triangle.','Isosceles triangle.','Scalene triangle.','None Of These'],
        answer:'Isosceles triangle.'
    },{
        question:'How many lines can be drawn through two points?',
        options:['1','2','3','4'],
        answer:'1'
    },{
        question:'Factors of 9 are…..',
        options:['1, 2 and 3','1, 2 ,3 and 9','1, 3 and 9','None Of These'],
        answer:'1, 3 and 9'
    },{
        question:' When we multiply an exact number by zero what will be the exact answer?',
        options:['the exact number.','cannot be multiplied.','zero.','None Of These'],
        answer:'zero.'
    },{
        question:' How many digits answer we will get when we add 99 and 1?',
        options:['100','2','3','4'],
        answer:'3'
    },{
        question:'What is 999 times 100.0?',
        options:['99900','9990','999000','990'],
        answer:'99900'
    },{
        question:' What is the unit of volume?',
        options:['square units.','cubic units.',' only unit.','None Of these'],
        answer:'cubic units.'
    },{
        question:'1010 gram = ……… kg',
        options:['10.10 kg.','101.0 kg.','1.001 kg.','1.01 kg.'],
        answer:'1.01 kg.'
    },{
        question:'Average of three person’s age is 9 years. Find the sum of there age.',
        options:['18','21','27','24'],
        answer:'27'
    },{
        question:'What is 49 +2?',
        options:['53','52','55','51'],
        answer:'51'
    },{
        question:'If X=10 and X+Y=-10, than find the value of Y?',
        options:['0','-20','20','10'],
        answer:'-20'
    },{
        question:'500 SUBTRACT 221 AND ADD 287',
        options:['432','674','890','566'],
        answer:'566'
    },{
        question:'WHAT IS THE AREA OF A SQUARE IF PERIMETER IS 160 MTS.',
        options:['16000sq.cm','1600','1600 sq.cm','1600 sq.m'],
        answer:'1600 sq.m'
    },{
        question:'600gram=___________kg.',
        options:['0.006','6.0','0.06','0.6'],
        answer:'0.6'
    },{
        question:'what is the squareroot of 93025',
        options:['687','200','58','305'],
        answer:'305'
    },{
        question:'500+1000*0+200000',
        options:['250000','200000','200500','2000050'],
        answer:'200500'
    },{
        question:'What is half of 466',
        options:['243','222','213','233'],
        answer:'233'
    },{
        question:'how many weeks are there in a year',
        options:['54','53','52','20'],
        answer:'52'
    },{
        question:'product of whole numbers from 0 to 10',
        options:['3628800','36288000','3528800','0'],
        answer:'0'
    },{
        question:'Pi are known by which two numbers?',
        options:['22/7 and 3.14','66/99 and 22.02','75/4 and 665412.523','17/29 and 92.71'],
        answer:'22/7 and 3.14'
    },{
        question:'What is the square of 16',
        options:['226','576','196','256'],
        answer:'256'
    },{
        question:'If there are 220 girls and 330 boys in a school, what fraction are boys?',
        options:['3/5','3/4','2/3','2/5'],
        answer:'3/5'
    },{
        question:'Renu purchased two bags of fertilizer of weights 78 g and 69 g. Find the total weight of fertilizers with her.',
        options:['157g','127g','137g','147g'],
        answer:'147g'
    },{
        question:'rational number of 23',
        options:['42','29','34','12'],
        answer:'34'
    },{
        question:'what is the formula of perimeter of a rectangle?',
        options:['2(l-b)','l+b','2(l+b)','l*b'],
        answer:'2(l+b)'
    },{
        question:'what is the sum of 121 + 643',
        options:['764','825','734','132'],
        answer:'764'
    },{
        question:'what is these numbers least to greatest, 7, 2, 76, 42, 193, 22.9',
        options:['none of the above','what ever','2, 7, 22.9, 42, 76, 193','7, 2, 198, 42, 22.9, 76'],
        answer:'2, 7, 22.9, 42, 76, 193'
    },{
        question:'Compound ratio of 3:4 And 7:8 is',
        options:['1:26','9:21','21:32','24:28'],
        answer:'21:32'
    },{
        question:'what is the value of x in 3x-x+1x=21',
        options:['0','7','3','4'],
        answer:'7'
    },{
        question:'how many corners we have in triangular base prisim',
        options:['5','4','3','6'],
        answer:'3'
    },{
        question:'How many symetry lines are there in a square?',
        options:['10','5','4','1'],
        answer:'4'
    },{
        question:'Area of square having side 3cm',
        options:['1.732 sq. cm','9 sq. m','9 sq. cm','6 sq. cm'],
        answer:'9 sq.cm'
    },{
        question:'what is square of 99',
        options:['2545','9595','9801','9999'],
        answer:'9801'
    },{
        question:'WHAT IS 10+5-2*5/5=?',
        options:['13','12','-12','-13'],
        answer:'13'
    },{
        question:'nobel prize of maths',
        options:['diomond award','field\'s medels','phythagorous award','great tolami award'],
        answer:'field\'s medels'
    },{
        question:'What is the sum of exterior angles of Triangle?',
        options:['360','180','190','170'],
        answer:'180'
    },{
        question:'What is 2 X 3 X 4 X 0 4 5 X 9 9 X 10 X 0?',
        options:['90','9000','0','2'],
        answer:'0'
    },{
        question:'what is the value of x in 7x=21',
        options:['7','2','4','3'],
        answer:'3'
    },{
        question:'square root of 256',
        options:['16','14','24','26'],
        answer:'16'
    },{
        question:'Find the value of x and y:  3x-5y=15; -2x+y=4',
        options:['-5,-6','2,3','2,0','2,-6'],
        answer:'2,-6'
    },{
        question:'if average 4 consecutive numbers is 17..........find the highest number',
        options:['20','10','5','12'],
        answer:'12'
    },{
        question:'what is the square root of (-16)',
        options:['-196','-4','-256','256'],
        answer:'-4'
    },{
        question:'THE SUM OF TWO CONSECUTIVE ODD INTEGERS IS 20. THE NUMBERS ARE',
        options:['11,13','9,11','5,7','27,29'],
        answer:'9,11'
    },{
        question:'square root of 6400',
        options:['70','60','800','80'],
        answer:'80'
    },{
        question:'we are 3 consecutive prime numbers.if you add our sum is 50.who am i?',
        options:['3,7,9','17,19,23','9,11,14','13,19,23'],
        answer:'17,19,23'
    },{
        question:'What is the greatest comon factor of 15 and 30',
        options:['1','3','15','30'],
        answer:'15'
    },{
        question:'For any real numbers \'a\' and \'b\'; If a=b+5 then which one is true?',
        options:['a-b=5','a+b=5','a+5=b','a+10>b'],
        answer:'a-b=5'
    },{
        question:'What is 10 plus 10',
        options:['30','10','0','20'],
        answer:'20'
    },{
        question:'If X+Y=10 and X+2Y=30 then X=? and Y=?',
        options:['X=20, Y=-20','X=20, Y=10','X=10, Y=20','X=20, Y=20'],
        answer:'X=-10, Y=20'
    },{
        question:'if a=5and b=9 what is thier sum ?',
        options:['15','12','14','13'],
        answer:'14'
    },{
        question:'Which of these represents commutative formula',
        options:['(a+b)c=ab+bc','a+(b+c)=(a+b)+c','a+b=rational number','a+b=b+a'],
        answer:'a+b=b+a'
    },{
        question:'4y=8 then what is y',
        options:['4','0','2','1'],
        answer:'2'
    },{
        question:'56+78= ?',
        options:['114','134','144','124'],
        answer:'134'
    },{
        question:'765-987= ?',
        options:['-222','553','765','768'],
        answer:'-222'
    },{
        question:'564+657= ?',
        options:['1,111','1,241','1,321','1,221'],
        answer:'1,221'
    },{
        question:'675-875',
        options:['655','857','-200','785'],
        answer:'-200'
    },{
        question:'Emma went to the zoo and she had $50.00 she spent $34.00 altogether. how much change did she get?',
        options:['$6.77','$4.00','$6.00','$16.00'],
        answer:'$16.00'
    },{
        question:'54+78=',
        options:['132','122','112','142'],
        answer:'132'
    },{
        question:'678-768= ?',
        options:['-100','-90','80','70'],
        answer:'-90'
    },{
        question:'Patty spent $8.78 to get a hot dog and a drink she has a $10.00 how much change does she get',
        options:['9.55','6.88','5.88','1.22'],
        answer:'1.22'
    },{
        question:'50+90= ?',
        options:['145','130','140','160'],
        answer:'140'
    },{
        question:'Solve the equation, 10n=40',
        options:['n=0','n=40','n=4','n=30'],
        answer:'n=4'
    },{
        question:'Use the distributive property to anwser this expression. 7(a+6)',
        options:['7a+42','7a+49','7a+32','7a-21'],
        answer:''
    },{
        question:'Solve the equation, 5p-4p=7',
        options:['p=7/9','p=7/2','p=7','p=5'],
        answer:'p=7'
    },{
        question:'Solve the equation, 6p-5=31',
        options:['p=1','p=26/6','p=7','p=6'],
        answer:'p=6'
    },{
        question:'Solve the equation, 6n=48',
        options:['9','12','6','8'],
        answer:'8'
    },{
        question:'Simplify this expression, 7x-5+8x-2x',
        options:['13x-5','14x+7','-3x-5','7x-2'],
        answer:'13x-5'
    },{
        question:'Whats the correct equation for this sentence? Sixteen is 4 less than twice a number.',
        options:['n-2=16-4','16=2n-4','4-2-n=16','n=4-2n'],
        answer:'16=2n-4'
    },{
        question:'Simplify this expression, 8r-2+5r+6-r',
        options:['13r-3','7r+2','4r-3','12r+4'],
        answer:'12r+4'
    },{
        question:'Solve this equation, -7-a=-1',
        options:['a=5','a=6','a=-6','a=-8'],
        answer:'a=-6'
    },{
        question:'Use the distributive property to anwser this expression, 8(4+5)',
        options:['9 + 54','32 + 40','8 + 9','40 + 4'],
        answer:'32 + 40'
    },{
        question:'Simplify this expression, x-5+7x+2-1x',
        options:['5x-7','-3x-4','x+4','7x-3'],
        answer:'7x-3'
    },{
        question:'16=q-5 What is q?',
        options:['22','11','21','19'],
        answer:'21'
    },{
        question:'Rewrite (8+3)4 using the distributive property.',
        options:['8 x 4 x 3 x 4','8 x 4 x 3','8 x 4 + 8 x 3','8 x 4 + 3 x 4'],
        answer:''
    },{
        question:'Simplify this Expression, 5m-4n+5m+6n',
        options:['10m+2n','10m-2n','2n','-10m-2n'],
        answer:'10m+2n'
    },{
        question:'Simplify this expression, 5x + 3(x-2)',
        options:['8x-2','15x-10','8x-6','3x-6'],
        answer:'8x-6'
    },{
        question:'y + 4 =17 What is y?',
        options:['9','13','14','12'],
        answer:'13'
    },{
        question:'6k=36,What is k?',
        options:['17','13','25','6'],
        answer:'6'
    },{
        question:'36=-3z What is z?',
        options:['-15','21','14','-12'],
        answer:'-12'
    },{
        question:'4n=48 What is n?',
        options:['16','11','14','12'],
        answer:'12'
    },{
        question:'16=q-5 What is q?',
        options:['21','33','25','22'],
        answer:'21'
    },{
        question:'Write and solve an equation for this sentence. The sum of -10 and a number is -17',
        options:['14','7','-7','-27'],
        answer:'-27'
    },{
        question:'If x+1/x=-2, then what is the value of x^13+1/x^13?',
        options:['0','13','1','-2'],
        answer:''
    },{
        question:'what is full form of (x+y)(x+y).',
        options:['x*x+y*y+xy','x*x+y*y+2xy','x+y*y+2xy','x*x+y+2xy'],
        answer:'x*x+y*y+2xy'
    },{
        question:'what is the product of 5,7 and 10',
        options:['450','360','350','340'],
        answer:'350'
    },{
        question:'what is the sum of 5,7 and 10',
        options:['32','22','0','12'],
        answer:'22'
    },{
        question:'4 + (4 + 7) - 6 = _______',
        options:['11','10','8','9'],
        answer:'9'
    },{
        question:'If the radius of the circle is 7,what is the area of the circle?',
        options:['145','155','153','154'],
        answer:''
    },{
        question:'What is the square root of 600?',
        options:['None Of These','324','330','300'],
        answer:'None Of These'
    },{
        question:'How many laws of motions did Newton write?',
        options:['1','2','4','3'],
        answer:'3'
    },{
        question:'solve for y and x. 6m+6n=12',
        options:['(1,1)','(-2,2)','(2,5)','(-1,1)'],
        answer:'(1,1)'
    },{
        question:'-67+18=?',
        options:['None Of These','49','0','20'],
        answer:'49'
    },{
        question:'43-19=?',
        options:['28','14','17','21'],
        answer:''
    },{
        question:'-18+9=?',
        options:['11','-27','27','-9'],
        answer:'-9'
    },{
        question:'Find the anwser -72 divided by -12 =?',
        options:['-12','-1','-6','6'],
        answer:'6'
    },{
        question:'-9 times 23=',
        options:['-80','-21','-76','-207'],
        answer:'-207'
    },{
        question:'-15 divided by 5 =?',
        options:['-3','-5','5','3'],
        answer:'-3'
    },{
        question:'Which is bigger? -4 or 1?',
        options:['1','-4','Both are Equal','None Of These'],
        answer:'1'
    },{
        question:'Which is bigger? 7 or -6',
        options:['-6','7','Both Are Equal','None Of these'],
        answer:'7'
    },{
        question:'Which is smaller? 6(-3) or 2(-9)',
        options:['They are equal','6(-3)','2(-9)','None Of These'],
        answer:'They are equal'
    },{
        question:'Simplify this expression. -2 times 11y=?',
        options:['-22y','22y','11-2y','22-y'],
        answer:'-22y'
    },{
        question:'x-9x+3+8x-3 Simplify it',
        options:['19x','0','18x','17x'],
        answer:'0'
    },{
        question:'1-s+2+2s-3s+1 Simplify it',
        options:['-2s+4','5-2s','-5+4s','s-2'],
        answer:'-2s+4'
    },{
        question:'1+1+2+4+8+16+32+64+128-254 =?',
        options:['2','1','6','4'],
        answer:'2'
    },{
        question:'There is 24 hours in a day, you sleep 8 hours, you use 8 hours to do things, how many hours do you have left?',
        options:['10','20','16','8'],
        answer:'8'
    },{
        question:'What is 54/9 ?',
        options:['8','6','8','5'],
        answer:'6'
    },{
        question:'A line should have at least how many points?',
        options:['Infinite','three','two','one'],
        answer:'two'
    },{
        question:'The basic unit of length in the metric system is the what?',
        options:['milimeter','meter','dekameter','kilometer'],
        answer:'meter'
    },{
        question:'angle between two parallel lines',
        options:['360 degrees','0 degrees','180 degrees','90 degrees'],
        answer:'0 degrees'
    },{
        question:'a three sided figure with equal sides.',
        options:['Obtuse triangle','triangle','equilateral triangle','isosceles triangle'],
        answer:'isosceles triangle'
    },{
        question:'Which is the smallest 3 digit prime number?',
        options:['100','103','101','123'],
        answer:'101'
    },{
        question:'Differentiation of sin(x) is what?',
        options:['cosec (x)','sec (x)','-cos (x)','cos (x)'],
        answer:'cos (x)'
    },{
        question:'Which number is more than .811, but less than 1.80?',
        options:['812','1.80092','.0095','.8495'],
        answer:'.8495'
    },{
        question:'What is 4.105 x 1,000?',
        options:['4.105,000','41,000','4,105','4.1050'],
        answer:'4,105'
    },{
        question:'What is 100/1,000 written as a decimal?',
        options:['0.1','1.00','100','.100'],
        answer:'.100'
    },{
        question:'What is a diameter of circle?',
        options:['A diagonal that passes through a center of the circle','Surface area of a circle','impossible to determine','None of above'],
        answer:'A diagonal that passes through a center of the circle'
    },{
        question:'What square roots of 9?',
        options:['+3','-3','+3,-3','NONE'],
        answer:'+3,-3'
    },{
        question:'Name the next 4 prime numbers after 30',
        options:['55,78,67,78','31,37,41,43','1,2,3,4,5','24, 27,29,45'],
        answer:'31,37,41,43'
    },{
        question:'find the common factors of 15 and 18',
        options:['3','2','6','4'],
        answer:'3'
    },{
        question:'if billy has 55 sweets and there is 5 people how many sweets does each person get?',
        options:['28','11','34','5'],
        answer:'11'
    },{
        question:'If A=-20 and A+B=-20 then B=?',
        options:['10','0','30','20'],
        answer:'0'
    },{
        question:'what is 100+99-9',
        options:['990','109','190','199'],
        answer:'190'
    },{
        question:'the diameter of circle is 8cm. what is its radius?',
        options:['8','2','4','16'],
        answer:'4'
    },{
        question:'If two sides of a triangle are 6 cm and 4 cm,then the third side must be',
        options:['less than or equal to 10 cm','equal to 10 cm','less than 10 cm','greater than 10 cm'],
        answer:'less than 10 cm'
    },{
        question:'What is the reciprocal of 3?',
        options:['3/3','1','1/3','3/1'],
        answer:'1/3'
    },{
        question:'What is the missing number? 12n=168',
        options:['1113','95','2078','14'],
        answer:'14'
    },{
        question:'Find the next three numbers. 1,4,9,16,...',
        options:['25,36,49','24,38,45','24,38,47','26,33,48'],
        answer:'25,36,49'
    },{
        question:'Find the smallest number divisible by 10,12,15.',
        options:['30','270','60','65'],
        answer:'60'
    },{
        question:'5*5-7+14',
        options:['25','18','32','33'],
        answer:'32'
    },{
        question:'if i am now 10 years old in 2010 what will be my age in 2020',
        options:['20','30','25','12'],
        answer:'20'
    },{
        question:'what is the square root of 100?',
        options:['10','100','1','50'],
        answer:'10'
    },{
        question:'If 100x10=1,000. How much would 100x100=',
        options:['100','10','10000','1000'],
        answer:'10000'
    },{
        question:'Jane had 4 cookies and Isiah had 5 cookies. What did they have together?',
        options:['12','14','9','1'],
        answer:'9'
    },{
        question:'what is the square of 10',
        options:['5','10000','1000','100'],
        answer:'100'
    },{
        question:'what is (-1 -5 -8 +10)',
        options:['6','-4','0','4'],
        answer:'-4'
    },{
        question:'What is 140 divided by 15?',
        options:['9','8.5','9.45','9.33'],
        answer:'9.33'
    },{
        question:'X^2=100. What is the value of X',
        options:['25','10','50','20'],
        answer:'10'
    },{
        question:'if a=5, a-b=15 , find value of b',
        options:['-20','20','-10','10'],
        answer:'-10'
    },{
        question:'what is 100 multiple by 20 .',
        options:['0','20','2000','200'],
        answer:'2000'
    },{
        question:'Which of the following is not a prime number?',
        options:['1','37','29','31'],
        answer:'1'
    },{
        question:'How many feet make a yard?',
        options:['6','5','4','3'],
        answer:'3'
    },{
        question:'How many inches make a foot?',
        options:['13','15','12','14'],
        answer:'12'
    },{
        question:'A triangle with three sides equal is called?',
        options:['right angled triangle','scallen triangle','Equilateral triangle','Isosceles triangle'],
        answer:'Equilateral triangle'
    },{
        question:'Five added to twice a number gives 25. find number',
        options:['12','9','3.3','10'],
        answer:'10'
    },{
        question:'solution of 10+10*10',
        options:['200','110','120','1000'],
        answer:'110'
    },{
        question:'10*10*10/5 ?',
        options:['800','500','5200','200'],
        answer:'200'
    },{
        question:'25*10/5',
        options:['25','520','50','250'],
        answer:'50'
    },{
        question:'Which of the following is a quadrilateral?',
        options:['conw','circle','triangle','rhombus'],
        answer:'rhombus'
    },{
        question:'When you add up all the angles in a triangle, what is the total angle?',
        options:['270 degrees','180 degrees','210 degrees','360 degreess'],
        answer:'180 degrees'
    },{
        question:'In a trapezoid, which lines are parallel?',
        options:['only the top line is parallel','no lines are parallel','right and left lines','top and bottom lines'],
        answer:'top and bottom lines'
    },{
        question:'What looks like a cylinder in your house?',
        options:['a tv','a book','a can','a kite'],
        answer:'a can'
    },{
        question:'How do you find area of a rectangle?',
        options:['2 x pi','height x base','length x width x height','length x width'],
        answer:'length x width'
    },{
        question:'In an equilateral triangle each angle is equal to ---',
        options:['90','60','45','75'],
        answer:'60'
    },{
        question:'what is 3452+67546',
        options:['70998','43','34565','6758'],
        answer:'70998'
    },{
        question:'what is 500-231?',
        options:['259','269','391','450'],
        answer:'269'
    },{
        question:'what is the quotient if we divide 345 by 5',
        options:['59','63','69','67'],
        answer:'69'
    },{
        question:'Elen have 36 grapes and krist have 43 grapes, how many grapes both of them?',
        options:['75','79','65','86'],
        answer:'79'
    },{
        question:'What is N in 306 divide by 3=34xN?',
        options:['3','8','7','6'],
        answer:'3'
    },{
        question:'How many hours make 3 day?',
        options:['71','69','72','70'],
        answer:'72'
    },{
        question:'I am 30 less than highest 3 digit number. What am I?',
        options:['130','1029','969','33'],
        answer:'969'
    },{
        question:'The difference between my age and my mom age was 30 now. What would be the age difference after 10 years?',
        options:['40','30','20','10'],
        answer:'30'
    },{
        question:'15 times a number is 45,What is the number?',
        options:['2','7','5','3'],
        answer:'3'
    },{
        question:'Fifteen thousand four hundred thirty-nine',
        options:['15,499','1,54,439','15,439','15,449'],
        answer:'15,439'
    },{
        question:'A vendor had 3 dozen melons.He sold 18.How many were left?',
        options:['19','18','12','81'],
        answer:'18'
    },{
        question:'How many is 5 x 5',
        options:['45','125','25','35'],
        answer:'25'
    },{
        question:'what is 50+50+50+55',
        options:['205','206','200','134'],
        answer:'205'
    },{
        question:'(9+ 10) + (6x 5) =',
        options:['30','49','71','49'],
        answer:'49'
    },{
        question:'(9*9)+(6*7)=',
        options:['877','123','132','31'],
        answer:'123'
    },{
        question:'Sara has 173 apples.Ali has eatten 50.How many apples are left',
        options:['150','123','170','100'],
        answer:'123'
    },{
        question:'(7 + 8)+(9+6)=',
        options:['30','25','100','18'],
        answer:'30'
    },{
        question:'how many minutes in 24 hours',
        options:['1467','1440','3450','2340'],
        answer:'1440'
    },{
        question:'what is the LCM of 12,24',
        options:['48','54','56','72'],
        answer:'48'
    },{
        question:'what is the LCM of 4,6',
        options:['17','13','12','15'],
        answer:'12'
    },{
        question:'what is the LCM of 16,20',
        options:['80','61','54','94'],
        answer:'80'
    },{
        question:'what is the LCM of 20,35',
        options:['159','120','140','158'],
        answer:'140'
    },{
        question:'what is the LCM of 20,24',
        options:['160','164','120','154'],
        answer:'120'
    },{
        question:'what is the LCM of 15,18',
        options:['98','42','90','60'],
        answer:'90'
    },{
        question:'what is the LCM of 30,35',
        options:['198','325','652','210'],
        answer:'210'
    },{
        question:'what is the HCF of 2,4',
        options:['5','4','3','2'],
        answer:'2'
    },{
        question:'what is the LCM of 6,8',
        options:['64','28','29','24'],
        answer:'24'
    },{
        question:'45x4',
        options:['200','220','180','160'],
        answer:'180'
    },{
        question:'67x4',
        options:['258','248','223','268'],
        answer:'268'
    },{
        question:'16x5',
        options:['80','90','70','110'],
        answer:'80'
    },{
        question:'I have 36 apples i share them between 4 people how many do they get each?',
        options:['6','11','8','9'],
        answer:'9'
    },{
        question:'How many prime numbers are there between1 to 100?',
        options:['50','67','25','12'],
        answer:'25'
    },{
        question:'What is 75% as a fraction and decimal?',
        options:['5/4 and 7.5','3/4 and 9.5','4/3 and 11.5','3/4 and 7.5'],
        answer:'3/4 and 7.5'
    },{
        question:'Jana has 4 balloons. Joe has 5 times as many. How many balloons do they have all together?',
        options:['9','25','31','54'],
        answer:'25'
    },{
        question:'I read 35 pages on Tuesday night. I read twice as many Wednesday night. How many did I read on Wednesday?',
        options:['55','70','26','89'],
        answer:'70'
    },{
        question:'I have 25 flowers and 5 pots. How many flowers can go in each pot?',
        options:['6','1','5','8'],
        answer:'5'
    },{
        question:'At dance they play the same song 7 times. I\'ve heard "CRAZY" 4 times. How many more times will it come on>',
        options:['3','7','4','2'],
        answer:'3'
    },{
        question:'They serve food every 1 hour at a party. If I go to the party from 5:00 to 8:00 how many times is it possible for me to eat?',
        options:['1','2','3','4'],
        answer:'3'
    },{
        question:'I ate 4/8 of a pie. What is the fraction left of the pie?',
        options:['1/2','4/8','2/7','6/9'],
        answer:'1/2'
    },{
        question:'2+3x4=?',
        options:['18','11','20','14'],
        answer:''
    },{
        question:'6+5+12x2=',
        options:['55','35','45','46'],
        answer:'35'
    },{
        question:'max had 144 bikes and had 12 friends he shared them out equally how many bikes did he give to each person',
        options:['14','24','121','10'],
        answer:'12'
    },{
        question:'If 100 people are on a bus and 50 get off and 70 get on...how many people are on the bus?',
        options:['200','190','120','180'],
        answer:'120'
    },{
        question:'what is 3+3+9+6+2',
        options:['2','90','21','23'],
        answer:'23'
    },{
        question:'{20+(-9)}+{-40+4}',
        options:['-91','47','-50','5'],
        answer:'47'
    },{
        question:'8/4+4/8-46/92-1=',
        options:['2','1','3','0'],
        answer:'1'
    },{
        question:'If the dividend and divisor have like signs, then the quotient will be a ............................',
        options:['infinity','zero','negative integer','positive integer'],
        answer:'positive integer'
    },{
        question:'What is the square root of 4?',
        options:['1','2','4','2*2'],
        answer:'2'
    },{
        question:'How old is a dog in dog years (7 years to 1 human year) if the dog has been alive 2 human years?',
        options:['9','14','7','2'],
        answer:'14'
    },{
        question:'What is 2^0',
        options:['0.2','2','1','0'],
        answer:'1'
    },{
        question:'What is 19-2^2?',
        options:['18','17','15','12'],
        answer:'15'
    },{
        question:'How many different letters are in the word statistics?',
        options:['11','9','5','10'],
        answer:'5'
    },{
        question:'What is 12 squared?',
        options:['124','154','114','144'],
        answer:'144'
    },{
        question:'If there are 3 oreos on the counter and your mom says you can have half of them, how many whole ones can you take?',
        options:['0','1','2','3'],
        answer:'1'
    },{
        question:'4 chimps swing across a vine. All but 1 survived. How many lived?',
        options:['4','3','2','1'],
        answer:'3'
    },{
        question:'how long is a century?',
        options:['10 years','100 years','1000 years','100000 years'],
        answer:'100 years'
    },{
        question:'how many seconds are in 2 minutes?',
        options:['110','100','120','180'],
        answer:'120'
    },{
        question:'How many days are in a leap year?',
        options:['360','367','366','365'],
        answer:'366'
    },{
        question:'how many days are in a week?',
        options:['7','8','6','10'],
        answer:'7'
    },{
        question:'how many yaers are in a millennium?',
        options:['10000','1000','100','1'],
        answer:'1000'
    },{
        question:'what is the definition of a fraction?',
        options:['part of a hole','part of a box','part of an apple','all of the above'],
        answer:'all of the above'
    },{
        question:'what is an equivalent fraction?',
        options:['atoner word for saying magnetized','fractions that name the same part of a hole','the subsets that chock boards are made out of','fractions with different amounts'],
        answer:'fractions that name the same part of a hole'
    },{
        question:'how many hours are in two days?',
        options:['50','48','60','24'],
        answer:'48'
    },{
        question:'what is an improper fraction?',
        options:['a number that has a whole number and a fraction','fractions that names the same part of a hole','a fraction witch the numerator is greater than or equal to the denominator','a fraction in witch the denominator is greater the the or equal too the numerator'],
        answer:'a fraction witch the numerator is greater than or equal to the denominator'
    },{
        question:'how many pints are in one quart?',
        options:['2','13','10','4'],
        answer:'2'
    },{
        question:'How do you add polynomials?',
        options:['multiply like terms','subtract opposite terms','combine like terms','combine opposite terms'],
        answer:'combine like terms'
    },{
        question:'A trinomial is a polynomial with exactly how many terms?',
        options:['2','5','4','3'],
        answer:'3'
    },{
        question:'what is the percentage of (common fraction) 2/20',
        options:['40%','10%','20%','80%'],
        answer:'10%'
    },{
        question:'How many years are there in a decade?',
        options:['1000','100','10','20'],
        answer:'10'
    },{
        question:'The sum of three consecutive odd numbers is 57.The middle one is',
        options:['23','17','27','19'],
        answer:'19'
    },{
        question:'60% of 40?',
        options:['70','33','25','24'],
        answer:'24'
    },{
        question:'9 cubed',
        options:['999','899','811','729'],
        answer:'729'
    },{
        question:'50+50+50+50+50+50+50+50+50=',
        options:['500','450','350','300'],
        answer:'450'
    },{
        question:'50+50+50+50+50+50+50+50=',
        options:['400','350','300','450'],
        answer:'400'
    },{
        question:'1000+40+30+20+10=',
        options:['1001','1100','1110','1010'],
        answer:'1100'
    },{
        question:'20% OF 20=',
        options:['10','6','4','8'],
        answer:'4'
    },{
        question:'80 x 30=?',
        options:['24000','3200','5400','2400'],
        answer:'2400'
    },{
        question:'80% of 30',
        options:['32','42','24','35'],
        answer:'24'
    },{
        question:'96x 5 ?',
        options:['480','354','560','1000'],
        answer:'480'
    },{
        question:'5% of 2000 ?',
        options:['500','4000','1000','100'],
        answer:'1000'
    },{
        question:'how to find circumference of circle using diameter(d) ?',
        options:['d*3.14','5d*pi','d*4','2*pi*d'],
        answer:'d*3.14'
    },{
        question:'Which of the following is not a Pythagorean triplet?',
        options:['11, 60, 61','9, 41, 42','7, 24, 25','3, 4, 5'],
        answer:'9, 41, 42'
    },{
        question:'What is 10% of 5% of 2% of 4000?',
        options:['1.6','1.2','0.8','0.4'],
        answer:'0.4'
    },{
        question:'What means Compossite Numbers?',
        options:['For Geometry Numbers','Two factors only','More than two factors','Inverse of Division'],
        answer:'More than two factors'
    },{
        question:'A car traveled 258 miles in 6 hours. What was the car\'s average speed?',
        options:['55 m.p.h.','43 m.p.h.','40 m.p.h.','34 m.p.h.'],
        answer:'43 m.p.h.'
    },{
        question:'50 + 50 - 50 - 50 - 98 = ?',
        options:['198','100','-100','-98'],
        answer:'-98'
    },{
        question:'50 + 50 - 50 + 50 + 98 = ?',
        options:['198','100','-100','-98'],
        answer:'198'
    },{
        question:'200-150-50*4/4=6',
        options:['60','6','1','0'],
        answer:'6'
    },{
        question:'a/b=c/d= ?',
        options:['d-a=c-b','a+d=b+c','a/d=b/c','a*d=b*c'],
        answer:'a*d=b*c'
    },{
        question:'-3*3/3=',
        options:['1','-9','-3','3'],
        answer:'-3'
    },{
        question:'An algebraic expression with two terms.',
        options:['polynomial','trinomial','binomial','monomial'],
        answer:'binomial'
    },{
        question:'What is collinear points?',
        options:['Points that lie on a same straight line','Points formed by a line','Points that meet each other','Points that lie vertically on various lines'],
        answer:'Points that lie on a same straight line'
    },{
        question:'how many edges does a triangle have?',
        options:['4','2','5','3'],
        answer:'3'
    },{
        question:'solve:- (-2)-(3)',
        options:['3/2','+3','-6','6'],
        answer:'6'
    },{
        question:'80-6-8-9+5',
        options:['-62','88','75','62'],
        answer:'62'
    },{
        question:'what is acute angle',
        options:['less than 180','less than 90','more than 180','more than 90'],
        answer:'less than 90'
    },{
        question:'600/2 ?',
        options:['300','250+50','350','Both 1 and 2'],
        answer:'Both 1 and 2'
    },{
        question:'what is the formula for calculation of area  of triangle',
        options:['A=L*B'/2,'A=L*B','A=1/2 base*Height','L*b*h'],
        answer:'A=1/2 base*Height'
    },{
        question:'12*12 ?',
        options:['144','164','146','Both 1 and 2'],
        answer:'Both 1 and 2'
    },{
        question:'What are the other names for the x-intercept and the y-intercept?',
        options:['abscissa and ordinate','equinox and altitude','latitude and abscissa','base and height'],
        answer:'abscissa and ordinate'
    },{
        question:'If the area of a triangle with base x is equal to the area of a square with side x, then the altitude of the triangle is',
        options:['3.14 * x','x*x','x','x/2'],
        answer:'x/2'
    },{
        question:'How many inches are there in a foot (international)?',
        options:['10','14','11','12'],
        answer:'12'
    },{
        question:'How many centimeters are there in an inch?',
        options:['3.54','2.44','2.54','3.34'],
        answer:'2.54'
    },{
        question:'How many feet are there in a geographical mile?',
        options:['7789','6085','6390','4840'],
        answer:'6085'
    },{
        question:'SOLVE :- 2^5 .',
        options:['10','16','34','32'],
        answer:'32'
    },{
        question:'WHAT DO YOU MEAN BY 10^3 ?',
        options:['100000','1000','100','30'],
        answer:'1000'
    },{
        question:'Solve by laws of exponents = [3^3]^2',
        options:['0','3^1','3^5','3^6'],
        answer:'3^6'
    },{
        question:'What do you mean by seven raised to power two ?',
        options:['2^7','7^2','7+2','7*2'],
        answer:'7^2'
    },{
        question:'1221 is power of',
        options:['1','34','11','122'],
        answer:'11'
    },{
        question:'Which of the following in herons formula ?',
        options:['S = a + b + c / 2','1/2 * base * altitude','[a+b] [a-b]','None Of These'],
        answer:'S = a + b + c / 2'
    },{
        question:'If , 25 n = 100 , then , n = ?',
        options:['25','10','4','5'],
        answer:'4'
    },{
        question:'Solve the equation, -8=a+3 a=what?',
        options:['-17','-11','5','-4'],
        answer:'-11'
    },{
        question:'Solve the equation, -81=-9k k=what?',
        options:['11','-9','-8','9'],
        answer:'9'
    },{
        question:'Translate this sentence into a equation. Nineteen is 5 less than twice a number',
        options:['19=2n-5','5n-2=19-5n','5n-2=19n-5','2n-5-19'],
        answer:'19=2n-5'
    },{
        question:'1/X=3/12',
        options:['12','4/3','1/4','4'],
        answer:'4'
    },{
        question:'12/X=2/5',
        options:['X=7','X=24','X=60','X=30'],
        answer:'X=30'
    },{
        question:'x/40=5/100',
        options:['x=2','x=9','x=400','x=90'],
        answer:'x=2'
    },{
        question:'x/5=9/15',
        options:['x=1','x=45','x=3','x=6'],
        answer:'x=3'
    },{
        question:'5/15=8/x',
        options:['x=24','x=2','x=3','x=12'],
        answer:'x=24'
    },{
        question:'2/5=x/20',
        options:['x=8','x=10','x=50','x=25'],
        answer:'x=8'
    },{
        question:'What is the ratio equal to 7/14?',
        options:['5/15','20/30','10/20','3/9'],
        answer:'10/20'
    },{
        question:'0.364 is a(n).........',
        options:['rational number','irrational number','natural number','integer'],
        answer:''
    },{
        question:'-16 is.............',
        options:['whole number','integer','an irrational','rational'],
        answer:''
    },{
        question:'What is -14/7?',
        options:['Rational number','Integer','Irrational number','Both a and b'],
        answer:'Both a and  b'
    },{
        question:'How many months are equal to 45 days?',
        options:['1 ½ months.','1 ¼ months.','¼ months.','2 ¼ months months.'],
        answer:'1 ½ months.'
    },{
        question:'How many diagonals are there in a quadrilateral?',
        options:['3','4','2','6'],
        answer:'2'
    },{
        question:'Speed of a car is 60 km/hr. Distance covered in 1 ¼ hours is ',
        options:['60','65','70','75'],
        answer:'75'
    },{
        question:'If one side of a square is 35 m, then the area is ……',
        options:['1235 m2','1222 m2','1225 m2','1252 m2'],
        answer:'1225 m2'
    },{
        question:'How many surfaces are there in a cube?',
        options:['3','4','5','6'],
        answer:'6'
    },{
        question:'How much water is added to 750 g milk to get 1 kilogram mixture of liquid?',
        options:['25 kg.','20.5 kg.','0.25 kg.','2.5 kg.'],
        answer:'0.25 kg.'
    },{
        question:'How many parts are there in a triangle?',
        options:['Infinite','9','6','3'],
        answer:'9'
    },{
        question:'What is the opposite of 6?',
        options:['7','5','-6','3'],
        answer:'-6'
    },{
        question:'What is –10 – (–6) equals to?',
        options:['16^2','-16^2','4','-4'],
        answer:'-4'
    },{
        question:'Arrange the following numbers in order from least to greatest; –14.6, 159, 1.07, –1.295, 24.6.',
        options:['–1.295, –14.6, 1.07, 24.6, 159.','1.07, –14.6, 159, 24.6, –1.295.','–14.6, –1.295, 1.07, 24.6, 159.','1.07, –1.295, –14.6, 24.6, 159.'],
        answer:'–14.6, –1.295, 1.07, 24.6, 159.'
    },{
        question:'Find the sum; –1.54 + 5.093.',
        options:['6.63','4.53','3.653','3.553'],
        answer:'3.553'
    },{
        question:'Which value of x makes the equation true? x – 7 = –13',
        options:['-20','-6','6','20'],
        answer:'-6'
    },{
        question:'Which of these following set of numbers are factors of 24?',
        options:['3, 9, 12','4, 7, 24','1, 5, 12, 18','2, 3, 4, 6, 8'],
        answer:'2, 3, 4, 6, 8'
    },{
        question:'What is three fifth of 100?',
        options:['80','40','60','20'],
        answer:'60'
    },{
        question:' If David’s age is 27 years old in 2011. What was his age in 2003?',
        options:['19 years','18 years','37 years','17 years'],
        answer:'19 years'
    },{
        question:'What is the remainder of 21 divided by 7?',
        options:['2','7','1','0'],
        answer:'0'
    },{
        question:' What is 7% equal to?',
        options:['7','0.7','0.07','0.007'],
        answer:'0.07'
    },{
        question:'What is the square of 15?',
        options:['325','225','235','215'],
        answer:'225'
    },{
        question:'What is the value of x if x2 = 169',
        options:['17','23','13','23'],
        answer:'13'
    },{
        question:'What is the reciprocal of 17/15?',
        options:['Not defined','17^15','15^17','15/17'],
        answer:'15/17'
    },{
        question:'In a century how many months are there?',
        options:['10','1200','100','1000'],
        answer:'1200'
    },{
        question:'How many months have 30 day.',
        options:['12 months','4 months','5 months','6 months'],
        answer:'4 months'
    },{
        question:'Which number occurred before 9019?',
        options:['9002','9118','9020','9091'],
        answer:'9002'
    },{
        question:'In words number 14 can be written as …….',
        options:['Fourten.','Fourteen.','Forteen.','Fourtin.'],
        answer:'Fourteen.'
    },{
        question:'What kind of number is 37?',
        options:['Odd.','Prime','Both a and b.','None of these'],
        answer:'Both a and b.'
    },{
        question:'Which of the following sets are odd numbers?',
        options:['1, 3, 5, 7, 18','1, 2, 5, 7, 9','1, 3, 5, 7, 9','2, 3, 7, 9, 11'],
        answer:'1, 3, 5, 7, 9'
    },{
        question:'6 – (5 – 3) + 10 = ……..',
        options:['18','6','12','14'],
        answer:'4'
    },{
        question:'Simplify: {36 ÷ (-9)} ÷ {(-24) ÷ 6}',
        options:['1','2','3','-1'],
        answer:'1'
    },{
        question:'Subtract - 8a from - 3a',
        options:['-11a','11a','5a','-5a'],
        answer:'5a'
    },{
        question:'Solve: x - 3 = 5',
        options:['-2','8','-8','2'],
        answer:'8'
    },{
        question:'A clock seen through a mirror shows 8 o’clock. What is the correct time?',
        options:['2.00','11.00','4.00','8.00'],
        answer:'4.00'
    },{
        question:'If the day tomorrow is Sunday, what was it yesterday?',
        options:['Tuesday','Friday','Thursday','Wednesday'],
        answer:'Friday'
    },{
        question:'Fill in the blanks; 4, 6, 12, 14, 28, 30, (?)',
        options:['32','64','62','60'],
        answer:'60'
    },{
        question:'The number which is neither prime nor composite is ……. .',
        options:['0','1','3','2'],
        answer:'1'
    },{
        question:' Which number is missing? 1, 9, 25, 49, (?)',
        options:['36','81','100','64'],
        answer:'81'
    },{
        question:'If 6 is 50% of a number, what is the number?',
        options:['12','13','11','10'],
        answer:'12'
    },{
        question:'Area of a parallelogram whose base is 9 cm and height is 4 cm is ……….. square cm.',
        options:['72cm','36cm','18cm','24cm'],
        answer:'36cm'
    },{
        question:'10001 – 101 = ?',
        options:['9900','9990','990','9901'],
        answer:'9900'
    },{
        question:'Which is the smallest fraction among the following?',
        options:['2/3','6/7','6/5','3/4'],
        answer:'2/3'
    },{
        question:'The simplest form of 1.5 : 2.5 is ……………',
        options:['6 : 10','15 : 25',' 0.75 : 1.25','3 : 5'],
        answer:'3 : 5'
    },{
        question:'The square root of 0.0081 is ………… .',
        options:['0.009','0.91','0.9','0.09'],
        answer:'0.09'
    },{
        question:'All natural numbers and 0 are called the ……………….. numbers.',
        options:['rational','integer','prime','whole'],
        answer:'whole'
    },{
        question:'If 13 is 50% of a number, what is the number?',
        options:['7.5','26','6.5','24'],
        answer:'26'
    },{
        question:'If 11 is 50% of a number, what is the number?',
        options:['20','22','23','5.5'],
        answer:'22'
    }]);
        client.close();
});