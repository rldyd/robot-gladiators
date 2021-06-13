// this creates a function named "fight"

function fight() {
    window.alert ("The FIGHT has begun !");
}

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;


// check to see if he value of the playerHealth variable is greater than 0 
if (playerHealth > 0)
{
    console.log("Your player is still alive!");
}
var playerAttack = 10;
var playerMoney = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot gladiators !");
    
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    //check enemy's health
    if (enemyHealth <= 0)
    {
        window.alert(enemyName + " has 0 HP!");
    }
    else 
    {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
    
    // Log a resulting message to the console so we know that it worked.
    console.log(enemyHealth + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose");
    //promptfight = promptFight.toLowerCase();

    if(promptFight === 'fight' || promptFight === 'FIGHT')
    {
       //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

        if (enemyHealth <= 0)
        {
            window.alert(enemyName + " has 0 HP!");
        }
        else
        {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyName + " attacekd " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        //check player's health
        if (playerHealth <= 0)
        {
            window.alert(playerName + " has 0 HP!");
        }
        else
        {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
    else if (promptFight === "skip" || promptFight === "SKIP")
    {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (trure), leave fight
        if (confirmSkip)
        {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");

            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        else
        {
            fight();
        }
    }
    else
    {
        window.alert("You need to choose a valid option. Try again!");
    }
}


fight();