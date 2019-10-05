package main

import (
	"net/http"

	"github.com/arikama/marmoset/server/src/database"
)

type server struct {
	database *database.SQLDb
	router   *http.ServeMux
}

func (s *server) listenAndServe() {
	srv := &http.Server{}
	srv.ListenAndServe()
}
