package main

import (
	"log"
	"net/http"

	"github.com/arikama/marmoset/server/src/controllers"
	"github.com/arikama/marmoset/server/src/utils"
)

func (s *server) root() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		utils.AddContentTypeJSON(w)
		switch r.Method {
		case http.MethodGet:
			controllers.Trivia(w)
		default:
			http.NotFound(w, r)
		}

	}
}

func (s *server) words() http.HandlerFunc {
	log.Println("debug: words")
	return func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		default:
			http.NotFound(w, r)
		}
	}
}
