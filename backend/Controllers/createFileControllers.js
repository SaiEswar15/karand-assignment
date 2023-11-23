const fs = require('fs').promises;
const path = require('path');

const createFile = async (req, res) => {
  try {
    const { folderName,filename, data } = req.body;

    console.log(folderName, filename, data, "createfile");

    // Check if filename, data, and filePath are provided
    if (!filename || !data || !folderName) {
      return res.status(400).json({ error: 'Foldername, Filename, data, and filePath are required.' });
    }

    // Create the full path by joining the provided filePath and filename
    const fullPath = path.join(__dirname, '..', '..', 'uploads', folderName, filename);

    // Create a new text file with the specified path and write data to it
    await fs.writeFile(fullPath, JSON.stringify(data));

    res.json({ success: true, message: `File "${filename}" created successfully at ${fullPath}.` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createFileInside = async (req, res) => {
    try {
      const { folderName, folderName2,filename, data } = req.body;
  
      console.log(folderName, folderName2, filename, data, "createfile");
  
      // Check if filename, data, and filePath are provided
      if (!filename || !data || !folderName || !folderName2) {
        return res.status(400).json({ error: 'Foldername, Filename, data, and filePath are required.' });
      }
  
      // Create the full path by joining the provided filePath and filename
      const fullPath = path.join(__dirname, '..', '..', 'uploads', folderName, folderName2, filename);
  
      // Create a new text file with the specified path and write data to it
      await fs.writeFile(fullPath, JSON.stringify(data));
  
      res.json({ success: true, message: `File "${filename}" created successfully at ${fullPath}.` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  const createFileOutside = async (req, res) => {
    try {
      const { folderName,filename, data } = req.body;
  
      console.log(folderName, filename, data, "createfile");
  
      // Check if filename, data, and filePath are provided
      if (!filename || !data || !folderName) {
        return res.status(400).json({ error: 'Foldername, Filename, data, and filePath are required.' });
      }
  
      // Create the full path by joining the provided filePath and filename
      const fullPath = path.join(__dirname, '..', '..', 'uploads', folderName, filename);
  
      // Create a new text file with the specified path and write data to it
      await fs.writeFile(fullPath, JSON.stringify(data));
  
      res.json({ success: true, message: `File "${filename}" created successfully at ${fullPath}.` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

module.exports = { createFile, createFileInside, createFileOutside };


