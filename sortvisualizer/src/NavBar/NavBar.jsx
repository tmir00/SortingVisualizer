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
    getItem('Insertion Sort', '1', <PieChartOutlined />),
    getItem('Heap Sort', '2', <DesktopOutlined />),
    getItem('Merge Sort', '3', <ContainerOutlined />),
    getItem('Bubble Sort', '4', <MailOutlined />,
    ),
  ];

const NavBar = (props) => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

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
                    />
                </Drawer>
                <Button type='ghost' style={{marginLeft: "5px", color: "#E2E2E2"}} onClick={ () => props.resetArray()}>Create New Array</Button>
            </Col>
            <Col span={12} align="right">
                <Title level={2} style={{color: "#E2E2E2", margin: "5px"}}>SORTING VISUALIZER</Title>
            </Col>
        </Row>
    )
}

export default NavBar