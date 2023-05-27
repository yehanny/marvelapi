import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import ComicDetails from "../Components/CardDetails";
import { Link } from "@inertiajs/react";

export default function Comics({ auth, comics }) {
    const [currentComic, setCurrentComic] = useState({});
    const [openDetails, setOpenDetails] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const convertToArray = (object) => {
        let result = Object.values(object);
        return result;
    };

    const data = convertToArray(comics.data);

    const handleComicClick = (comic) => {
        setOpenDetails(true);
        setCurrentComic(comic);
    };

    const handleOpenDetails = () => {
        setOpenDetails(false);
    };

    return (
        <>
            {Object.keys(currentComic).length > 0 && (
                <ComicDetails
                    comic={currentComic}
                    handleOpenDetails={handleOpenDetails}
                    openDetails={openDetails}
                />
            )}

            <div className="flex flex-col min-h-screen gap-6">
                <div className="flex justify-between bg-red-700 p-6 text-white">
                    <div>Marvel API</div>
                    <div className="text-right">
                        <Link
                            href="/comics"
                            className="font-semibold text-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Comics
                        </Link>
                        <Link
                            href="/favorites"
                            className="ml-4 font-semibold text-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Favorites
                        </Link>
                        <Link
                            href={route("login")}
                            className="ml-4 font-semibold text-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Log in
                        </Link>

                        <Link
                            href={route("register")}
                            className="ml-4 font-semibold text-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Register
                        </Link>
                    </div>
                </div>
                <h1 className="text-lg p-4">Comics</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {data.length > 0 &&
                        data.map((comic) => (
                            <Card
                                comic={comic}
                                key={comic.id}
                                handleComicClick={handleComicClick}
                            />
                        ))}
                </div>

                <ul className="flex gap-4 w-full justify-center bg-red-700 p-4 text-white">
                    {comics.links.map((link, index) => {
                        return (
                            <div>
                                <Link
                                    key={index}
                                    href={`comics${link.url}`}
                                    className={
                                        link.url === null
                                            ? "pointer-events-none opacity-50"
                                            : "pointer-events-auto"
                                    }
                                >
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: `${link.label}`,
                                        }}
                                    />
                                </Link>
                            </div>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}
