import React from 'react';
import women from "../../images/women.png";
import './intro.css';
export default function intro() {
    return (
        <div className='intro'>
            <div className="iLeft">
                <div className="iLeftWrapper">
                    <p className="nameIntro">
                        Hello, My name is
                    </p>
                    <h1 className="name">Safa Sherin Sulaiman</h1>
                    <div className="iTitle">
                        <div className="iTitleWrapper">
                            <div className="iTitleItem">Web Developer</div>
                            <div className="iTitleItem">Content Creator</div>
                            {/* <div className="iTitleItem">Calligrapher</div> */}

                        </div>
                    </div>
                    <p className="iDesc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.

                    </p>

                </div>
                {/* <img src={scroll} className='imgScroll' alt="" /> */}
            </div>
            <div className="iRight">
                {/* <div className="imgBackground"></div> */}
                <img src="https://res.cloudinary.com/dv3uj18zo/image/upload/v1642505107/portfolio/women_tm0jml.png" alt="" className="iImg" />

            </div>
        </div>
    )
}
