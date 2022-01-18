import React from 'react'
import './projectList.css';
import Project from "../project/Project";
import { projects } from "../../data";
export default function ProjectList() {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">My projects</h1>
                <p className="pl-desc">Hi, here you can see my projects. The tools I used for these
                    projects are ReactJS, NodeJs, Javascript, Express, Mongodb, Heroku, Pixel, undraw.io etc...Hope you will like!!! </p>
            </div>
            <div className="pl-lists">
                {projects.map((item) => (
                    <Project key={item.id} img={item.img} link={item.link} />
                ))}

            </div>
        </div >
    )
}
