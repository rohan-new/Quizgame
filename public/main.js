var socket = io();

// configuring the game screen size
// canvas_width = window.innerWidth * devicePixelRatio;
// canvas_height = window.innerHeight * devicePixelRatio;

    var scores = 0;
    var enemies =[];
   

    function gameplay(data){
        document.getElementById('messages').style.display = 'none';
         document.getElementById('quiz').style.display = 'block';
         document.getElementById('message').style.display = 'none';
      
         questions =data.Question;
         x = data.x;
         room_id = data.id;
         this.room_id = room_id;
         this.x = x;
         this.questions = questions;
         var quesn = document.getElementById('question');
         quesn.innerHTML =questions[x].question;
         setTimeout("button0()", 1000);
         setTimeout("button1()", 1500);
         setTimeout("button2()", 2000);
         setTimeout("button3()", 2500);
       
         for(i=0;i<4;i++){
         var opt = document.getElementById('option'+i);
         opt.innerHTML = questions[x].options[i];
        }
    timer();
    setTimeout('button00()',10000);
    setTimeout('button11()',10000);
    setTimeout('button22()',10000);
    setTimeout('button33()',10000);

}

    //   on new player
      function onNewPlayer(data){
          var new_enemy = data.id;
          enemies.push(new_enemy);
          console.log("opponent created with id : " +enemies);
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
            var removePlayer = findplayerbyid(data.id);
            // Player not found
            if (!removePlayer) {
                console.log('Player not found: ', data.id)
                return;
            }
            enemies.splice(enemies.indexOf(removePlayer), 1);
        }

        // on click
        function answer(ans){
                var z = document.getElementById('option'+ans);
                var choice = z.innerHTML;
                var a = new Date().getTime();
                var diff1 = sTime - a;
                var seconds1 =  0 - Math.floor(diff1 / 1000);
                Disable_Buttons();
                var l = 10 - seconds1;
                if(choice == questions[x].answer){
                scores += l;
            }else{
                scores = scores;
            }
            console.log(scores);
            console.log(room_id);
            var enemy_id = enemies[0];
            socket.emit('score',{
                scores:scores,
                self_id:socket.id,
                room__id :room_id
            });

            var k = l * 1000;
            setTimeout(Able_Buttons,k); 
            }

            // timer
            function timer(){
                var sTime = new Date().getTime();
                this.sTime = sTime;
                var countDown = 10;
                this.countDown = countDown;
                UpdateTime();
                // this.UpdateTime = UpdateTime();
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
                    document.getElementById("minutes").innerHTML =(minutes < 10 ? "0" + minutes : minutes);
                    document.getElementById("seconds").innerHTML = (seconds < 10 ? "0" + seconds : seconds);
                } 
                else {
                    
                    document.getElementById("countdown").style.display = 'none';
                    document.getElementById("aftercount").style.visibility = 'visible';
                    clearInterval(counter);
                }
            }

            setTimeout(function(){
                document.getElementById('quiz').style.display = "none";
                document.getElementById('over').style.display = "inline";
                document.getElementById('messages').innerHTML = "GAME OVER";
                document.getElementById('score1').innerHTML = "MY_SCORE " + my__score[0].score;
                document.getElementById('score2').innerHTML = "opponents_score " + enemy__score[0].score;

            },40600);
            

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

 

  // socket connection
    socket.on('connect',function(){
      socket.emit('new_player',{
          id:socket.id 
      });
      console.log('connected');
    });

    // game
    socket.on('quiz',gameplay);

    // waiting for opponent
    socket.on('waiting',function(data){
    document.getElementById('messages').innerHTML = data.text;
    });
    
    // scores
    socket.on('Myscore',(data)=>{
         my__score =  data.myscore;
         console.log('myscore');
         console.log(my__score);
         document.getElementById('scores').innerHTML = "MY_SCORE " + (my__score[0].score);  
    });
    socket.on('enemy_scores',(data)=>{
         enemy__score =  data.enemy_scores ;
         console.log('enemyscores');
         console.log(enemy__score);
         document.getElementById('all_scores').innerHTML = "opponents_score " + (enemy__score[0].score); 
    });
      //listen to new enemy connections
      socket.on("new_enemyPlayer", onNewPlayer);
     
      //when received remove_player, remove the player passed; 
	  socket.on('remove_player', onRemovePlayer); 
