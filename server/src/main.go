package main

import "net/http"

type payload struct {
	Message string `json:"message,omitempty"`
}

func main() {
	s := server{
		router: http.DefaultServeMux,
	}
	s.routes()
	s.listenAndServe()
}
