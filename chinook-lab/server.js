const express = require("express");
const { DatabaseSync } = require("node:sqlite");
const db = new DatabaseSync("./chinook.db");
const app = express();
app.use(express.json());
// Test route: list all tables in the database
app.get('/tables', (req, res) => {
    const stmt = db.prepare(
        "SELECT name FROM sqlite_master WHERE type='table' ORDER BY name"
    );
    res.json(stmt.all());
});
app.get('/artists', (req, res) => {
    const stmt = db.prepare(
        "SELECT * FROM Artist"
    );
    res.json(stmt.all());
});
app.get('/artists/:id/albums', (req, res) => {
    const stmt = db.prepare(
        `SELECT Album.AlbumId, Album.title FROM Album WHERE Album.ArtistId = ?`
    );
    const albums = stmt.all(req.params.id);
    if (albums.length === 0) {
        return res.status(404).json({ error: "Artist not found or has no albums" });
    }
    res.json(albums);
});
app.get('/tracks/long', (req, res) => {
    const stmt = db.prepare(
        "SELECT Track.Name, Track.AlbumId, Track.Milliseconds FROM Track JOIN Album ON Track.AlbumId = Album.AlbumId WHERE Track.Milliseconds > 300000"
    );
    res.json(stmt.all());
});
app.get('/genres/:id/stats', (req, res) => {
    const stmt = db.prepare(
        "SELECT Genre.Name, COUNT(*), AVG(Track.Milliseconds) FROM Track JOIN Genre ON Track.GenreId = Genre.GenreId WHERE Genre.GenreId = ? GROUP BY Genre.GenreId"
    );
    res.json(stmt.get(Number(req.params.id)));
});
app.use(express.json());
app.post("/playlists", (req, res) => {
    const {name} = req.body;

    const stmt = db.prepare("INSERT INTO Playlist (Name) VALUES (?)");
    const result = stmt.run(name);

    res.status(201).json({
        id: Number(result.lastInsertRowid), name: name,
    });
});
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});