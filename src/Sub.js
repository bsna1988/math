import { useState } from 'react';
export function Exercise({ val1, val2, onCorrect, onFail }) {
  const [value, setValue] = useState(null);
  function check(v1, v2) {
    if (v1 - v2 == value) {
      onCorrect();
    } else {
      setValue('null');
      onFail();
    }
  }

  const onChangeHandler = event => {
    setValue(event.target.value);
  };


  return (<>
    <div className="board-row">
      <button className="number">{val1}</button>
      <button className="number">-</button>
      <button className="number">{val2}</button>
      <button className="number" >=</button>
      <input type="number" className="number answer" value={value} onChange={onChangeHandler}
      ></input>
      <button className="verify" onClick={() => check(val1, val2)}>Verrifier?</button>
    </div>
  </>)
}

export default function Exercises() {
  const [logo, setLogo] = useState('/img/question.png');
  function onCorrect(logo) {
    setLogo("/img/" + logo + ".png");
  }

  function setDefaultLogo() {
    setLogo("/img/bakugan.png");
  }
  return (
    <div className="game">
      <div className="game-board">
        <Exercise val1={18} val2={3} onCorrect={() => onCorrect('drago')} onFail={setDefaultLogo} />
        <Exercise val1={19} val2={4} onCorrect={() => onCorrect('pharol')} onFail={setDefaultLogo} />
        <Exercise val1={15} val2={5} onCorrect={() => onCorrect('trox')} onFail={setDefaultLogo} />
        <Exercise val1={14} val2={4} onCorrect={() => onCorrect('nillious')} onFail={setDefaultLogo} />
        <Exercise val1={17} val2={3} onCorrect={() => onCorrect('spartillion')} onFail={setDefaultLogo} />
      </div>
      <div className="game-info">
        <img src={`${process.env.PUBLIC_URL}${logo}`} className='logo' />
      </div>
    </div>
  )
}
