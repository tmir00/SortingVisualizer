import React, { useEffect, useState } from 'react'
import { Row, Col, Grid } from 'antd'
import NavBar from '../NavBar/NavBar';

const { useBreakpoint } = Grid;

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

const Visualizer = () => {
    const [array, setArray] = useState([])
    const screen = useBreakpoint()

    // From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const resetArray = () => {
        
        const list = []
        let listSize = 5

        if (screen.xxl) {
            listSize = randomIntFromInterval(5, 250)
        } else if (screen.xl) {
            listSize = randomIntFromInterval(5, 200)
        } else if (screen.lg) {
            listSize = randomIntFromInterval(5, 150)
        } else if (screen.md) {
            listSize = randomIntFromInterval(5, 100)
        } else if (screen.sm) {
            listSize = randomIntFromInterval(5, 50)
        } else if (screen.xs) {
            listSize = randomIntFromInterval(5, 25)
        } 

        for (let i = 0; i < listSize; i++) {
            list.push(randomIntFromInterval(5, 1000))
        }
        setArray(list)

        let bar = undefined
        for (let i = 0; i < listSize; i++) {
            bar = document.getElementById(i)
            if (bar !== undefined) {
                color(i, "#9a0307", 0)
            }
        }
    }

    // eslint-disable-next-line
    useEffect(() => resetArray(), [])

    const calculateHeight = (value) => {
        return 0.9 * ((value / Math.max(...array)) * (windowSize.innerHeight))
    }

    const color = (index, color, counter) => {
        if (index < array.length)
        setTimeout(() => {
            const bar1 = document.getElementById(index)
            bar1.style.backgroundColor = color
        }, counter)
    }

    const swap = (index1, index2, counter) => {
        setTimeout(() => {
            const bar1 = document.getElementById(index1)
            const bar2 = document.getElementById(index2)
            const tempHeight = bar1.style.height
            bar1.style.height = bar2.style.height
            bar2.style.height = tempHeight
        }, counter)
    }

    return (
        <>
            <NavBar resetArray={resetArray} array={array.slice()} swap={swap} color={color} setArray={setArray}></NavBar>
            <Row justify='center' align='bottom'>
                <Col  align='center'>
                    {array.map((value, index) => (            
                        <div key={index} id={index} style={
                            { 
                            height: calculateHeight(value),
                            backgroundColor: "#9a0307", 
                            display: "inline-block", 
                            width: "4px",
                            bottom: 0,
                            margin: "1px"
                            }
                        }>
                        </div>
                    ))}
                </Col>
            </Row>
        </>
    )
}

export default Visualizer