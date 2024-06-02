'use client'
import React from 'react'
import Image from 'next/image'
const Card = () => {
  return (
    <div className="flex w-[20rem] h-[30rem] bg-white rounded-lg m-4 hover:translate-z">
       <Image src='/next.svg' height={400} width={400} alt={"Image not working"}></Image>

      <div className=""></div>
    </div>
  )
}

export default Card
