import React, { useState } from 'react';
import ServiceDetailCard from '../components/ServiceDetailCard';
import { Container, Col, Row, Card } from 'react-bootstrap';
import { Stylings } from '../../../utils/Types';
import AmazonWebService from './modal/AmazonWebService';
import Azure from './modal/Azure';
import GoogleCloud from './modal/GoogleCloud';
import { RiDragDropLine } from "react-icons/ri";

const cloudLoginDetailData = [
    {
        type: 'aws',
        accountName: 'AWS9879873904',
        budgetOfMonth: '$234234',
        region: 'asia-east1 / asia-east1-a',
        fields: [
            {
                icon: '',
                label: 'EC2',
                value: 'XXXXXXXX',
            },
            {
                icon: '',
                label: 'S3',
                value: 'YYYYYYYYY',
            },
            {
                icon: '',
                label: 'RDS',
                value: 'ZZSSDSSD',
            }
        ]
    },
    {
        type: 'azure',
        accountName: 'Azure9879873904',
        budgetOfMonth: '$127823',
        fields: [
            {
                icon: '',
                label: 'EC2',
                value: 'XXXXXXXX',
            },
            {
                icon: '',
                label: 'S3',
                value: 'YYYYYYYYY',
            },
            {
                icon: '',
                label: 'RDS',
                value: 'ZZSSDSSD',
            }
        ]
    },
    {
        type: 'googleCloud',
        accountName: 'GC2344873904',
        budgetOfMonth: '$125512',
        fields: [
            {
                icon: '',
                label: 'EC2',
                value: 'XXXXXXXX',
            },
            {
                icon: '',
                label: 'S3',
                value: 'YYYYYYYYY',
            },
            {
                icon: '',
                label: 'RDS',
                value: 'ZZSSDSSD',
            }
        ]
    },
    {
        type: 'aws',
        accountName: 'GC9879873904',
        budgetOfMonth: '$125512',
        fields: [
            {
                icon: '',
                label: 'EC2',
                value: 'XXXXXXXX',
            },
            {
                icon: '',
                label: 'S3',
                value: 'YYYYYYYYY',
            },
            {
                icon: '',
                label: 'RDS',
                value: 'ZZSSDSSD',
            }
        ]
    },
    {
        type: 'azure',
        accountName: 'GC2344873904',
        budgetOfMonth: '$125512',
        fields: [
            {
                icon: '',
                label: 'EC2',
                value: 'XXXXXXXX',
            },
            {
                icon: '',
                label: 'S3',
                value: 'YYYYYYYYY',
            },
            {
                icon: '',
                label: 'RDS',
                value: 'ZZSSDSSD',
            }
        ]
    },
    {
        type: 'aws',
        accountName: 'GC2344873904',
        budgetOfMonth: '$125512',
        fields: [
            {
                icon: '',
                label: 'EC2',
                value: 'XXXXXXXX',
            },
            {
                icon: '',
                label: 'S3',
                value: 'YYYYYYYYY',
            },
            {
                icon: '',
                label: 'RDS',
                value: 'ZZSSDSSD',
            }
        ]
    }
];

const CloudLogin = () => {

    const [awsModalShow, setAwsModalShow] = useState(false);
    const [azureModalShow, setAzureModalShow] = useState(false);
    const [googleCloudModalShow, setGoogleCloudModalShow] = useState(false);

    const modals = (
        <div className='d-none'>
            <AmazonWebService show={awsModalShow} onHide={() => setAwsModalShow(false)} onSignIn={() => setAwsModalShow(false)} />
            <Azure show={azureModalShow} onHide={() => setAzureModalShow(false)} onSignIn={() => setAzureModalShow(false)} />
            <GoogleCloud show={googleCloudModalShow} onHide={() => setGoogleCloudModalShow(false)} onSignIn={() => setGoogleCloudModalShow(false)} />
        </div>
    );

    const onDrop = (event:any) => {
        let key = event.dataTransfer.getData("key");
        console.log("drop");
        if (key === 'aws') {
             setAwsModalShow(true);
        } else if (key === 'azure') {
            setAzureModalShow(true);
        } else if (key === 'googleCloud') {
            setGoogleCloudModalShow(true);
        }
    };
    const onDragOver = (event: any)=> {
        event.stopPropagation();
        event.preventDefault();
    }

    return (
    <div>
        <Container className='px-4 pt-4 bg-white' fluid>
            <Row className='justify-content-lg-center'>
                {
                    cloudLoginDetailData.map((service, index) => {
                        return (
                            <Col sm='auto' key={index} className='my-4 mx-2'>
                                <ServiceDetailCard data={service} />
                            </Col>
                        )
                    })
                }
                <div className="droppable" onDrop={(event)=>onDrop(event)}  onDragOver={(event)=>onDragOver(event)}>
                    <Col sm='auto' className='my-4 mx-2'>
                        <Card className='shadow' style={style}>
                            <Card.Body className='my-4'>
                                <Container fluid className='my-3'>
                                    <Row className='justify-content-lg-center'>
                                        <RiDragDropLine size={64} />
                                    </Row>
                                    <Row className='justify-content-lg-center mt-4'>
                                        <h6>Drag and Drop Here</h6>
                                    </Row>
                                </Container>
                            </Card.Body></Card>
                    </Col>
                </div>
            </Row>
        </Container>

        {modals}
        </div>
    );
};

const style: Stylings = {
        width: '20rem',
        height: '15rem',
        backgroundColor: '#f7f7f7',
        borderRadius: '0.5rem',
};

export default CloudLogin;