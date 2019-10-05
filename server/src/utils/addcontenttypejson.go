package utils

import "net/http"

// AddContentTypeJSON .
func AddContentTypeJSON(w http.ResponseWriter) {
	w.Header().Add("Content-Type", "application/json;charset=utf-8")
}
