import {Button, Form, Input, Modal, Popconfirm} from "antd";
import {api} from "../../../../shared/connect/connect_api.js";
import {useRef} from "react";

function Delete(props){

    const handleCancel = () => {
        props.handleCancel();
    }

    const handleOk = () => {
        try {
            api.post('/department/delete', {id : props.data}).then(data => {
                if (data.data.statusDelete === 'Success'){
                    props.handleOk();
                }
            })
        } catch (e) {

        }
    }

    return (
        <>
            <Modal
                title="Xóa phòng ban?"
                maskClosable={false}
                open={props.open}
                onOk={handleOk}
                destroyOnClose={true}
                onCancel={props.handleCancel}
                footer={[
                    <Button key="back" type={'default'} onClick={handleCancel}>
                        Hủy
                    </Button>,
                    <Button key="submit" type={'primary'} onClick={handleOk}>
                        Xóa
                    </Button>,
                ]}
            >
            </Modal>
        </>
    )
}

export default Delete;

