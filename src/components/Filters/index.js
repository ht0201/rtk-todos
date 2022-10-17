import { Col, Input, Radio, Row, Select, Tag, Typography } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  prioritiesFilterChange,
  searchFilterChange,
  statusFilterChange,
} from "./filtersSilce";

const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch();
  const [enteredSearch, setEnteredSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedPriorities, setSelectedPriorities] = useState([]);

  const searchInputChange = (e) => {
    setEnteredSearch(e.target.value);
    dispatch(searchFilterChange(e.target.value));
  };

  const statusSelectChange = (e) => {
    setSelectedStatus(e.target.value);
    dispatch(statusFilterChange(e.target.value));
  };

  const prioritiesSelectChange = (value) => {
    setSelectedPriorities(value);
    dispatch(prioritiesFilterChange(value));
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          onChange={searchInputChange}
          value={enteredSearch}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group
          onChange={statusSelectChange}
          defaultValue={selectedStatus}
        >
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          value={selectedPriorities}
          onChange={prioritiesSelectChange}
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
      </Col>
    </Row>
  );
}
