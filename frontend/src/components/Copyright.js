import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Example = (props) => {
  return (
    <ListGroup>
      <ListGroupItem disabled tag="a" href="#">Carmour 2020 <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /></ListGroupItem>
    </ListGroup>
  );
}

export default Example;
