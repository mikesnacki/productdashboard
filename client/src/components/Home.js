import React from 'react'
import { css } from 'emotion'
import useWindowSize from '../utilhooks/useWindowDim'

const Home =()=>{

    const size = useWindowSize()
    const width = size.width
    const collapseWidth = 900

    return(
        <div>
            <div className="stories-page">
                <p>Hi. I made this application as a way for me to learn more about the agile metholodogy.</p>
                <p>The application itself, at present, focuses heavily on creating and tracking user stories. You can create 'projects' which house stories. After that, you create stories within the project</p>
                <p>Here's a little preview picture of what a project with stories looks like.</p>
                <img 
                    className={css`
                    width: 90%;
                    max-width: 1100px;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    border: 0;
                    `}
                    src={width < collapseWidth ? 
                    "https://res.cloudinary.com/mikesnacki/image/upload/v1586090554/preview-project_shz6gb.png" 
                    : 
                    "https://res.cloudinary.com/mikesnacki/image/upload/v1586090546/preview-project-wide_rshps2.png"}>
                </img>
                <p>If you're interested in what technology this is built on, its a MERN stack app, using Auth0 for authentitication, deployed on Heroku.</p>
                <p>Any questions or comments, feel free to email me at mikesnacki@gmail.com</p>
            </div>
        </div>
    )
}

export default Home