let myScore=0, systemScore=0;

let rock= document.getElementById("rock");
let paper= document.getElementById("paper");
let scissors= document.getElementById("scissors");
let showMyScore= document.getElementById("myScore");
let showSystemScore= document.getElementById("systemScore");
let gameStatus= document.getElementById("status");
let showMySelection= document.getElementById("mySelection");
let showSystemSelection= document.getElementById("systemSelection");





play = (mySelection,systemSelection) =>
{
    if(mySelection === systemSelection)
    {
        gameStatus.textContent="It's a draw !!!";
    }
    else if (mySelection === 'scissors')
    {
        if(systemSelection === 'paper')
        {
            myScore ++;
            gameStatus.textContent=`System loses,!!`;
        }
        else
        {
            systemScore ++;
            gameStatus.textContent=`System wins, !!`;
        }
    }
    else if (mySelection === 'rock')
    {
        if(systemSelection === 'scissors')
        {
            myScore ++;
            gameStatus.textContent=`System loses, !!`;
        }
        else
        {
            systemScore ++;
            gameStatus.textContent=`system wins,!!`;
        }
    }
    else if (mySelection === 'paper')
    {
        if(systemSelection === 'rock')
        {
            myScore ++;
            gameStatus.textContent=`system loses,!!`;
        }
        else
        {
            systemScore ++;
            gameStatus.textContent=`system wins, !!`;
        }
    }
}






random = () =>
{
    return (Math.floor(Math.random() *(3)));
}

let value=["rock","paper","scissors"];

//systemPlay() returns random value from array value[] using random function

systemPlay = () =>
{
    return value[random()];
}





rock.addEventListener("click",function(){
    let mySelection= "rock";
    showMySelection.textContent= mySelection;
    let systemSelection= systemPlay();
    showSystemSelection.textContent= systemSelection;
    play(mySelection,systemSelection);

    showMyScore.textContent= myScore;
    showSystemScore.textContent= systemScore;

});


paper.addEventListener("click",function(){
    let mySelection= "paper";
    showMySelection.textContent= mySelection;
    let systemSelection= systemPlay();
    showSystemSelection.textContent= systemSelection;
    play(mySelection,systemSelection);

    showMyScore.textContent= myScore;
    showSystemScore.textContent= systemScore;

});

scissors.addEventListener("click",function(){
    let mySelection= "scissors";
    showMySelection.textContent= mySelection;
    let systemSelection= systemPlay();
    showSystemSelection.textContent= systemSelection;
    play(mySelection,systemSelection);

    showMyScore.textContent= myScore;
    showSystemScore.textContent= systemScore;

});

