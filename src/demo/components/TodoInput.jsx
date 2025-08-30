import { useState } from 'react';

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="textBox"
        type="text"
        placeholder="할 일 입력!!"
        value={text}
        onChange={(evt) => setText(evt.target.value)}
      />
      <button type="submit">추가!</button>
    </form>
  );
}
