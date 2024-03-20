import { useState } from 'react'
import './Count.css'


function Count() {

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(100); 
  const [count2, setCount2] = useState(100);
  const [count3, setCount3] = useState(0);

  const handleIncrease = () => {
    setCount3(prevCount => prevCount + 1);
  };

  const handleDecrease = () => {
    setCount3(prevCount => prevCount - 1);
  };

  return (
    
    <><div>
          <br></br>
          <button onClick={function () {
              setCount(count + 1);
          } }>Click me {count} </button>
      </div>
    
      {/* lets try to built an count increment and decrement with two different buttons separately */}
      <div>
              <br></br>
              <button onClick={function () {
                  setCount1(count1 + 2);
              } }>Click me to increase the count by 2 : {count1} </button>
          </div>
          <div>
              <br></br>
              <button onClick={function () {
                  setCount2(count2 - 2);
              } }>Click me to decrease the count by 2: {count2} </button>
          </div>
          
          {/* Now, let us try to built an count showing bar, in which both it can be incremented and decremented */}

          <div className="count_container">
            <br></br>
            <button className="count-button1" onClick={handleIncrease}>+</button>
            <p className="count-text">Count: {count3}</p>
            <button className="count-button2" onClick={handleDecrease}>-</button>
        </div> 
          </>
    
  )
}

export default Count