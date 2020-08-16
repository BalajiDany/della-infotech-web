import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

import AwsLogo  from '../../../assets/aws.svg';
import AwsS3  from '../../../assets/aws-s3.svg';
import { Stylings } from '../../../utils/Types';
import AwsEc2  from '../../../assets/aws-ec2.svg';
import AwsRds  from '../../../assets/aws-rds.svg';
import AzureLogo  from '../../../assets/azure.svg';
import GoogleLogo  from '../../../assets/google.svg';

export interface ServiceDetailCardProps {

    data: {
        type: string,
        accountName: string,
        budgetOfMonth: string,
        fields: { icon: string, label: string, value: string }[],
        region?: string,
    }
}

const ServiceDetailCard = (props: ServiceDetailCardProps) => {
    const data = props.data;
    return (
        <Card className='shadow' style={style.cardStyle}>
            <Card.Body>
                <Card.Title className='position-relative'>
                    <div className='d-inline-block'>
                        {getCloudIcon(data.type)}
                    </div>
                    <div className='d-inline-block position-absolute' style={style.budgetValue}>
                        {data.budgetOfMonth}
                    </div>
                </Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                    <h6 className='d-inline-block'>{data.accountName}</h6>
                    <h6 className='d-inline-block float-right'>Budget this month</h6>
                </Card.Subtitle>
                <hr />
                <Container fluid>
                    <Row className='justify-content-lg-center'>
                        {
                            data.fields.map((field, index) => (
                                <Col className='my-2 text-muted' sm='auto' key={index} >    
                                    <h6>{getFieldIcon(field.label)} {field.label}</h6>
                                    <p style={style.cardTextStyle}>{field.value}</p>
                                </Col>
                            ))
                        }
                    </Row>
                    {
                        data.region ? (<Row className='justify-content-lg-center my-2'> Region : <h6 className='mb-0 ml-2' style={{marginTop: '2px'}}>{ ` ${data.region}` }</h6></Row>) : null
                    }
                </Container>
            </Card.Body>
        </Card>
    );
}

const getCloudIcon = (cloud: string) => {
    if (cloud === 'aws') {
        return <img src={AwsLogo} alt="AwsLogo" />
    } else if (cloud === 'azure') {
        return <img src={AzureLogo} alt="AzureLogo" />
    } else if (cloud === 'googleCloud') {
        return <img src={GoogleLogo} alt="GoogleCloudLogo" />
    }
};

const getFieldIcon = (fieldValue: string) => {
    if (fieldValue === 'EC2') {
        return <img src={AwsEc2} alt="AwsEc2" />
    } else if (fieldValue === 'S3') {
        return <img src={AwsS3} height="20px" alt="AwsS3" />
    } else if (fieldValue === 'RDS') {
        return <img src={AwsRds} alt="AwsRds" />
    }
};

const style: Stylings = {
    budgetValue: {
        right: '0',
        bottom: '0',
    },
    cardStyle: {
        width: '20rem',
        height: '16rem',
        backgroundColor: '#f7f7f7',
        borderRadius: '0.5rem',
    },
    cardTextStyle :{
        fontSize: '13px',
    },
}

export default ServiceDetailCard;