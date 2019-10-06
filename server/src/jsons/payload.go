package jsons

// Payload .
type Payload struct {
	Message string   `json:"message,omitempty"`
	Words   []string `json:"words,omitempty"`
}
