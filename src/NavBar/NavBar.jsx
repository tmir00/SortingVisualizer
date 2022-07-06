import React, {useEffect, useState} from 'react'
import {Row, Col, Button, Typography, Drawer, Menu, Slider, Divider, Grid} from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UpCircleOutlined,
    FastForwardOutlined,
    ApartmentOutlined,
    MergeCellsOutlined,
    VerticalAlignBottomOutlined,
    SelectOutlined
  } from '@ant-design/icons';
import { bblSort } from '../Algorithms/bubbleSort';
import { quicksort } from '../Algorithms/quickSort';
import { heapsort } from '../Algorithms/heapSort';
import { mergesort } from '../Algorithms/mergeSort';
import { insertionSort } from '../Algorithms/insertionSort';
import { selectionSort } from '../Algorithms/selectionSort';

export let counter = 0

const { Title } = Typography
const {useBreakpoint} = Grid
let addCounter = 25

export function appendCounter() {counter += addCounter}

function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = [
    getItem('Bubble Sort', 'Bubble Sort', <UpCircleOutlined />),
    getItem('Quick Sort', 'Quick Sort', <FastForwardOutlined />),
    getItem('Heap Sort', 'Heap Sort', <ApartmentOutlined />),
    getItem('Merge Sort', 'Merge Sort', <MergeCellsOutlined />),
    getItem('Insertion Sort', 'Insertion Sort', <VerticalAlignBottomOutlined />),
    getItem('Selection Sort', 'Selection Sort', <SelectOutlined />),
  ];

const NavBar = (props) => {
    const [visible, setVisible] = useState(false)
    const [algorithm, setAlgorithm] = useState('Bubble Sort')
    const [disableButtons, setDisabled] = useState(false)
    const [tempAddCounter, setAddCounter] = useState(25)

    useEffect(() => {
        addCounter = tempAddCounter
    }, [tempAddCounter]);

    const showDrawer = () => {
        setVisible(true)
    }

    const onClose = () => {
        setVisible(false)
    }

    const onClick = (e) => {
        setAlgorithm(e.key)
        onClose()
    }

    const runAlgorithms = () => {
        setDisabled(true)
        if (algorithm === 'Bubble Sort') {
            bblSort(props.array, props.swap, props.color, props.comparison)
            setTimeout(() => {
                setDisabled(false)
            }, counter)
            counter = 0
        } else if (algorithm === 'Quick Sort') {
            quicksort(props.array, 0, props.array.length - 1, props.swap, props.color)
            setTimeout(() => {
                setDisabled(false)
            }, counter)
            counter = 0
        } else if (algorithm === 'Heap Sort') {
            heapsort(props.array, props.swap, props.color)
            setTimeout(() => {
                setDisabled(false)
            }, counter)
            counter = 0
        } else if (algorithm === 'Merge Sort') {
            mergesort(props.array, 0, props.array.length - 1,props.swap, props.color)
            setTimeout(() => {
                setDisabled(false)
            }, counter)
            counter = 0
        } else if (algorithm === 'Insertion Sort') {
            insertionSort(props.array, props.swap, props.color)
            setTimeout(() => {
                setDisabled(false)
            }, counter)
            counter = 0
        } else if (algorithm === 'Selection Sort') {
            selectionSort(props.array, props.swap, props.color)
            setTimeout(() => {
                setDisabled(false)
            }, counter)
            counter = 0
        }
        setVisible(false)
        }

    const screens = useBreakpoint();

    return (
        <Row align='middle' style={
            {
                backgroundColor: "#01061D", 
                marginBottom: "20px", 
                marginTop: 0,
                boxShadow: "0px 15px 10px -15px #111",
            }}>
            <Col xs={0} sm={8}>
                <Button type='ghost' style={{marginBottom: "5px", marginTop: "5px", marginLeft: "5px", color: "#E2E2E2"}} disabled={disableButtons} onClick={() => showDrawer()}>
                    {visible ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
                </Button>
                <Drawer
                    title="Algorithms"
                    placement="left"
                    closable={true}
                    onClose={onClose}
                    visible={visible}
                    bodyStyle={{backgroundColor: "#001529", padding: 0}}
                >
                    <Menu
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        theme="dark"
                        items={items}
                        onClick={onClick}
                    />
                </Drawer>
                <Button type='ghost' style={{marginBottom: "5px", marginTop: "5px", marginLeft: "5px", color: "#E2E2E2"}} disabled={disableButtons} onClick={ () => props.resetArray()}>Create New Array</Button>
                <Button type='ghost' style={{marginBottom: "5px", marginTop: "5px", marginLeft: "5px", color: "#E2E2E2"}} disabled={disableButtons} onClick={ runAlgorithms }>Run {algorithm}</Button>  
            </Col>

            {!screens.sm ? <Col span={8} justify="middle">
                <Button type='ghost' style={{marginLeft: "5px", marginBottom: "5px", color: "#E2E2E2"}} disabled={disableButtons} onClick={() => showDrawer()}>
                        {visible ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
                </Button>
                <Drawer
                        title="Algorithms"
                        placement="left"
                        closable={true}
                        onClose={onClose}
                        visible={visible}
                        bodyStyle={{backgroundColor: "#001529", padding: 0}}
                    >
                        <Menu
                            defaultSelectedKeys={['1']}
                            mode="inline"
                            theme="dark"
                            items={items}
                            onClick={(e) => setAlgorithm(e.key)}
                        />

                    <Divider style={{backgroundColor: "whitesmoke"}}></Divider>

                    <Col align="middle">
                    <Button type='ghost' style={{marginLeft: "5px", color: "#E2E2E2"}} disabled={disableButtons} onClick={ () => {
                        props.resetArray()
                        setVisible(false)
                        }}
                    >Create New Array</Button>
                    <Button type='ghost' style={{marginLeft: "5px", color: "#E2E2E2"}} disabled={disableButtons} onClick={ runAlgorithms }>Run {algorithm}</Button>
                        </Col>
                        </Drawer>
            </Col> : <></> }

            <Col span={8}>
                <Slider defaultValue={25} min={10} max={100} disabled={disableButtons} onChange={(e) => setAddCounter(e)}/>
            </Col>
            <Col span={8} align="right">
                <Title level={4} style={{color: "#E2E2E2", margin: "5px"}}>SORTING VISUALIZER</Title>
            </Col>
        </Row>
    )
}

export default NavBar