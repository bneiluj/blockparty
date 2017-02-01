// Css

import "./stylesheets/app.css";
import 'react-notifications/lib/notifications.css';

// External libs

import React from 'react';
import EventEmitter from 'event-emitter';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Web3 from 'web3';

// Material ui

import Avatar from 'material-ui/Avatar';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

// Internal libs

import Bounty from '../build/contracts/Bounty.sol.js';
import ConferenceDetail from './components/ConferenceDetail';
import FormInput from './components/FormInput';
import BountyInstruction from './components/BountyInstruction';
import Notification from './components/Notification';
import Instruction from './components/Instruction';
import Participants from './components/Participants';
import NetworkLabel from './components/NetworkLabel';
import Data from './components/Data';

// function setup(){
//   return new Promise(function(resolve,reject){
//     let provider;
//     let read_only = false;
//     let url = "http://localhost:8545";
//     // mist loading proposal https://gist.github.com/frozeman/fbc7465d0b0e6c1c4c23
//     if(typeof web3 !== 'undefined'){   // eg: If accessed via mist
//       provider = web3.currentProvider; // Keep provider info given from mist `web3` object
//       web3 = new Web3();                 // Re-instantiate `web3` using `Web3` from Dapp
//       resolve({web3, provider, read_only})
//     }else{
//       provider = new Web3.providers.HttpProvider(url);
//       let web3 = new Web3();             // Define and instantiate `web3` if accessed from web browser
//       $.get(url, function(res){
//         console.log('Success', res)
//         // the endpoint is active
//       }).fail(function(error){
//         console.log('Fail', error)
//         if(error.readyState == 4 && error.status == 400){
//           // the endpoint is active
//           console.log('Success')
//         }else{
//           console.log('The endspoint is not active. Falling back to read_only mode')
//           url = 'https://eth3.augur.net'
//           read_only = true
//         }
//       }).error(function(error){
//         console.log('Error', error)
//       }).always(function(){
//         console.log('url', url)
//         provider = new Web3.providers.HttpProvider(url);
//         let web3 = new Web3;             // Define and instantiate `web3` if accessed from web browser
//         console.log('Web3 is set', web3, provider)
//         resolve({web3, provider, read_only})
//       })
//     }
//   });
// }
//
window.onload = function() {
//   setup().then(({provider, web3, read_only}) => {
//     web3.setProvider(provider);
//     Conference.setProvider(provider);
//     Bounty.setProvider(provider);
//     const bounty = Bounty.deployed();
//
//     var contract = Conference.deployed();
//     Data[0].address = contract.address;
//     let metadata;
//     let contractAddress = document.baseURI.split('#')[1]
//     if (contractAddress && contractAddress.length == 42) {
//       contract = Conference.at(contractAddress);
//       metadata = Data.filter(function(d){
//         return d.address == contractAddress
//       })[0];
//     }else{
//       metadata = Data[0];
//     }
//     console.log('Data', Data);
//     window.contract = contract
//     window.web3 = web3
//     const eventEmitter = EventEmitter()
//
//     web3.version.getNetwork(function(err, network_id){
//       var obj;
//       switch (network_id) {
//         case '1':
//           obj = {
//             name: 'MAINNET',
//             etherscan_url: 'https://etherscan.io'
//           }
//           break;
//         case '3':
//           obj = {
//             name: 'TESTNET',
//             etherscan_url: 'https://testnet.etherscan.io'
//           }
//           break;
//         default:
//           obj = {
//             name: 'PRIVATE NET',
//             etherscan_url: null
//           }
//       }
//       eventEmitter.emit('network', obj);
//     })
//
//     function getBalance(address){
//       return new Promise(function(resolve,reject){
//         web3.eth.getBalance(address, function(err, result){
//           resolve(result)
//         })
//       });
//     }
//
//     // Functions to interact with contract
//     function getDetail(callback){
//       let values;
//       Promise.all(['name', 'deposit', 'payout', 'totalBalance', 'registered', 'attended', 'owner', 'ended', 'limitOfParticipants'].map(attributeName => {
//         return contract[attributeName].call();
//       })).then(_values => {
//         values = _values;
//         return getBalance(contract.address)
//       }).then(contractBalance => {
//         var detail = {
//           'name': values[0],
//           'deposit': values[1],
//           'payout': values[2],
//           'totalBalance': values[3],
//           'registered': values[4],
//           'attended': values[5],
//           'owner': values[6],
//           'ended': values[7],
//           'limitOfParticipants': values[8],
//           'contractBalance': web3.fromWei(contractBalance, "ether").toNumber(),
//           'date': metadata.date,
//           'map_url': metadata.map_url,
//           'location_text': metadata.location_text,
//           'description_text': metadata.description_text
//         }
//         if(detail.ended){
//           detail.canRegister = false
//           detail.canAttend = false
//           detail.canPayback = false
//           detail.canCancel = false
//         }else{
//           if(detail.registered.toNumber() > 0 ){
//             detail.canAttend = true
//           }
//
//           if(detail.registered.toNumber() > 0 && detail.attended.toNumber() > 0 && detail.payout.toNumber() > 0){
//             detail.canPayback = true
//           }
//           detail.canRegister = true
//           detail.canCancel = true
//         }
//         callback(detail);
//       })
//     }
//
//     function getParticipants(callback){
//       contract.registered.call().then(value => {
//         let participantsArray = []
//         for (var i = 1; i <= value.toNumber(); i++) {
//           participantsArray.push(i);
//         }
//         Promise.all(participantsArray.map(index => {
//           return contract.participantsIndex.call(index).then(address => {
//             return contract.participants.call(address);
//           })
//         })).then(function(participants){
//           return participants.map(participant => {
//             var object =  {
//               name: participant[0],
//               address: participant[1],
//               attended: participant[2],
//               payout: participant[3],
//               paid: participant[4]
//             }
//             return object
//           })
//         }).then(participant => { if(participant) callback(participant); })
//       })
//     }
//     var gas = 1000000;
//     window.gas = gas
//     window.eventEmitter = eventEmitter;
//     function action(name, address, argument) {
//       var options = {from:address, gas:window.gas}
//       eventEmitter.emit('notification', {status:'info', message:'Requested'});
//       if (name == "register") {
//         options.value = Math.pow(10,18)
//       }
//       contract[name](argument, options).then(function() {
//         getDetail(function(model){
//           eventEmitter.emit('change', model);
//           eventEmitter.emit('notification', {status:'success', message:'Successfully Updated'});
//         });
//       }).catch(function(e) {
//         eventEmitter.emit('notification', {status:'error', message:'Error has occored'});
//       });
//     }
//
//     function watchEvent(){
//       var event = contract.allEvents({fromBlock: 0, toBlock: 'latest'}).watch(function(error, result){
//         if (error) {
//           console.log("Error: " + error);
//         } else {
//           console.log('watchEvent result', result);
//         }
//       });
//     }
//
//     function getAccounts(callback){
//       if(read_only){
//         callback([])
//         return false;
//       }
//       console.log('this is not read only!')
//       web3.eth.getAccounts(function(err, accs) {
//         if (err != null) {
//           eventEmitter.emit('instruction')
//           return;
//         }
//         if (accs.length == 0) {
//           var message = "Couldn't get any accounts! Make sure your Ethereum client is configured correctly.";
//           eventEmitter.emit('notification', {status:'error', message:message});
//           return;
//         }
//         callback(accs);
//       })
//     }
//
//     let networkLabel = <NetworkLabel eventEmitter={eventEmitter} read_only={read_only} />;

    const App = (props) => (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <div>
            <Header></Header>
            {this.props.children}
          </div>
        </MuiThemeProvider>
      </div>
    );

    // <App
    //   getAccounts={getAccounts}
    //   getDetail={getDetail}
    //   eventEmitter={eventEmitter}
    //   action={action}
    //   getParticipants={getParticipants}
    //   web3={web3}
    //   contract={contract}
    // />

    const About = React.createClass({render:function(){
      console.log('About', this)
      return (
        <h1>about {this.props.route.foo}</h1>
      )}
    })

    injectTapEventPlugin();
    ReactDOM.render(
      <Router history={hashHistory} >
        <Route path="/" component={App}>
          <Route path="about" foo="FOO" component={About} />
          <Route path="about" foo="FOO" component={Registration} />
        </Route>
      </Router>
      ,
      document.getElementById('app')
    );
  // })
}
