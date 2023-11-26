import React, { useState } from 'react';
import { Modal } from 'antd';
import { useEffect } from 'react';
import { Button, DatePicker, Form, Input, Select } from 'antd';
// import { Button, Form, Input, Select } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { apiActions } from '../store/apiSlice';
// import DupSearchComponent from './DupSearchComponent';
// import ReactDOMServer from 'react-dom/server';
import { componentHtml } from './componentHtml';

const EndorseModal = () => {

    const file = useSelector((state) => state.api.file)
    const htmlCode = useSelector((state) => state.api.htmlCode)
    const newData = useSelector((state) => state.api.newData)
    const searchModalData = useSelector((state) => state.api.searchModalData)
    
    console.log(file, "file start")

    const [isModalOpen, setIsModalOpen] = useState(false);
    const { to, text, subject, email, attachment } = useSelector((state) => state.api)


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


    };

    // const normFile = (e) => {
    //     if (Array.isArray(e)) {
    //       return e;
    //     }
    //     return e && e.fileList;
    //   };

    // const handleSubmit =(values) => {

    //     dispatch(apiActions.setTo(values.email))
    //     dispatch(apiActions.setSubject(values.status))
    //     dispatch(apiActions.setText(`Hello ${values.name}`))

    //     const formdata = {
    //         name: values.name,
    //         // mobile: values.mobile,
    //         email: values.email,
    //         aadhar: values.aadhar,
    //         pan: values.pan,
    //         // company: values.company,
    //         // title: values.title,
    //         // doj: values.doj,
    //         // doe: values.doe,
    //         status: values.status,
    //         // reasonToEndorse: values.reasonToEndorse,
    //         proof: file,
    //         // witnesses: values.witnesses,
    //     };

    //     console.log(formdata, "formdata");

    //     try {

    //         //uploading formdata
    //         axios.post("http://localhost:8081/api/v1/upload/item", formdata)
    //             .then((res) => {
    //                 console.log(res.data, "itemdata");
    //                 // dispatch(apiActions.addItemData(res.data))
    //                 setIsModalOpen(false);
    //                 form.resetFields();

    //                 const newdata = {
    //                     name: res.data.name,
    //                     // mobile: res.data.mobile,
    //                     email: res.data.email,
    //                     aadhar : res.data.aadhar,
    //                     pan : res.data.pan

    //                 };

    //                 console.log(newdata, "newdata");
    //                 dispatch(apiActions.addNewData(res.data))

    //             })
    //             // .then(() => {

    //             //     try {
    //             //         axios.post("http://localhost:8081/api/v1/search/item",newData)
    //             //             .then((res) => {
    //             //                 console.log(res.data, "newdata");
    //             //                 dispatch(apiActions.setSearchModal(res.data))
    //             //                 // Navigate("/dashboard")
    //             //                 // setIsModalOpen(false);
    //             //                 // form.resetFields();

    //             //             })

    //             //     } catch (error) {
    //             //         console.error("Getting items failed:", error);
    //             //     }
    //             // })
    //             .then(() => {
    //                 //convertion
    //                 // const componentHtml = ReactDOMServer.renderToString(<SearchComponent />);
    //                 // dispatch(apiActions.setHtmlCode(componentHtml))

    //                 const emailData = {
    //                     "to": to,
    //                     "subject": subject,
    //                     "text": text,
    //                     // "attachmentName" : file
    //                     // "htmlCode" : htmlCode

    //                 };

    //                 console.log(emailData, emailData)

    //                 try {

    //                     const response = axios.post('http://localhost:8081/api/v1/email/send-email', emailData);

    //                     if (response.ok) {
    //                         console.log('Email sent successfully');
    //                     } else {
    //                         console.error('Error sending email:', response.statusText);
    //                     }
    //                 } catch (error) {
    //                     console.error('Error sending email:', error.message);
    //                 }

    //             })


    //     } catch (error) {
    //         console.error("Adding items failed:", error);
    //     }


    // };

    const handleSubmit = async (values) => {
        try {
            // dispatch(apiActions.setTo(values.email));
            // dispatch(apiActions.setSubject(values.status));
            // dispatch(apiActions.setText(`Hello ${values.name}`));

            const newData = 
            {
                checkingmail : email,
                folderName : values.email
            }
            console.log(newData)

            const create = await axios.post(`http://localhost:8081/api/v1/create/createFolderInside`, newData)
            console.log(create.data, "createData")

            const create2 = await axios.post(`http://localhost:8081/api/v1/create/createFolderOutside`, newData)
            console.log(create2.data, "createData2")

            console.log( "check1")

            const formdata1 = {
                folderName: email,
                folderName2: values.email,
                image: attachment
            }

            console.log(formdata1, "formdata1")
            
            const image = await axios.post(
                "http://localhost:8081/api/v1/upload/file",
                formdata1,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            )
            console.log(image.data, "point2");
            console.log(image.data.filename, "point2");
            dispatch(apiActions.setFile(image.data.filename))

            const file = image.data.filename

            // const formdata = {
            //     name: values.name,
            //     email: values.email,
            //     aadhar: values.aadhar,
            //     pan: values.pan,
            //     status: values.status,
            //     proof: file,
            // };

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

            const response = await axios.post("http://localhost:8081/api/v1/upload/item", formdata);
            console.log(response.data, "itemdata");

            setIsModalOpen(false);
            form.resetFields();

            const newdata = {
                name: response.data.name,
                email: response.data.email,
                aadhar: response.data.aadhar,
                pan: response.data.pan,
            };

            console.log(newdata, "newdata");
            dispatch(apiActions.addNewData(response.data));
            dispatch(apiActions.setSendingEmail(response.data.email));



            const search = await axios.post("http://localhost:8081/api/v1/search/item", newdata)
            console.log(search.data, "searchdata");
            dispatch(apiActions.setSearchModalData(search.data))

            const sendingdata = {
                folderName : email,
                folderName2 : values.email,
                filename : values.email,
                data : formdata
            };

            const sendingdata2 = {
                folderName : values.email,
                filename : values.email,
                data : formdata
            };

            console.log(sendingdata, "sendingdata")

            const creatinguserdata = await axios.post(`http://localhost:8081/api/v1/addfile/createFileInside`, sendingdata)
            console.log(creatinguserdata.data, "createuserData")

            const creatinguserdata2 = await axios.post(`http://localhost:8081/api/v1/addfile/createFileOutside`, sendingdata2)
            console.log(creatinguserdata2.data, "createuserData2")


            

            console.log(componentHtml , "check2")

            const emailData = {
                to : values.email,
                subject : values.status,
                text : `Hello ${values.name}`,
                attachmentName: file,
                folderName : email,
                searchModal : search.data
            };

            console.log(emailData, "emailData");

            const emailResponse = await axios.post('http://localhost:8081/api/v1/email/send-email', emailData);

            if (emailResponse.ok) {
                console.log('Email sent successfully');
            } else {
                console.error('Error sending email:', emailResponse.statusText);
            }
        } catch (error) {
            console.error("Error in handleSubmit:", error);
        }
    };

    useEffect(() => {


    }, [dispatch, to, subject, text, attachment, newData, searchModalData, htmlCode, file]);


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

                    {/* <Form.Item
                        name="proof"
                        label="Proof"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        rules={[{ required: true, message: 'Please provide an attachment' }]}
                    >
                        <Upload
                            beforeUpload={() => false}
                            maxCount={1}
                            accept=".pdf"
                        >
                            <Button icon={<UploadOutlined />}>Upload PDF</Button>
                        </Upload>
                    </Form.Item> */}


                    <Form.Item
                        name="witnesses"
                        label="Witnesses "
                        rules={[{ required: true, message: 'Please provide details of witnesses' }]}
                    >
                        <TextArea rows={4} placeholder="Enter details of witnesses" />
                    </Form.Item>

                    <Form.Item className="modalbutton" wrapperCol={{ offset: 4, span: 14 }}>
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