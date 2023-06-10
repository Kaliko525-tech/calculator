# calculator
calculator project for TOP

This is  aproject  for a basic calculator web page.

This calculator must be able to do the following :

1. add, subtract, multiply, divide.
2. the above but in continous fashion (i.e. 1 + 3 * 2 / 2 = 4)
3. allow decimal points, but only allow 1 decimal point
4. clear all data
5.display a snarky remark when someone tries to divide by 0
5. round answers that have long decimals
6. numbers should not be evaluated in more than a single pair (i.e. 1+1=2+1=3+1=4)

as according to the assignment page I will start with creating funcutions to all the basic maths, then move to getting the calculator on the html with the tags,buttons etc, then style it and finally wire the JS to the page and begin trouble shooting as need be.

14 May 2023

I feel way in over my head right now like everything I have learned just hasn't stuck with me, this is going to be hard.

starting with JS:

created basic math funcitons, then a operate function that calls on the basic maths fucntions based on a if..else statement that calls the needed function based on the operator selected. 

JS is done for now.

moving on with HTML:

adding all buttons for the basis of the calculator.

17th may 2023:

used css to format all the html to represent a calculator. 

18th may 2023:

back to JS:

need to hook up all the 'number' butons to display the numbers on the calcDisplay. I've completely forgotten how to do that though. I know it will require DOM manipulation so I will start there.

9/6/23

hooked up all the wiring got the values to display when you click the buttons, I even got the things to operate, I have a basic super simple calculator working. 

something something, I need to differentiate the whole variables better, firstnumber, secondnumber, display value, the sum. I suppose this is all apart of being able to do multiple calculations at once or one after the other. so lets just keep this in mind. it is the next step. 

10/6/23

re-wrote everything in the JS from scratch, well I copied a answer from stackOverflow which is the current state of the file. thanks u/tear530, I've been stuck for a month trying to be able to get it to allow multiple operations after another, i got as far as 1+1=2 then i would have to clear again. could only do super simple calculations, but after seeing your question and searching for days at a time to get it work your way got it right. 

feel bad I just copied someone elses code but It works and the display showed some bugs which I managed to fix, sadly I can only show in the display what your current operator selection is, can't actually show you the whole sum. 

I am feeling rather let down by this project, it just shows that I have no idea what I am doing and I need to go over the basics of JavaScript again before moving on to the advanced side of thing. My original code was messy, simple, un-flexible, and I couldn't even figure out how to get the sum of a simple calculation and carry it over to a new sum, like 1 + 1 = 2 *3 = 6. 

still have a few things to do before finishing up this project.

1. leave a snarky remark if someone tried to divide by 0.
2. make it look nice with CSS
3.add a backspace button (done)
4. add keyboard support