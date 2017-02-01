import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <AppBar titleStyle={{textAlign:'center', fontSize:'xx-large', fontFamily:'Lobster'}} style={{backgroundColor:"#607D8B"}}
          title={
            <span>Block Party<span style={{fontSize:'small', fontFamily:'sans-serif'}}> - NO BLOCK NO PARTY -</span></span>
          }
          iconElementLeft={<Avatar src={require('./images/nightclub-white.png')} size={50} backgroundColor="rgb(96, 125, 139)" />}
          iconElementRight={
            <span>
              {networkLabel}
              <FlatButton style={{color:'white'}} label="About" onClick={ () => {this.props.eventEmitter.emit('instruction')}} />
              <BountyInstruction
                eventEmitter={this.props.eventEmitter}
                bounty={this.props.bounty}
                getDetail={this.props.getDetail}
                getBalance={this.props.getBalance}
                web3={this.props.web3}
              />
            </span>
          }
        />

        <Instruction eventEmitter={this.props.eventEmitter} />
        <Notification eventEmitter={this.props.eventEmitter} />
      </div>
    )
  }

export default Header;
