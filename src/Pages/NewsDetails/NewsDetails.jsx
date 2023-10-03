import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSiteNav from "../Shared/RightSiteNav/RightSiteNav";
import NavBar from "../Shared/NavBar/NavBar";

const NewsDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-5xl">News Detail</h2>
                </div>
                <div className="col-span-1">
                    <RightSiteNav></RightSiteNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;