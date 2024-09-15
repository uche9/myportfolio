import svg_data from '../svg/svg_data.js'

import './homebody.css'

function HomeBody(){

//Service
   var servie_data=[
    {
        icon:svg_data[4].code,
        name:'Data Analysis and Visualization',
        description:'I can clean, analyze, manipulate and visualize data.Beyond that, I can provide business insights based on results of analysis ...'
    },
    {
        icon:svg_data[5].code,
        name:'Computer Programming',
        description:'I can create efficient DRY codes, fully optimized ...'
    },
    {
        icon:svg_data[3].code,
        name:'Cyber Security',
        description:'I can play different cyber-security roles like penetration testing, incidence response, etc ...'
    },
   ]
   var servie_data_array=servie_data.map(el=>{
    return(
        <div className='service--item--container'>
            <div className='service--icon'>
                <div className="service--icon--container">
                   {el.icon}
                </div>
                
            </div>
            <div className='service--name'>
                {el.name}
            </div>
            <div className='service--description'>
                {el.description}
            </div>
        </div>
    )
   })
   


   //Work experience

   var experience_data=[
    {
        role:'Data Analyst',
        duration:'whe',
        company:'',
        details:'',
        proficiency:8
   },
   {
    role:'Data Analyst',
    duration:'whe',
    company:'',
    details:'',
    proficiency:8
   },
   {
    role:'Data Analyst',
    duration:'whe',
    company:'',
    details:'',
    proficiency:8
  },
]
   var experience_data_array=experience_data.map((el)=>{
    return(
        <div className='experience--item--container'>
               <div>Role:{el.role}</div>
               <div>Duration:{el.duration}</div>
               <div>Company:{el.company}</div>
               <div>Details:{el.details}</div>
        </div>
    )
   })
 

   //Portfolio

    return(
        <div className='container--homebody'>
            <div className='name'>
                I am Tomi Arowojobe
            </div>
            <div className='brief--intro'>
                Experienced data analyst and Cyber-security expert!
            </div>

            <div className='profile--photo--container'> 
                Photograph
                <img className='profile--photo' alt='profile--photo' src='' />
            </div>
            <div className='aboutme--container'>
                <div>About Me</div>
                <div className='underline'></div>
                <div>World class data analyst and cyber-security expert</div>
                <div>
                    <p></p>
                    <p></p>
                </div>
                
            </div>
            <div> 
               <a href='./contact' ><button class='contact--button'> Contact Me</button></a>
            </div>
            <div className='service--container'>
                <div className='what--service'>What Services I'm providing?</div>
                <div className='underline'></div>
                <div>With my broad range of skills, I can offer the following services</div>
                
                <div className='service--data--array'>
                  {servie_data_array}
                </div>
                
            </div>
            <div className='experience--container'>
                <div className='experience'> Work Experience</div>
                <div className='underline'></div>
                <div> I have over  3 years work experience</div>
                <div className='experience--data--array'>{ experience_data_array}</div>
            </div>
            <div className='portfolio--container'>
                <div className='portfolio'> My Portfolio</div>
                <div className='underline'></div>
                <div><a href='portfolio'>Find my works here</a> </div>
                <div className='portfolio--data--array'></div>
            </div>
         </div>
    )
}

export default HomeBody