var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
//create function
var fight = function() {
  window.alert("Welcome to Robot Gladiators!");
};
// execute function
fight();

enemyHealth = enemyHealth - playerAttack;

console.log(
    playerName +" attacked " + enemyName + " . " + enemyName + " now has" + enemyHealth + " health remaining."
)

if (enemyHealth <= 0){
    window.alert(enemyName + " has died!");
}

else {
    window.alert(enemyName + " still has" + enemyHealth + " health left.");
}

console.log(enemyName + "attached" + playerName + ". " + playerName + " Now has" + playerHealth + " health remaining.");

// check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
}

else {
    window.alert(playerName + " still has" + playerHealth + " health left. ");
}