import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"
import './style.css'


export default function App() {
    const cards = data.map((item, index) => {
        if(data.length  !== index + 1){
            return (
                <Card
                    key={item.id}
                    {...item}
                    isLast={false}
                />
            )
        }else{
            return (
                <Card
                    key={item.id}
                    {...item}
                    isLast
                />
            )
        }
        
    })        
    
    return (
        <div>
            <Navbar />
            
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}
