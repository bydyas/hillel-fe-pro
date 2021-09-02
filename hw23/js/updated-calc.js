'strict mode';

class Calculator {
    #theNum;
    #oldNum;

    static el = function (element) {
        if (element.charAt(0) === "#") { // If passed an ID...
            return document.querySelector(element); // ... returns single element
        }

        return document.querySelectorAll(element); // Otherwise, returns a nodelist
    };

    constructor() {
        this.viewer = el("#viewer"), // Calculator screen where result is displayed
            this.equals = el("#equals"), // Equal button
            this.nums = el(".num"), // List of numbers
            this.ops = el(".ops"), // List of operators
            this.#theNum = "", // Current number
            this.#oldNum = "", // First number
            this.resultNum, // Result
            this.operator;
    }

    getTheNum() {
        return this.#theNum;
    }

    setTheNum(val) {
        this.#theNum = val;
    }

    getOldNum() {
        return this.#oldNum;
    }

    setOldNum(val) {
        this.#oldNum = val;
    }

    // When: Number is clicked. Get the current number selected
    setNum() {
        if (resultNum) { // If a result was displayed, reset number
            this.#theNum = this.getAttribute("data-num");
            resultNum = "";
        } else { // Otherwise, add digit to previous number (this is a string!)
            this.#theNum += this.getAttribute("data-num");
        }

        this.viewer.innerHTML = this.#theNum; // Display current number

    };

    // When: Operator is clicked. Pass number to oldNum and save operator
    moveNum() {
        this.#oldNum = theNum;
        this.#theNum = "";
        this.operator = this.getAttribute("data-ops");

        this.equals.setAttribute("data-result", ""); // Reset result in attr
    };

    // When: Equals is clicked. Calculate result
    displayNum() {

        // Convert string input to numbers
        this.#oldNum = parseFloat(this.#oldNum);
        this.#theNum = parseFloat(this.#theNum);

        // Perform operation
        switch (operator) {
            case "plus":
                this.resultNum = this.#oldNum + this.#theNum;
                break;

            case "minus":
                this.resultNum = this.#oldNum - this.#theNum;
                break;

            case "times":
                this.resultNum = this.#oldNum * this.#theNum;
                break;

            case "divided by":
                this.resultNum = this.#oldNum / this.#theNum;
                break;

            // If equal is pressed without an operator, keep number and continue
            default:
                this.resultNum = this.#theNum;
        }

        // If NaN or Infinity returned
        if (!isFinite(this.resultNum)) {
            if (isNaN(this.resultNum)) { // If result is not a number; set off by, eg, double-clicking operators
                this.resultNum = "You broke it!";
            } else { // If result is infinity, set off by dividing by zero
                this.resultNum = "Look at what you've done";
                this.el('#calculator').classList.add("broken"); // Break calculator
                this.el('#reset').classList.add("show"); // And show reset button
            }
        }

        // Display result, finally!
        this.viewer.innerHTML = this.resultNum;
        this.equals.setAttribute("data-result", this.resultNum);

        // Now reset oldNum & keep result
        this.#oldNum = 0;
        this.#theNum = this.resultNum;

    };

    // When: Clear button is pressed. Clear everything
    clearAll() {
        this.#oldNum = "";
        this.#theNum = "";
        this.viewer.innerHTML = "0";
        this.equals.setAttribute("data-result", this.resultNum);
    };

    /* The click events */

    // Add click event to numbers
    addEvents(){
        for (let i = 0, l = this.nums.length; i < l; i++) {
            this.nums[i].onclick = this.setNum();
        }

        // Add click event to operators
        for (let i = 0, l = this.ops.length; i < l; i++) {
            this.ops[i].onclick = this.moveNum();
        }

        // Add click event to equal sign
        this.equals.onclick = this.displayNum();

        // Add click event to clear button
        this.el("#clear").onclick = this.clearAll();

        // Add click event to reset button
        this.el("#reset").onclick = function () {
            window.location = window.location;
        };
    }
}

