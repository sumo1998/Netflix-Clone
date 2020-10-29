import React from 'react';
import useContent from '../hooks/use-content';
import selectionFilter from '../utils/selection-filter';
import BrowseContainer from '../containers/browseContainer';

export default function Browse(){

    const {series} = useContent("series");
    
    const {films} = useContent("films");
    
    const content = selectionFilter({series,films});
    
    return <BrowseContainer slides = {content} />
}