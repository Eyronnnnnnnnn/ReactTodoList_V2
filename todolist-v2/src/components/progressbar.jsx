'use client'
import React from 'react'

const CircularProgressBar = ({ strokeWidth = 20, sqSize = 210, percentage = 10 }) => {
  const radius = (sqSize - strokeWidth) / 2
  const viewBox = `0 0 ${sqSize} ${sqSize}`
  const dashArray = radius * Math.PI * 2
  const dashOffset = dashArray - (dashArray * percentage) / 100

  // Conditional style for percentage text
  const percentageColor = percentage === 10 ? "white" : "#172554"
  const percentageOpacity = percentage === 10 ? 0.6 : 1

  // Conditional style for "complete" label
  const labelColor = percentage === 10 ? "white" : "#172554"
  const labelOpacity = percentage === 10 ? 0.6 : 1

  return (
    <svg width={sqSize} height={sqSize} viewBox={viewBox}>
      {/* Background circle */}
      <circle
        className="fill-none stroke-[#ececec4d]"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={strokeWidth}
      />
      {/* Progress circle */}
      <circle
        className="fill-none stroke-[#f5f2f2ce] transition-all ease-in"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{ strokeDasharray: dashArray, strokeDashoffset: dashOffset }}
      />
      {/* Percentage text */}
      <text
        x="50%"
        y="45%"
        textAnchor="middle"
        fill={percentageColor}
      
        className="text-3xl font-bold"
      >
        {percentage}%
      </text>
      {/* Label text */}
      <text
        x="50%"
        y="59%"
        textAnchor="middle"
        fill={labelColor}
        fillOpacity={labelOpacity}
        className="text-lg font-medium uppercase"
      >
        complete
      </text>
    </svg>
  )
}

export default CircularProgressBar
