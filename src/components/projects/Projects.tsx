import React, { useState } from 'react'
import { ProjectContent } from '../../constants';


import "./projects.css";

const Project = () => {
  const [image, setImage] = useState(
    ProjectContent[1].image
  );
  const [selectedIndex, setSelectedIndex] = useState<number>(1);

  const handleChangeImage = (idx: number, item: any) => {
    setImage(item.image);
    setSelectedIndex(idx);
  }

  return (
    <div className='projects'>
      <div className='projects-header section-header'>Our project</div>
      <div className='projects-sub-header section-sub-header'>
        Why We Are Best
      </div>
      <div className='projects-content'>

        <div className='project' >
          <div className='project-image'>
            <img src={image} alt="project-image" width={700} height={567} />
          </div>
          <div className='project-contents' >
            {ProjectContent.map((each, idx) => (
              <div
                className={selectedIndex === idx ? "project-content selected" : "project-content"}
                onClick={() => handleChangeImage(idx, each)}
                key={idx}
                data-testid="project-content"
              >
                <div className='project-title'>{each.title}</div>
                <div className='project-description'>{each.description}</div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  )
}

export default Project