# checkerboard-demo

Demos for the Checkerboard framework ([GitHub](https://github.com/gregoryfabry/checkerboard), [NPM](https://www.npmjs.com/package/checkerboard)).

## Use

    node demo-server
    
Go to http://*server*:9999/public/*demo*.html; e.g. http://localhost:9999/whiteboard.html.

Open in multiple tabs or multiple devices to see the synchronization effect.

## coords

Open the console on all devices. Observe what happens when you click on the document body, and when you refresh the page.

## whiteboard

A simple whiteboard. Observe how drawings stay when you refresh the page.

## atm

Demonstrates the synchronization effect with extreme lag. Observe that eventually the sum of bank + pocket 1 + pocket 2 will always be 100, even if you "trick" the server (e.g. by simulataneously withdrawing $20 from both ATMs when there is only $20 in the bank).