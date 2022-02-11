import React from "react"
import axios from 'axios'

function MainContent(props) {


    const baseURL = "v2/networks"
    axios
        .get(baseURL).then((response) => {
            
            console.log(response.data)
            
            
            if(response.status === 200 || response.status === 201) {
                alert(response)
                
            } else {
                alert('Error')
                //alert('Not valid info for an event')
            }
        }
        ).catch((error) => {
            console.log(error)
            alert('Incorrect input. Try again')
        })


    return (
        <div>
            <h1>Main Content</h1>
        </div>
    )
}

export default MainContent