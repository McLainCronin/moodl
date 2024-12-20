'use client'
import { gradients, baseRating, demoData } from '@/utils/index'
import React, { useState } from 'react'
import { Flamenco } from "next/font/google";

const flamenco = Flamenco({ subsets: ["latin"], weight: ['400'] });


const months = { 'January': 'Jan', 'February': 'Feb', 'March': 'Mar', 'April': 'Apr', 'May': 'May', 'June': 'Jun', 'July': 'Jul', 'August': 'Aug', 'September': 'Sept', 'October': 'Oct', 'November': 'Nov', 'December': 'Dec' }
const now = new Date()
const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


export default function Calendar(props) {
    const { demo, completeData, handleSetMood } = props

    const now = new Date()
    const currMonth = now.getMonth()
    const [selectedMonth, setSelectedMonth] = useState(Object.keys(months)[currMonth])
    const [selectedYear, setSelectedYear] = useState(now.getFullYear())

    const numericMonth = Object.keys(months).indexOf(selectedMonth)
    const data = completeData?.[selectedYear]?.[numericMonth] || {}
    
    function handleIncrementMonth(val) {
        if (numericMonth + val < 0) {
            setSelectedMonth(Object.keys(months)[11])
            setSelectedYear(selectedYear - 1)
        } else if (numericMonth + val > 11) {
            setSelectedMonth(Object.keys(months)[0])
            setSelectedYear(selectedYear + 1)
        } else {
            setSelectedMonth(Object.keys(months)[numericMonth + val])
        }
    }


    const monthNow = new Date(selectedYear, Object.keys(months).indexOf(selectedMonth), 1)
    const firstDayOfMonth = monthNow.getDay()
    const daysInMonth = new Date(selectedYear, Object.keys(selectedMonth).indexOf(selectedMonth) + 1, 0).getDate()

    const daysToDisplay = firstDayOfMonth + daysInMonth
    const numRows = (Math.floor(daysToDisplay / 7)) + (daysToDisplay % 7 ? 1 : 0)

    return (
        <div className='flex flex-col gap-2'>
            <div className='grid grid-cols-5 gap-4'>
                <button onClick={() => {
                    handleIncrementMonth(-1)
                }} className='ml-auto'><i className='fas fa-chevron-left text-[#ef447d] text-lg sm:text-xl duration-200 hover:opacity-60'></i></button>
                <p className={'text-center col-span-3 capitalized whitespace-nowrap textGradient ' + flamenco.className}>
                    {selectedMonth} {selectedYear}
                </p>
                <button onClick={() => {
                    handleIncrementMonth(+1)
                }} className='mr-auto'><i className='fas fa-chevron-right text-[#ef447d] text-lg sm:text-xl duration-200 hover:opacity-60'></i></button>
            </div>
            <div className='flex flex-col overflow-hidden gap-1 py-4 sm:py-6 md:py-10'>
                {[...Array(numRows).keys()].map((row, rowIndex) => {
                    return (
                        <div key={rowIndex} className='grid grid-cols-7 gap-1'>
                            {dayList.map((dayOfWeek, dayOfWeekIndex) => {
                                let dayIndex = (rowIndex * 7) + dayOfWeekIndex - (firstDayOfMonth - 1)
                                
                                let dayDisplay = dayIndex > daysInMonth ? false : (row === 0 && dayOfWeekIndex < firstDayOfMonth) ? false : true
                                
                                let isToday = dayIndex === now.getDate()
                                
                                if (!dayDisplay) {
                                    return (
                                        <div key={dayOfWeekIndex} className='bg-white'>
                                            
                                        </div>
                                    )
                                }
                                
                                let color = demo ? gradients.sherbert[baseRating[dayIndex]] : dayIndex in data ? gradients.sherbert[data[dayIndex]] : 'white'
                                
                                return (
                                    <div style={{background: color}} className={'text-xs sm:text-sm border border-solid p-2 flex items-center gap-2 justify-between rounded-lg ' + (isToday ? ' border-[#ff74a2] ' : ' border-[#e5acbf] ') + (color === 'white' ? ' text-[#ff74a2]' : ' text-white')} key={dayOfWeekIndex}>
                                        <p>{dayIndex}</p>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
