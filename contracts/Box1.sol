// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract BoxV1 {
    uint public val;
 
    // constructor() {    
    // }
 
    function initialize(uint _val) external {
        val = _val;
    }
}
