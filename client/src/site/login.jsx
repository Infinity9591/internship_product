import {GoogleOutlined, KeyOutlined, UserOutlined} from '@ant-design/icons'
import './login.module.css'
import {Button, Col, Divider, Flex, Form, Input, Layout, Row, Space} from "antd";
import {useEffect, useRef, useState} from 'react';
import {api} from "../../../shared/connect/connect_api.js";
import {Cookies, useCookies} from "react-cookie";
import {redirect, useNavigate} from "react-router-dom";

const {Header, Content} = Layout;

function Login() {
    const [cookie, setCookie, removeCookie] = useCookies(['auth-login-token'])

    const [formData, setFormData] = useState({
        username:'',
        password:''
    });

    let navigate = useNavigate();

    const routeChange = (path) => {
        navigate(path);
    }

    const handleInputChange = (e) => {
        // console.log(e.target.name, e.target.value);
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleClick = () => {
        api.post('site/login', formData).then((data) => {
            setCookie('auth-login-token', data.data, {
                // httpOnly : true,
                // secure : true,
                // sameSite : 'lax',
                maxAge : 60
            })
            api.post('site/authorized', {token : data.data}).then((_data) => {
                if (_data.data === 'Success'){
                    routeChange('/department');
                }
            })
        })
        // removeCookie('auth-login-token');
    }

    const boxStyle = {
        width: '100%',
        height: '100%',
    };

    return (
        <>
            <Flex style={{width: '100%', height: '100%', backgroundColor: '#888888'}} justify={'center'} align={'center'}>
                <Row>
                    <Col style={{
                        border: 'solid gray 1px',
                        width: '400px',
                        height: '500px',
                        borderRadius: '10px',
                        boxShadow: "3px 3px 3px #888888",
                        backgroundColor: 'white'
                    }}>
                        <Form>
                            <Layout style={{margin: '10px'}}>
                                <Header style={{background: 'white', padding: '10px', height: '90px'}}>
                                    <Space align={'baseline'} style={{width: '100%'}}>
                                        <Divider orientation={"left"} style={{
                                            fontSize: '28px',
                                            fontWeight: 'bold',
                                            textShadow: '2px 2px 2px #888888',
                                            color: '#6186CC'
                                        }}>
                                            Đăng nhập
                                        </Divider>
                                    </Space>
                                </Header>
                                <Content style={{padding: '10px'}}>
                                    <Row>
                                        <Col span={24}
                                             style={{paddingLeft: '25px', paddingRight: '25px', marginBottom: '20px'}}>
                                            <Button type={'default'} style={{
                                                width: '100%',
                                                paddingLeft: 0,
                                                paddingRight: 0,
                                                height: '50px',
                                                backgroundColor: '#e7eefc',
                                                boxShadow: '3px 3px 3px #888888'
                                            }}>
                                                <Divider orientation={'left'} style={{paddingLeft: 0, paddingRight: 0}}>
                                                    <Row style={{paddingLeft: 0, paddingRight: 0}}>
                                                        <Col span={6} style={{textAlignLast: 'justify', alignSelf: 'end'}}>
                                                            <GoogleOutlined style={{fontSize: '20px'}}/>
                                                        </Col>
                                                        <Col span={18} style={{fontSize: '16px'}}>
                                                            Đăng nhập với Google
                                                        </Col>
                                                    </Row>
                                                </Divider>
                                            </Button>
                                        </Col>
                                        <Col span={24}
                                             style={{paddingLeft: '25px', paddingRight: '25px', marginBottom: '20px'}}>
                                            <Row>
                                                <Col span={10}>
                                                    <hr style={{flexGrow: 1}}/>
                                                </Col>
                                                <Col span={4} style={{textAlign: 'center'}}>OR</Col>
                                                <Col span={10}>
                                                    <hr style={{flexGrow: 1}}/>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col span={24}
                                             style={{paddingLeft: '25px', paddingRight: '25px', marginBottom: '20px'}}>
                                            <Flex gap="middle" align="start" vertical
                                                  style={{height: '50px', backgroundColor: '#e7eefc'}}>
                                                <Flex style={boxStyle} justify={'left'} align={'center'}>
                                                    <Row style={{width: '100%'}}>
                                                        <Col span={4} style={{alignSelf: 'center', textAlign: 'center'}}>
                                                            <UserOutlined style={{fontSize: '20px'}}/>
                                                        </Col>
                                                        <Col span={20} style={{fontSize: '16px'}}>
                                                            <Input style={{backgroundColor: '#e7eefc', width: '100%'}}
                                                                   placeholder={'Username'} name={'username'} onChange={e => handleInputChange(e)}/>
                                                        </Col>
                                                    </Row>
                                                </Flex>
                                            </Flex>
                                        </Col>
                                        <Col span={24}
                                             style={{paddingLeft: '25px', paddingRight: '25px', marginBottom: '10px'}}>
                                            <Flex gap="middle" align="start" vertical
                                                  style={{height: '40px', backgroundColor: '#e7eefc'}}>
                                                <Flex style={boxStyle} justify={'left'} align={'center'}>
                                                    <Row style={{width: '100%'}}>
                                                        <Col span={4} style={{alignSelf: 'center', textAlign: 'center'}}>
                                                            <KeyOutlined style={{fontSize: '20px'}}/>
                                                        </Col>
                                                        <Col span={20} style={{fontSize: '16px'}}>
                                                            <Input type={'password'} style={{backgroundColor: '#e7eefc', width: '100%'}}
                                                                   placeholder={'Password'} name={'password'} onChange={e => handleInputChange(e)}/>
                                                        </Col>
                                                    </Row>
                                                </Flex>
                                            </Flex>
                                        </Col>
                                        <Col span={24}
                                             style={{paddingLeft: '25px', paddingRight: '25px', marginBottom: '20px'}}>
                                            <Flex style={boxStyle} justify={'right'} align={'flex-start'}>
                                                <a href={''}>Quên mật khẩu?</a>
                                            </Flex>
                                        </Col>
                                        <Col span={24}
                                             style={{paddingLeft: '25px', paddingRight: '25px', marginBottom: '20px'}}>
                                            <Button type={'primary'} style={{
                                                width: '100%',
                                                paddingLeft: 0,
                                                paddingRight: 0,
                                                height: '50px',
                                                boxShadow: '3px 3px 3px #888888'
                                            }}
                                                    onClick={() => {
                                                        handleClick();
                                                    }}
                                            >
                                                <Divider orientation={'center'}
                                                         style={{paddingLeft: 0, paddingRight: 0, color: 'white'}}>
                                                    Login
                                                </Divider>
                                            </Button>
                                        </Col>
                                        <Col span={24} style={{paddingLeft: '25px', paddingRight: '25px'}}>
                                            <Flex style={boxStyle} justify={'center'} align={'center'}>
                                                <span>Chưa có tài khoản? <a href={''}>Đăng kí</a></span>
                                            </Flex>
                                        </Col>
                                    </Row>
                                </Content>
                            </Layout>
                        </Form>
                    </Col>
                </Row>
            </Flex>
        </>
    );
}

export default Login;
