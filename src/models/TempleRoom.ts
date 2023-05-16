function calcDaysInTemple(hour: number): number {
    const year = 8760;
    const day = 24;

    let result = (((year * hour)/day)/day).toFixed(2);

    return Number(result);
}

export default {
    calcDaysInTemple
}