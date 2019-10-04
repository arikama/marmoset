package main

import (
	"database/sql"
	"fmt"
)

func connect(dbInfo *dbInfo) (*sql.DB, error) {
	driverName := "mysql"
	dataSourceName := fmt.Sprintf(
		"%s:%s@tcp(%s:%s)/%s",
		dbInfo.username,
		dbInfo.password,
		dbInfo.host,
		dbPort(),
		dbName(),
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
