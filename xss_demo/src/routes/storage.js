let data = []

export function post(req, res) {
    data.push(req.body)
    return res.end(JSON.stringify({status: true}))
}

export function get(req, res) {
    return res.end(JSON.stringify(data))
}