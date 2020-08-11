import React, { useState } from 'react';
import { Stylings } from '../../../utils/Types';
import { GiHamburgerMenu } from 'react-icons/gi';
import Radium from 'radium';
import AwsLogo  from '../../../assets/aws-sidemenu.svg';
import AzureLogo  from '../../../assets/azure.svg';
import GoogleLogo  from '../../../assets/google.svg';

const sideBarData = [
    {
        logo: <img src={AwsLogo} height="25px" width="35px" alt="AwsLogo" />,
        title: 'Amazon',
        key: 'aws',
    },
    {
        logo: <img src={AzureLogo} height="25px" width="35px" alt="AzureLogo" />,
        title: 'Azure',
        key: 'azure',
    },
    {
        logo: <img src={GoogleLogo} height="25px" width="35px" alt="GoogleLogo" />,
        title: 'Google',
        key: 'googleCloud',
    },
]

const SideBar = (props: any) => {
    const [open, setOpen] = useState(false);
    return (
        <div id='sidebar' className='di-bg-primary' style={style.sideBar}>
            <div style={style.sideBarItem} onClick={() => setOpen(!open)} className='m-4 py-2' >
                <GiHamburgerMenu size='24' />
            </div>
            {
                sideBarData.map((sideBarItem, index) => (
                    <div style={style.sideBarItem} key={index} className='m-4 py-2' draggable onDragStart={(event)=>onDragStart(event,sideBarItem.key)} onClick={() => props.onClick(sideBarItem.key)}>
                        { sideBarItem.logo }
                        <div className='d-inline ml-2'>{ open ? ` ${sideBarItem.title}` : null}</div>
                    </div>
                ))
            }
        </div>
    )
};

const style: Stylings = {
    sideBar: {
        display: 'inline-block',
        height: '100%',
    },
    sideBarItem: {
        color: 'rgba(255, 255, 255, 0.5)',
        ':hover': {
            color: '#fff',
            cursor: 'pointer',
        },
    }
}

const onDragStart = (event:any,key:string) => {
console.log("Drag start");
event.dataTransfer.setData("key",key); 
};

export default Radium(SideBar);