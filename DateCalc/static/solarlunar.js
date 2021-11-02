const lunarMonthDays = {
    // 1995: [29, 29, 30, 30, 29, 30, 30, 29, 30, 30, 29, 29, 30],
    // 1996: [0, 29, 30, 29, 30, 30, 29, 30, 29, 30, 30, 29, 30],
    // 1997: [0, 29, 29, 30, 29, 30, 29, 30, 30, 29, 30, 30, 29],
    // 1998: [29, 30, 29, 29, 30, 29, 30, 30, 29, 30, 30, 30, 29],
    // 1999: [0, 30, 29, 29, 30, 29, 29, 30, 29, 30, 30, 30, 29],
    2000: [0, 30, 30, 29, 29, 30, 29, 29, 30, 29, 30, 30, 29],
    2001: [29, 30, 30, 30, 29, 30, 29, 29, 30, 29, 30, 29, 30],
    2002: [0, 30, 30, 29, 30, 29, 30, 29, 29, 30, 29, 30, 29],
    2003: [0, 30, 30, 29, 30, 30, 29, 30, 29, 29, 30, 29, 30],
    2004: [29, 29, 30, 30, 30, 29, 30, 29, 30, 29, 30, 29, 30],
    2005: [0, 29, 30, 29, 30, 29, 30, 30, 29, 30, 30, 29, 29],
    2006: [29, 30, 29, 30, 29, 30, 29, 30, 30, 30, 29, 30, 30],
    2007: [0, 29, 29, 30, 29, 29, 30, 29, 30, 30, 30, 29, 30],
    2008: [0, 30, 29, 29, 30, 29, 29, 30, 29, 30, 30, 29, 30],
    2009: [29, 30, 30, 29, 29, 30, 29, 30, 29, 30, 29, 30, 30],
    2010: [0, 30, 29, 30, 29, 30, 29, 29, 30, 29, 30, 29, 30],
    2011: [0, 30, 29, 30, 30, 29, 30, 29, 29, 30, 29, 30, 29],
    2012: [30, 30, 29, 30, 30, 29, 30, 29, 29, 30, 29, 30, 29],
    2013: [0, 30, 29, 30, 30, 29, 30, 29, 30, 29, 30, 29, 30],
    2014: [29, 29, 30, 29, 30, 29, 30, 29, 30, 30, 30, 29, 30],
    2015: [0, 29, 30, 29, 29, 30, 29, 30, 30, 30, 29, 30, 29],
    2016: [0, 30, 29, 30, 29, 29, 30, 29, 30, 30, 29, 30, 30],
    2017: [29, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 30, 30],
    2018: [0, 29, 30, 29, 30, 29, 29, 30, 29, 30, 29, 30, 30],
    2019: [0, 30, 29, 30, 29, 30, 29, 29, 30, 29, 30, 29, 30],
    2020: [29, 30, 29, 30, 30, 30, 29, 29, 30, 29, 30, 29, 30],
    2021: [0, 29, 30, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29],
    2022: [0, 30, 29, 30, 29, 30, 30, 29, 30, 29, 30, 29, 30],
    2023: [29, 29, 30, 30, 29, 30, 29, 30, 30, 29, 30, 29, 30],
    2024: [0, 29, 30, 29, 29, 30, 29, 30, 30, 29, 30, 30, 29],
    2025: [29, 30, 29, 30, 29, 29, 30, 30, 29, 30, 30, 30, 29],
    2026: [0, 30, 29, 30, 29, 29, 30, 29, 30, 29, 30, 30, 30],
    2027: [0, 29, 30, 29, 30, 29, 29, 30, 29, 29, 30, 30, 30],
    2028: [29, 29, 30, 30, 29, 30, 29, 30, 29, 29, 30, 30, 29],
    2029: [0, 30, 30, 29, 30, 30, 29, 29, 30, 29, 29, 30, 30],
    2030: [0, 29, 30, 29, 30, 30, 29, 30, 29, 30, 29, 30, 29]
}

