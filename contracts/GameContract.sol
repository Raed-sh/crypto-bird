// SPDX-License-Identifier: MIT
pragma solidity >=0.8.6 <0.9.0;

contract GameContract{
    
    string test = "Hello Raed";
    uint public playerCount = 0;
    uint public pot = 0;
    uint public gameEndTime;
    
    address payable public  dealer;
    
    Player[] public playersInGame;
    
    mapping(address => Player) public players;
    
    struct Player {
        address playerAddress;
        string firstName;
        uint createdTime;
        uint score;
    }
    
    constructor() {
        dealer = payable(address(msg.sender));
        gameEndTime = block.timestamp + 1800;
    }
    
    function addPlayer(string memory firstName) private {
        Player memory newPlayer = Player(msg.sender, firstName, block.timestamp,msg.value);
        players[msg.sender] = newPlayer;
        playersInGame.push(newPlayer);
    }
    
    function joinGame(string memory firstName) payable public{
        if(block.timestamp > gameEndTime){
            revert("This challenge has already ended");
        }
        if(block.timestamp < gameEndTime){
            require(msg.value == 25 ether, "The joining Fee is 25 ether");
            if (dealer.send(msg.value)){
                addPlayer(firstName);
                playerCount += 1;
                pot += 25;
            }
        }
        
    }
    
    function payOutWinners(address winner1,address winner2, address winner3) payable public {
        
        if(block.timestamp >= gameEndTime){
            require(msg.sender == dealer, " Only the dealer can pay out the winners.");
            require(msg.value == pot * (1 ether), "Value isn't enough");
            uint payoutPerWinner1 = msg.value * 60 /100;
            uint payoutPerWinner2 = msg.value * 20/100;
            uint payoutPerWinner3 = msg.value * 10/100;
        
            for (uint i=0;i<playersInGame.length;i++){
                address payable currentPlayerAddress = payable(address(playersInGame[i].playerAddress));
                
                if(currentPlayerAddress == winner1){
                    currentPlayerAddress.transfer(payoutPerWinner1);
                }
                if(currentPlayerAddress == winner2){
                    currentPlayerAddress.transfer(payoutPerWinner2);
                }
                if(currentPlayerAddress == winner3){
                    currentPlayerAddress.transfer(payoutPerWinner3);
                }
            }
        }
        
        
    }
    
    function getAddress() public view returns(string memory){
        return test;
    }
}