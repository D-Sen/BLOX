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

Visiting the 'app' (or clicking the 'ALL BLOCKS' link at top of the page ) will take you to the BOARD, shwoing whatever blocks are already setup on the board (in the database). Logging in will enable you to Add blocks to the board, edit blocks already on the board, or add messages to those existing blocks. To add a new block to the board, click the 'ADD BLOCK' link in the top bar. You also may click on a block to see its details. On the blocks' details screen, you may click 'CHANGE BLOCK DETAILS' to change the blocks colors', change the color of any message text, or add a URL direct link to an image that display within the block. To add an image link to a block, you will need a DIRECT URL to an image. These are usually acquired by 'right-clicking' an image on a webpage and choosing 'Copy Image Link'. The images' size' will be reduced to 95x95 pixels to fit within their occupying block. Please see the warning text in the blocks' details page regarding using messages & images in the same block.

To add a message/message text to a block, type your message in the text box then click 'ADD MESSAGE'. _Its recommended any added messages fit within the block size. The text box does accept and understand 'returns'._ You may also click on the 'X' next to a message in the message list to delete a message attached to a block. _Only the top-most message will be displayed on the 'ALL BLOCKS' board.


## Feb 14th 2023 update

### Major Changes

* Image links can now be added 'into' blocks. The images will be reduced to 95x95 size to fit within their occupying block. Please see the warning text in the blocks'  details page regarding using messages & images in the same block.



## Feb 13th 2023 update


### Major Changes

* Added ability to choose either black or white text color for the block message
* Image links can now be added 'into' blocks. They 

### Minor Changes

* NAV BAR
    1. Added App name
    2. Centered nav bar text
* ADD BLOCK Page
    1. Added descriptive text, removed some unneeded text
    2. Added min/max number estriction on back end, (numbers cant be selected out of range +/-)
    3. Stretched visual elements to fill screen
* Block details 
    1. Stretched visual elements to fill screen
    2. Changed descriptive text in several places
    3. Added preview of block: (color, message in block, and message text color)
    4. Added 'delete' header text for list of messages
    5. Added instructions for adding messages

