//define data array
var tableData = [
{name:alexWhiteRa.name, singlesWins:alexWhiteRa.singlesWins, singlesLosses:alexWhiteRa.singlesLoss, multiWins:alexWhiteRa.multiWins, multiLosses:alexWhiteRa.multiLoss, overallWinrate:alexWhiteRa.overallWinrate, totalMatches:alexWhiteRa.totalMatches, brand:alexWhiteRa.brand,totalPinned:alexWhiteRa.multiPinned},
{name:alexanderNevsky.name, singlesWins:alexanderNevsky.singlesWins, singlesLosses:alexanderNevsky.singlesLoss, multiWins:alexanderNevsky.multiWins, multiLosses:alexanderNevsky.multiLoss, overallWinrate:alexanderNevsky.overallWinrate, totalMatches:alexanderNevsky.totalMatches, brand:alexanderNevsky.brand, totalPinned:alexanderNevsky.multiPinned},
{name:amouranth.name, singlesWins:amouranth.singlesWins, singlesLosses:amouranth.singlesLoss, multiWins:amouranth.multiWins, multiLosses:amouranth.multiLoss, overallWinrate:amouranth.overallWinrate, totalMatches:amouranth.totalMatches, brand:amouranth.brand, totalPinned:amouranth.multiPinned},
{name:arina_gp.name, singlesWins:arina_gp.singlesWins, singlesLosses:arina_gp.singlesLoss, multiWins:arina_gp.multiWins, multiLosses:arina_gp.multiLoss, overallWinrate:arina_gp.overallWinrate, totalMatches:arina_gp.totalMatches, brand:arina_gp.brand, totalPinned:arina_gp.multiPinned},
{name:balabama.name, singlesWins:balabama.singlesWins, singlesLosses:balabama.singlesLoss, multiWins:balabama.multiWins, multiLosses:balabama.multiLoss, overallWinrate:balabama.overallWinrate, totalMatches:balabama.totalMatches, brand:balabama.brand, totalPinned:balabama.multiPinned},
{name:bigF.name, singlesWins:bigF.singlesWins, singlesLosses:bigF.singlesLoss, multiWins:bigF.multiWins, multiLosses:bigF.multiLoss, overallWinrate:bigF.overallWinrate, totalMatches:bigF.totalMatches, brand:bigF.brand, totalPinned:bigF.multiPinned},
{name:boogeyman.name, singlesWins:boogeyman.singlesWins, singlesLosses:boogeyman.singlesLoss, multiWins:boogeyman.multiWins, multiLosses:boogeyman.multiLoss, overallWinrate:boogeyman.overallWinrate, totalMatches:boogeyman.totalMatches, brand:boogeyman.brand, totalPinned:boogeyman.multiPinned},
{name:bratishkin.name, singlesWins:bratishkin.singlesWins, singlesLosses:bratishkin.singlesLoss, multiWins:bratishkin.multiWins, multiLosses:bratishkin.multiLoss, overallWinrate:bratishkin.overallWinrate, totalMatches:bratishkin.totalMatches, brand:bratishkin.brand, totalPinned:bratishkin.multiPinned},
{name:brotherKostya.name, singlesWins:brotherKostya.singlesWins, singlesLosses:brotherKostya.singlesLoss, multiWins:brotherKostya.multiWins, multiLosses:brotherKostya.multiLoss, overallWinrate:brotherKostya.overallWinrate, totalMatches:brotherKostya.totalMatches, brand:brotherKostya.brand, totalPinned:brotherKostya.multiPinned},
{name:brotherOleg.name, singlesWins:brotherOleg.singlesWins, singlesLosses:brotherOleg.singlesLoss, multiWins:brotherOleg.multiWins, multiLosses:brotherOleg.multiLoss, overallWinrate:brotherOleg.overallWinrate, totalMatches:brotherOleg.totalMatches, brand:brotherOleg.brand, totalPinned:brotherOleg.multiPinned},
{name:browjey.name, singlesWins:browjey.singlesWins, singlesLosses:browjey.singlesLoss, multiWins:browjey.multiWins, multiLosses:browjey.multiLoss, overallWinrate:browjey.overallWinrate, totalMatches:browjey.totalMatches, brand:browjey.brand, totalPinned:browjey.multiPinned},
{name:buster.name, singlesWins:buster.singlesWins, singlesLosses:buster.singlesLoss, multiWins:buster.multiWins, multiLosses:buster.multiLoss, overallWinrate:buster.overallWinrate, totalMatches:buster.totalMatches, brand:buster.brand, totalPinned:buster.multiPinned},
{name:cake.name, singlesWins:cake.singlesWins, singlesLosses:cake.singlesLoss, multiWins:cake.multiWins, multiLosses:cake.multiLoss, overallWinrate:cake.overallWinrate, totalMatches:cake.totalMatches, brand:cake.brand, totalPinned:cake.multiPinned},
{name:wlg.name, singlesWins:wlg.singlesWins, singlesLosses:wlg.singlesLoss, multiWins:wlg.multiWins, multiLosses:wlg.multiLoss, overallWinrate:wlg.overallWinrate, totalMatches:wlg.totalMatches, brand:wlg.brand, totalPinned:wlg.multiPinned},
{name:dread.name, singlesWins:dread.singlesWins, singlesLosses:dread.singlesLoss, multiWins:dread.multiWins, multiLosses:dread.multiLoss, overallWinrate:dread.overallWinrate, totalMatches:dread.totalMatches, brand:dread.brand, totalPinned:dread.multiPinned},
{name:faridysha.name, singlesWins:faridysha.singlesWins, singlesLosses:faridysha.singlesLoss, multiWins:faridysha.multiWins, multiLosses:faridysha.multiLoss, overallWinrate:faridysha.overallWinrate, totalMatches:faridysha.totalMatches, brand:faridysha.brand, totalPinned:faridysha.multiPinned},
{name:flashko.name, singlesWins:flashko.singlesWins, singlesLosses:flashko.singlesLoss, multiWins:flashko.multiWins, multiLosses:flashko.multiLoss, overallWinrate:flashko.overallWinrate, totalMatches:flashko.totalMatches, brand:flashko.brand, totalPinned:flashko.multiPinned},
{name:forsen.name, singlesWins:forsen.singlesWins, singlesLosses:forsen.singlesLoss, multiWins:forsen.multiWins, multiLosses:forsen.multiLoss, overallWinrate:forsen.overallWinrate, totalMatches:forsen.totalMatches, brand:forsen.brand, totalPinned:forsen.multiPinned},
{name:golovach.name, singlesWins:golovach.singlesWins, singlesLosses:golovach.singlesLoss, multiWins:golovach.multiWins, multiLosses:golovach.multiLoss, overallWinrate:golovach.overallWinrate, totalMatches:golovach.totalMatches, brand:golovach.brand, totalPinned:golovach.multiPinned},
{name:guitman.name, singlesWins:guitman.singlesWins, singlesLosses:guitman.singlesLoss, multiWins:guitman.multiWins, multiLosses:guitman.multiLoss, overallWinrate:guitman.overallWinrate, totalMatches:guitman.totalMatches, brand:guitman.brand, totalPinned:guitman.multiPinned},
{name:krabick.name, singlesWins:krabick.singlesWins, singlesLosses:krabick.singlesLoss, multiWins:krabick.multiWins, multiLosses:krabick.multiLoss, overallWinrate:krabick.overallWinrate, totalMatches:krabick.totalMatches, brand:krabick.brand, totalPinned:krabick.multiPinned},
{name:lasqa.name, singlesWins:lasqa.singlesWins, singlesLosses:lasqa.singlesLoss, multiWins:lasqa.multiWins, multiLosses:lasqa.multiLoss, overallWinrate:lasqa.overallWinrate, totalMatches:lasqa.totalMatches, brand:lasqa.brand, totalPinned:lasqa.multiPinned},
{name:romanovalera.name, singlesWins:romanovalera.singlesWins, singlesLosses:romanovalera.singlesLoss, multiWins:romanovalera.multiWins, multiLosses:romanovalera.multiLoss, overallWinrate:romanovalera.overallWinrate, totalMatches:romanovalera.totalMatches, brand:romanovalera.brand, totalPinned:romanovalera.multiPinned},
{name:lizon.name, singlesWins:lizon.singlesWins, singlesLosses:lizon.singlesLoss, multiWins:lizon.multiWins, multiLosses:lizon.multiLoss, overallWinrate:lizon.overallWinrate, totalMatches:lizon.totalMatches, brand:lizon.brand, totalPinned:lizon.multiPinned},
{name:maxgoodoq.name, singlesWins:maxgoodoq.singlesWins, singlesLosses:maxgoodoq.singlesLoss, multiWins:maxgoodoq.multiWins, multiLosses:maxgoodoq.multiLoss, overallWinrate:maxgoodoq.overallWinrate, totalMatches:maxgoodoq.totalMatches, brand:maxgoodoq.brand, totalPinned:maxgoodoq.multiPinned},
{name:melharucos.name, singlesWins:melharucos.singlesWins, singlesLosses:melharucos.singlesLoss, multiWins:melharucos.multiWins, multiLosses:melharucos.multiLoss, overallWinrate:melharucos.overallWinrate, totalMatches:melharucos.totalMatches, brand:melharucos.brand, totalPinned:melharucos.multiPinned},
{name:ilame.name, singlesWins:ilame.singlesWins, singlesLosses:ilame.singlesLoss, multiWins:ilame.multiWins, multiLosses:ilame.multiLoss, overallWinrate:ilame.overallWinrate, totalMatches:ilame.totalMatches, brand:ilame.brand, totalPinned:ilame.multiPinned},
{name:nuke.name, singlesWins:nuke.singlesWins, singlesLosses:nuke.singlesLoss, multiWins:nuke.multiWins, multiLosses:nuke.multiLoss, overallWinrate:nuke.overallWinrate, totalMatches:nuke.totalMatches, brand:nuke.brand, totalPinned:nuke.multiPinned},
{name:ramona.name, singlesWins:ramona.singlesWins, singlesLosses:ramona.singlesLoss, multiWins:ramona.multiWins, multiLosses:ramona.multiLoss, overallWinrate:ramona.overallWinrate, totalMatches:ramona.totalMatches, brand:ramona.brand, totalPinned:ramona.multiPinned},
{name:roadhouse.name, singlesWins:roadhouse.singlesWins, singlesLosses:roadhouse.singlesLoss, multiWins:roadhouse.multiWins, multiLosses:roadhouse.multiLoss, overallWinrate:roadhouse.overallWinrate, totalMatches:roadhouse.totalMatches, brand:roadhouse.brand, totalPinned:roadhouse.multiPinned},
{name:segall.name, singlesWins:segall.singlesWins, singlesLosses:segall.singlesLoss, multiWins:segall.multiWins, multiLosses:segall.multiLoss, overallWinrate:segall.overallWinrate, totalMatches:segall.totalMatches, brand:segall.brand, totalPinned:segall.multiPinned},
{name:silvername.name, singlesWins:silvername.singlesWins, singlesLosses:silvername.singlesLoss, multiWins:silvername.multiWins, multiLosses:silvername.multiLoss, overallWinrate:silvername.overallWinrate, totalMatches:silvername.totalMatches, brand:silvername.brand, totalPinned:silvername.multiPinned},
{name:sodapoppin.name, singlesWins:sodapoppin.singlesWins, singlesLosses:sodapoppin.singlesLoss, multiWins:sodapoppin.multiWins, multiLosses:sodapoppin.multiLoss, overallWinrate:sodapoppin.overallWinrate, totalMatches:sodapoppin.totalMatches, brand:sodapoppin.brand, totalPinned:sodapoppin.multiPinned},
{name:speedyKarmik.name, singlesWins:speedyKarmik.singlesWins, singlesLosses:speedyKarmik.singlesLoss, multiWins:speedyKarmik.multiWins, multiLosses:speedyKarmik.multiLoss, overallWinrate:speedyKarmik.overallWinrate, totalMatches:speedyKarmik.totalMatches, brand:speedyKarmik.brand, totalPinned:speedyKarmik.multiPinned},
{name:uncleBjorn.name, singlesWins:uncleBjorn.singlesWins, singlesLosses:uncleBjorn.singlesLoss, multiWins:uncleBjorn.multiWins, multiLosses:uncleBjorn.multiLoss, overallWinrate:uncleBjorn.overallWinrate, totalMatches:uncleBjorn.totalMatches, brand:uncleBjorn.brand, totalPinned:uncleBjorn.multiPinned},
{name:usachman.name, singlesWins:usachman.singlesWins, singlesLosses:usachman.singlesLoss, multiWins:usachman.multiWins, multiLosses:usachman.multiLoss, overallWinrate:usachman.overallWinrate, totalMatches:usachman.totalMatches, brand:usachman.brand, totalPinned:usachman.multiPinned},
{name:uselessmouth.name, singlesWins:uselessmouth.singlesWins, singlesLosses:uselessmouth.singlesLoss, multiWins:uselessmouth.multiWins, multiLosses:uselessmouth.multiLoss, overallWinrate:uselessmouth.overallWinrate, totalMatches:uselessmouth.totalMatches, brand:uselessmouth.brand, totalPinned:uselessmouth.multiPinned},
{name:vanDarkholme.name, singlesWins:vanDarkholme.singlesWins, singlesLosses:vanDarkholme.singlesLoss, multiWins:vanDarkholme.multiWins, multiLosses:vanDarkholme.multiLoss, overallWinrate:vanDarkholme.overallWinrate, totalMatches:vanDarkholme.totalMatches, brand:vanDarkholme.brand, totalPinned:vanDarkholme.multiPinned},
{name:voodoosh.name, singlesWins:voodoosh.singlesWins, singlesLosses:voodoosh.singlesLoss, multiWins:voodoosh.multiWins, multiLosses:voodoosh.multiLoss, overallWinrate:voodoosh.overallWinrate, totalMatches:voodoosh.totalMatches, brand:voodoosh.brand, totalPinned:voodoosh.multiPinned},
{name:xqc.name, singlesWins:xqc.singlesWins, singlesLosses:xqc.singlesLoss, multiWins:xqc.multiWins, multiLosses:xqc.multiLoss, overallWinrate:xqc.overallWinrate, totalMatches:xqc.totalMatches, brand:xqc.brand, totalPinned:xqc.multiPinned},
{name:pistoletov.name, singlesWins:pistoletov.singlesWins, singlesLosses:pistoletov.singlesLoss, multiWins:pistoletov.multiWins, multiLosses:pistoletov.multiLoss, overallWinrate:pistoletov.overallWinrate, totalMatches:pistoletov.totalMatches, brand:pistoletov.brand, totalPinned:pistoletov.multiPinned},
{name:alinarin.name, singlesWins:alinarin.singlesWins, singlesLosses:alinarin.singlesLoss, multiWins:alinarin.multiWins, multiLosses:alinarin.multiLoss, overallWinrate:alinarin.overallWinrate, totalMatches:alinarin.totalMatches, brand:alinarin.brand, totalPinned:alinarin.multiPinned},
{name:logvinov.name, singlesWins:logvinov.singlesWins, singlesLosses:logvinov.singlesLoss, multiWins:logvinov.multiWins, multiLosses:logvinov.multiLoss, overallWinrate:logvinov.overallWinrate, totalMatches:logvinov.totalMatches, brand:logvinov.brand, totalPinned:logvinov.multiPinned},
{name:arrowwoods.name, singlesWins:arrowwoods.singlesWins, singlesLosses:arrowwoods.singlesLoss, multiWins:arrowwoods.multiWins, multiLosses:arrowwoods.multiLoss, overallWinrate:arrowwoods.overallWinrate, totalMatches:arrowwoods.totalMatches, brand:arrowwoods.brand, totalPinned:arrowwoods.multiPinned},
{name:drDisrespect.name, singlesWins:drDisrespect.singlesWins, singlesLosses:drDisrespect.singlesLoss, multiWins:drDisrespect.multiWins, multiLosses:drDisrespect.multiLoss, overallWinrate:drDisrespect.overallWinrate, totalMatches:drDisrespect.totalMatches, brand:drDisrespect.brand, totalPinned:drDisrespect.multiPinned},
{name:papich.name, singlesWins:papich.singlesWins, singlesLosses:papich.singlesLoss, multiWins:papich.multiWins, multiLosses:papich.multiLoss, overallWinrate:papich.overallWinrate, totalMatches:papich.totalMatches, brand:papich.brand, totalPinned:papich.multiPinned},
{name:valakas.name, singlesWins:valakas.singlesWins, singlesLosses:valakas.singlesLoss, multiWins:valakas.multiWins, multiLosses:valakas.multiLoss, overallWinrate:valakas.overallWinrate, totalMatches:valakas.totalMatches, brand:valakas.brand, totalPinned:valakas.multiPinned},
{name:hovansky.name, singlesWins:hovansky.singlesWins, singlesLosses:hovansky.singlesLoss, multiWins:hovansky.multiWins, multiLosses:hovansky.multiLoss, overallWinrate:hovansky.overallWinrate, totalMatches:hovansky.totalMatches, brand:hovansky.brand, totalPinned:hovansky.multiPinned},
{name:karina.name, singlesWins:karina.singlesWins, singlesLosses:karina.singlesLoss, multiWins:karina.multiWins, multiLosses:karina.multiLoss, overallWinrate:karina.overallWinrate, totalMatches:karina.totalMatches, brand:karina.brand, totalPinned:karina.multiPinned},
{name:kuzma.name, singlesWins:kuzma.singlesWins, singlesLosses:kuzma.singlesLoss, multiWins:kuzma.multiWins, multiLosses:kuzma.multiLoss, overallWinrate:kuzma.overallWinrate, totalMatches:kuzma.totalMatches, brand:kuzma.brand, totalPinned:kuzma.multiPinned},
{name:mira.name, singlesWins:mira.singlesWins, singlesLosses:mira.singlesLoss, multiWins:mira.multiWins, multiLosses:mira.multiLoss, overallWinrate:mira.overallWinrate, totalMatches:mira.totalMatches, brand:mira.brand, totalPinned:mira.multiPinned},
{name:mobster.name, singlesWins:mobster.singlesWins, singlesLosses:mobster.singlesLoss, multiWins:mobster.multiWins, multiLosses:mobster.multiLoss, overallWinrate:mobster.overallWinrate, totalMatches:mobster.totalMatches, brand:mobster.brand, totalPinned:mobster.multiPinned},
{name:nastjaDD.name, singlesWins:nastjaDD.singlesWins, singlesLosses:nastjaDD.singlesLoss, multiWins:nastjaDD.multiWins, multiLosses:nastjaDD.multiLoss, overallWinrate:nastjaDD.overallWinrate, totalMatches:nastjaDD.totalMatches, brand:nastjaDD.brand, totalPinned:nastjaDD.multiPinned},
{name:ozon.name, singlesWins:ozon.singlesWins, singlesLosses:ozon.singlesLoss, multiWins:ozon.multiWins, multiLosses:ozon.multiLoss, overallWinrate:ozon.overallWinrate, totalMatches:ozon.totalMatches, brand:ozon.brand, totalPinned:ozon.multiPinned},
{name:pahom.name, singlesWins:pahom.singlesWins, singlesLosses:pahom.singlesLoss, multiWins:pahom.multiWins, multiLosses:pahom.multiLoss, overallWinrate:pahom.overallWinrate, totalMatches:pahom.totalMatches, brand:pahom.brand, totalPinned:pahom.multiPinned},
{name:pierreDunn.name, singlesWins:pierreDunn.singlesWins, singlesLosses:pierreDunn.singlesLoss, multiWins:pierreDunn.multiWins, multiLosses:pierreDunn.multiLoss, overallWinrate:pierreDunn.overallWinrate, totalMatches:pierreDunn.totalMatches, brand:pierreDunn.brand, totalPinned:pierreDunn.multiPinned},
{name:pokimane.name, singlesWins:pokimane.singlesWins, singlesLosses:pokimane.singlesLoss, multiWins:pokimane.multiWins, multiLosses:pokimane.multiLoss, overallWinrate:pokimane.overallWinrate, totalMatches:pokimane.totalMatches, brand:pokimane.brand, totalPinned:pokimane.multiPinned},
{name:gosling.name, singlesWins:gosling.singlesWins, singlesLosses:gosling.singlesLoss, multiWins:gosling.multiWins, multiLosses:gosling.multiLoss, overallWinrate:gosling.overallWinrate, totalMatches:gosling.totalMatches, brand:gosling.brand, totalPinned:gosling.multiPinned},
{name:grafoyni.name, singlesWins:grafoyni.singlesWins, singlesLosses:grafoyni.singlesLoss, multiWins:grafoyni.multiWins, multiLosses:grafoyni.multiLoss, overallWinrate:grafoyni.overallWinrate, totalMatches:grafoyni.totalMatches, brand:grafoyni.brand, totalPinned:grafoyni.multiPinned},
{name:snailkick.name, singlesWins:snailkick.singlesWins, singlesLosses:snailkick.singlesLoss, multiWins:snailkick.multiWins, multiLosses:snailkick.multiLoss, overallWinrate:snailkick.overallWinrate, totalMatches:snailkick.totalMatches, brand:snailkick.brand, totalPinned:snailkick.multiPinned},
{name:sunboy.name, singlesWins:sunboy.singlesWins, singlesLosses:sunboy.singlesLoss, multiWins:sunboy.multiWins, multiLosses:sunboy.multiLoss, overallWinrate:sunboy.overallWinrate, totalMatches:sunboy.totalMatches, brand:sunboy.brand, totalPinned:sunboy.multiPinned},
{name:toddHoward.name, singlesWins:toddHoward.singlesWins, singlesLosses:toddHoward.singlesLoss, multiWins:toddHoward.multiWins, multiLosses:toddHoward.multiLoss, overallWinrate:toddHoward.overallWinrate, totalMatches:toddHoward.totalMatches, brand:toddHoward.brand, totalPinned:toddHoward.multiPinned},
{name:julik.name, singlesWins:julik.singlesWins, singlesLosses:julik.singlesLoss, multiWins:julik.multiWins, multiLosses:julik.multiLoss, overallWinrate:julik.overallWinrate, totalMatches:julik.totalMatches, brand:julik.brand, totalPinned:julik.multiPinned},
{name:vanomas.name, singlesWins:vanomas.singlesWins, singlesLosses:vanomas.singlesLoss, multiWins:vanomas.multiWins, multiLosses:vanomas.multiLoss, overallWinrate:vanomas.overallWinrate, totalMatches:vanomas.totalMatches, brand:vanomas.brand, totalPinned:vanomas.multiPinned},
{name:zuev.name, singlesWins:zuev.singlesWins, singlesLosses:zuev.singlesLoss, multiWins:zuev.multiWins, multiLosses:zuev.multiLoss, overallWinrate:zuev.overallWinrate, totalMatches:zuev.totalMatches, brand:zuev.brand, totalPinned:zuev.multiPinned},
{name:vjlink.name, singlesWins:vjlink.singlesWins, singlesLosses:vjlink.singlesLoss, multiWins:vjlink.multiWins, multiLosses:vjlink.multiLoss, overallWinrate:vjlink.overallWinrate, totalMatches:vjlink.totalMatches, brand:vjlink.brand, totalPinned:vjlink.multiPinned},
{name:wycc.name, singlesWins:wycc.singlesWins, singlesLosses:wycc.singlesLoss, multiWins:wycc.multiWins, multiLosses:wycc.multiLoss, overallWinrate:wycc.overallWinrate, totalMatches:wycc.totalMatches, brand:wycc.brand, totalPinned:wycc.multiPinned},
{name:zanuda.name, singlesWins:zanuda.singlesWins, singlesLosses:zanuda.singlesLoss, multiWins:zanuda.multiWins, multiLosses:zanuda.multiLoss, overallWinrate:zanuda.overallWinrate, totalMatches:zanuda.totalMatches, brand:zanuda.brand, totalPinned:zanuda.multiPinned},
{name:nvy.name, singlesWins:nvy.singlesWins, singlesLosses:nvy.singlesLoss, multiWins:nvy.multiWins, multiLosses:nvy.multiLoss, overallWinrate:nvy.overallWinrate, totalMatches:nvy.totalMatches, brand:nvy.brand, totalPinned:nvy.multiPinned},
];

