// SPDX-License-Identifier: MIT

pragma solidity ^0.8.3;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./Role/Operator.sol";

contract TotemEliteNFT is Ownable, ERC721, Operator {
    
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor(string memory _name, string memory _symbol) 
        ERC721(
            _name, 
            _symbol
        ) 
    {}

    function addOperator(address account) public onlyOwner {
        _addOperator(account);
    }

    function removeOperator(address account) public onlyOwner {
        _removeOperator(account);
    }

    function mintToCaller(address caller, string memory tokenURI) 
        public onlyOperator
        returns (uint256)
    {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(caller, newItemId);
        //_setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
    // tokenURI points to a JSON file that conforms to the "ERC721 Metadata JSON Schema".
}