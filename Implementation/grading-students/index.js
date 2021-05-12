function gradingStudents(grades) {
    // Write your code here
    let rounded = [];
    grades.forEach((grade) => {
        if (grade < 38 || grade % 5 <= 2) {
            rounded.push(grade);
        } else if (grade % 5 > 2) {
            console.log(grade);
            rounded.push(Math.round(grade / 5) * 5);
        }
    });
    return rounded;
}
