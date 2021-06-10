import React from 'react';
import {Table} from 'react-bootstrap';
import {connect} from 'react-redux';

const Store = (props) => {
    return(
      <div>

      {/* TABLE */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>품명</th>
            <th>수량</th>
            <th>증가</th>
            <th>감소</th>
          </tr>
        </thead>

        <tbody>
          {
            props.state.map((item)=>{
              return(
                <tr>            
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td><button onClick={()=>{
                    props.dispatch({
                      id : item.id,
                      type:"add"
                    })
                  }}>+</button></td>
                  <td><button onClick={()=>{
                    props.dispatch({
                      id : item.id,
                      type:"sub"
                    })
                  }}>-</button></td>
                </tr>       
              );
            })
          }                 
        </tbody>
      </Table>

      {/* 알림창 */}
      {
        props.alert ? 
        (<div className="my-alert2">
          <p>지금 구매하시면 신규 할인 20%</p>
          <button onClick={()=>{
            props.dispatch({
              type:'close'
            })
          }}>닫기</button>
        </div> )
        : 
        <div></div>
      }
      </div>
    );
};

const method =(state)=>{ // Store에 있던 state를 쓰기 위해 함수를 만들어야 한다.
  return {
    state : state.reducer,
    alert : state.reducer2
  };
}

export default connect(method)(Store);