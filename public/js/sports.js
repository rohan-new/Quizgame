
 
var socket = io({transports: ['websocket'], upgrade: false,reconnection:false});

    var scores = 0;
    var enemies =[];
    var room_player = {};
    var timer_sound = document.getElementById('timer_play');
    var error_sound = document.getElementById('error_play');
    var success_sound = document.getElementById('right_play');
    document.getElementById('score1').innerHTML = (scores);  
    document.getElementById('score2').innerHTML =  (scores);
      document.getElementById('score3').innerHTML =  (scores);
    // game
    function gameplay(data){
        if(enemies.length >=1){
             Able_Buttons();
             room_id = data.id;
            this.room_id = room_id;
            var y = enemies.length;
            socket.emit('nameway',{
              roomid: room_id,
              enemy_no: y
        });
         document.getElementById('waiting').style.display = 'none';
         document.getElementById('quiz').style.display = 'block';
          document.body.style.background = "#1f253d";
         questions =data.Question1;
         this.questions = questions;
         var quesn = document.getElementById('question');
         quesn.innerHTML =questions.question;
         
         for(i=0;i<4;i++){
         var opt = document.getElementById('option'+i);
         opt.innerHTML = questions.options[i];
        }
         Restore_Buttons_color();
         Restore_Buttons_text_color();
         timer();
         $('#score1').addClass('no-animation');
         $('#score2').addClass('no-animation');
         $('#score3').addClass('no-animation');
        // timer();
        timer_sound.play();
 
    socket.emit('score',{
        scores:scores,
        self_id:socket.id,
        room__id :room_id
    });
            
}
}

    //   on new player
      function onNewPlayer(data){
          var new_enemy = data.id;
          enemies.push(new_enemy);
        }

// find player by id
        function findplayerbyid (ids) {
            for (var i = 0; i < enemies.length; i++) {
                if (enemies[i].id == ids) {
                     return enemies[i]; 
                }
            }
        }

