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
        let listSize = 0

        if (screen.xs) {
            listSize = randomIntFromInterval(5, 50)
        } else if (screen.sm) {
            listSize = randomIntFromInterval(5, 100)
        } else if (screen.md) {
            listSize = randomIntFromInterval(5, 150)
        } else if (screen.lg) {
            listSize = randomIntFromInterval(5, 200)
        } else {
            listSize = randomIntFromInterval(5, 500)
        }

        for (let i = 0; i < listSize; i++) {
            list.push(randomIntFromInterval(5, 1000))
        }
        setArray(list)
    }

    // eslint-disable-next-line
    useEffect(() => resetArray(), [])

    const calculateHeight = (value) => { return 0.9 * ((value / Math.max(...array)) * (windowSize.innerHeight))}

    return (
        <>
            <NavBar resetArray={resetArray}></NavBar>
            <Row justify='center' align='bottom'>
                <Col span={24} align='center'>
                    {array.map((value, index) => (            
                        <div key={index} style={
                                { 
                                height: calculateHeight(value),
                                backgroundColor: "#9a0307", 
                                display: "inline-block", 
                                width: "4px",
                                bottom: 0,
                                margin: "1px"
                                }
                            }>
                            <></>
                        </div>
                    ))}
                </Col>
            </Row>
        </>
    )
}

export default Visualizer