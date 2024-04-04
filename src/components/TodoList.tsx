import React from "react";

// use the a custom type to specifyy the prop type]
const TodoList: React.FC<{ text: string }> = (prop) => {
  return <li>{prop.text}</li>;
};

export default TodoList;
