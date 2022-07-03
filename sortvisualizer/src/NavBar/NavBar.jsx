import React, {useState} from 'react'
import {Row, Col, Button, Typography, Drawer, Menu, Slider} from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DesktopOutlined,
    PieChartOutlined,
    ContainerOutlined,
    MailOutlined
  } from '@ant-design/icons';
import { bblSort } from '../Algorithms/bubbleSort';
import { quicksort } from '../Algorithms/quickSort';
import { heapsort } from '../Algorithms/heapSort';

export let counter = 0

let addCounter = 25

const { Title } = Typography

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
    getItem('Bubble Sort', 'Bubble Sort', <MailOutlined />),
    getItem('Quick Sort', 'Quick Sort', <PieChartOutlined />),
    getItem('Heap Sort', 'Heap Sort', <DesktopOutlined />),
    getItem('Merge Sort', 'Merge Sort', <ContainerOutlined />),
  ];

const NavBar = (props) => {
    const [visible, setVisible] = useState(false)
    const [algorithm, setAlgorithm] = useState('Bubble Sort')
    const [disableButtons, setDisabled] = useState(false)

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

    return (
        <Row align='middle' style={
            {
                backgroundColor: "#01061D", 
                marginBottom: "20px", 
                marginTop: 0,
                boxShadow: "0px 15px 10px -15px #111",
            }}>
            <Col span={8}>
                <Button type='ghost' style={{marginLeft: "5px", color: "#E2E2E2"}} disabled={disableButtons} onClick={() => showDrawer()}>
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
                <Button type='ghost' style={{marginLeft: "5px", color: "#E2E2E2"}} disabled={disableButtons} onClick={ () => props.resetArray()}>Create New Array</Button>
                <Button type='ghost' style={{marginLeft: "5px", color: "#E2E2E2"}} disabled={disableButtons} onClick={ () => {
                    setDisabled(true)
                    if (algorithm === 'Bubble Sort') {
                        const result = bblSort(props.array, props.swap, props.color)
                        setTimeout(() => {
                            props.setArray(result)
                            setDisabled(false)
                        }, counter)
                        counter = 0
                    } else if (algorithm === 'Quick Sort') {
                        const result = quicksort(props.array, 0, props.array.length - 1, props.swap, props.color)
                        setTimeout(() => {
                            props.setArray(result)
                            setDisabled(false)
                        }, counter)
                        counter = 0
                    } else if (algorithm === 'Heap Sort') {
                        const result = heapsort(props.array, props.swap, props.color)
                        setTimeout(() => {
                            props.setArray(result)
                            setDisabled(false)
                        }, counter)
                        counter = 0
                    }
                    }}>Run {algorithm}</Button>
                    
            </Col>
            <Col span={8}>
                <Slider defaultValue={25} min={10} max={200} disabled={disableButtons} onChange={(e) => addCounter = e}/>
            </Col>
            <Col span={8} align="right">
                <Title level={2} style={{color: "#E2E2E2", margin: "5px"}}>SORTING VISUALIZER</Title>
            </Col>
        </Row>
    )
}

export default NavBar