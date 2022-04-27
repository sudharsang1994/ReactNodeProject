import React from 'react';
import Icon from './Icon';
import Button from '../atoms/Button/Button';

export default function ButtonIcon (props) {

    return (
        <Button className={props.classButton} {...props.btnAttributes} handleClick={props.handleClick}>
            {props.btnText}
            <Icon className={props.classIcon} />
        </Button>
    );
}