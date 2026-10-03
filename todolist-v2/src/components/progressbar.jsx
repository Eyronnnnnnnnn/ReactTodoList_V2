'use client'
import React from 'react'

const CircularProgressBar = ({ strokeWidth = 20, sqSize = 210, percentage }) => {
  const radius = (sqSize - strokeWidth) / 2
  const viewBox = `0 0 ${sqSize} ${sqSize}`
  const dashArray = radius * Math.PI * 2
  const dashOffset = dashArray - (dashArray * percentage) / 100

  return (
    <svg width={sqSize} height={sqSize} viewBox={viewBox}>
     
      <circle
        className="fill-none stroke-[#ececec4d]"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={strokeWidth}
      />
 
      <circle
        className="fill-none stroke-[#f5f2f2ce] transition-all duration-700 ease-in-out drop-shadow-md"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{ strokeDasharray: dashArray, strokeDashoffset: dashOffset }}
      />

      <text
        x="50%"
        y="45%"
        textAnchor="middle"
        fill="white"
        className="text-3xl font-bold transition-all duration-500 ease-in-out"
      >
        {percentage}% 
      </text>
      {/* Label text with opacity transition */}
      <text
        x="50%"
        y="59%"
        textAnchor="middle"
        fill="white"
        className="text-lg font-medium uppercase transition-opacity duration-500 ease-in-out"
        style={{ opacity: percentage === 10 ? 0.6 : 1 }}
      >
        complete
      </text>
    </svg>
  )
}

export default CircularProgressBar
