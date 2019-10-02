package main

import (
	"encoding/json"
	"net/http"
)

type payload struct {
	Message string `json:"message,omitempty"`
}

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Add("Content-Type", "application/json;charset=utf-8")
		w.WriteHeader(http.StatusOK)
		json.NewEncoder(w).Encode(payload{Message: "Marmoset is a tree-dwelling primate that move in a quick, jerky manner"})
	})
	s := &http.Server{}
	s.ListenAndServe()
}
