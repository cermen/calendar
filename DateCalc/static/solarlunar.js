const lunarMonthDays = {
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
    2001: 4, 2004: 2, 2006: 7, 2009: 5,
    2012: 3, 2014: 9, 2017: 5,
    2020: 4, 2023: 2, 2025: 6, 2028: 5
}

function solarToLunar(solarYear, solarMonth, solarDate) {
    var lunarYear = 2000;
    var lunarMonth = 1;
    var lunarDate = 1;

    const days = (new Date(solarYear, solarMonth - 1, solarDate) - new Date(2000, 1, 5)) / (1000 * 60 * 60 * 24);

    var dayCount;
    var temp_month;
    for (dayCount = 0; dayCount < days; dayCount++) {
        if (lunarDate < lunarMonthDays[lunarYear][lunarMonth]) {
            lunarDate++;
        } else {
            if (lunarMonth < 12) {
                if (lunarMonth === leapMonthList[lunarYear]) {
                    temp_month = lunarMonth
                    lunarMonth = 0;
                } else if (lunarMonth == 0) {
                    lunarMonth = temp_month + 1;
                } else {
                    lunarMonth++;
                }
            } else {
                lunarYear++;
                lunarMonth = 1;
            }
            lunarDate = 1;
        }
    }

    if (lunarMonth === 0) {
        lunarMonth = '윤' + temp_month;
    }

    return [lunarYear, lunarMonth, lunarDate];
}

function lunarToSolar(lunarYear, lunarMonth, lunarDate) {
    var solarYear = 2000;
    var solarMonth = 1;
    var solarDate = 1;

    return [lunarYear, lunarMonth, lunarDate];
}

function convert() {
    $("#result").show();

    const year = $('#year').val();
    const month = $('#month').val();
    const day = $('#day').val();
    
    const mode = $('input[name=mode]:checked').val();
    if (mode === "SolarToLunar") {
        [lunarYear, lunarMonth, lunarDate] = solarToLunar(year, month, day)
        $('#result').text('음력 ' + lunarYear + '년 ' + lunarMonth + '월 ' + lunarDate + '일');
    } else if (mode === "LunarToSolar") {
        [solarYear, solarMonth, solarDate] = lunarToSolar(year, month, day)
        $('#result').text('양력 ' + solarYear + '년 ' + solarMonth + '월 ' + solarDate + '일');
    } else {
        $('#result').text('변환 모드를 선택하세요');
    }
}