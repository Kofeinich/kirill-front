const API_BASE_URL = "https://800945b7-13c1-4b0f-baa2-2bcabaf66278.mock.pstmn.io/api"
const orders = async () => {
    const resp = await fetch(`${API_BASE_URL}/orders`)
    return await resp.json()
}
const me = async () => {
    const resp = await fetch(`${API_BASE_URL}/me`)
    return await resp.json()
}
const items = async (page) => {
    const resp = await fetch(`${API_BASE_URL}/warehouse/items?page=${page}`)
    return await resp.json()
}