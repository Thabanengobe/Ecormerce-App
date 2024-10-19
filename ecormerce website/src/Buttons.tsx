
//The export keyword alows this function to acccesable to other files
// The deafult keyword tells those function that this is main function in this fiile
// you use fragments to wrap multiple adjacent jsx elements
// A react component aloows you to write reusable code avoiding duplicated code
//All react components start with capital letter
//To remember things react components use the useState function
// A sate is private to the component that defines it
import { useState } from "react";

function Sqaure({value, onSqaureClick}:{value:string, onSqaureClick:any}): any {
  // To add Typescript in JSX use curly braces
  return <button className="btn" onClick={onSqaureClick}> {value} </button>
}

function findWinner(moves:string[]){
  const winningMoves = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 4, 8], [2, 4, 6],[0, 3, 6],
    [1, 4, 7], [2, 5, 8]
  ];

  winningMoves.forEach((win)=>{
    if(moves[win[0]] === moves[win[1]] && moves[win[1]] === moves[win[2]] && moves[win[2]] !== ''){
      return true;
    }
  });
  return false;
}

export default function Board(){
  
  const [sqaures, setSqaures] = useState(Array(9).fill(''));
  let [move, setMove] = useState(0);

  function handleClick(i:number){
    const nextMove = sqaures.slice();
    if(move%2 == 0) {
      nextMove[i] = 'X';
    }
    else {
      nextMove[i] = 'O';
    }
    // lets react know the state of the component has changed
    //This will triger react to re render all components that the sqaure state and it's child
    if(findWinner(nextMove)==true){
      alert('Theres a winner');
    }else{

      setSqaures(nextMove);
      setMove(move+1);
    }
  }

  return (
    <div className="tic-tac-toe">
      <Sqaure  value={sqaures[0]} onSqaureClick={()=>handleClick(0)}/>
      <Sqaure  value={sqaures[1]} onSqaureClick={()=>handleClick(1)}/>
      <Sqaure  value={sqaures[2]} onSqaureClick={()=>handleClick(2)}/>
      <Sqaure  value={sqaures[3]} onSqaureClick={()=>handleClick(3)}/>
      <Sqaure  value={sqaures[4]} onSqaureClick={()=>handleClick(4)}/>
      <Sqaure  value={sqaures[5]} onSqaureClick={()=>handleClick(5)}/>
      <Sqaure  value={sqaures[6]} onSqaureClick={()=>handleClick(6)}/>
      <Sqaure  value={sqaures[7]} onSqaureClick={()=>handleClick(7)}/>
      <Sqaure  value={sqaures[8]} onSqaureClick={()=>handleClick(8)}/>
    
    </div>
  );
}
