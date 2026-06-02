import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {

    return (
        <div>
            <section>
                <p className="text-5xl text-indigo-500">Hello my name is Don</p>
            </section>
            <section>About</section>
            <section>Contact</section>
        </div>
    )
}

export default App 