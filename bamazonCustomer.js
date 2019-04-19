//Dependencies
var mysql    = require('mysql');
var inquirer = require('inquirer');

//Create a connection
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'bamazonDB'
});

//Confirm if connection's successful using a call back function
connection.connect(function(error){
    if(error) throw error;
    console.log("connected as id: " + connection.threadId);

    connection.query("SELECT * FROM products", function(err, res){
        if(err) throw err;
        for(var i = 0; i < res.length; i++){
        console.log("Products on sale: " 
        + "\nItem ID: " + res[i].item_id 
        + "\nProduct: " + res[i].product_name
        + "\nPrice: $" + res[i].price);   
        }
        display(res);
    });
});

function display(results){

  //User prompt section
  inquirer.prompt([
      {
          type: "list",
          name: "selectItemID",
          message: "Enter Item ID for the product you would like to purchase",
          choices: function(){
              var choiceArrayItemID = [];
              for(var i = 0; i < results.length; i++){
                  choiceArrayItemID.push(results[i].item_id.toString());
              }
              return choiceArrayItemID;
          }
      },
      {
          type: "input",
          name: "selectNumUnits",
          message: "How many would you like to buy?"
      }
  ]).then(function(answer){
      unitCheck(answer.selectItemID, answer.selectNumUnits);
  });  
};

function updateUnits(itemID, unitQty, stock){
    console.log("Updating Units.........");
    var query = connection.query(
        `UPDATE products SET stock = ${stock-unitQty} WHERE ${itemID} = item_id`, function(err, res){
            if(err) throw err;
            console.log('Thank you for your order!');
        } 
    );
}

function unitCheck(productID, productQty){

    connection.query(`SELECT stock FROM products WHERE ${productID} = products.item_id`, function(err, res){
        if(err) throw err;

        if(parseInt(productQty) > res[0].stock){
            console.log("Insufficient quantity - Sorry, we are out of stock.");
            display();
        }else{
            updateUnits(itemID, unitQty, res[0].stock);
            connection.end();
        };
    });

};