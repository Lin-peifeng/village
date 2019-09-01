const formatTime = (date, type) => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    const today = new Date();
    const TimeDifference = today - date;
    const secondDiff = TimeDifference / 1000;
    const minuteDiff = secondDiff / 60;
    const hoursDiff = minuteDiff / 60;
    const dayDiff = hoursDiff / 24;
    const monthDiff = dayDiff / 30;
    const yearDiff = monthDiff / 12;
    switch (type) {
        case 'hh:mm':
            if (Math.abs(yearDiff) > 1) {
                return `${Math.abs(parseInt(yearDiff))}年${yearDiff > 0 ? '前' : '后'}`;
            } else if (Math.abs(monthDiff) > 1) {
                return `${Math.abs(parseInt(monthDiff))}个月${monthDiff > 0 ? '前' : '后'}`;
            } else if (Math.abs(dayDiff) > 1) {
                return `${Math.abs(parseInt(dayDiff))}天${dayDiff > 0 ? '前' : '后'}`;
            } else {
                return type.replace('hh', formatNumber(hour)).replace('mm', formatNumber(minute))
            }
            break;
        default:
            return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
    }

}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}


export default {
    formatTime
}