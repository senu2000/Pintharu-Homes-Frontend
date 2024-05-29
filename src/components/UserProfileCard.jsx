import React from 'react';
import "../css/UserProfileCard.css";

function UserProfileCard(props) {
    return (
        <div className="card-container">
            <div className="m-5">
                <div className="w-64 mx-auto bg-[#C7C3BF] rounded-2xl px-8 py-6 shadow-lg or-shadow">
                    {/*#20354b*/}
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">2d ago</span>
                    </div>
                    <div className="mt-6 w-fit mx-auto">
                        <img
                            src={props.image}
                            className="rounded-full w-28 h-28" alt="profile picture"/>
                    </div>
                    <div className="mt-8 text-center">
                        <h2 className="text-white font-bold text-2xl tracking-wide">{props.message}
                        </h2>
                    </div>
                    <p className="text-emerald-400 font-semibold mt-2.5">
                        Active
                    </p>
                </div>
            </div>
        </div>
    );
}

export default UserProfileCard;