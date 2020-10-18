import React from 'react';
import './Portfolio.css'

import { AiFillGithub } from 'react-icons/ai';
import { RiExternalLinkLine } from 'react-icons/ri'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Portfolio() {
    return (
        <div className="portfolio">
            <a name="portfolio" href="/#"> </a>
            <p className="section-title"><span>Portfolio</span></p>
            <div className="card-container">
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
                    <div className="card">
                        <h5 className="card-title">Crowdpleaser</h5>
                        <p className="card-text">A music streaming web app in which users can host parties and invite friends with a unique party code. Everybody in the party can add songs to a shared queue and vote to determine which song plays next. Built using a Node.js, Express, MongoDB, and React.</p>
                        <span> <a className="card-links" href="https://github.com/kylebremont/CrowdPleaser-server" target="_blank" rel="noopener noreferrer"><AiFillGithub size={42} /></a></span>
                        <span><a className="card-links" href="https://crowdpleaser.love" target="_blank" rel="noopener noreferrer"><RiExternalLinkLine size={42} /></a></span>
                    </div>
                    <div className="card">
                        <h5 className="card-title">Sorting Algorithm Visualizer</h5>
                        <p className="card-text"> A react web app that visualizes different sorting algorithms on a histogram. Users can set size, speed, algorithm, and display style to visualize Merge Sort, Insertion Sort, Selection Sort, and Bubble Sort.</p>
                        <a className="yup" href="https://github.com/mabthew/sorting-visualizer" target="_blank" rel="noopener noreferrer"><AiFillGithub size={42} /></a>
                        <a className="yup" href="https://mabthew.github.io/sorting-visualizer/" target="_blank" rel="noopener noreferrer"><RiExternalLinkLine size={42} /></a>
                    </div>

                    <div className="card">
                        <h5 className="card-title">DropBucket</h5>
                        <p className="card-text">File-hosting service using a RESTful Django API to communicate with GCP Storage Buckets, synchronizing across multiple devices to manage downloading, uploading, and deleting files reflecting changes in the QT interface.</p>
                        <a className="yup" href="https://github.com/mabthew/Dropbucket-deliverables" target="_blank" rel="noopener noreferrer"><AiFillGithub size={42} /></a>
                    </div>
                    <div className="card">
                        <h5 className="card-title">Scrabbler</h5>
                        <p className="card-text">An anagram finder build using Node.js, Express, React, and Redis.</p>
                        <a className="yup" href="https://github.com/mabthew/anagram" target="_blank" rel="noopener noreferrer"><AiFillGithub size={42} /></a>
                    </div>
                    <div className="card">
                        <h5 className="card-title">This website!</h5>
                        <p className="card-text">I made this website from scratch using React, HTML, and CSS to practice web design.</p>
                        <a className="yup" href="https://github.com/mabthew/personal-website" target="_blank" rel="noopener noreferrer"><AiFillGithub size={42} /></a>
                    </div>
                </Carousel>
            </div>
        </div >
    )
}

export default Portfolio;
