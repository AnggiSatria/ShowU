export const removeEmptyAttributes = (params) => {
    const queryString = Object?.entries(params)
        .filter(([_, value]) => value !== undefined && value !== "")
        .map(([key, value]) => `${key}=${value}`)
        .join("&")
    return queryString
}

export const formatNumbers = (currency, value) => {
    if (value === "") return ''
    const customNumber = new Intl.NumberFormat('id-ID').format(value)
    return customNumber?.split(".")?.slice(1, customNumber.split(".").length).length >= 2
        ? `${customNumber?.split(".")?.slice(0, 1)}M`
        : `${customNumber?.split(".")?.slice(0, 1)}K`
}
