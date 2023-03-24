// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract mintNFTs is ERC721 {
    constructor() ERC721("MyNFT", "NFT") {}

    function createNFTs(address[] memory _recipients, uint256[] memory _tokenIds) public {
        require(_recipients.length == _tokenIds.length, "Mismatched array length");
        
        for (uint i = 0; i < _recipients.length; i++) {
            _mint(_recipients[i], _tokenIds[i]);
        }
    }
}
