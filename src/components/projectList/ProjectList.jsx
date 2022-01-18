import React from 'react'
import './projectList.css';
import Project from "../project/Project";
import { projects } from "../../data";
export default function ProjectList() {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">My projects</h1>
                <p className="pl-desc">Hi, you can find the projects I worked on below. I primarily build full stack applications (Front End + Back End development) on MERN stack.
                    I use MongoDB, ReactJS, Express, NodeJS, Heroku etc. in my development works. </p>
            </div>
            <div className="pl-lists">
                {projects.map((item) => (
                    <Project key={item.id} img={item.img} link={item.link} />
                ))}

            </div>
        </div >
    )
}
