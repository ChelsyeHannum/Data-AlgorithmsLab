"use strict"

let bug1 = {
    Issue: "The 'submit a suggestion' area on the website is not working.",
    timeStamp: "Monday 10:00am"
}

let bug2 = {
    Issue: "My email is not allowing me to attach any pictures.",
    timeStamp: "Tuesday 9:30am"
}

let bug3 = {
    Issue: "Anytime I try to pull up the webpage I get an error.",
    timeStamp: "Tuesday 4:00pm"
};

let bugs = [bug1, bug2, bug3];



$('body').on('click', '.checked', () => {
    if (!hasproblem) {
        let bug = bugList.getBug();
        $('#time').text(`Most Recent Reported Date: ${bug.getTimeStamp()}`);
        $('#problem').text(`${bug.Issue}`);
        hasproblem = true;
    }
});

shift(); {
    if (this.isEmpty()) {
        return undefined;
    } else {
        const item = this.bugs[0];
        for (let i = 0; i < this.count; i++) {
            this.bugs[i] = this.[i + 1];
        }
        this.count--;
        return item;
    }
};