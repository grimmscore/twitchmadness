//define data array
var tableData = [
//Танкисты
{name:dread.team, teamWins:dread.teamWins, teamLosses:dread.teamLoss, teamWinrate:dread.teamWinrate, teamTotalMatches:dread.teamTotalMatches, brand:dread.brand},

//Uzyashko
{name:flashko.team, teamWins:flashko.teamWins, teamLosses:flashko.teamLoss, multiWins:flashko.multiWins, multiLosses:flashko.multiLoss, teamWinrate:flashko.teamWinrate, teamTotalMatches:flashko.teamTotalMatches, brand:flashko.brand},

//Кардмен
{name:golovach.team, teamWins:golovach.teamWins, teamLosses:golovach.teamLoss, multiWins:golovach.multiWins, multiLosses:golovach.multiLoss, teamWinrate:golovach.teamWinrate, teamTotalMatches:golovach.teamTotalMatches, brand:golovach.brand},

//89 Freaks
{name:buster.team, teamWins:buster.teamWins, teamLosses:buster.teamLoss, multiWins:buster.multiWins, multiLosses:buster.multiLoss, teamWinrate:buster.teamWinrate, teamTotalMatches:buster.teamTotalMatches, brand:buster.brand},

//ARMA
{name:cake.team, teamWins:cake.teamWins, teamLosses:cake.teamLoss, multiWins:cake.multiWins, multiLosses:cake.multiLoss, teamWinrate:cake.teamWinrate, teamTotalMatches:cake.teamTotalMatches, brand:cake.brand},


//Success
{name:wlg.team, teamWins:wlg.teamWins, teamLosses:wlg.teamLoss, multiWins:wlg.multiWins, multiLosses:wlg.multiLoss, teamWinrate:wlg.teamWinrate, teamTotalMatches:wlg.teamTotalMatches, brand:wlg.brand},

//Pomoiniki
{name:lasqa.team, teamWins:lasqa.teamWins, teamLosses:lasqa.teamLoss, multiWins:lasqa.multiWins, multiLosses:lasqa.multiLoss, teamWinrate:lasqa.teamWinrate, teamTotalMatches:lasqa.teamTotalMatches, brand:lasqa.brand},

//WHOPG
{name:nvy.team, teamWins:nvy.teamWins, teamLosses:nvy.teamLoss, multiWins:nvy.multiWins, multiLosses:nvy.multiLoss, teamWinrate:nvy.teamWinrate, teamTotalMatches:nvy.teamTotalMatches, brand:nvy.brand},

//Perci v Bercah
{name:pistoletov.team, teamWins:pistoletov.teamWins, teamLosses:pistoletov.teamLoss, multiWins:pistoletov.multiWins, multiLosses:pistoletov.multiLoss, teamWinrate:pistoletov.teamWinrate, teamTotalMatches:pistoletov.teamTotalMatches, brand:pistoletov.brand},

//Gamer Industry
{name:logvinov.team, teamWins:logvinov.teamWins, teamLosses:logvinov.teamLoss, multiWins:logvinov.multiWins, multiLosses:logvinov.multiLoss, teamWinrate:logvinov.teamWinrate, teamTotalMatches:logvinov.teamTotalMatches, brand:logvinov.brand},

//Bosco Brothers
{name:hovansky.team, teamWins:hovansky.teamWins, teamLosses:hovansky.teamLoss, multiWins:hovansky.multiWins, multiLosses:hovansky.multiLoss, teamWinrate:hovansky.teamWinrate, teamTotalMatches:hovansky.teamTotalMatches, brand:hovansky.brand},

//Hangover
{name:kuzma.team, teamWins:kuzma.teamWins, teamLosses:kuzma.teamLoss, multiWins:kuzma.multiWins, multiLosses:kuzma.multiLoss, teamWinrate:kuzma.teamWinrate, teamTotalMatches:kuzma.teamTotalMatches, brand:kuzma.brand},

//Wycc Band
{name:wycc.team, teamWins:wycc.teamWins, teamLosses:wycc.teamLoss, multiWins:wycc.multiWins, multiLosses:wycc.multiLoss, teamWinrate:wycc.teamWinrate, teamTotalMatches:wycc.teamTotalMatches, brand:wycc.brand},


];

var table = new Tabulator("#teamData", {
    layout:"fitDataFill",
    responsiveLayout:"collapse",
persistence:false,
data:tableData,
    columnHeaderVertAlign:"bottom", //align header contents to bottom of cell
groupBy:"brand",
    columns:[
        {title:"Команда", field:"name", width:200,
formatter:function(cell, formatterParams){
      var value = cell.getValue();
        if(value.indexOf("Vision") > 0){
            return "<span style='color:#000; font-weight:bold;'>" + value + "</span>";
        }else{
            return "<span style='color:#000; font-weight:bold;'>" + value + "</span>";
        }
    }},
            {title:"Победа", field:"teamWins",hozAlign:"center", width:108},
            {title:"Поражение", field:"teamLosses",hozAlign:"center", width:140},
        {title:"Винрейт", field:"teamWinrate",hozAlign:"center", width:170},
        {title:"Количество матчей", field:"teamTotalMatches",hozAlign:"center", width:200},
    ],
});