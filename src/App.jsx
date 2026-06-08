import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {

    return (

        <section className="flex-center h-[100vh]">
            <p className="text-5xl text-indigo-500">Hello my name is Don</p>
        </section>

    )
}

export default App 