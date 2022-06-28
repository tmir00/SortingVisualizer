import React, {useState} from 'react'
import {Row, Col, Button, Typography, Drawer, Menu} from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DesktopOutlined,
    PieChartOutlined,
    ContainerOutlined,
    MailOutlined
  } from '@ant-design/icons';
import { bblSort } from '../Algorithms/bubbleSort';
import { quickSortStart } from '../Algorithms/quickSort';

const { Title } = Typography

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
            <Col span={12}>
                <Button type='ghost' style={{marginLeft: "5px", color: "#E2E2E2"}} onClick={() => showDrawer()}>
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
                <Button type='ghost' style={{marginLeft: "5px", color: "#E2E2E2"}} onClick={ () => props.resetArray()}>Create New Array</Button>
                <Button type='ghost' style={{marginLeft: "5px", color: "#E2E2E2"}} onClick={ () => {
                    if (algorithm === 'Bubble Sort') {
                        bblSort(props.array, props.swap, props.color)
                    } else if (algorithm === 'Quick Sort') {
                        quickSortStart(props.array, props.swap, props.color, 0, props.array.length - 1)
                    }
                    }}>Run {algorithm}</Button>
            </Col>
            <Col span={12} align="right">
                <Title level={2} style={{color: "#E2E2E2", margin: "5px"}}>SORTING VISUALIZER</Title>
            </Col>
        </Row>
    )
}

export default NavBar