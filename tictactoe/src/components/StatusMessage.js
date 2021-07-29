import React from 'react'

const StatusMessage = ({winner, current}) => {
  const noMoveLeft = current.board.every(el => el !== null) 
  return (
     <div className = "status-mesaage">
       {winner && 
       <>
         Winner is {' '}
         <span className ={winner === 'X' ? 'text-green' : 'text-orange'}>
           {winner}
       </span>
       </>
       }
       {!winner && !noMoveLeft && 
         <>
           Next player is {' '}
           <span className = {current.isXNext ? 'text-green' : 'text-orange'}>
             {current.isXNext ? 'X' : 'O'}{' '}
           </span>
         </>
       }
       {!winner && noMoveLeft && <>
         <span className = "text-green">X</span> <span class = "text-orange">O</span> tied
       </>
       }
     </div>
  );
};

export default StatusMessage;
