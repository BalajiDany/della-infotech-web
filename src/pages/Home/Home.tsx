import { connect } from 'react-redux';
import React, { useState } from 'react';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';

import reducer from './Reducer';
import NavBar from '../../component/NavBar';
import SideBar from './components/SideBar';
import Details from './components/Details';
import Billing from './components/Billing';
import Monitor from './components/Monitor';
import Azure from './components/modal/Azure';
import { Stylings } from '../../utils/Types';
import { syncPosts } from '../../actions/Posts';
import CloudLogin from './components/CloudLogin';
import { connectWithStore } from '../../utils/HOC';
import { createStoreWithDep } from '../../utils/Store';
import GoogleCloud from './components/modal/GoogleCloud';
import AmazonWebService from './components/modal/AmazonWebService';

const Home = () => {

	// Modal State.
	const [awsModalShow, setAwsModalShow] = useState(false);
	const [azureModalShow, setAzureModalShow] = useState(false);
	const [googleCloudModalShow, setGoogleCloudModalShow] = useState(false);

	// Make sure, only one modal is opened.
	const onSidePanelClick = (key: string) => {
		if (key === 'aws') {
			setAwsModalShow(!(azureModalShow && googleCloudModalShow));
		} else if (key === 'azure') {
			setAzureModalShow(!(awsModalShow && googleCloudModalShow));
		} else if (key === 'googleCloud') {
			setGoogleCloudModalShow(!(azureModalShow && awsModalShow));
		}
	};

	const mainBody = (
		<Tabs defaultActiveKey='cloutLogin' id='uncontrolled-tab' className='bg-light' justify={true}>
			<Tab eventKey='cloutLogin' title='Cloud Login' className='border-right border-left border-bottom'>
				<CloudLogin />
			</Tab>
			<Tab eventKey='detail' title='Details' className='border-right border-left border-bottom'>
				<Details />
			</Tab>
			<Tab eventKey='billing' title='Billing' className='border-right border-left border-bottom'>
				<Billing />
			</Tab>
			<Tab eventKey='monitor' title='Monitor' className='border-right border-left border-bottom'>
				<Monitor />
			</Tab>
		</Tabs>
	);

	// Save the Cred in onSignIn Method
	const modals = (
		<div className='d-none'>
			<AmazonWebService show={awsModalShow} onHide={() => setAwsModalShow(false)} onSignIn={() => setAwsModalShow(false)} />
			<Azure show={azureModalShow} onHide={() => setAzureModalShow(false)} onSignIn={() => setAzureModalShow(false)} />
			<GoogleCloud show={googleCloudModalShow} onHide={() => setGoogleCloudModalShow(false)} onSignIn={() => setGoogleCloudModalShow(false)} />
		</div>
	);

	return (
		<div>
			<NavBar isLogged={true}></NavBar>

			<div style={style.mainBody}>
				<Container className='p-0 m-0 h-100' fluid>
					<Row className='mx-0 h-100'>

						<Col className='p-0 h-100 w-auto' sm='auto'>
							<SideBar onClick={(key: string) => onSidePanelClick(key)}></SideBar>
						</Col>

						<Col className='p-0 h-100' style={style.mainContent}>
							<div style={style.divStyle} className='p-4'>
								{mainBody}
							</div>
						</Col>
					</Row>
				</Container>
			</div>

			{modals}
		</div>
	);
};

const style: Stylings = {
	divStyle: {
	},
	mainBody: {
		height: 'calc(100% - 56px)',        // screen height - Nav Bar height
		position: 'absolute',
		width: '100%',
	},
	mainContent: {
		overflow: 'auto',
        backgroundColor: '#efefef',
	},
}

const store = createStoreWithDep(reducer);

const mapStatetoProps = (state: any) => {
    return { home: state.home };
};

const mapDispatchToProps = { syncPosts };

export default connectWithStore(store, connect(mapStatetoProps, mapDispatchToProps)(Home));