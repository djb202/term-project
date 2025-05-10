/*
   Filename: kb_formsubmit.js

   Purpose: This program reports the successful completition of
            a valid Web form.

            When the form is submitted, the onsubmit event handler
            verifies that the form data is complete and valid.
            An alert box is displayed notifying the user.

            The event function returns a value of false so that the
            form resets itself.

    This script file is completely stolen from:
        New Perspectives on HTML5 and CSS3, 8th Edition
        Tutorial 7
*/

window.onload = function() {
    document.forms[0].onsubmit = function() {
       if (this.checkValidity()) alert("Our scheduler will call you momentarily to confirm your appointment.");
       return false;
    };
 };