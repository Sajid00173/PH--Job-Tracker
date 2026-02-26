sorry bhaia. i took some help from google

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

with getElementbyID, we can find any specific element by id, same for getElementsByClassName but here we will find it with any specific class, i can use queryselector to find any tag,class,id


2. How do you create and insert a new element into the DOM?

first create a new div
const creatediv = document.createElement('div');
then i can a add element in the div
creatediv.textContent = "hello";

3. What is Event Bubbling? And how does it work?

 in event bubbling, when i click on event, the process will see all the targets and then parents

4. What is Event Delegation in JavaScript? Why is it useful?

event delegation is very useful. we can use a eventlistener in a common parent instead of many child element

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() use for preventing any tag to work and stopPropagation() use for stop bubbling
