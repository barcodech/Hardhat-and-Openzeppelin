
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "hardhat/console.sol";

contract Event {
    
    //event Log(address sender, string message);
    

    function test() public {
        console.log(msg.sender, "Hello World");
        console.log(msg.sender, "Good morning");

    }
}
