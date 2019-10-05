package main

import (
	"log"
	"net/http"
	"os"

	"github.com/arikama/marmoset/server/src/database"
	_ "github.com/go-sql-driver/mysql"
)

func main() {
	dbHost := os.Getenv("MYSQL_HOST")
	dbPassword := os.Getenv("MYSQL_PASSWORD")
	dbUsername := os.Getenv("MYSQL_USERNAME")
	dbInfo := database.DbInfo{
		Host:     dbHost,
		Password: dbPassword,
		Username: dbUsername,
	}
	db, err := database.Connect(&dbInfo)
	if err != nil {
		log.Fatalln(err.Error())
	}
	s := server{
		database: db,
		router:   http.DefaultServeMux,
	}
	s.routes()
	s.listenAndServe()
}
