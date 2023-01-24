The Webizen Engine needs to be able to do the basics.

## RWW

Thoughts are to use and modify some of the old RWW libraries that are written in go.

DB
I think there needs to be two, one for PCT the other for personal data. 

I've asked ChatGPT about it, which provided the following example;

```go
package main

import (
	"fmt"
	"log"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

// Model for first database
type User struct {
	gorm.Model
	Name     string
	Email    string
	Password string
}

// Model for second database
type Order struct {
	gorm.Model
	UserID   uint
	Product  string
	Quantity int
}

func main() {
	// Connect to first database
	db1, err := gorm.Open("postgres", "host=localhost user=postgres dbname=first_db password=password sslmode=disable")
	if err != nil {
		log.Fatal(err)
	}
	defer db1.Close()

	// Connect to second database
	db2, err := gorm.Open("sqlite3", "second_db.db")
	if err != nil {
		log.Fatal(err)
	}
	defer db2.Close()

	// Migrate the schemas
	db1.AutoMigrate(&User{})
	db2.AutoMigrate(&Order{})

	// Create a user in the first database
	user := User{Name: "John Smith", Email: "john@example.com", Password: "password"}
	db1.Create(&user)

	// Create an order in the second database
	order := Order{UserID: user.ID, Product: "Shirt", Quantity: 2}
	db2.Create(&order)

	// Fetch the order from the second database
	var retrievedOrder Order
	db2.First(&retrievedOrder, order.ID)

	// Print the order details
	fmt.Println("Order details:")
	fmt.Printf("- Product: %s\n", retrievedOrder.Product)
	fmt.Printf("- Quantity: %d\n", retrievedOrder.Quantity)

	// Fetch the user from the first database
	var retrievedUser User
	db1.First(&retrievedUser, user.ID)

	// Print the user details
	fmt.Println("User details:")
	fmt.Printf("- Name: %s\n", retrievedUser.Name)
	fmt.Printf("- Email: %s\n", retrievedUser.Email)
}

```



Otherwise, there needs to be two modules that are designed to be interdependent. 

Perhaps this is done via two seperate caddy modules.  