// remove player
function onRemovePlayer (data) {
    var removePlayer = data.id;
    enemies.splice(enemies.indexOf(removePlayer), 1);
    
    if(enemies.length === 0){
    document.getElementById('quiz').style.display ='none';
    document.getElementById('win').style.display = 'block';
    socket.emit('winbyquit',{id: socket.id});
        socket.emit('remove_fromlist_win_sports',{
        id:socket.id,
        room__id: room_id
    });
    
    }
}


        // on click
        function answer(ans){
                var z = document.getElementById('option'+ans);
                var choice = z.innerHTML;
                var a = new Date().getTime();
                var diff1 = sTime - a;
                var seconds1 =  0 - Math.floor(diff1 / 1000);
                // Disable_Buttons();
                var l = 10 - seconds1;
                var b = document.getElementById('button'+ans);
                
                $("body, button").addClass("active");
                setTimeout(function() {
                   $("body, button").removeClass("active");
                }, 1200);

                
                if(choice == questions.answer){
                   b.style.backgroundColor = '#1b5e20'; 
                   b.style.color = 'rgb(255, 255, 255)';
                    success_sound.play();
                   scores += l;
                   socket.emit('score',{
                    scores:scores,
                    self_id:socket.id,
                    room__id :room_id
                });
                $('#score1').removeClass('no-animation');
                socket.emit('blink_enemy',{room_id:room_id});
            }else{
                b.style.backgroundColor = '#d50000';
                b.style.color = 'rgb(255, 255, 255)';
                scores = scores;
                socket.emit('score',{
                    scores:scores,
                    self_id:socket.id,
                    room__id :room_id
                });
                error_sound.play();
               
            }
           
            socket.emit('score',{
                scores:scores,
                self_id:socket.id,
                room__id :room_id
            });
            Disable_Buttons();
           
            // setTimeout(Able_Buttons,k); 
            }

            
            socket.on('blink_enemies',(data)=>{
             $('#score2').removeClass('no-animation');
            });
            
            socket.on('winner',(data)=>{
                if(enemies.length == 0){
                   
                    document.getElementById('profile_win2').style.display = 'none';
                }
                document.getElementById('quiz').style.display = 'none';
                document.getElementById('win').style.display = 'block';
                socket.emit('remove_fromlist_win_sports',{
                    id:socket.id,
                    room__id: room_id
                });
                
            });
            socket.on('lose',(data)=>{
                 if(enemies.length == 0){
                    
                    document.getElementById('profile_big_2').style.display = 'none';
                }
                document.getElementById('quiz').style.display = 'none';
                document.getElementById('end').style.display = 'block';
               
                socket.emit('remove_fromlist_lose_sports',{
                    id:socket.id,
                    room__id : room_id
                });
            });
            socket.on('draw',(data)=>{
                if(enemies.length == 0){
                    
                    document.getElementById('profile_draw2').style.display = 'none';
                }

                document.getElementById('quiz').style.display = 'none';
                document.getElementById('draw').style.display = 'block';
                socket.emit('remove_fromlist_draw_sports',{
                    id:socket.id,
                    room__id : room_id
                });
            });
            
           
            socket.on('end_search',(data)=>{
                socket.emit('search_stopped',{text:'stop'});
                document.getElementById('quiz').style.display = 'none';
                document.getElementById('waiting').style.display = 'none';
                document.getElementById('search').style.display = 'block';
                // document.body.style.background-color =  "white";
                
            });


            function Disable_Buttons(){
                document.getElementById('button0').disabled = 'true';
                document.getElementById('button1').disabled = 'true';
                document.getElementById('button2').disabled = 'true';
                document.getElementById('button3').disabled = 'true';
                }

            function Able_Buttons(){
                document.getElementById('button0').disabled = false;
                document.getElementById('button1').disabled = false;
                document.getElementById('button2').disabled = false;
                document.getElementById('button3').disabled = false;
                }

            function Restore_Buttons_color(){
                document.getElementById('button0').style.backgroundColor = '#311b92';
                document.getElementById('button1').style.backgroundColor = '#311b92';
                document.getElementById('button2').style.backgroundColor = '#311b92';
                document.getElementById('button3').style.backgroundColor = '#311b92';
            }

            function Restore_Buttons_text_color(){
                document.getElementById('button0').style.color = 'white';
                document.getElementById('button1').style.color = 'white';
                document.getElementById('button2').style.color = 'white';
                document.getElementById('button3').style.color = 'white';
            }    
            
            function timer(){
                var sTime = new Date().getTime();
                this.sTime = sTime;
                var countDown = 10;
                this.countDown = countDown;
                UpdateTime();
                var counter = setInterval(UpdateTime, 500);
                this.counter = counter;
            }

            // timer update time
            function UpdateTime() {
                var cTime = new Date().getTime();
                var diff = cTime - sTime;
                var seconds = countDown - Math.floor(diff / 1000);
                this.seconds = seconds;
                if (seconds >= 0) {
                    var minutes = Math.floor(seconds / 60);
                    seconds -= minutes * 60;
                    document.getElementById("countdown").innerHTML = (seconds < 10 ? "0" + seconds : seconds);
                } 
                else {
                    clearInterval(counter);
                }
            }
         

 

  // socket connection
    socket.on('connect',function(){
       
      socket.emit('new_player_sports',{
          id:socket.id 
      });
    });
    
    // game
    socket.on('sports',gameplay);
    socket.on('sports_1',gameplay1);
      //listen to new enemy connections
      socket.on("new_enemyPlayer_sports", onNewPlayer);
     
      //when received remove_player, remove the player passed; 
	  socket.on('remove_player', onRemovePlayer); 
	  
	  
// 	  new config
socket.on('myname',(data)=>{
     if(enemies.length == 2){
    document.getElementById('name').innerHTML = data.my_name;
    document.getElementById('profile').src = data.url;
    document.getElementById('profile_big').src = data.url;
    document.getElementById('profile_win').src = data.url;
    document.getElementById('profile_draw').src = data.url;
     }else{
          document.getElementById('enemyname2').innerHTML = data.my_name;
          document.getElementById('profile2').src = data.url;
          document.getElementById('profile_big').src = data.url;
          document.getElementById('profile_win').src = data.url;
          document.getElementById('profile_draw').src = data.url;
          document.getElementById('chipcenter').style.display = "none";
     }
});
socket.on('enemyname',(data)=>{
    if(enemies.length ==2){
    if(data.id === enemies[0]){
        document.getElementById('enemyname').innerHTML = data.enemy_name;
        document.getElementById('profile1').src = data.url;
        document.getElementById('profile_big_1').src = data.url;
        document.getElementById('profile_win1').src = data.url;
        document.getElementById('profile_draw1').src = data.url;
    }
    else{
        document.getElementById('enemyname2').innerHTML = data.enemy_name;
        document.getElementById('profile2').src = data.url;
        document.getElementById('profile_big_2').src = data.url;
        document.getElementById('profile_win2').src = data.url;
        document.getElementById('profile_draw2').src = data.url;
    }
    }else{
         document.getElementById('enemyname').innerHTML = data.enemy_name;
        document.getElementById('profile1').src = data.url;
        document.getElementById('profile_big_1').src = data.url;
        document.getElementById('profile_win1').src = data.url;
        document.getElementById('profile_draw1').src = data.url;
        
        // when one enemy hide the two if not present
        document.getElementById('score1').style.display = "none";
        document.getElementById('profile_big_2').style.display = "none";
        document.getElementById('profile_win2').style.display = "none";
        document.getElementById('profile_draw2').src = data.url;
    }
    
});

