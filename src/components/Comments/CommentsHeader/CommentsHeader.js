import React from 'react';
import {Button, icon} from 'semantic-ui-react';
import './CommentsHeader.scss';

export function CommentHeader(props){
    return(
        <div className='comments-header'>
            <h4>{props.amountComments} Comments</h4>
            <Button basic compact icon labelPosition='left'>
                <Icon name='align left' />
                Sort by
            </Button>
        </div>
    );
}