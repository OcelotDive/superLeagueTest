import React, {useState} from 'react';


const Button = () => {

/*const remove = (e) => {
    e.target.parentNode.removeChild(e.target);
}*/
let [active, setActive] = useState(false);
let [count, setCount] = useState(0);

const changeText = (e) => {
    e.target.innerHTML= "changed";
    e.target.style.background = "yellow";
    let header = document.getElementsByTagName('h5');
    if(!active) {
    header[0].innerHTML = "button clicked double like";
    setActive(!active);
    }
    else {
        setActive(!active);
        header[0].innerHTML = "react testing library";
    }
}

const handleSingleClick = (e) => {
    setCount(count + 1);

    if(count >= 3) {
        e.target.style.background = "red";
    }
}


    return (
        <div>
         {active && <label>sign in</label>}
        <button role="submit" onDoubleClick={changeText} onClick={handleSingleClick}>test this button</button>
        {count % 2 !== 0 && <div>count = 1</div>}
        </div>
    )
}


export default Button;