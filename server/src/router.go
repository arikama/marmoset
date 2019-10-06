package main

import (
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
	return func(w http.ResponseWriter, r *http.Request) {
		utils.AddContentTypeJSON(w)
		switch r.Method {
		case http.MethodGet:
			controllers.Words(w, r, s.database)
		case http.MethodPost:
			controllers.WordsCreate(w, r, s.database)
		default:
			http.NotFound(w, r)
		}
	}
}
