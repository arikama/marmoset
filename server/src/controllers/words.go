package controllers

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/arikama/marmoset/server/src/database"
	"github.com/arikama/marmoset/server/src/jsons"
)

// WordsCreate .
func WordsCreate(w http.ResponseWriter, r *http.Request, sql *database.SQLDb) {
	w.WriteHeader(http.StatusOK)
	body := jsons.Body{}
	json.NewDecoder(r.Body).Decode(&body)
	word := body.Payload["word"].(string)
	log.Println("debug: word", word)
	sql.InsertWord(word)
}
