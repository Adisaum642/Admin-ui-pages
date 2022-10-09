import config from '../../constants';


export const getsTotalPages = (length)=> {
    return Math.ceil(length/10);
}


export const getRecord = (page)=> {
    return (page-1)*config.PAGE_SIZE ;
}


