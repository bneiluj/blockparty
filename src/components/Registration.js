import React from 'react';

class Registration extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <div className='container' class='foo'>
          <ConferenceDetail
            eventEmitter={this.props.eventEmitter}
            getDetail={this.props.getDetail}
            web3={web3}
            contract={this.props.contract}
            web3={this.props.web3}
          />
          <Participants
            eventEmitter={this.props.eventEmitter}
            getDetail={this.props.getDetail}
            getParticipants={this.props.getParticipants}
            getAccounts={this.props.getAccounts}
            action={this.props.action}
            web3={this.props.web3}
          />
        </div>

        <FormInput
          read_only={read_only}
          eventEmitter={eventEmitter}
          getAccounts={getAccounts}
          getDetail={getDetail}
          action={action}
        />
      </div>
    )
  }
}
export default Registration;
