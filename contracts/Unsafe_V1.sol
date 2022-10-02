// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract UnsafeV1 is Initializable {
    
    uint public constant MY_CONSTANT = 111;
    /// @custom:oz-upgrades-unsafe-allow state-variable-immutable
    uint public immutable MY_IMMUTABLE;

    address public owner;
    uint public val;
    uint public start;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor(uint _x) {
        MY_IMMUTABLE = _x;
    }

    function initialize(uint _val) external initializer {
        owner = msg.sender;
        val = _val;
        start = block.timestamp;
    }

    // Unsafe - selfdesctruct
    function kill() external {
         selfdestruct(payable(address(0)));
    }




}