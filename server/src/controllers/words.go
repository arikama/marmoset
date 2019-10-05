package controllers

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/arikama/marmoset/server/src/jsons"
)

// WordsCreate .
func WordsCreate(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	body := jsons.Body{}
	json.NewDecoder(r.Body).Decode(&body)
	log.Println(body)
}
