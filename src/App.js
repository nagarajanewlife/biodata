import react, { useState } from "react";
import { Form, Input, InputNumber, Button, PageHeader, Select } from "antd";

import { Row, Col } from "antd";
import Profile from "./Profile";
import "./App.css";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const { Option } = Select;
const ldata = {
  countries: [
    { name: "USA", states: [{ name: "C", cities: ["Downers Grove"] }] },

    {
      name: "India",
      states: [
        { name: "TamilNadu", cities: ["Tenkasi", "Chennai", "Tirnelveli"] },
        {
          name: "Kerala",
          cities: ["Kozhikode", "Kochi", "Thiruvananthapuram"],
        },
      ],
    },
  ],
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};
function App() {
  const [biovalue, setBiovalue] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedState, setSelectedState] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const availableState = ldata.countries.find(
    (c) => c.name === selectedCountry
  );
  const availableCities = availableState?.states?.find(
    (s) => s.name === selectedState
  );

  const onEdit = (val) => {
    console.log("Edit Value", val);
  };
  const onDelete = (val) => {
    console.log("delete Value", val);
  };
  const onFinish = (values) => {
    setBiovalue([...biovalue, values]);

    console.log("biovalue", biovalue);
  };

  return (
    <Row>
      <Col span={12}>
        <PageHeader> Bio Data </PageHeader>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[
              {
                type: "email",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={["user", "Country"]}
            label="Country"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <select
              onChange={(e) => setSelectedCountry(e.target.value)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <option>--Choose Country--</option>
              {ldata.countries.map((value, key) => {
                return (
                  <option value={value.name} key={key}>
                    {value.name}
                  </option>
                );
              })}
            </select>
          </Form.Item>
          <Form.Item
            name={["user", "State"]}
            label="State"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <select
              showSearch
              placeholder="Select a State"
              optionFilterProp="children"
              onChange={(e) => setSelectedState(e.target.value)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <option>--Choose State--</option>
              {availableState?.states.map((e, key) => {
                return (
                  <option value={e.name} key={key}>
                    {e.name}
                  </option>
                );
              })}
            </select>
          </Form.Item>
          <Form.Item
            name={["user", "City"]}
            label="City"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <select
              showSearch
              placeholder="Select a State"
              optionFilterProp="children"
              onChange={(e) => setSelectedCity(e.target.value)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <option>--Choose City--</option>
              {availableCities?.cities.map((e, key) => {
                return (
                  <option value={e.name} key={key}>
                    {e}
                  </option>
                );
              })}
            </select>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col span={12}>
        {biovalue.length !== 0 && (
          <Profile values={biovalue} onEdit={onEdit} onDelete={onDelete} />
        )}
      </Col>
    </Row>
  );
}

export default App;
