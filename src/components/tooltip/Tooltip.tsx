import {OverlayTrigger, Popover} from "react-bootstrap";
import React from "react";
import s from './tooltip.module.css';

type Props = {
    children: any,
    header?: string,
    text: string
}

function Tooltip(props: Props) {
    return (
        // <!--suppress RequiredAttributes -->
        <OverlayTrigger
            trigger={['hover', 'focus']}
            placement={'right'}
            overlay={<Popover className={s.tooltip}>
                <Popover.Header className={s.header} as="h3">{props.header}</Popover.Header>
                <Popover.Body className={s.body}>
                    {props.text}
                </Popover.Body>
            </Popover>}
        >
            <div>{props.children}</div>
        </OverlayTrigger>
    )
}

export default Tooltip;
