import React from "react";

const TodoList: React.FC<{ text: string }> = (prop) => {
  return <li>{prop.text}</li>;
};

export default TodoList;
