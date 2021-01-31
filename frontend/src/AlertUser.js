import Axios from 'axios';
import React from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';

class AlertUser extends React.Component{
    sendAlert = () => {
        axios.post('http://localhost:3001/api/sendAlert',{message: '7608519482'});
      };

    render(){
  return (
    <div>
      {/* <Button color="primary">primary</Button>{' '} */}
      <Button  color="primary" onClick={() => this.sendAlert()}>
        Send Alert
       </Button>
    </div>
  );
}

}

export default AlertUser;