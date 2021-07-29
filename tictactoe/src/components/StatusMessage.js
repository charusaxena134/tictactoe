import React from 'react'

const StatusMessage = ({winner, current}) => {
  const noMoveLeft = current.board.every(el => el !== null) 
  return (
     <h2>
       {winner && `winner is ${winner}`}
       {!winner && 
         !noMoveLeft && 
         `Next player is ${current.isXNext ? 'X' : 'O'}` 
       }
       {!winner && noMoveLeft && 'X and 0 tied'}
     </h2>
  );
};

export default StatusMessage;
