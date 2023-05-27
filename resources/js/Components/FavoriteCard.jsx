import React from "react";

const FavoriteCard = ({ favorite }) => {
    return (
        <>
            <div className="mx-1 mb-3 relative inline-block">
                <img
                    src={favorite.thumbnailUrl}
                    alt={favorite.title}
                    className="w-full"
                />
                <h3 className="font-bold text-white text-2xl absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 hover:opacity-100 transition-opacity p-3">
                    {favorite.title}
                </h3>
            </div>
        </>
    );
};

export default FavoriteCard;
