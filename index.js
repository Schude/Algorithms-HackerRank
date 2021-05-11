function timeConversion(s) {
    // Write your code here
    let timeFormat = s.slice(-2);
    let time = s.split(":");

    //PM
    if (timeFormat === "PM") {
        if (time[0] === "12") {
            time[0] = "12";
        } else {
            time[0] = parseInt(time[0]) + 12;
        }
    }

    //AM
    if (timeFormat === "AM" && time[0] === 12) {
        time[0] = "00";
    }

    time = time.join(":").replace(/PM|AM/gi, "");
    return time;
}
