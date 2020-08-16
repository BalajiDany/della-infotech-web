import React from 'react';
import Table from 'react-bootstrap/Table';
import { Accordion, Card, Button } from 'react-bootstrap';

import { Stylings } from '../../../utils/Types';

// TODO Table need to be rendered.
const Details = () => {

    const accordionCardWrapper = (header: string, body: any) => {
        return (
            <Card className='border-bottom'>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="text" style={style.accordionHeader} eventKey={header}>
                        <h4 className='di-tx-primary'>{header}</h4>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={header}>
                    <Card.Body>
                        { body }
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            );
    };

    const awsTable = (
    <Table className='border-bottom table-striped' responsive='sm' style={style.table}>
        <thead>
            <tr>
                <th className='border-top-0 text-muted'></th>
                <th className='border-top-0 text-muted'>Account 1</th>
                <th className='border-top-0 text-muted'>Account 2</th>
                <th className='border-top-0 text-muted'>Account 3</th>
                <th className='border-top-0 text-muted'>Account 4</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>EC 2</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Memory</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>External Storage</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>RDS</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Backup</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </Table>);

    return (
        <div className='px-4 pt-4 bg-white'>
            <Accordion>
                { accordionCardWrapper('AWS', awsTable) }
                { accordionCardWrapper('Azure', awsTable) }
                { accordionCardWrapper('Google Cloud', awsTable) }
                <br />
            </Accordion>
        </div>
    );
};

const style: Stylings = {
    accordionHeader: {
        width: '100%',
        textAlign: 'left',
        outline: 'none',
        boxShadow: 'none',
    },
    table: {
        overflow: 'auto',   // To make the scroll when the header is beyond
    },
}

export default Details;