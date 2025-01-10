import React from "react"
import { TodoForm } from "../../components/forms/TodoForm"


export const Work: React.FC = () => {
    const electron = (window as any).electron
    return(
        <div>
            <h1>Work</h1>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/work'>Work</a></li>
            </ul>
            The home is @{electron.arch()}  <br/>
            The home is @{electron.osVersion()}
            <TodoForm/>
        </div>
    )
}