package controllers

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/arikama/marmoset/server/src/database"
	"github.com/arikama/marmoset/server/src/jsons"
)

// Words .
func Words(w http.ResponseWriter, r *http.Request, sql *database.SQLDb) {
	word, err := sql.SelectWord()
	if err != nil {
		log.Println(err.Error())
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	payload := jsons.Payload{
		Words: []string{word},
	}
	err = json.NewEncoder(w).Encode(payload)
	if err != nil {
		log.Println(err.Error())
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusOK)
}

// WordsCreate .
func WordsCreate(w http.ResponseWriter, r *http.Request, sql *database.SQLDb) {
	body := jsons.Body{}
	err := json.NewDecoder(r.Body).Decode(&body)
	if err != nil {
		log.Println(err.Error())
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	word, ok := body.Payload["word"].(string)
	if !ok {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	err = sql.InsertWord(word)
	if err != nil {
		log.Println(err.Error())
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusOK)
}
