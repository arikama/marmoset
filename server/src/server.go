package main

import (
	"net/http"
)

type server struct {
	router *http.ServeMux
}

func (s *server) listenAndServe() {
	srv := &http.Server{}
	srv.ListenAndServe()
}
