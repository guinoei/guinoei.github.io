function getMusicName(musicName){   
    let songName = document.getElementById(musicName)
    startSong(songName)      

    progressBar(`progress-${musicName}`, songName, `play-${musicName}`)   

    playPause(`play-${musicName}`, songName)    
}

function startSong(music){
  
    if (!music.play()){
        return music.play()        
    }else{
        return music.pause()        
    }
}

function progressBar(inputName, songName, iconName){
   
     let progressBar = document.getElementById(inputName)
       
    if (songName.play()) {
       setInterval(() => {
        progressBar.value = songName.currentTime;
        }, 500);
   }
   console.log(progressBar, "progress")
    progressBar.onchange = function () {
        songName.play();
        songName.currentTime = progressBar.value;        
        playPause(iconName, songName)       
    }
    
}

function playPause(iconName, musicName) {
    let playIcon = document.getElementById(iconName)    

    if (playIcon.classList.contains("fa-pause")) {
        musicName.pause()        
       
        playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play");
    }
    else {        
        musicName.play()
        playIcon.classList.add("fa-pause");
        playIcon.classList.remove("fa-play");
    }
}