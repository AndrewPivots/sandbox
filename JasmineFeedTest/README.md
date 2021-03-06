# Feed Reader Testing

This project is to test my ability to add Jasmine js tests to an existing Udacity project.

## How To Use

1. Open index.html to view tests at the bottom of the page.
2. To review the code for the tests, open /jasmine/spec/feedreader.js

## Future Development Ideas
1. Test menu functionality in a more actual way and not just an artifact of the process.
2. Test feed loading without have to make the page load strange.

## Projects Feedback
1. FEB 4: My project reviewer thinks I over complicated most of my tests. This may have been partially because I wanted to stick to the methods I was most confident in at the time. I used a lot of loops to check more nodes which is a more thorough way of doing things but likely over-complicated it. But I did like implementing his method and techniques to make things simpler.
2. FEB 5: Learned that you can put expect expressions within loops and even have multiple. Added missed expect statement. Fixed logic error that approved missing urls and names. Also, learned that these kind of test tools are for development branches and not for production so my UX concerns are not valid.
3. FEB 6: Found toBeDefined function in Jasmine documentation. Fixed other things to be exactly inline with the unstructions.

## Sources
1. CALLBACKS & NESTING: Karine L's thread in the Knowledge Center helped me understand nesting asynchronous functions with the callback. https://knowledge.udacity.com/questions/14179
2. QUERY SELECTOR: My project reviewer recommends .querySelector over getElementsByClassName. Maybe because it's a more versatile method.
3. CLASS LIST: My project reviewer recommends .classList of .className but I don't know why.
4. TO BE DEFINED METHOD: https://jasmine.github.io/2.0/introduction.html
