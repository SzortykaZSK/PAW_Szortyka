import React from 'react'
import {Homepage} from "../pages/Homepage"
import {About} from '../pages/About'

interface RouteElement {
    path: string
    element: React.JSX.Element
    title: string
}

export const routes: Array<RouteElement> =[
    {
        path:"/",
        element:<Homepage />,
        title:"Homepage",
    },
    {
        path:"/about",
        element:<About />,
        title:"Homepage",
    }
]
