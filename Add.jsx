import React from 'react'

export default function Add() {
  return (
    <div>
     {Array(10).map((item, idx) => (
        {idx}
     ))}
    </div>
  )
}
