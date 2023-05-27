import React from "react";
import axios from "axios";
import Favorite from "../../../public/images/favorite.png";

const FavoriteButton = ({ comic }) => {
    const handleAddFavorite = (e) => {
        e.preventDefault();
        const { title, issueNumber, id } = comic;
        const thumbnailUrl =
            comic.thumbnail.path + "." + comic.thumbnail.extension;
        axios
            .post("/favorites", {
                title,
                issueNumber,
                thumbnailUrl,
                marvelId: id,
            })
            .then((response) => {
                alert(response.data.message);
            })
            .catch((error) => {
                alert(error.response.data.message);
            });
    };
    return (
        <button
            className="absolute top-0 right-0 p-2 z-10"
            onClick={(e) => handleAddFavorite(e)}
        >
            <img src={Favorite} alt={comic.title} />
        </button>
    );
};

export default FavoriteButton;
