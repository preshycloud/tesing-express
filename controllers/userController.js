exports.getAllUsersInfo = (req, res) => {
    res.status(200)
    res.json([
        {
            lastName: "Aderibigbe",
            firstName: "Precious",
            email: "aderibigbeprecious@gmail.com",
            hobbies: "Sleeping"
        },
        {
            lastName: "Akpan",
            firstName: "Phil",
            email: "akpanphil@gmail.com",
            hobbies: "trading"
        },
        {
            lastName: "Kingsley",
            firstName: "Lee",
            email: "leeKay@yahoo.com",
            hobbies: "coding"
        }
    ])
}


exports.getASingleUserInfo = (req, res) => {
    res.status(200)
    res.json({
            lastName: "Aderibigbe",
            firstName: "Precious",
            email: "aderibigbeprecious@gmail.com",
            hobbies: "Sleeping"
        })
}

exports.createANewUser = (req, res) => {
    res.status(200)
    res.json({
        message: "New User Information added successfully"
    })
}


exports.updateUserInfo = (req, res) => {
    res.status(200)
    res.json({
        message: "User Information updated successfully"
    })
}


exports.deleteUserInfo = (req, res) => {
    res.status(200)
    res.json({
        message: "User Information deleted successfully"
    })
}