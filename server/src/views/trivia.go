package views

import "github.com/arikama/marmoset/server/src/jsons"

// Trivia .
func Trivia() *jsons.Payload {
	return &jsons.Payload{
		Message: "Marmoset is a tree-dwelling primate that move in a quick, jerky manner",
	}
}