// waiting for opponent
socket.on('waiting',function(data){
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('waiting').style.display = 'block';
    
         setTimeout(function(){
        document.getElementById('pic').src = "/html/pics/profile1.jpg";
    },1000);
    setTimeout(function(){
        document.getElementById('pic').src = "/html/pics/profile2.jpg";

    },1500);
    setTimeout(function(){
        document.getElementById('pic').src = "/html/pics/profile3.jpg";
        document.getElementById('instructions').innerHTML = "You maybe matched against 1 or 2 opponents"

    },2000);
    setTimeout(function(){
        document.getElementById('pic').src = "/html/pics/profile4.jpg";

    },2500);
    setTimeout(function(){
        document.getElementById('pic').src = "/html/pics/profile5.jpg";

    },3000);
    setTimeout(function(){
        document.getElementById('pic').src = "/html/pics/profile6.jpg";

    },3500);
    setTimeout(function(){
        document.getElementById('pic').src = "/html/pics/profile7.jpg";
      document.getElementById('instructions').innerHTML = "You have 10 seconds to answer each question"
    },4000);
    setTimeout(function(){
        document.getElementById('pic').src = "/html/pics/profile8.jpg";

    },4500);
    setTimeout(function(){
        document.getElementById('pic').src = "/html/pics/profile9.jpg";
       
    },5000);
    setTimeout(function(){
        document.getElementById('pic').src = "/html/pics/profile10.jpg";

    },5500);
    setTimeout(function(){
        document.getElementById('pic').src = "/html/pics/profile11.jpg";
        
    },6000);
    setTimeout(function(){
        document.getElementById('pic').src = "/html/pics/profile12.jpg";
        document.getElementById('instructions').innerHTML = "Points are awarded on the basis of no of seconds left upon right option click"
    },6500);
    setTimeout(function(){
        document.getElementById('pic').src = "/html/pics/profile13.jpg";

    },7000);
    setTimeout(function(){
        document.getElementById('pic').src = "/html/pics/profile14.jpg";

    },7500);
    setTimeout(function(){
        document.getElementById('pic').src = "/html/pics/profile15.jpg";
     
    },8000);
    setTimeout(function(){
        document.getElementById('pic').src = "/html/pics/profile16.jpg";
    },8500);
    setTimeout(function(){
        document.getElementById('pic').src = "/html/pics/profile17.jpg";
         document.getElementById('instructions').innerHTML = "Rs 10 is awarded if you win the match against 1 opponent"   
    },9000);
    setTimeout(function(){
        document.getElementById('pic').src = "/html/pics/profile18.jpg";

    },9500);
    setTimeout(function(){
        document.getElementById('pic').src = "/html/pics/profile19.jpg";

    },10000);
    setTimeout(function(){
        document.getElementById('pic').src = "/html/pics/profile20.jpg";
        
    },10500);
    setTimeout(function(){
        document.getElementById('pic').src = "/html/pics/profile21.jpg";
         document.getElementById('instructions').innerHTML = "Rs 15 is awarded if you win the match against 2 opponent"   
    },11000);
    setTimeout(function(){
        document.getElementById('pic').src = "/html/pics/profile21.jpg";

    },11500);
    setTimeout(function(){
        document.getElementById('pic').src = "/html/pics/profile21.jpg";
      
    },12000);
     setTimeout(function(){
        document.getElementById('pic').src = "/html/pics/profile1.jpg";
    },13000);
     setTimeout(function(){
        document.getElementById('pic').src = "/html/pics/profile2.jpg";

    },14000);
     setTimeout(function(){
        document.getElementById('pic').src = "/html/pics/profile3.jpg";

    },15000);
     setTimeout(function(){
        document.getElementById('pic').src = "/html/pics/profile4.jpg";

    },16000);
     setTimeout(function(){
        document.getElementById('pic').src = "/html/pics/profile5.jpg";
        document.getElementById('instructions').innerHTML = "Please don't refresh during the game or now,you will lose the game!"
    },17000);
     setTimeout(function(){
        document.getElementById('pic').src = "/html/pics/profile6.jpg";

    },18000);
    
   
   
});
// scores
socket.on('Myscore',(data)=>{
        if(enemies.length ==2){
    my__score =  data.myscore;
    document.getElementById('score1').innerHTML = (my__score[0].score);

        }else{
             my__score =  data.myscore;
             document.getElementById('score3').innerHTML = (my__score[0].score);
             document.getElementById('score1').style.display = "none";
        }
});
socket.on('enemy_scores',(data)=>{
    if(data.id === enemies[0]){
        enemy__score =  data.enemy_scores ;
        document.getElementById('score2').innerHTML = (enemy__score[0].score);
    }else{
        enemy__score =  data.enemy_scores ;
        document.getElementById('score3').innerHTML = (enemy__score[0].score);
    }
});
  
  
//   game over 
socket.on('stop',(data)=>{
      document.getElementById('quiz').style.display ='none';
      socket.emit('alert_end_sports',{
          id: socket.id, 
          room__id: data.roomid
          
      });
});
socket.on('stop_game',(data)=>{
    socket.emit('final_scores',{id:socket.id, enemy_id:enemies,roomid:data.roomid});
})
socket.on('finalscores',(data)=>{ 
    document.getElementById('finalscore').innerHTML = data.final_score.score;
    document.getElementById('finalscore_win').innerHTML = data.final_score.score;
    document.getElementById('finalscore_draw').innerHTML = data.final_score.score;
});
socket.on('finalscores_',(data)=>{
    if(data.id === enemies[0]){
    document.getElementById('finalscore1').innerHTML = data.final_score.score;
    document.getElementById('finalscore_win1').innerHTML = data.final_score.score;
     document.getElementById('finalscore1').style.display = 'inline';
    document.getElementById('finalscore_win1').style.display = 'inline';
     document.getElementById('finalscore_draw1').innerHTML = data.final_score.score;
    }
    else{
        document.getElementById('finalscore2').innerHTML = data.final_score.score;
        document.getElementById('finalscore_win2').innerHTML = data.final_score.score;
         document.getElementById('profile_big_2').style.display = 'inline';
         document.getElementById('finalscore2').style.display = 'inline';
          document.getElementById('finalscore_draw2').innerHTML = data.final_score.score;
    }
});



  

