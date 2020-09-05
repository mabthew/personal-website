import React from 'react';
import './Portfolio.css'

import { AiFillGithub } from 'react-icons/ai';
import { RiExternalLinkLine } from 'react-icons/ri'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Portfolio() {
    return (
        <div className="portfolio">
            <a name="portfolio" className="anchor-space" href="/#"> </a>
            <p className="section-title"><span>Portfolio</span></p>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                <div class="card">
                    {/* <img class="card-img-top" src="images/crowdpleaser.png" alt="Card image cap"></img> */}
                    <div class="card-body">
                        <h5 class="card-title">Crowdpleaser</h5>
                        <p class="card-text">A music streaming web app (coming soon to iOS) in which users can host parties and invite friends with a unique party code. Everybody in the party can add songs to a shared queue and vote to determine which song plays next. Built using a Node.js, Express, MongoDb, and React.</p>
                        <a href="https://github.com/mabthew" target="_blank" rel="noopener noreferrer"><AiFillGithub size={42} /></a>
                        <a href="https://crowdpleaser.love" target="_blank" rel="noopener noreferrer"><RiExternalLinkLine size={42} /></a>
                    </div>
                </div>
                <div class="card">
                    {/* <img class="card-img-top" src="images/sorting_visualizer.png" alt="Card image cap"></img> */}
                    <div class="card-body">
                        <h5 class="card-title">Sorting Algorithm Visualizer</h5>
                        <p class="card-text"> A react web app that visualizes different sorting algorithms on a histogram. Users can set size, speed, algorithm, and display style to visualize Merge Sort, Insertion Sort, Selection Sort, and Bubble Sort.</p>
                        <a href="https://github.com/mabthew" target="_blank" rel="noopener noreferrer"><AiFillGithub size={42} /></a>
                        <a href="https://mabthew.github.io/sorting-visualizer/" target="_blank" rel="noopener noreferrer"><RiExternalLinkLine size={42} /></a>
                    </div>
                </div>

                <div class="card">
                    {/* <img class="card-img-top" src="images/gcp_storage.png" alt="Card image cap"></img> */}
                    <div class="card-body">
                        <h5 class="card-title">DropBucket</h5>
                        <p class="card-text">File-hosting service using a RESTful Django API to communicate with GCP Storage Buckets, synchronizing across multiple devices to manage downloading, uploading, and deleting files reflecting changes in the QT interface.</p>
                        <a href="https://github.com/mabthew" target="_blank" rel="noopener noreferrer"><AiFillGithub size={42} /></a>
                    </div>
                </div>
                <div class="card">
                    {/* <img class="card-img-top" src="..." alt="Card image cap"></img> */}
                    <div class="card-body">
                        <h5 class="card-title">Scrabbler</h5>
                        <p class="card-text">An anagram finder.</p>
                        <a href="https://github.com/mabthew" target="_blank" rel="noopener noreferrer"><AiFillGithub size={42} /></a>
                    </div>
                </div>
                <div class="card">
                    {/* <img class="card-img-top" src="..." alt="Card image cap"></img> */}
                    <div class="card-body">
                        <h5 class="card-title">This website!</h5>
                        <p class="card-text">I made this website from scratch to showcase my abilities.</p>
                        <a href="https://github.com/mabthew" target="_blank" rel="noopener noreferrer"><AiFillGithub size={42} /></a>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default Portfolio;
