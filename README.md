# Inventory Management Web Application

A general purpose inventory management web application. Built with MongoDB, Express, Angular + Angular Material Design and Node (MEAN). [Demo](https://meaninventory.herokuapp.com/) for electric store inventory (heroku will take a few seconds to load in sleep mode).


## Instructions to run locally

1. Download/Clone the repository
2. `npm install` to install npm modules (which will automatically install bower dependencies. But you can separately run with `bower install`)
3. (Install) and start mongodb. By default it runs on port 27017. Database name is "inventory". The path or name can be changed from config/db.js
4. For demo, run `node seed.js` (just once). This will seed into database sample data of an electric store from `items.json`
5. Start the server `node server.js`
6. View in browser at http://localhost:8080


## Features
- Item Fields: Name, Purchase Price, Sale Price, Identify By (piece, kg, meter, foot, centimeter, inch, box), In Stock
- Operations: Wild card search, add, update, delete items
- Trivial logical checks in item add/update forms like sale price should be a number and not less than purchase price etc.


## Future Additions / New Versions
- Graph representation of current stock/inventory
- Download inventory as csv/xlsx
- Create a new desktop version of this app with Electron (for desktop app, maybe use file system instead of mongodb) 


## Contribution

Feel free to send a pull request!
