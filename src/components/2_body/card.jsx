import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {connect} from 'react-redux';

const Cards = (props) => {
  
  const handleClick = ()=>{
    props.dispatch({      
      type:"order",
      item:props.item
    })
  }

    return(
        <Card className="card" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={"images/" + props.item.images + ".jpg"} />
          <Card.Body>
          <Card.Title>{props.item.name}</Card.Title>
          <Card.Text>{props.item.quantity}</Card.Text>
          <Button 
            variant="primary"
            onClick={handleClick}
          >
            주문하기
          </Button>
          </Card.Body>
        </Card>
    );
};

const method =(state)=>{ // Store에 있던 state를 쓰기 위해 함수를 만들어야 한다.
  return {   
    state : state.reducer,
  };
}
export default connect(method)(Cards);
