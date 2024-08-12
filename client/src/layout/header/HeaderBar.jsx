import {Layout, Menu} from "antd";
import logo from '../../assets/download-removebg-preview.png'
import {Link, useParams} from "react-router-dom";
import './HeaderBar.css';
import {useEffect, useRef} from "react";

const {Header} = Layout;

const items = [
    {
        key : 1,
        label : 'Công việc',
        path : '/work'
    },
    {
        key : 2,
        label : 'Phòng ban',
        path : '/department'
    },
    {
        key : 3,
        label : 'Nhân viên',
        path : '/user'
    },
    {
        key : 4,
        label : 'Quản lý tài khoản',
        path : '/account'
    },
    {
        key : 5,
        label : 'Phân quyền',
        path : '/permission'
    },
]

function HeaderBar(props){

    // useEffect(() => {
    //     console.log(props.slug)
    // }, [props.slug]);

    const itemKey = items
        .filter(item => item.path === '/' + props.slug)
        .map(item => item.key)[0]

    return (
        <>
            <Header
                style={{ display: 'flex',
                alignItems: 'center',
                top:0,
                left:0,
                right:0,
                backgroundColor : '#3ede6e',
                width:'100%'
            }}
            >
                <img src={logo} alt={'logo google'} style={{
                    width:'150px'
                }}/>
                <Menu
                    theme={'light'}
                    mode={'horizontal'}
                    defaultSelectedKeys={[itemKey.toString()]}
                    style={{
                        flex: 1,
                        minWidth: 0,
                        backgroundColor:'inherit'
                    }}
                >
                    {
                        items.map(item => (
                            <Menu.Item key={item.key}>
                                <Link to={item.path} >{item.label}</Link>
                            </Menu.Item>
                        ))
                    }
                </Menu>
            </Header>
        </>
    )
}

export default HeaderBar;
