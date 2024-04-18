exports.getAllProducts = (req, res) => {
    res.status(200)
    res.json([
        {
            item: "Gas cooker",
            price: "$300"
        },
        {
            item: "HP laptop",
            price: "$120"
        },
        {
            item: "Silver Necklace",
            price: "$25"
        }
    ])
}


exports.getASingleProduct = (req, res) => {
    res.status(200)
    res.json({
        item: "Gas cooker",
        price: "$300"
    })
}


exports.createANewProduct = (req, res) => {
    res.status(200)
    res.json({
        message: "A new product added successfully"
    })
}

exports.updateCurrentProduct = (req, res) => {
    res.status(200)
    res.json({
        message: "Product updated successfully"
    })
}

exports.deleteProduct = (req, res) => {
    res.status(200)
    res.json({
        message: "Product deleted successfully"
    })
}

