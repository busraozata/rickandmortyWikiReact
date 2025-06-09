import React, { useEffect, useState } from 'react'
import Card from '../components/Cards/Card';

export default function Episodes() {
    const [id] = useState(1);
    const [info, setInfo] = useState([]);
    let [results, setResults] = useState([]);
    let { air_date, name } = info;
    let api = `${process.env.REACT_APP_API_URI}/episode/${id}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            setInfo(data);

            let a = await Promise.all(
                data.characters.map((x) => {
                    return fetch(x).then((res) => res.json());
                })
            );
            setResults(a);
        })();
    }, [api]);
    return (
        <div className='container'>
            <div className="row mb-4">
                <h1 className="text-center mb-4">Episode : <span className="text-primary">{name === "" ? "Unknown" : name}</span> </h1>
                <h5 className="text-center">Air Date {air_date === "" ? "Unknown" : air_date}</h5>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <h4 className="text-center mb-4">
                        Pick Episodes
                    </h4>
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupSelect01">Options</label>
                        <select class="form-select" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>


                <div className="col-lg-8">
                    <div className="row">
                        <Card page="/episodes/" results={results} />
                    </div>
                </div>
            </div>
        </div>
    )
}
