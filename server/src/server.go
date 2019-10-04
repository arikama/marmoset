package main

import (
	"database/sql"
	"net/http"
)

type server struct {
	database *sql.DB
	router   *http.ServeMux
}

func (s *server) listenAndServe() {
	srv := &http.Server{}
	srv.ListenAndServe()
}
