var character = function(id, name, pwr, hp, source){
    this.id = id;
    this.name = name;
    this.pwr = pwr;
    this.hp = hp;
    this.source = source;
};
var players=[];
var heroChoose;
var enemyCount;
function fight()
{
    $("#first").hide();
    $("#second").hide();
    $("#third").show();
    $("#attack").show();

    $(".hFight_name").text(players[0].name);
    $(".hFight_img").attr("src", players[0].source);
    $(".hFight_hp").text(players[0].hp);
    $(".hFight_pwr").text(players[0].pwr);

    $(".vFight_name").text(players[1].name);
    $(".vFight_img").attr("src", players[1].source);
    $(".vFight_hp").text(players[1].hp);
    $(".vFight_pwr").text(players[1].pwr);
}
function heroClicked(hero)
{
    if(heroChoose === 0){
        var c1 = new character();
        c1.id=hero;
        c1.name=$(hero).attr("alt");
        c1.pwr=$(hero).find(".pwr").text();
        c1.hp=$(hero).find(".hp").text();
        c1.source=$(hero).children("img").attr("src");
        heroChoose++;
        $("#second").show();
        players.push(c1);

        console.log(players);
    }
}
function enemyClicked(enemy){
    enemyCount++;
    if(heroChoose === 1)
    {
        var c2 = new character();
        c2.id=enemy;
        c2.name=$(enemy).attr("alt");
        c2.pwr=$(enemy).find(".pwr").text();
        c2.hp=$(enemy).find(".hp").text();
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
function attack()
{
    players[0].hp = players[0].hp-players[1].pwr;
    players[1].hp = players[1].hp-players[0].pwr;
    players[0].pwr = (parseInt(players[0].pwr)*2).toString();

    $(".hFight_hp").text(players[0].hp);
    $(".vFight_hp").text(players[1].hp);
    $(".hFight_pwr").text(players[0].pwr);
    $("#after").show();
    $("#next").hide();
    if (players[0].hp <= 0)
    {
        $("#attack").hide();
        $("#result").text("You are defeated!");
    }
    else if(players[1].hp <= 0 && enemyCount < 6)
    {
        $("#attack").hide();
        $("#next").show();
        $("#result").text("Enemy is defeated!");
    }
    else if(players[1].hp <=0 && enemyCount >= 6) {
        $("#attack").hide();
        $("#result").text("You Win!!!");
    }
    console.log(enemyCount);
}
function startGame()
{
    $("#second").hide();
    $("#third").hide();
    $("#attack").hide();
    $("#after").hide();
    heroChoose = 0;
    enemyCount = 0;
}
$(document).ready(function()
{
    startGame();
    $(document).on("click", ifClicked);
    $("#attack").on("click", function(){
        attack();
    });
    $("#next").on("click", )
    $("#reset").on("click", function(){
        location.reload();
    })
});