import React, { useEffect, useState } from "react";
import Card from "../Components/FavoriteCard";
import { Link } from "@inertiajs/react";

export default function Favorites({ auth, favorites }) {
    return (
        <>
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
                <h1 className="text-lg p-4">Favorites</h1>
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6">
                    {favorites.length > 0 ? (
                        favorites.map((favorite) => (
                            <Card favorite={favorite} key={favorite.id} />
                        ))
                    ) : (
                        <div className="p-6 col-span-full">
                            <p>
                                No favorites in your list check our{" "}
                                <Link className="text-blue-500" href="/comics">
                                    Comics
                                </Link>{" "}
                                list to find yours!
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
