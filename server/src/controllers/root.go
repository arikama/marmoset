package controllers

import (
	"encoding/json"
	"net/http"

	"github.com/arikama/marmoset/server/src/views"
)

// Trivia .
func Trivia(w http.ResponseWriter) {
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(views.Trivia())
}
