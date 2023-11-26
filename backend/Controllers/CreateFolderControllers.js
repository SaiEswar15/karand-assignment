const path = require('path');
const fs = require('fs');

const createFolder = (req, res) => {
    const { folderName } = req.body;
    console.log(folderName)
    if (!folderName) {
        return res.status(400).json({ error: 'Folder name is required' });     
    }

    const folderPath = path.join(__dirname, '..', '..', 'uploads', folderName);  

    // Check if the folder already exists
    if (fs.existsSync(folderPath)) {
        return res.status(400).json({ error: 'Folder already exists' });
    }

    // Create the folder
    fs.mkdir(folderPath, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to create folder' });
        }

        res.json({ message: 'Folder created successfully' });
    });
}

const createFolderInside = (req, res) => {
    const { checkingmail, folderName } = req.body;
    console.log(checkingmail, folderName , "chcking ")
    if (!folderName) {
        return res.status(400).json({ error: 'Folder name is required' });
    }

    const folderPath = path.join(__dirname, '..', '..', 'uploads', `${checkingmail}`, folderName);

    // Check if the folder already exists
    if (fs.existsSync(folderPath)) {
        return res.status(400).json({ error: 'Folder already exists' });
    }

    // Create the folder
    fs.mkdir(folderPath, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to create folder' });
        }

        res.json({ message: 'Folder created successfully' });
    });
}

const createFolderOutside = (req, res) => {
    const {  folderName } = req.body;
    console.log( folderName , "chcking data2")
    if (!folderName) {
        return res.status(400).json({ error: 'Folder name is required' });
    }

    const folderPath = path.join(__dirname, '..', '..', 'uploads', folderName);

    // Check if the folder already exists
    if (fs.existsSync(folderPath)) {
        return res.status(400).json({ error: 'Folder already exists' });
    }

    // Create the folder
    fs.mkdir(folderPath, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to create folder' });
        }

        res.json({ message: 'Folder created successfully' });
    });
}



module.exports = {createFolder, createFolderInside, createFolderOutside}