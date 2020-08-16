import { MutableRefObject } from 'react';

export const getRefElementValue = (reference: MutableRefObject<any>) => {
    return reference.current ? reference.current.value : '';
}