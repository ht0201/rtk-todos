import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../Todo";
import { todosRemaningSelector } from "../../redux/selectors";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "./todosSlice";

export default function TodoList() {
  const dispatch = useDispatch();
  const [enteredTodo, setEnteredTodo] = useState("");
  const [priority, setPriority] = useState("");

  const todoList = useSelector(todosRemaningSelector);

  const addTodoHandler = () => {
    const newTodo = {
      id: uuidv4(),
      name: enteredTodo,
      completed: false,
      priority,
    };
    dispatch(addTodo(newTodo));
    setEnteredTodo("");
  };

  const todoChangeHandler = (e) => {
    setEnteredTodo(e.target.value);
  };

  const priorityChangeHandler = (value) => {
    setPriority(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            priority={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={enteredTodo} onChange={todoChangeHandler} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={priorityChangeHandler}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={addTodoHandler}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
