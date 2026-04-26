package main

import (
	"github.com/gin-gonic/gin"
	"backend/database"
)

func main() {
	// 1. Initialize the engine (Equivalent to const app = express())
	r := gin.Default()

	// 1. Connect to Postgres
    database.ConnectDB()
    // Ensure the connection closes when the app stops
    defer database.DB.Close()

	// 2. Define a route (Equivalent to app.get)
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	// 3. Listen and Serve (Equivalent to app.listen)
	// If you leave it empty, it defaults to :8080
	r.Run(":3000") 
}