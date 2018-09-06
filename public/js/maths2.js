var socket =io({transports: ['websocket'], upgrade: false,reconnection:false});



var scores = 0;
var enemies =[];


function gameplay(data){
    if(enemies.length >=1){
    document.getElementById('waiting').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    Restore_Buttons_color();
    Restore_Buttons_text_color();
   
    questions =data.Question1;
    x = data.x;
    room_id = data.id;
    this.room_id = room_id;
    socket.emit('nameway',{
       roomid: room_id
   });
    this.x = x;
    this.questions = questions;
    var quesn = document.getElementById('question');
    quesn.innerHTML =questions[x].question;
    setTimeout("button0()", 1000);
    setTimeout("button1()", 1200);
    setTimeout("button2()", 1400);
    setTimeout("button3()", 1600);
    for(i=0;i<4;i++){
    var opt = document.getElementById('option'+i);
    opt.innerHTML = questions[x].options[i];
   }
  timer();
// var timer_sound = document.getElementById('timer_play');
    // timer_sound.play();
setTimeout('button00()',10000);
setTimeout('button11()',10000);
setTimeout('button22()',10000);
setTimeout('button33()',10000);
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
    var removePlayer = data.id;
    console.log(removePlayer);
    enemies.splice(enemies.indexOf(removePlayer), 1);
    console.log(enemies);
    socket.emit('opponent_removefromlist',{
        id:data.id,
        room__id: room_id
    });
    socket.emit('player_removed_maths',{
        id: removePlayer,
        room__id: room_id
    });
    socket.emit('remove_fromlist_win_maths',{
        id:socket.id,
        room__id: room_id
    });
    document.getElementById('quiz').style.display ='none';
    document.getElementById('win').style.display = 'block';
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
        console.log(l);
        var b = document.getElementById('button'+ans);
        // var error_sound = document.getElementById('error_play');
        // var success_sound = document.getElementById('right_play');
        if(choice == questions[x].answer){
           b.style.backgroundColor = '#1b5e20'; 
           b.style.color = 'rgb(255, 255, 255)';
        //    success_sound.play();
           scores += l;
           socket.emit('score',{
            scores:scores,
            self_id:socket.id,
            room__id :room_id
        });
    }else{
        b.style.backgroundColor = '#d50000';
        b.style.color = 'rgb(255, 255, 255)';
        scores = scores;
        socket.emit('score',{
            scores:scores,
            self_id:socket.id,
            room__id :room_id
        });
        // error_sound.play();
       
    }
    socket.emit('score',{
        scores:scores,
        self_id:socket.id,
        room__id :room_id
    });
    Disable_Buttons();
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



// socket connection
socket.on('connect',function(){
  socket.emit('new_player_maths',{
      id:socket.id 
  });
  console.log('connected');
});

// game
socket.on('maths',gameplay);
// names
socket.on('myname',(data)=>{
    console.log(data.my_name);
    document.getElementById('name').innerHTML = data.my_name;
    document.getElementById('profile').src = data.url;
    document.getElementById('profile_big').src = data.url;
    document.getElementById('profile_win').src = data.url;
});
socket.on('enemyname',(data)=>{
    console.log( data.enemy_name);
    document.getElementById('enemyname').innerHTML = data.enemy_name;
    document.getElementById('profile1').src = data.url;
    document.getElementById('profile_big_1').src = data.url;
    document.getElementById('profile_win1').src = data.url;
});

// waiting for opponent
socket.on('waiting',function(data){
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('waiting').style.display = 'block';
});
// scores
socket.on('Myscore',(data)=>{
    my__score =  data.myscore;
    console.log('myscore');
    console.log(my__score);
    document.getElementById('score1').innerHTML = (my__score[0].score);  
});
socket.on('enemy_scores',(data)=>{
    enemy__score =  data.enemy_scores ;
    console.log('enemyscores');
    console.log(enemy__score);
    document.getElementById('score2').innerHTML = (enemy__score[0].score); 
});
  //listen to new enemy connections
  socket.on("new_enemyPlayer_maths", onNewPlayer);
 
  //when received remove_player, remove the player passed; 
  socket.on('remove_player', onRemovePlayer); 
  

//   game over 
socket.on('stop',(data)=>{
    //  var timer_sound = document.getElementById('timer_play');
    //  timer_sound.pause();
    if(enemies.length >=1){
    document.getElementById('quiz').style.display ='none';
    // finalscores
    socket.emit('final_scores',{id:socket.id, enemy_id:enemies[0],roomid:room_id});
    }
});
socket.on('finalscores',(data)=>{
    document.getElementById('finalscore').innerHTML = data.final_score.score;
    document.getElementById('finalscore_win').innerHTML = data.final_score.score;
});
socket.on('finalscores_',(data)=>{
    document.getElementById('finalscore1').innerHTML = data.final_score.score;
    document.getElementById('finalscore_win1').innerHTML = data.final_score.score;
});
socket.on('winner',(data)=>{
    //  var timer_sound = document.getElementById('timer_play');
// timer_sound.pause();
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('win').style.display = 'block';
    socket.emit('remove_fromlist_win_maths',{
        id:socket.id,
        room__id: room_id
    });
});
socket.on('lose',(data)=>{
    //  var timer_sound = document.getElementById('timer_play');
// timer_sound.pause();
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('end').style.display = 'block';
    socket.emit('remove_fromlist_lose_maths',{
        id:socket.id,
        room__id : room_id
    });
});
socket.on('draw',(data)=>{
    //  var timer_sound = document.getElementById('timer_play');
// timer_sound.pause();
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('draw').style.display = 'block';
    socket.emit('remove_fromlist_draw_maths',{
        id:socket.id,
        room__id: room_id
    });
});

socket.on('end_search',(data)=>{
    socket.emit('search_stopped',{text:'stop'});
        document.getElementById('quiz').style.display = 'none';
        document.getElementById('waiting').style.display = 'none';
        document.getElementById('search').style.display = 'block';
    });