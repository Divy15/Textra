package database

import (
    "context"
    "fmt"
    "os"
    "time"

    "github.com/jackc/pgx/v5/pgxpool"
)

var DB *pgxpool.Pool

func ConnectDB() {
    // 1. Connection string
    connStr := "postgres://postgres:divy@localhost:5432/textra_db"

    // 2. Configure the Pool (Similar to your idleTimeoutMillis)
    config, err := pgxpool.ParseConfig(connStr)
    if err != nil {
        fmt.Fprintf(os.Stderr, "Config error: %v\n", err)
        os.Exit(1)
    }

    // Set pool settings like you did in Node
    config.MaxConnIdleTime = 3 * time.Second      // idleTimeoutMillis
    config.ConnConfig.ConnectTimeout = 5 * time.Second // connectionTimeoutMillis

    // 3. Create the Pool
    DB, err = pgxpool.NewWithConfig(context.Background(), config)
    if err != nil {
        fmt.Fprintf(os.Stderr, "Unable to connect: %v\n", err)
        os.Exit(1)
    }

    fmt.Println("🎉 Successfully connected to PostgreSQL via Pool!")
}