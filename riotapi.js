fetch('https://eun1.api.riotgames.com/lol/league/v4/entries/by-summoner/RVGV3pAEtENQnrICxsPZv4Zf-gu9Yn0IAN-BaUBKYMTlvHs?api_key=RGAPI-ca872421-08d9-477f-a9ff-fa0b8121c9c8')
    .then((response) => {
        response.json().then((data) => {
            var mainentry = document.querySelector('.jswinrate')
            var a = document.createElement('p');
            var b = document.createElement('p');
            var c = document.createElement('p');
            var numberofgames = data[0].wins + data[0].losses;
            var calculation = data[0].wins / numberofgames * 100;
            var winratio = calculation.toFixed(2) + "%";
            a.innerText = data[0].wins;
            b.innerText = data[0].losses;
            c.innerText = winratio;

            mainentry.append(a, b, c); 
        });
    })

    .catch((error) => { console.log(error);
});

fetch('https://eun1.api.riotgames.com/lol/league/v4/entries/by-summoner/rq0vBEDIg80JVpKr8AHjs8TzAqcXcAz497qWQG01xK55tR8?api_key=RGAPI-ca872421-08d9-477f-a9ff-fa0b8121c9c8')
.then((response) => {
    response.json().then((data) => {
        var mainentry = document.querySelector('.jswinrate2')
        var a = document.createElement('p');
        var b = document.createElement('p');
        var c = document.createElement('p');
        var numberofgames = data[0].wins + data[0].losses;
        var calculation = data[0].wins / numberofgames * 100;
        var winratio = calculation.toFixed(2) + "%";
        a.innerText = data[0].wins;
        b.innerText = data[0].losses;
        c.innerText = winratio;

        mainentry.append(a, b, c); 
    });
})

.catch((error) => { console.log(error);
});

fetch('https://eun1.api.riotgames.com/lol/summoner/v4/summoners/RVGV3pAEtENQnrICxsPZv4Zf-gu9Yn0IAN-BaUBKYMTlvHs?api_key=RGAPI-ca872421-08d9-477f-a9ff-fa0b8121c9c8')
    .then((response) => {
        response.json().then((data) => {
            var summonerlvl = data.summonerLevel;
            var summonername = data.name;
            var summonericon = data.profileIconId;
            
            var cName = document.createElement('h3');
            var cLvl = document.createElement('p');

            var picturehtml = document.querySelector('.summoner-icon');
            var picturelink = 'https://ddragon.leagueoflegends.com/cdn/13.4.1/img/profileicon/' + summonericon + '.png';
            var pictureimg = document.createElement("img");
            pictureimg.src = picturelink;
            
            picturehtml.append(pictureimg);

            cName.innerText = summonername;
            cLvl.innerText = summonerlvl;
        })
    })