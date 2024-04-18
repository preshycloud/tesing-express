exports.getAllServices = (req, res) => {
    res.status(200)
    res.json([
        {
            service: "Teaching"
        },
        {
            service: "Plumbing"
        },
        {
            service: "Programming"
        }
    ])
}


exports.getASingleService = (req, res) => {
    res.status(200)
    res.json({
        service: "Teaching"
    })
}

exports.createANewService = (req, res) => {
    res.status(200)
    res.json({
        message: "New service added successfully"
    })
}

exports.updateServices = (req, res) => {
    res.status(200)
    res.json({
        message: "Service Updated successfully"
    })
}


exports.deleteService = (req, res) => {
    res.status(200)
    res.json({
        message: "Service deleted successfully"
    })
}
