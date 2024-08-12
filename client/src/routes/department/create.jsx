import {Button, Form, Input, InputNumber, message, Modal} from "antd";
import {useEffect, useRef, useState} from "react";
import {api} from "../../../../shared/connect/connect_api.js";
import Index from './index.jsx'

function Create(props){

    const [formData, setFormData] = useState({
        id : '',
        name : ''
    })

    const handleCancel =() => {
        props.handleCancel();
    }
    const handleOk = () => {

        try {
            api.post('/department/create', formData).then((data) => {
                if (data.data.statusCreate === 'Success'){
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
                afterClose={() => {}}
                mask={true}
                maskClosable={false}
                title="Thêm phòng ban"
                open={props.open}
                onOk={handleOk}
                destroyOnClose={true}
                onCancel={props.handleCancel}
                footer={[
                    <Button key="back" type={'default'} onClick={handleCancel}>
                        Hủy
                    </Button>,
                    <Button key="submit" type={'primary'} onClick={handleOk}>
                        Thêm
                    </Button>,
                ]}
            >
                <Form
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
                    >
                        <Input
                            name={'id'}/>
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
                    >
                        <Input name={'name'}/>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default Create;
