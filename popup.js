let audio = null;


document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('hhs').addEventListener('click', function(){
        radioStation('hhs');
    });

    document.getElementById('UBhh').addEventListener('click', function(){
        radioStation('UBhh');
    });

    document.getElementById('UBhhrb').addEventListener('click', function(){
        radioStation('UBhhrb');
    });


    document.getElementById('stop').addEventListener('click', function(){
        radioStation('stop');
    });





});

function radioStation(choice) {
    let station;

    if(choice == 'stop' && audio != null){ //audio is initialized
        audio.pause();
        audio = null; //reset audio back to null
    }

    else if(choice == 'UBhh') {
        station = 'http://hydra.cdnstream.com/1537_128';
    }

    else if(choice == 'UBhhrb') {
        station = 'http://hydra.cdnstream.com/1536_128';
    }


    else if(choice == 'hhs') {
        station = 'http://stream.rtlradio.de/rnb/mp3-192/';
    }


    if(!audio && station){
        audio = new Audio(station); 
        audio.play();
    }

}
