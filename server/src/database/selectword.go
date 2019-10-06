package database

// SelectWord .
func (db *SQLDb) SelectWord() (string, error) {
	rows, err := db.Instance.Query(
		`
		SELECT word FROM word ORDER BY RAND() LIMIT 1;
		`,
	)
	defer rows.Close()
	if err != nil {
		return "", err
	}
	word := ""
	if rows.Next() {
		rows.Scan(&word)
	}
	return word, nil
}
