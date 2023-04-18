import React from "react";

function PostGrid() {

    return (
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <img className="card-img-top" src="./images/gorges-grant-hotel.jpeg" alt="Gorges Grant Hotel"/>
                        <div className="card-body">
                            <h5 className="card-title">Blog Post 1</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <a href="#" className="btn palette-bg-primary">Read More</a>
                        </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <img className="card-img-top" src="./images/hotel-vt-lobby.jpeg" alt="Hotel Vermont"/>
                        <div className="card-body">
                            <h5 className="card-title">Blog Post 2</h5>
                            <p className="card-text">Sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua.</p>
                            <a href="#" className="btn palette-bg-primary">Read More</a>
                        </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <img className="card-img-top" src="./images/portland-harbor-hotel.jpeg" alt="Portland Harbor Hotel"/>
                        <div className="card-body">
                            <h5 className="card-title">Blog Post 3</h5>
                            <p className="card-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat.</p>
                            <a href="#" className="btn palette-bg-primary">Read More</a>
                        </div>
                </div>
            </div>
        </div>
    )

}

export default PostGrid;