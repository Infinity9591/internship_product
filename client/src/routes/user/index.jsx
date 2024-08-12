import {useEffect, useState} from "react";
import {api} from "../../../../shared/connect/connect_api.js";
import {Button, Col, Layout, Row, Space, Table, theme} from "antd";
import Create from "./create.jsx";
import Delete from "./delete.jsx";
import Update from "./update.jsx";

const {Content, Sider} = Layout;

function Index() {
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [idRecord, setIdRecord] = useState();

    const [dataUsers, setDataUsers] = useState([]);
    const [dataAccounts, setDataAccounts] = useState([]);
    const [dataDepartments, setDataDepartments] = useState([]);
    const [dataPositions, setDataUPositions] = useState([]);

    const [isUserRender, setIsUserRender] = useState(false)
    const [isAccountRender, setIsAccountRender] = useState(false)
    const [isDepartmentRender, setIsDepartmentRender] = useState(false)
    const [isPositionRender, setIsPositionRender] = useState(false)

    useEffect(() => {
        api.get('user').then(res => {
            setDataUsers(res.data);
            setIsUserRender(true);
        });
        api.get('account').then(res => {
            setDataAccounts(res.data);
            setIsAccountRender(true);
        });
        api.get('department').then(res => {
            setDataDepartments(res.data);
            setIsDepartmentRender(true);

        });
        api.get('position').then(res => {
            setDataUPositions(res.data);
            setIsPositionRender(true);
        });
    }, []);

    return (
        <>
            <Layout
                style={{
                    padding: '24px 0',
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
                <Sider
                    style={{
                        background: colorBgContainer,
                        borderRight: '1px solid black'
                    }}
                    width={300}
                >

                </Sider>
                <Content
                    style={{
                        padding: '0 24px',
                        minHeight: 400,
                    }}
                >
                    <Row>
                        <Col span={4}>
                            <Button onClick={() => {
                                showModal
                            }}>Thêm thông tin người dùng</Button>
                            <Create open={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}/>

                        </Col>
                    </Row>
                    <hr/>
                    <Table dataSource={dataUsers}
                           bordered
                           columns={[
                               {
                                   title: 'STT',
                                   dataIndex: 'index',
                                   key: 'index',
                                   width: '1%',
                                   render: (text, record, index) => index + 1,
                               },
                               {
                                   title: 'Mã',
                                   dataIndex: 'id',
                                   key: 'id',
                               }, {
                                   title: 'Họ và tên',
                                   dataIndex: 'name',
                                   key: 'name',
                               }, {
                                   title: 'Ngày sinh',
                                   dataIndex: 'birthday',
                                   key: 'birthday',
                                   render : (text, record, index) => (
                                       new Date(record.birthday).toLocaleDateString()
                                   )
                               }, {
                                   title: 'Email',
                                   dataIndex: 'email',
                                   key: 'email',
                               }, {
                                   title: 'Số điện thoại',
                                   dataIndex: 'phone_number',
                                   key: 'phone_number',
                               }, {
                                   title: 'Địa chỉ',
                                   dataIndex: 'address',
                                   key: 'address',
                               }, {
                                   title: 'Tài khoản',
                                   dataIndex: 'account_id',
                                   key: 'account_id',
                                   render : (text, record, index) => (
                                       (isAccountRender && true) && dataAccounts.filter(dataAccount => dataAccount.id === record.account_id)[0].username
                                   )
                               }, {
                                   title: 'Chức vụ',
                                   dataIndex: 'position',
                                   key: 'position',
                                   render : (text, record, index) => (
                                       (isUserRender===true && isAccountRender===true &&  isPositionRender===true) &&
                                        dataPositions.filter(
                                            dataPosition => dataPosition.id === dataAccounts.filter(
                                                dataAccount => dataAccount.id === record.account_id
                                            )[0].position_id
                                        )[0].name
                                   )
                               }, {
                                   title: 'Phòng ban',
                                   dataIndex: 'department',
                                   key: 'department',
                                   render : (text, record, index) => (
                                       (isUserRender===true && isAccountRender===true && isDepartmentRender===true ) &&
                                       dataDepartments.filter(
                                           dataDepartment => dataDepartment.id === dataAccounts.filter(
                                               dataAccount => dataAccount.id === record.account_id
                                           )[0].department_id
                                       )[0].name
                                   )
                               }, {
                                   title: 'Action',
                                   width: '5%',
                                   render: (text, record, index) => (
                                       <Space>
                                           <Button onClick={() => {}}>Detail</Button>
                                           <Button onClick={() => {}}>Edit</Button>
                                           <Button>Delete</Button>
                                       </Space>
                                   )
                               }
                           ]}/>
                    {/*</Form>*/}
                </Content>
            </Layout>
        </>
    )
}

export default Index;
