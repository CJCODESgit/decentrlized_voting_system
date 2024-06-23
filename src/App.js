import React from 'react'
import {ethers} from 'ethers';
import { useState,useEffect } from 'react';
import Login from './Components/Login'; 
import Connected from './Components/Connected';
import {ContractAddress,ContractABI } from './Constant/constant.js';
import Voter from './Components/Voter';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [account, setaccount] = useState(null);
  const [IsConnected, setIsConnected] = useState(false);
  const [number, setnumber] = useState('');
  const [candidateslist, setcandidateslist] = useState([]);
  const [CanVote, setCanVote] = useState(false);
  const [voters, setvoters] = useState([]);
  useEffect(() => {
    getallcandidates();
    canvote();
    getvoters();
    

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
    }

    return() => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      }
    }
  })
  function handleAccountsChanged(accounts) {
    if (accounts.length > 0 && account !== accounts[0]) {
      setaccount(accounts[0]);
      
    } else {
      setIsConnected(false);
      setaccount(null);
      canvote();
    }
  }
  async function vote() {
      
        const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      
      const contractInstance = new ethers.Contract (
        ContractAddress, ContractABI, signer
      );
      

      const tx = await contractInstance.Vote(number);
      await tx.wait();
      canvote();
     
      
        
      
  }
  async function getallcandidates(){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
      //await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      
      const contractInstance = new ethers.Contract (
        ContractAddress, ContractABI, signer
      );
      const candidates = await contractInstance.getallcandidates();
      const Strcandidates = candidates.map(( candidate,index) => {
         return {
          
          index:index,
          name:candidate.name,
          votecount:candidate.votecount.toNumber(),

         }
         
      })
      setcandidateslist(Strcandidates);
      
      
      
  }

  async function canvote() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
      //await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      
      const contractInstance = new ethers.Contract (
        ContractAddress, ContractABI, signer
      );
      const votingstatus = await contractInstance.VotingStatus(await signer.getAddress());
      
      setCanVote(votingstatus)
  }

  async function getvoters(){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
      //await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      
      const contractInstance = new ethers.Contract (
        ContractAddress, ContractABI, signer
      );
      const voter = await contractInstance.getvoters();
      setvoters(voter);
      
  }

  async function ConnectWallet() {
    if (window.ethereum){
       try{
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const address =  await signer.getAddress();
        setaccount(address)
        setIsConnected(true);
       } catch(err){
        console.error(err)
       }
    }else{
      console.error("please install metamask")
    }

  }
  async function handlingnumber(e){
          setnumber(e.target.value );
  }
  
  return (
    <>
    <div>
      {
        (!IsConnected ? <Login ConnectWallet = {ConnectWallet}
             /> :<Connected accounts = {account}
                            givevote = {vote}
                            number= {number}
                            handlingnumber= {handlingnumber}
                            candidates ={candidateslist}
                            status = {CanVote}
                            voter = {voters}
                            
                            
                            />)
      }
      
      
   
      
    </div>
   
    
    </>
  )
}
//#6731d4
//#cdb6fc

export default App