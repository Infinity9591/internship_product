import {Button, Form, Input, Modal} from "antd";
import {api} from "../../../../shared/connect/connect_api.js";
import {useEffect, useState} from "react";

const {useForm} = Form;

function Update(props){

    const [form] = useForm();

    const [formData, setFormData] = useState({
       id : '',
       name : ''
    });

    const [dataDepartments, setDataDepartments] = useState([]);

    useEffect(() => {
        api.get('department').then(res => {
            setDataDepartments(res.data)
        })
    }, []);

    const handleCancel = () => {
        console.log(props.data)
        props.handleCancel();
    }

    const handleOk = () => {
        try {
            api.post('/department/update', {id : props.data[0].id, data : formData}).then(data => {
                if (data.data.statusUpdate === 'Success'){
                    props.handleOk();
                }
            })
        } catch (e) {

        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <>
            <Modal
                maskClosable={false}
                title="Sửa thông tin phòng ban"
                open={props.open}
                onOk={handleOk}
                destroyOnClose={true}
                onCancel={props.handleCancel}
                footer={[
                    <Button key="back" type={'default'} onClick={handleCancel}>
                        Hủy
                    </Button>,
                    <Button key="submit" type={'primary'} onClick={handleOk}>
                        Sửa
                    </Button>,
                ]}
            >
                <Form
                    form={form}
                    labelCol={8}
                    wrapperCol={16}
                    clearOnDestroy={true}
                    size={'small'}
                >
                    <Form.Item
                        label="Mã phòng ban"
                        name="id"
                        rules={[
                            {
                                required: true,
                                message: 'Require',
                            },
                        ]}
                        onChange={(e) => handleInputChange(e)}
                        initialValue={props.open && props.data[0].id}
                    >
                        <Input
                            name={'id'} disabled={true}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Tên phòng ban"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Require',
                            },
                        ]}
                        onChange={(e) => handleInputChange(e)}
                        initialValue={props.open && props.data[0].name}
                    >
                        <Input name={'name'}/>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export  default  Update;
