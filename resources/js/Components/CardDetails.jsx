import React, { useState } from "react";

const CardDetails = (props) => {
    const { title, description, thumbnail, creators, stories } = props.comic;
    const comicThumbImage = thumbnail.path + "." + thumbnail.extension;
    return (
        <>
            <div
                className={`grid grid-cols-12 w-full h-screen z-50 fixed text-cyan-50 transition-opacity duration-3000 ease-in-out ${
                    props.openDetails ? "opacity-100 block" : "opacity-0 hidden"
                }`}
            >
                <div className="row-span-2 col-span-6 flex justify-center items-center">
                    <img
                        src={comicThumbImage}
                        className="absolute w-3/5 -top-5 bottom-0 -left-5 blur-md -z-10"
                    ></img>
                    <div className="z-10 backdrop-blur-md">
                        <img src={comicThumbImage} alt={title} />
                    </div>
                </div>
                <div className="col-span-6 bg-slate-800 flex items-center p-8">
                    <button
                        className="absolute top-0 right-0 m-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                        onClick={() => props.handleOpenDetails()}
                    >
                        CLOSE
                    </button>
                    <h2 className="h2 text-5xl">{title}</h2>
                </div>
                <div className="row-span-1 col-span-6 bg-gray-200 text-gray-900 overflow-y-scroll h-full">
                    <p className="m-4 ml-8">Creator</p>
                    <ul>
                        {creators.items.map((creator, index) => {
                            return (
                                <li
                                    className="bg-gray-300 p-2 pl-8"
                                    key={index}
                                >
                                    {index + 1} . {creator.name} - (
                                    {creator.role})
                                </li>
                            );
                        })}
                    </ul>
                    <p className="m-4 ml-8">Stories</p>
                    <ul>
                        {stories.items.map((story, index) => {
                            return (
                                <li
                                    className="bg-gray-300 p-2 pl-8"
                                    key={index}
                                >
                                    {index + 1} . {story.name} - ({story.role})
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CardDetails;
