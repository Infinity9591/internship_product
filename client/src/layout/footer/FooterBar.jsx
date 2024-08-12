import {Layout} from 'antd';

const {Footer} = Layout;

function FooterBar(){

    return (
        <>
            <Footer
                style={{
                    textAlign: 'center',
                    position: 'absolute',
                    bottom: 0,
                    width:'100%'
                }}
            >
                Nguyen Trung Son - 90658 - CNT62DH
            </Footer>
        </>
    )
}

export default FooterBar;
