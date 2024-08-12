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

    const [dataDepartments, setDataDepartments] = useState([]);

    const [dataCountAccounts, setDataCountAccounts] = useState([]);

    const [idRecord, setIdRecord] = useState();

    const [isRender, setIsRender] = useState(false);

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

    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
    const showDeleteModal = () => {
        setIsModalDeleteOpen(true);
    };
    const handleDeleteOk = () => {
        setIsModalDeleteOpen(false);
    };
    const handleDeleteCancel = () => {
        setIsModalDeleteOpen(false);
    };

    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const showUpdateModal = () => {
        setIsModalUpdateOpen(true);
    };
    const handleUpdateOk = () => {
        setIsModalUpdateOpen(false);
    };
    const handleUpdateCancel = () => {
        setIsModalUpdateOpen(false);
    };

    useEffect(() => {
        api.get('department').then(res => {
            setDataDepartments(res.data);
        })
        api.get('account').then(res => {
            setDataCountAccounts(res.data);
            setIsRender(true)
        })
    }, [isModalOpen, isModalDeleteOpen, isModalUpdateOpen]);

    // const [form] = Form.useForm();

    return (
        <>
            <Layout
                style={{
                    padding: '24px 0',
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
                <Content
                    style={{
                        padding: '0 24px',
                        minHeight: 280,
                    }}
                >
                    <Row>
                        <Col span={4}>
                            <Button onClick={showModal}>Thêm phòng ban</Button>
                            <Create open={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}/>
                        </Col>
                    </Row>
                    <hr/>
                    <Table dataSource={dataDepartments}
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
                                   editable: true,
                               }, {
                                   title: 'Phòng ban',
                                   dataIndex: 'name',
                                   editable: true,
                               },
                               {
                                   title: 'Số lượng',
                                   dataIndex: 'count',
                                   width: '15%',
                                   render: (text, record, index) => (
                                        isRender && dataCountAccounts.length !== 0 && dataCountAccounts.filter(data => data.department_id === record.id).length
                                   )
                               }, {
                                   title: 'Action',
                                   width: '5%',
                                   render: (text, record, index) => (
                                       <Space>
                                           <Button onClick={() => {
                                               showUpdateModal();
                                               setIdRecord(record.id);
                                           }}>Edit</Button>
                                           <Button onClick={() => {
                                               showDeleteModal();
                                               setIdRecord(record.id);
                                           }}>Delete</Button>
                                       </Space>
                                   )
                               }
                           ]}/>
                </Content>
            </Layout>
            <Update open={isModalUpdateOpen} handleOk={handleUpdateOk} handleCancel={handleUpdateCancel}
                    data={dataDepartments.filter(data => data.id === idRecord)}/>
            <Delete open={isModalDeleteOpen} handleOk={handleDeleteOk} handleCancel={handleDeleteCancel}
                    data={idRecord}/>

        </>
    )
}

export default Index;
