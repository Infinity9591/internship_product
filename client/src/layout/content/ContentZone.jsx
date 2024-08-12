import {Breadcrumb, Layout, Menu, theme} from "antd";

const {Content, Sider} = Layout;

function ContentZone(){
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <>
            <Content style={{
                marginTop : '30px',
                padding: '0 30px',
                height:'500px',
                // position : 'relative',
            }}>
                <Layout
                    style={{
                        padding: '24px 0',
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                {/*    <Sider*/}
                {/*        style={{*/}
                {/*            background: colorBgContainer,*/}
                {/*        }}*/}
                {/*        width={200}*/}
                {/*    >*/}

                {/*    </Sider>*/}
                {/*    <Content*/}
                {/*        style={{*/}
                {/*            padding: '0 24px',*/}
                {/*            minHeight: 280,*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        Content*/}
                {/*    </Content>*/}
                </Layout>
            </Content>
        </>
    )
}
 export default ContentZone;
