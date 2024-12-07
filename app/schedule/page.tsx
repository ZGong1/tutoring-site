"use client"

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const Page = () => {
    return ( 
        <div className="h-[90vh]">
            <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            // height="100%"
            />
        </div> 
    );
}
 
export default Page;