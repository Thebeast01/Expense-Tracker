import React from 'react'

const About = () => {
        return (
                <div className='bg-slate-900 h-full flex justify-center items-center  text-slate-50 '>
                       <div className='p-5  w-1/2  bg-slate-600 rounded-lg'>
                        <h1 className='text-4xl  mb-3 underline'>About</h1>
<span className='text-sm '>
                                The Expense Tracker Application is a simple tool designed to help users keep track of their expenses. It allows users to input their expenses, including the item name and price, and then displays a list of all recorded expenses along with their total cost. Users can also delete individual expenses if needed.
                        </span>
                        <h1 className='text-2xl text-slate-300 font-bold '>Features</h1>
                        <span>
                                <ul className=' text-sm '>
                                        <li> <b>Input Form:</b> Users can input the name and price of an expense using the provided form</li>
                                        <li> <b>Add Expense:</b> Users can add an expense to the list by filling out the form and clicking the &quot;Add&quot; button.</li>
                                        <li><b>Display Expenses:</b> All recorded expenses are displayed in a list format, showing the item name and price.</li>
                                        <li> <b>Delete Expense:</b> Each expense in the list has a delete button that allows users to remove individual expenses.</li>
                                        <li><b>Total Cost:</b> The total cost of all recorded expenses is displayed at the bottom of the page.</li>
                                        <li><b>Local Storage:</b> Expenses are stored locally using browser local storage, allowing users to revisit the page and see their previously recorded expenses.</li>
                                </ul>
                        </span>
                        </div>
                </div>
        )
}

export default About
