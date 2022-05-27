import { useState } from 'react';
import {  StyleSheet, SectionList, TouchableOpacity } from 'react-native';
import { RootTabScreenProps } from '../types';
import { Text, View } from '../components/Themed';
import styles from '../css/styles';
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

export default function SettingsScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
      };
    !open && { height: 40 }
    
    return (
        <View style={styles.container}
        >
            <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>

          <SectionList
          sections={[
            {title: 'Font', data: ['Times New Roman', 'Bubbles', 'Calabri']},
            {title: 'Theme', data: [
                ]
            
            },
          ]}
           renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
           renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          />
          
            <TouchableOpacity style={styles.button}> 
                    <Text style={styles.title}>Chili</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.title}>Daisy Stems</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                >
                <Text style={styles.title}>Fresh</Text>
            </TouchableOpacity>
            <TouchableOpacity
                    style={styles.button}
                    >
                    <Text style={styles.title}>Muted</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                >
                <Text style={styles.title}>Olives</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                >
                <Text style={styles.title}>Pleasant</Text>
            </TouchableOpacity>
            <TouchableOpacity
                    style={styles.button}
                    >
                    <Text style={styles.title}>Plum</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                >
                <Text style={styles.title}>Powder</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                >
                <Text style={styles.title}>Sea Mint</Text>
            </TouchableOpacity>
        </View>
    );
}

