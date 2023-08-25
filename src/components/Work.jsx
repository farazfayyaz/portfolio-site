import React from 'react'

import Battleship from "../assets/battleship.jpg"
import Weather from "../assets/weatherApp.png"
import Hakr from "../assets/hakrScreenshot.png"


const Work = () => {
  return (
    
    <div name="work" className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

            <div className='pb-8'>

                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#d42d2d]'>Work</p>
                <p className='py-6'>Check out my work</p>

            </div>

            {/**CONTAINER */}

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

              {/**GRID ITEM */}

              {/**BATTLESHIP GAME */}

              <div style={{backgroundImage: `url(${Battleship})`}} 
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>

                {/**HOVER EFFECTS */}
                <div className='opacity-0 group-hover:opacity-100'>

                    <span className='text-2xl font-bold text-white tracking-wider'>
                      Battleship Game
                    </span>

                    <div className='pt-8 text-center'>
                      <a href='https://battleship-game-tawny.vercel.app/' target="_blank">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                          Demo
                        </button>
                      </a>

                      <a href='https://github.com/farazfayyaz/Battleship-Game' target="_blank">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                          Code
                        </button>
                      </a>
                    </div>

                </div>

              </div>

              {/**WEATHER APP */}

              <div style={{backgroundImage: `url(${Weather})`}} 
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>

                {/**HOVER EFFECTS */}
                <div className='opacity-0 group-hover:opacity-100'>

                    <span className='text-2xl font-bold text-white tracking-wider'>
                      Weather App
                    </span>

                    <div className='pt-8 text-center'>
                      <a href='https://weather-app-dun-five.vercel.app/' target="_blank">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                          Demo
                        </button>
                      </a>

                      <a href='https://github.com/farazfayyaz/weather-app' target="_blank">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                          Code
                        </button>
                      </a>
                    </div>

                </div>

              </div>

              {/**HAKR.MP# */}

              <div style={{backgroundImage: `url(${Hakr})`}} 
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>

                {/**HOVER EFFECTS */}
                <div className='opacity-0 group-hover:opacity-100'>

                    <span className='text-2xl font-bold text-white tracking-wider'>
                      Hakr.mp3
                    </span>

                    <div className='pt-8 text-center'>
                      <a href='https://hakr-mp3-landing-page.vercel.app/'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                          Demo
                        </button>
                      </a>

                      <a href='https://github.com/farazfayyaz/hakr-mp3-landing-page'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                          Code
                        </button>
                      </a>
                    </div>*/}

                </div>

              </div>

            </div>

        </div>
    </div>
  )
}

export default Work;
