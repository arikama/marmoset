package database

// InsertWord .
func (db *SQLDb) InsertWord(word string) error {
	_, err := db.Instance.Exec(
		`
		INSERT INTO word (word) VALUES (?);
		`,
		word,
	)
	return err
}
