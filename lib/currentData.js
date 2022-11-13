const currentMonth = new Date().getMonth()

const currentSeason = (currentMonth) => {
    // let season = ''
    // let seasonIndex = 0
    let obj = {
        season: '',
        seasonIndex: 0,
    }
    switch (currentMonth) {
        case 0:
            obj.season = 'winter'
            obj.seasonIndex = 4
            break
        case 1:
            obj.season = 'winter'
            obj.seasonIndex = 4
            break
        case 2:
            obj.season = 'spring'
            obj.seasonIndex = 1
            break
        case 3:
            obj.season = 'spring'
            obj.seasonIndex = 1
            break
        case 4:
            obj.season = 'spring'
            obj.seasonIndex = 1
            break
        case 5:
            obj.season = 'summer'
            obj.seasonIndex = 2
            break
        case 6:
            obj.season = 'summer'
            obj.seasonIndex = 2
            break
        case 7:
            obj.season = 'summer'
            obj.seasonIndex = 2
            break
        case 8:
            obj.season = 'autumn'
            obj.seasonIndex = 3
            break
        case 9:
            obj.season = 'autumn'
            obj.seasonIndex = 3
            break
        case 10:
            obj.season = 'autumn'
            obj.seasonIndex = 3
            break
        case 11:
            obj.season = 'winter'
            obj.seasonIndex = 4
            break
    }
    return obj
}

export { currentMonth, currentSeason }
