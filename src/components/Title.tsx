import React from 'react'

export default function Menu() {
  return (
    <div className='flex flex-col justify-center items-center mt-5 pt-3 md:pt-10 mb-4'>
      <h1 className='mb-2 text-2xl mb:text-4xl'>Welcome to Randy-Poké!</h1>
      <p className='text-base text-center'>Click on the "Hit me!" button below to get a random Pokémon.</p>
      <p className='text-base text-center'>Filter by type, generation and Mega/Primal versions.</p>
    </div>
  )
}
