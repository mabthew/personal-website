import React from 'react';
import './Portfolio.css'

function Portfolio() {
    return (
        <div className="portfolio">
            <a name="portfolio" className="anchor-space"></a>
            Portfolio
            <div>
                <div class="card">
                    {/* <img class="card-img-top" src="images/crowdpleaser.png" alt="Card image cap"></img> */}
                    <div class="card-body">
                        <h5 class="card-title">Crowdpleaser</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div class="card">
                    {/* <img class="card-img-top" src="images/sorting_visualizer.png" alt="Card image cap"></img> */}
                    <div class="card-body">
                        <h5 class="card-title">Sorting Algorithm Visualizer</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div class="card">
                    {/* <img class="card-img-top" src="images/gcp_storage.png" alt="Card image cap"></img> */}
                    <div class="card-body">
                        <h5 class="card-title">DropBucket</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div class="card">
                    {/* <img class="card-img-top" src="..." alt="Card image cap"></img> */}
                    <div class="card-body">
                        <h5 class="card-title">COVID-19 Tracker</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div class="card">
                    {/* <img class="card-img-top" src="..." alt="Card image cap"></img> */}
                    <div class="card-body">
                        <h5 class="card-title">This website!</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default Portfolio;
