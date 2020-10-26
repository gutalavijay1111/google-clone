import React, { Component } from 'react'
import './SearchPage.css'
import { useStateValue } from "./StateProvider";
import useGoogleSearch from './useGoogleSearch';
import Response from "./response"
import { Link } from "react-router-dom";
import Search from "./Search"

import SearchIcon from "@material-ui/icons/Search"
import DescriptionIcon from "@material-ui/icons/Description"
import Image from "@material-ui/icons/Image"
import LocalOffer from "@material-ui/icons/LocalOffer"
import Place from "@material-ui/icons/Place"
import MoreVert from "@material-ui/icons/MoreVert"


function  SearchPage() {

    const [{ term }, dispatch] = useStateValue();
        // LIVE API CALL
    // const { data } = useGoogleSearch(term);

    const data = Response

    console.log(data);
        return (
            <div className="searchPage">
                <div className="searchPage__header">
                    <Link to="/">
                        <img  className="searchPage__logo" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"></img>
                    </Link>
                    <div className="searchPage__headerBody">
                        <Search hideButtons />
                        <div className="searchPage__options">

                            <div className="searchPage__optionsLeft">

                                <div className="searchPage__option">
                                    <SearchIcon />
                                    <Link to="/all">All</Link>
                                </div>

                                <div className="searchPage__option">
                                    <DescriptionIcon />
                                    <Link to="/news">News</Link>
                                </div>

                                <div className="searchPage__option">
                                    <Image />
                                    <Link to="/images">Images</Link>
                                </div>

                                <div className="searchPage__option">
                                    <LocalOffer />
                                    <Link to="/shop">shopping</Link>
                                </div>

                                <div className="searchPage__option">
                                    <Place />
                                    <Link to="/maps">maps</Link>
                                </div>

                                <div className="searchPage__option">
                                    <MoreVert />
                                    <Link to="/more">more</Link>
                                </div>

                            </div>

                            <div className="searchPage__optionsRight">
                                <div className="searchPage__option">
                                    <Link to="/settings">Settings</Link>
                                </div>

                                <div className="searchPage__option">
                                    <Link to="/tools">Tools</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="searchPage__results">

                </div>
            </div>
        )
    }


export default SearchPage
