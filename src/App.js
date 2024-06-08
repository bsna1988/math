import { useState } from 'react';
export function Exercise({ val1, val2, val3, onCorrect, onFail }) {
  const [value, setValue] = useState(null);
  function check(v1, v2, v3) {
    if (v1 + v2 + v3 == value) {
      onCorrect();
    } else {
      setValue('');
      onFail();
    }
  }

  const onChangeHandler = event => {
    setValue(event.target.value);
  };


  return (<>
    <div className="board-row">
      <button className="number">{val1}</button>
      <button className="number">+</button>
      <button className="number">{val2}</button>
      <button className="number">+</button>
      <button className="number">{val3}</button>
      <button className="number" >=</button>
      <input type="number" className="number answer" value={value} onChange={onChangeHandler}
      ></input>
      <button className="verify" onClick={() => check(val1, val2, val3)}>Verrifier?</button>
    </div>
  </>)
}

export default function Exercises() {
  const [logo, setLogo] = useState('img/question.png');
  function onCorrect(logo) {
    setLogo("img/" + logo + ".png");
  }
  return (
    <div className="game">
      <div className="game-board">
        <Exercise val1={1} val2={2} val3={3} onCorrect={() => onCorrect('mercedes')} onFail={() => setLogo("img/question.png")} />
        <Exercise val1={2} val2={4} val3={6} onCorrect={() => onCorrect('bmw')} onFail={() => setLogo("img/question.png")} />
        <Exercise val1={5} val2={9} val3={10} onCorrect={() => onCorrect('lexus')} onFail={() => setLogo("img/question.png")} />
        <Exercise val1={7} val2={9} val3={9} onCorrect={() => onCorrect('ford')} onFail={() => setLogo("img/question.png")} />
        <Exercise val1={8} val2={8} val3={8} onCorrect={() => onCorrect('nissan')} onFail={() => setLogo("img/question.png")} />
        <Exercise val1={6} val2={7} val3={8} onCorrect={() => onCorrect('kia')} onFail={() => setLogo("img/question.png")} />
        <Exercise val1={5} val2={9} val3={7} onCorrect={() => onCorrect('tesla')} onFail={() => setLogo("img/question.png")} />
        <Exercise val1={8} val2={9} val3={11} onCorrect={() => onCorrect('honda')} onFail={() => setLogo("img/question.png")} />
        <Exercise val1={4} val2={8} val3={6} onCorrect={() => onCorrect('renault')} onFail={() => setLogo("img/question.png")} />
      </div>
      <div className="game-info">
        <img src={logo} className='logo' />
      </div>
    </div>
  )
}