// config
 function gameplay1(data){
      Able_Buttons();
       room_id = data.id;
            this.room_id = room_id;
            var y = enemies.length;
            socket.emit('nameway',{
              roomid: room_id,
              enemy_no: y
        });
         document.getElementById('waiting').style.display = 'none';
         document.getElementById('quiz').style.display = 'block';
          document.body.style.background = "#1f253d";
         questions =data.Question1;
         this.questions = questions;
         var quesn = document.getElementById('question');
         quesn.innerHTML =questions.question;
         
         for(i=0;i<4;i++){
         var opt = document.getElementById('option'+i);
         opt.innerHTML = questions.options[i];
        }
         Restore_Buttons_color();
         Restore_Buttons_text_color();
         timer();
         $('#score1').addClass('no-animation');
         $('#score2').addClass('no-animation');
         $('#score3').addClass('no-animation');
        // timer();
        var timer_sound = document.getElementById('timer_play');
        timer_sound.play();
 
    socket.emit('score',{
        scores:scores,
        self_id:socket.id,
        room__id :room_id
    });
            
}
	  
	  socket.on('btscore',(data)=>{
          var lamda = data.num ;
          if(lamda != undefined){
         setTimeout(function(){
              var number = parseInt($('#score2').text());
              var newscore = number + lamda;
              document.getElementById('score2').innerHTML = newscore;
               $('#score2').removeClass('no-animation');
         },(10 - lamda)*1000);
          }
	  });
	  
	  
	  
	  socket.on('rfinalscores',(data)=>{
    document.getElementById('finalscore').innerHTML = data.final_score.score;
    document.getElementById('finalscore_win').innerHTML = data.final_score.score;
    document.getElementById('finalscore_draw').innerHTML = data.final_score.score;
    
     document.getElementById('finalscore1').innerHTML = data.scores;
    document.getElementById('finalscore_win1').innerHTML = data.scores;
     document.getElementById('finalscore1').style.display = 'inline';
    document.getElementById('finalscore_win1').style.display = 'inline';
     document.getElementById('finalscore_draw1').innerHTML = data.scores;
});

socket.on('rstop_game',(data)=>{
     var bt = parseInt($('#score2').text());
    socket.emit('rfinal_scores',{id:socket.id,roomid:data.roomid,score: bt});
});

socket.on('rstop',(data)=>{
      document.getElementById('quiz').style.display ='none';
      socket.emit('ralert_end_sports',{
          id: socket.id, 
          room__id: data.roomid
          
      });
});
socket.on('renemy_name',(data)=>{
    document.getElementById('enemyname').innerHTML = data.name;
     document.getElementById('profile1').src = "/web/images/avatar _40.png";
        document.getElementById('profile_big_1').src = '/web/images/avatar _40.png';
        document.getElementById('profile_win1').src = '/web/images/avatar _40.png';
        document.getElementById('profile_draw1').src = '/web/images/avatar _40.png';

});
