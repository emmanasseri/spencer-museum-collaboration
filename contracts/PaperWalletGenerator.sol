// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PaperWalletGenerator {
    function generateWallets() public view returns (bytes32[5] memory, address[5] memory) {
    bytes32[5] memory privateKeys;
    address[5] memory publicKeys;

    for (uint256 i = 0; i < 5; i++) {
        privateKeys[i] = keccak256(abi.encodePacked(msg.sender, block.timestamp, i));
        publicKeys[i] = address(bytes20(privateKeys[i]));
    }

    return (privateKeys, publicKeys);
}

}
