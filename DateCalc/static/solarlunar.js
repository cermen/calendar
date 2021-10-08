function solarToLunar(solarYear, solarMonth, solarDay) {
    return [solarYear, solarMonth, solarDay]
}

function lunarToSolar(lunarYear, lunarMonth, lunarDay) {
    return [lunarYear, lunarMonth, lunarDay]
}

function convert() {
    $("#result").show();

    const year = $('#year').val()
    const month = $('#month').val()
    const day = $('#day').val()
    
    const mode = $('input[name=mode]:checked').val();
    if (mode === "SolarToLunar") {
        [lunarYear, lunarMonth, lunarDay] = solarToLunar(year, month, day)
        $('#result').text('음력 ' + lunarYear + '년 ' + lunarMonth + '월 ' + lunarDay + '일');
    } else if (mode === "LunarToSolar") {
        [solarYear, solarMonth, solarDay] = lunarToSolar(year, month, day)
        $('#result').text('양력 ' + solarYear + '년 ' + solarMonth + '월 ' + solarDay + '일');
    } else {
        $('#result').text('변환 모드를 선택하세요')
    }
}