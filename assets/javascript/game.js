var character = function(id, name, pwr, source){
    this.id = id;
    this.name = name;
    this.pwr = pwr;
    this.source = source;
};
var players=[];
var heroChoose = 0;
function fight()
{
    $("#first").hide();
    $("#second").hide();
    $("#third").show();
    $("#attack").show();

    $(".hFight_name").text(players[0].name);
    $(".hFight_img").attr("src", players[0].source);
    $(".hFight_pwr").text(players[0].pwr);

    $(".vFight_name").text(players[1].name);
    $(".vFight_img").attr("src", players[1].source);
    $(".vFight_pwr").text(players[1].pwr);
    console.log(players[1].source)

}
function heroClicked(hero)
{
    if(heroChoose === 0){
        var c1 = new character();
        c1.id=hero;
        c1.name=$(hero).attr("alt");
        c1.pwr=$(hero).find(".card-text").text();
        c1.source=$(hero).children("img").attr("src");
        heroChoose++;
        $("#second").show();
        players.push(c1);

        console.log(players);
    }
}
function enemyClicked(enemy){
    if(heroChoose === 1)
    {
        var c2 = new character();
        c2.id=enemy;
        c2.name=$(enemy).attr("alt");
        c2.pwr=$(enemy).find(".card-text").text();
        c2.source=$(enemy).children("img").attr("src");
        heroChoose ++;
        players.push(c2);

        console.log(players);
        fight();
    }
}
function ifClicked(event)
{
    var clickedElement = event.target.alt;
    //console.log(clickedElement);

    if(clickedElement === "9")
    {
        $("#10").hide();
        $("#11").hide();
        $("#12").hide();
        heroClicked("#9");
    }
    else if(clickedElement === "10")
    {
        $("#9").hide();
        $("#11").hide();
        $("#12").hide();
        heroClicked("#10");
    }
    else if(clickedElement === "11")
    {
        $("#9").hide();
        $("#10").hide();
        $("#12").hide();
        heroClicked("#11");
    }
    else if(clickedElement === "12")
    {
        $("#9").hide();
        $("#10").hide();
        $("#11").hide();
        heroClicked("#12");
    }
    else if(clickedElement === "angel")
    {
        $("#cyberman").hide();
        $("#dalek").hide();
        $("#master").hide();
        $("#missy").hide();
        $("#silence").hide();
        enemyClicked("#angel");
    }
    else if(clickedElement === "cyberman")
    {
        $("#angel").hide();
        $("#dalek").hide();
        $("#master").hide();
        $("#missy").hide();
        $("#silence").hide();
        enemyClicked("#cyberman");
    }
    else if(clickedElement === "dalek")
    {
        $("#angel").hide();
        $("#cyberman").hide();
        $("#master").hide();
        $("#missy").hide();
        $("#silence").hide();
        enemyClicked("#dalek");
    }
    else if(clickedElement === "master")
    {
        $("#angel").hide();
        $("#cyberman").hide();
        $("#dalek").hide();
        $("#missy").hide();
        $("#silence").hide();
        enemyClicked("#master");
    }
    else if(clickedElement === "missy")
    {
        $("#angel").hide();
        $("#cyberman").hide();
        $("#dalek").hide();
        $("#master").hide();
        $("#silence").hide();
        enemyClicked("#missy");
    }
    else if(clickedElement === "silence")
    {
        $("#angel").hide();
        $("#cyberman").hide();
        $("#dalek").hide();
        $("#master").hide();
        $("#missy").hide();
        enemyClicked("#silence");
    }

}
function startGame()
{
    $("#second").hide();
    $("#third").hide();
    $("#attack").hide();
}
$(document).ready(function()
{
    startGame();
    $(document).on("click", ifClicked);

});