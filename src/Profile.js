import react from "react";
import { Table, Tag, Space, PageHeader, Button } from "antd";

const Profile = ({ values, onEdit, onDelete }) => {
  const columns = [
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Country",
      dataIndex: "Country",
      key: "Country",
    },
    {
      title: "State",
      dataIndex: "State",
      key: "State",
    },
    {
      title: "City",
      dataIndex: "City",
      key: "City",
    },

    {
      title: "Action",
      key: "action",
      render: (index, record) => (
        <Space size="middle">
          <Button
            onClick={() => {
              onEdit(record);
            }}
          >
            Edit
          </Button>
          <Button
            onClick={() => {
              onDelete(index);
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <PageHeader> BIO Data </PageHeader>
      <Table
        columns={columns}
        dataSource={values.map((item) => {
          return {
            name: item.user.name,
            email: item.user.email,
            Country: item.user.Country,
            State: item.user.State,
            City: item.user.City,
          };
        })}
      />
    </>
  );
};
export default Profile;
