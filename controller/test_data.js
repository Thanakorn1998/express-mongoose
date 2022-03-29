var user = [
    {
        id: 1,
        name: "one",
        status: "member"
    },
    {
        id: 2,
        name: "joe",
        status: "admin"
    }
]

exports.fine_all = (req,res) => {
    res.json(user)
}

