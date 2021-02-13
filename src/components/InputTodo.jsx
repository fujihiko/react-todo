import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disable } = props;

  const style = {
    backgroundColor: "#c1ffff",
    width: "400px",
    height: "30px",
    borderRadius: "8px",
    padding: "8px",
    margin: "8px"
  };

  return (
    <div style={style} className="input-area">
      <input
        type="text"
        disable={disable}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disable={disable} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
