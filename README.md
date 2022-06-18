# Reproduction Steps
1. Load the test page at http://localhost:3000/test/

    a. you will see a console log for the render call
2. Click Either link

    a. you will see 2x console logs for the index rendering, and then a console log for the requested path


## Is this expected behavior
In this example there is not much of a concern but in my real example I have an image gallery index to a detail image page which:

* Flashes on route change
* requests all the images from index without actually needing them
