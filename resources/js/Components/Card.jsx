import React from "react";
import FavoriteButton from "@/Components/FavoriteButton";

const Card = ({ comic, handleComicClick }) => {
    return (
        <>
            <div className="mx-1 mb-3 relative inline-block">
                <FavoriteButton comic={comic} />
                <img
                    src={
                        comic.thumbnail.path +
                        "/portrait_uncanny." +
                        comic.thumbnail.extension
                    }
                    alt={comic.title}
                    className="w-full"
                />
                <h3
                    onClick={() => handleComicClick(comic)}
                    className="font-bold text-white text-2xl absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 hover:opacity-100 transition-opacity p-3"
                >
                    {comic.title}
                </h3>
            </div>
        </>
    );
};

export default Card;
