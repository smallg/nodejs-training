/**
 * Created by Administrator on 2014/8/6.
 */
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');

var app = express();
var server = http.createServer(app);

//app.use(bodyParser());
//app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(function (request, response, next) {
    console.log(request.url);

    if (request.get('Origin')) {
        response.set(
            {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT',
                'Access-Control-Allow-Headers': 'accept, origin, content-type',
                'Access-Control-Max-Age': 3600
            }
        );
    }
    if (request.method == 'OPTIONS') {
        response.status(200);
    } else {
        next();
    }
});
app.get('/gamePlayIframeService', function (request, response) {
    //http://192.168.101.60:7445/gamePlayIframeService?gameName=LuckyCherry&personAccountID=2529772408184832&orgUnitID=9&clnSessionID=null&ip=192.168.3.163&personID=1622159963234304&email=bhouse@ecwise.com&gamerName=admin&useHttps=false
    console.log("request gameName: "+request.query.gameName);
    var result = {
        startGameUrl: "http://192.168.101.60:7445/updateGameStatusService?status=start&gameUrlSessionId=3949&vendorID=2&playerID=2009819&personID=1622159963234304&personAccountID=2529772408184832&orgUnitID=9&clnSessionID=null",
        heartBeatUrl: "http://192.168.101.60:7445/heartBeatPostService?gamePlayID=3949",
        endGameUrl: "http://192.168.101.60:7445/updateGameStatusService?status=end&gameUrlSessionId=3949&vendorID=2&playerID=2009819&personID=1622159963234304&personAccountID=2529772408184832&orgUnitID=9&clnSessionID=null",
        clnSiteUrl: "http://192.168.101.64",
        isPopupTransferMessage: false,
        vendorID: "2",
        balance: "0",
        needToPollingTransferMark:false,
        pollingTransferMarkUrl:"http://192.168.101.60:7445/getTransferMark?personAccountID=2529772408184832&orgID=9",
        transferMarkPollingPeriod:"15000",
        debug:true,
        iframeSrc:"https://ecw.stg.games.cwgds.com/casino/ecwise/game/game.html?playerHandle=740000911295783005785184118924697320&account=USD&gameName=GenericSlots&gameType=11&gameId=17&lang=en"
    };
    response.status(200).json(result);
});

app.get('/test',function(request,response){
    response.status(200).json({test: "ok"});
});

server.listen(7445);
console.log('listening on port 7445');
