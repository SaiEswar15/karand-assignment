import React, {useState} from 'react'
import { Modal } from 'antd';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { apiActions } from '../store/apiSlice';
import {Button,Form,Input} from 'antd';
import { useEffect } from 'react';
import {useSelector } from "react-redux"

function SearchModal() {

    const searchModalData = useSelector((state)=>state.api.searchModalData)
    const [isModalOpen, setIsModalOpen] = useState(false);
    console.log(searchModalData, "searchModal check1")


    const [form] = Form.useForm();

    const dispatch = useDispatch();

    const showModal = () => {
        
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = async(values) => {
        
        
        const formdata = {
            name: values.name,
            mobile: values.mobile,
            email: values.email,
            aadhar : values.aadhar,
            pan : values.pan
            
        };

        console.log(formdata, "formdata");

        try {

           
            await axios.post("http://localhost:8081/api/v1/search/item",formdata)
                .then((res) => {
                    console.log(res.data, "itemdata");
                    
                    dispatch(apiActions.setSearchModalData(res.data))
                    // Navigate("/dashboard")
                    setIsModalOpen(false);
                    form.resetFields();
                    
                })

        } catch (error) {
            console.error("Getting items failed:", error);
        }
        
        
    };

    useEffect(() => {
        // console.log(searchModal, "searchModal")

    }, [dispatch,searchModalData]);

    return (
        <div className='searchmodal-container'>
            <Button type="primary" onClick={showModal} style={{ width: '200px' }}>
                Search
            </Button>
            <Modal title="Search your endorse" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
            <Form
                    form={form}

                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    // disabled={componentDisabled}
                    style={{ maxWidth: 600 }}
                    onFinish={handleSubmit}
                >
                    <Form.Item

                        name="name"
                        rules={[{ required: true, message: 'Please enter your name' }]}
                    >
                        <Input placeholder="Enter your name" />
                    </Form.Item>
                    <Form.Item

                        name="mobile"
                        rules={[{ required: true, message: 'Please enter your mobile' }]}
                    >
                        <Input placeholder="Enter your mobile" />
                    </Form.Item>
                    <Form.Item

                        name="email"
                        rules={[{ required: true, message: 'Please enter your email' }]}
                    >
                        <Input type="email" placeholder="Enter your email" />
                    </Form.Item>
                    <Form.Item

                        name="aadhar"
                        rules={[{ required: true, message: 'Please enter Aadhar Number' }]}
                    >
                        <Input type="number" placeholder="Enter Aadhar Number" />
                    </Form.Item>
                    <Form.Item

                        name="pan"
                        rules={[{ required: true, message: 'Please enter PAN Number' }]}
                    >
                        <Input type="text" placeholder="Enter PAN Number" />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>


                </Form>
            </Modal>
            
        </div>
    )
}

export default SearchModal