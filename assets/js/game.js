var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log (playerName, playerHealth, playerAttack);

if (playerHealth === 10) {
    console.log("This will not run. ");
}
else {
    console.log("This will run instead. ");
};

var enemy1 = "Roborto";
var enemy2 = "Amy Android";
var enemy3 = "Robo Trumble";
var enemyNames = ["Roborto","Amy Android","Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 10; 

//create function
var fight = function (enemyName) {
    window.alert ("Welcome to Robot Gladiators!");

    var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. ")
if (promptFight === "fight" || promptFight === "FIGHT") {
    
    enemyHealth = enemyHealth - playerAttack;
 console.log(
    playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining. ")

    playerHealth = playerHealth - enemyAttack; 
console.log(
    playerName + " attacked " + enemyName + ". " + playerName + " now has" + playerHealth + " health remaining."
)

if (enemyHealth <= 0){
    window.alert(enemyName + " has died!");
}
else {
    window.alert(enemyName + " still has" + enemyHealth + " health left. ");
}

if (playerHealth <= 0) {
    window.alert(playerName + " has died! ");
}
else {
    window.alert(playerName + " still has" + playerHealth + " health left." );
}
} else if (promptFight === "skip" || promptFight === "SKIP") {
    window.alert (playerName + " has chosen to skip the fight!");
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight.Goodbye!");
        playerMoney = playerMoney - 2;
    }
    else {
        fight();
    }
} else {
    window.alert ("You need to chosse a valid option. Try again!")
};


};

for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
