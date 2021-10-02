import React from 'react';
import NavigationBar from "../NavigationBar.jsx";
import InfoSection from "./InfoSection"
function BlogPage(props) {
    return (
        <div className="Infopage__box">
            <NavigationBar />
            <div className="Info__section">
                <div className="Info__posts">
                    <InfoSection infoimg="https://cdn.pixabay.com/photo/2017/01/25/12/31/bitcoin-2007769__480.jpg" infotitle="Info Topic-1" info="
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. 
                    "/>
                    <InfoSection infoimg="https://media.istockphoto.com/photos/bitcoin-picture-id1145592947?k=20&m=1145592947&s=612x612&w=0&h=2Dwg5QPGB-UljX35NY6jj1OzIpx3oycyHZUvElMEgkM=" infotitle="Info Topic-2" info="
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. 
                    "/>
                </div>
                <div className="Info__posts">
                    <InfoSection infoimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlVhLekKyxJ0_5p2MJI5meK6NwAvCVPmbkjQ&usqp=CAU" infotitle="Info Topic-3" info="
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. 
                    "/>
                    <InfoSection infoimg="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/01/14/09/bitcoin-price-latest-gold.jpg?width=1200" infotitle="Info Topic-4" info="
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. 
                    "/>
                </div> 
            </div>
        </div>
    );
}

export default BlogPage;



