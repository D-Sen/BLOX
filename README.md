# BLOX / Color-Blocks (working title)
**by Domonic Senesi**
**For SEI 1212**

### Link to App
(https://proj2-blox.herokuapp.com/blocks)

### Trello
(https://trello.com/b/kjTrbDmO/proj2-blox)

BLOX - working title - is a CRUD example app that lets you create colored blocks with textual messages. You can create any number of colored blocks and attach a near unlimited amount of messages to them. Conceived as a 'drawing program', it has a wide range of possible uses, including creating a embedded post-it not system, making and hiding hidden messages, and recreateing board games! The simple design belies a complexity that is only limited by your imagination. It requires a Google account to authenticate to login and create a block or attach a message to a block.

## Screenshot(s): 

![Screenshot](https://github.com/D-Sen/proj2-blox/blob/main/Screenshot-1.png) 

## Technologies Used: 
* JavaScript (Node)
* Express 
* HTML 
* CSS
* MongoDB

## Getting Started: 

Visiting the 'app' will take you to a blank board, or whatever blocks are already setup in the database. The 'All Blocks' link at the top of the page will show the main 'board'.  Logging in will enable you to Add blocks to the board, via the 'ADD BLOCK' link at the top. You may click on a block to see its details. In the blocks' details screen, you may click 'UPDATE' to change the blocks colors'. To add a message, type in text in the 'CONTENT' text box then click on 'ADD MESSAGE'. _Its recommended any added messages fit within the block size. The text box does accept and understand 'returns'._ You may also click on the 'X' next to a message to delete a message attached to a block. _Only the top-most message will be displayed on the 'BOARD'.
In this section include the link to your deployed game and any instructions you deem important.

## IceBox:
* Ability to add image links to embed into block

## Features added since lat update
Major Changes
Added ability to choose either black or white text color for the block message


Minor Changes
* NAV BAR - Added Project name
          Centered nav bar text

* ADD Block Page - 
    Added descriptive text, removed some unneeded text
    Added min/max number estriction on back end, (numbers cant be selected out of range +/-)
    Stretched visual elements to fill screen
* Block details - 
    Stretched visual elements to fill screen
	Changed descriptive text in several places
    Added preview of block: (color, message in block, and message text color)
    Added 'delete' header text for list of messages
    Added instructions for adding messages

