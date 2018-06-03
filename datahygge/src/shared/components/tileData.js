import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import {
    Link,
} from 'react-router-dom';

export const mailFolderListItems = (
    <div>
        <Link to={{ pathname: "/goals" }}>
            <ListItem button>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Goals" />
            </ListItem>
        </Link>
        <Link to={{ pathname: "/features" }}>
            <ListItem button>
                <ListItemIcon>
                    <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Features" />
            </ListItem>
        </Link>
        <ListItem button disabled>
            <ListItemIcon>
                <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Behaviour" />
        </ListItem>
    </div>
);

export const otherMailFolderListItems = (
    <div>
        <ListItem button disabled>
            <ListItemIcon>
                <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Communication" />
        </ListItem>
        <ListItem button disabled>
            <ListItemIcon>
                <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button disabled>
            <ListItemIcon>
                <ReportIcon />
            </ListItemIcon>
            <ListItemText primary="Other" />
        </ListItem>
    </div>
);