const leapMonthList = {
    // 1995: 8, 1998: 5,
    2001: 4, 2004: 2, 2006: 7, 2009: 5,
    2012: 3, 2014: 9, 2017: 5,
    2020: 4, 2023: 2, 2025: 6, 2028: 5
}

function solarToLunar(solarYear, solarMonth, solarDate) {
    let lunarYear = 2000;
    let lunarMonth = 1;
    let lunarDate;

    const days = (new Date(solarYear, solarMonth - 1, solarDate) - new Date(2000, 1, 4)) / (1000 * 60 * 60 * 24);

    let dayCount = 0;
    let temp_month;
    
    while (dayCount + lunarMonthDays[lunarYear][lunarMonth] < days) {
        dayCount += lunarMonthDays[lunarYear][lunarMonth];

        if (lunarMonth < 12) {
            if (lunarMonth === leapMonthList[lunarYear]) {
                temp_month = lunarMonth
                lunarMonth = 0;
            } else if (lunarMonth === 0) {
                lunarMonth = temp_month + 1;
            } else {
                lunarMonth++;
            }
        } else {
            lunarYear++;
            lunarMonth = 1;
        }
    }

    lunarDate = days - dayCount;

    if (lunarMonth === 0) {
        lunarMonth = '윤' + temp_month;
    }

    return [lunarYear, lunarMonth, lunarDate];
}

function lunarToSolar(lunarYear, lunarMonth, lunarDate) {
    // let daySum = 0;
    // for (let y = 2000; y < lunarYear; y++) {
    //     let yearDaySum = lunarMonthDays[y].reduce(accSum);
    //     daySum += yearDaySum;
    // }

    // let monthSum = 0;
    // if (Object.keys(leapMonthList).indexOf(String(lunarYear)) === -1) {
    //     monthSum = lunarMonthDays[lunarYear].slice(0, lunarMonth).reduce(accSum);
    // } else {
    //     if (lunarMonth < leapMonthList[lunarYear]) {
    //         monthSum = lunarMonthDays[lunarYear].slice(0, lunarMonth).reduce(accSum) - lunarMonthDays[lunarYear][0];
    //     } else if (lunarMonth === leapMonthList[lunarYear]) {
    //         if (document.getElementById('leap-month').checked == true) {
    //             monthSum = lunarMonthDays[lunarYear].slice(0, lunarMonth).reduce(accSum) - lunarMonthDays[lunarYear][0];
    //         } else {
    //             monthSum = lunarMonthDays[lunarYear].slice(0, lunarMonth).reduce(accSum);
    //         }
    //     } else {
    //         monthSum = lunarMonthDays[lunarYear].slice(0, lunarMonth).reduce(accSum);
    //     }
    // }

    // daySum += (monthSum + Number(lunarDate));

    return [lunarYear, lunarMonth, lunarDate];
}

function convert() {
    $('#result').show();

    const year = $('#year').val();
    const month = $('#month').val();
    const day = $('#day').val();
    
    const mode = $('input[name=mode]:checked').val();
    if (mode === "solar-to-lunar") {
        [lunarYear, lunarMonth, lunarDate] = solarToLunar(year, month, day)
        $('#result').text('음력 ' + lunarYear + '년 ' + lunarMonth + '월 ' + lunarDate + '일');
    } else if (mode === "lunar-to-solar") {
        [solarYear, solarMonth, solarDate] = lunarToSolar(year, month, day)
        $('#result').text('양력 ' + solarYear + '년 ' + solarMonth + '월 ' + solarDate + '일');
    } else {
        $('#result').text('변환 모드를 선택하세요');
    }
}

function ableLeapMonth() {
    const target = document.getElementById('leap-month');
    target.disabled = false;
}

function disableLeapMonth() {
    const target = document.getElementById('leap-month');
    target.disabled = true;
}

function accSum(sum, value) {
    return sum += value;
}