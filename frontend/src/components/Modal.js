import React, { useState } from 'react';
import { Modal } from 'antd';
import { useEffect } from 'react';
import { Button, DatePicker, Form, Input, Select } from 'antd';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { apiActions } from '../store/apiSlice';


const EndorseModal = () => {

    const file = useSelector((state) => state.api.file)
    console.log(file, "file start")

    const [isModalOpen, setIsModalOpen] = useState(false);
    const {to, text, subject, attachment} = useSelector((state) => state.api)


    const showModal = () => {

        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const { TextArea } = Input;

    const [form] = Form.useForm();

    const { Option } = Select;

    const dispatch = useDispatch();

    const handleFileChange = async (e) => {
        const selectedFile = e.target.files[0];
        console.log(selectedFile, "point 1");
        dispatch(apiActions.setAttachment(e.target.files[0]))
        try {

            const formdata = new FormData();
            formdata.append("image", selectedFile);

            await axios.post(
                "http://localhost:8081/api/v1/upload/file",
                formdata,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            )
                .then((res) => {
                    console.log(res, "point2");
                    dispatch(apiActions.setFile(res.data.filename))

                })

        } catch (error) {
            console.error("Form validation failed:", error);
        }

    };

    const handleSubmit = async (values) => {

        dispatch(apiActions.setTo(values.email))
        dispatch(apiActions.setSubject(values.status))
        dispatch(apiActions.setText(`Hello ${values.name}`))

        const formdata = {
            name: values.name,
            mobile: values.mobile,
            email: values.email,
            aadhar: values.aadhar,
            pan: values.pan,
            company: values.company,
            title: values.title,
            doj: values.doj,
            doe: values.doe,
            status: values.status,
            reasonToEndorse: values.reasonToEndorse,
            proof: file,
            witnesses: values.witnesses,
        };

        console.log(formdata, "formdata");

        try {


            await axios.post("http://localhost:8081/api/v1/upload/item", formdata)
                .then((res) => {
                    console.log(res.data, "itemdata");
                    setIsModalOpen(false);
                    form.resetFields();

                })

        } catch (error) {
            console.error("Adding items failed:", error);
        }

        const emailData = {
            "to" : to,
            "subject" : subject,
            "text" : text,
            "attachment" : attachment

        };
        // emailData.append('to', to);
        // emailData.append('subject', subject);
        // emailData.append('text', text);
        // emailData.append('attachment', attachment);

        console.log(emailData, emailData)

        try {
            const response = await axios.post('http://localhost:8081/api/v1/email/send-email',emailData );

            if (response.ok) {
                console.log('Email sent successfully');
            } else {
                console.error('Error sending email:', response.statusText);
            }
        } catch (error) {
            console.error('Error sending email:', error.message);
        }


    };

    useEffect(() => {


    }, [dispatch]);


    return (
        <div className='modal-container'>
            <Button type="primary" onClick={showModal} style={{ width: '200px' }}>
                Endorse
            </Button>

            <Modal title="Endorse Candidate" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <Form
                    form={form}
                    className='endorse-modal'
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
                    <Form.Item

                        name="company"
                        rules={[{ required: true, message: 'Please enter your company name' }]}
                    >
                        <Input placeholder="Company Name" />
                    </Form.Item>
                    <Form.Item

                        name="title"
                        rules={[{ required: true, message: 'Please enter the title' }]}
                    >
                        <Input placeholder="Title" />
                    </Form.Item>

                    <Form.Item

                        name="doj"
                        rules={[{ required: true, message: 'Date of joining' }]}
                    >
                        <DatePicker style={{ width: '100%' }} placeholder="Select your joining date" />
                    </Form.Item>
                    <Form.Item

                        name="doe"
                        rules={[{ required: true, message: 'Date of ending' }]}
                    >
                        <DatePicker style={{ width: '100%' }} placeholder="Select your end date" />
                    </Form.Item>
                    <Form.Item

                        name="status"
                        rules={[{ required: true, message: 'Please select the status' }]}
                    >
                        <Select placeholder="Select the status">
                            <Option value="Fired/Terminated">Fired/Terminated</Option>
                            <Option value="Absconded">Absconded</Option>
                            <Option value="Relieved">Relieved</Option>
                        </Select>
                    </Form.Item>


                    <Form.Item
                        name="reasonToEndorse"
                        label="Reason"
                        rules={[{ required: true, message: 'Please provide a reason to endorse' }]}
                    >
                        <TextArea rows={4} placeholder="Enter your reason to endorse" />
                    </Form.Item>


                    <Form.Item
                        name="proof"
                        label="Proof"
                        rules={[{ required: true, message: 'Please provide a attachment' }]}
                    >

                        <input
                            type="file"
                            id="file"
                            accept=".pdf"
                            onChange={handleFileChange}
                        />
                    </Form.Item>


                    <Form.Item
                        name="witnesses"
                        label="Witnesses "
                        rules={[{ required: true, message: 'Please provide details of witnesses' }]}
                    >
                        <TextArea rows={4} placeholder="Enter details of witnesses" />
                    </Form.Item>

                    <Form.Item className = "modalbutton" wrapperCol={{ offset: 4, span: 14 }}>
                        <Button type="primary" htmlType="submit" style={{ width: '200px' }}>
                            Submit
                        </Button>
                    </Form.Item>


                </Form>


            </Modal>

        </div>
    );
};

export default EndorseModal;