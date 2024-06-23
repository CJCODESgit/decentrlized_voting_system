// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Candidates{
        string name;
        uint votecount;
    }
    Candidates[] public Allcandidates;
    constructor(string[] memory _candidates) {
           for(uint i=0 ; i<_candidates.length ; i++){
            Allcandidates.push(Candidates({
                name : _candidates[i],
                votecount:0
            }));
           }
    }
    mapping(address => bool) public VotingStatus;
    address[] public Voters;
    function Vote(uint _index) public{
        require( _index < Allcandidates.length ,"please enter valid index");
        require(VotingStatus[msg.sender] == false ,"you have already voted");
        Allcandidates[_index].votecount++ ;
        VotingStatus[msg.sender] = true;
        Voters.push(msg.sender);

    }
    function getallcandidates() public view returns(  Candidates[] memory ){
        return Allcandidates;
    }
    function getvoters() public view returns(  address[] memory){
        return Voters;
    }
}
