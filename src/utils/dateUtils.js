export function getNowDate() {
    let mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let currentDate = new Date()
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ampm;

    var dateTime = mlist[currentDate.getMonth()] + " " + currentDate.getDate() + " " + strTime
    return dateTime
}

export function getAgoDate(date) {
    let dateNow = new Date().getTime()
    let postDate = new Date(date)
    let years = Math.round((dateNow - postDate) / 31556952000)
    let months = Math.round((dateNow - postDate) / 2629800000)
    let weeks = Math.round((dateNow - postDate) / 604800000)
    let days = Math.round((dateNow - postDate) / 86400000)
    let hours = Math.round((dateNow - postDate) / 3600000)
    let minutes = Math.round((dateNow - postDate) / 60000)

    let ago =
        minutes < 60 ? minutes + (minutes === 1 ? " minute" : " minutes")
            : hours < 24 ? hours + (hours === 1 ? " hr" : " hrs")
                : days < 7 ? days + (days === 1 ? " day" : " days")
                    : weeks < 5 ? weeks + (weeks === 1 ? " week" : " weeks")
                        : months < 12 ? months + (months === 1 ? " month" : " months")
                            : years + (years === 1 ? " year" : " years")

    return ago + " ago"

}

export function getFormattedDate(date) {
    let mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let currentDate = new Date(date)
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ampm;

    var dateTime = mlist[currentDate.getMonth()] + " " + currentDate.getDate() + " " + strTime
    return dateTime
}