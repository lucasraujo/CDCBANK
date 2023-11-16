
export const maskDate = (date: string) => {
    const splitDate = date.split('-')

    const newDate = `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`

    return newDate

}