package main

import (
	"log"
	"net/http"
	"os"

	_ "github.com/go-sql-driver/mysql"
)

type payload struct {
	Message string `json:"message,omitempty"`
}

func main() {
	dbHost := os.Getenv("MYSQL_HOST")
	dbPassword := os.Getenv("MYSQL_PASSWORD")
	dbUsername := os.Getenv("MYSQL_USERNAME")
	dbInfo := dbInfo{dbHost, dbPassword, dbUsername}
	db, err := connect(&dbInfo)
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
