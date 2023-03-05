let result = await fetch('https://eun1.api.riotgames.com/lol/league/v4/entries/by-summoner/RVGV3pAEtENQnrICxsPZv4Zf-gu9Yn0IAN-BaUBKYMTlvHs?api_key=RGAPI-5b2ef854-fbf1-46a9-a63b-53d3b3b48d81');
let apiResponse = await result.json();

console.log(apiResponse)
document.getElementByClassName("apiResponse").innerHTML = json.stringify(apiResponse);