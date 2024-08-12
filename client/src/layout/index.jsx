import HeaderBar from "./header/HeaderBar.jsx";
import ContentZone from "./content/ContentZone.jsx";
import {Layout} from "antd";
import FooterBar from "./footer/FooterBar.jsx";
import Main from '../routes/main.jsx'
import {useLocation, useParams} from "react-router-dom";

function Index(props){

    // const location = useLocation();
    const { '*': slug } = useParams();

    return (
        <>
            <Layout>
                <HeaderBar slug={slug}/>
                <Main/>
                <FooterBar/>
            </Layout>

        </>
    )
}

export default Index;
