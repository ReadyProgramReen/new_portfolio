import React from 'react'
import '../MyWork/MyWork.css'
import theme_pattern from '../../assets/assets/theme_pattern.svg'
import arrow_icon from '../../assets/assets/arrow_icon.svg'
import mywork_data from '../../assets/assets/mywork_data' 

const MyWork = () => {
  return (
    <div id='Work' className='my-work'>
        <div className="work-title">
            <h1>Latest Work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="work-container">
            {mywork_data.map((work,index)=>{
                return <a href={work.href}  target="_blank" rel="noopener noreferrer"><img key={index} src={work.w_img} alt="" /></a> 
            })}

        </div>

        <div className="work-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
        
    </div>
  )
}

export default MyWork