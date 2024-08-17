let audio = null;


document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('stop').addEventListener('click', function(){
        stopFunc(audio);
    });

    //Country
    document.getElementById('country').addEventListener('click', function(){
        radioStation('https://country.stream.laut.fm/country');
    });
    document.getElementById('country2').addEventListener('click', function(){
        radioStation('http://bayshore-ais.leanstream.co/CFDCFM-MP3');
    });



    //Hip Hop
    document.getElementById('hhs').addEventListener('click', function(){
        radioStation('http://stream.rtlradio.de/rnb/mp3-192/');
    });
    document.getElementById('UBhh').addEventListener('click', function(){
        radioStation('http://hydra.cdnstream.com/1537_128');
    });
    document.getElementById('UBhhrb').addEventListener('click', function(){
        radioStation('http://hydra.cdnstream.com/1536_128');
    });

    //Miscellaneous
    document.getElementById('chris').addEventListener('click', function(){
        radioStation('https://christmasradio.christmasradiogroup.com/');
    });
    document.getElementById('classical').addEventListener('click', function(){
        radioStation('https://stream1.cprnetwork.org/cpr2_lo');
    });





});

function radioStation(choice) {
    let station = choice;

    //In the case of switching to new station during listening
    stopFunc(audio);


    
    audio = new Audio(station); 
    audio.play();

}

function stopFunc(audio){
    if(audio != null){
        audio.pause();
        audio = null; //reset audio back to null
    }

    return audio;
}