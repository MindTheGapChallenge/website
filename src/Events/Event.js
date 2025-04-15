import React from "react";

const EventCard = ({ children }) => {
    return (
        <div className="bg-gray-800 text-white rounded-2xl shadow-lg p-6 max-w-md mx-auto hover:scale-105 transition-transform hover:shadow-2xl">
            {children}
        </div>
    );
};

export default EventCard;