var table = new Tabulator("#playerData", {
    layout:"fitDataFill",
    responsiveLayout:"collapse",
persistence:false,
data:tableData,
    columnHeaderVertAlign:"bottom", //align header contents to bottom of cell
groupBy:"brand",
    columns:[
        {title:"Имя", field:"name", width:200,
formatter:function(cell, formatterParams){
      var value = cell.getValue();
        if(value.indexOf("Vision") > 0){
            return "<span style='color:#000; font-weight:bold;'>" + value + "</span>";
        }else{
            return "<span style='color:#000; font-weight:bold;'>" + value + "</span>";
        }
    }},
        {//create column group
            title:"Личный зачёт (1 на 1)",
            columns:[
            {title:"Победа", field:"singlesWins", hozAlign:"center", sorter:"number", width:108},
            {title:"Поражение", field:"singlesLosses", sorter:"number", hozAlign:"center", width:140},
            ],
        },
        {//create column group
            title:"Личный зачёт (Многосторонний)",
            columns:[
            {title:"Победа", field:"multiWins",hozAlign:"center", width:108},
            {title:"Поражение", field:"multiLosses",hozAlign:"center", width:140},
            {title:"Удержан", field:"totalPinned",hozAlign:"center", width:120},
            ],
        },
        {title:"Общий винрейт", field:"overallWinrate",hozAlign:"center", width:170},
        {title:"Количество матчей", field:"totalMatches",hozAlign:"center", width:200},
    ],
});