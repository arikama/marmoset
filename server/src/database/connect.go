package database

import (
	"database/sql"
	"fmt"

	"github.com/arikama/marmoset/server/src/constants"
)

// Connect .
func Connect(dbInfo *DbInfo) (*sql.DB, error) {
	driverName := "mysql"
	dataSourceName := fmt.Sprintf(
		"%s:%s@tcp(%s:%s)/%s",
		dbInfo.Username,
		dbInfo.Password,
		dbInfo.Host,
		constants.DbPort(),
		constants.DbName(),
	)
	db, err := sql.Open(driverName, dataSourceName)
	if err != nil {
		return nil, err
	}
	err = db.Ping()
	if err != nil {
		return nil, err
	}
	return db, nil
}
