import React from "react";

const TodoList: React.FC<{ item: string }> = (prop) => {
  return <li>{prop.item}</li>;
};

export default TodoList;
