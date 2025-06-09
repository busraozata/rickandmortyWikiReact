import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Card from "../components/Cards/Card";
import Filter from "../components/Filters/Filter";
import axios from "axios";
import Pagination from "../components/Pagination/Pagination";
import Search from "../components/Search/Search";
export default function Home() {
    let [pageNumber, setPageNumber] = useState(1);
    let [search, setSearch] = useState("");
    let [status, setStatus] = useState("");
    let [gender, setGender] = useState("");
    let [species, setSpecies] = useState("");

    console.log(pageNumber);
    let [fetchedData, updateFetchedData] = useState([]);
    let api = `${process.env.REACT_APP_API_URI}/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

    let { info, results } = fetchedData;

    useEffect(() => {
        (async function () {
            let response = await axios(api);
            updateFetchedData(response.data);
        })();
    }, [api]);

    return (
        <>
            <Search setPageNumber={setPageNumber} setSearch={setSearch} />

            <div className="container">
                <div className="row">
                    <Filter
                        setGender={setGender}
                        setStatus={setStatus}
                        setSpecies={setSpecies}
                        setPageNumber={setPageNumber}
                    />
                    <div className="col-lg-9">
                        <div className="row">
                            <Card results={results} />
                        </div>
                    </div>
                </div>
            </div>
            <Pagination
                info={info}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
            />
        </>
    )
}


