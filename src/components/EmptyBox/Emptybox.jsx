import React from 'react'
import "./Emptybox.css"
import Lottie from "lottie-react";
import nothing from "./nothing.json";

export default function Emptybox() {
  return (
    <div className="allWrapperEmpty">
      <Lottie className='nothingLottie' animationData={nothing} loop={true} />
      <div className='EmptyBucket'> Your Bucket of To-Do Things is empty </div>
    </div>
  )
}
