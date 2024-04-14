import React from "react";
import classes from "./TodoList.module.css";
import Todo from "../models/todo";
import { FaTimes } from "react-icons/fa";
import { AnimatePresence, motion, spring } from "framer-motion";

import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

// use the a custom type to specifyy the prop type]
const TodoList: React.FC<{
  text: string;
  deleteTodo: (id: string) => void;
  todo: Todo;
}> = (prop) => {
  const handleDelete = (id: any) => {
    prop.deleteTodo(id);
  };

  // using context api here
  const todosCtx = useContext(TodosContext);
  return (
    <AnimatePresence>
      <motion.li
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={classes.item}
      >
        {prop.text}
        <motion.button
          className={classes.close}
          onClick={() => todosCtx.removeTodo(prop.todo.id)}
        >
          <FaTimes color='red' size={15} />
        </motion.button>
      </motion.li>
    </AnimatePresence>
  );
};

export default TodoList;
