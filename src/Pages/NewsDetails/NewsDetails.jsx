import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSiteNav from "../Shared/RightSiteNav/RightSiteNav";
import NavBar from "../Shared/NavBar/NavBar";
import { BiLeftArrowAlt } from "react-icons/bi";

const NewsDetails = () => {
    const newsDetails = useLoaderData();
    const { id } = useParams();
    const newsItem = newsDetails.find(item => item._id === id);
    const { image_url, title, details } = newsItem;
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3 space-y-4">
                    <h2 className="text-2xl">Dragon News</h2>
                    <img src={image_url} alt="" />
                    <h2 className="font-bold text-2xl">{title}</h2>
                    <p>{details}</p>
                    <button className="bg-red-500 text-white flex items-center p-2"> <BiLeftArrowAlt className="font-bold text-3xl"></BiLeftArrowAlt> All News in this category</button>
                    <div className="">
                        <h2>Editors Insight</h2>
                    </div>
                </div>
                <div className="col-span-1">
                    <RightSiteNav></RightSiteNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;