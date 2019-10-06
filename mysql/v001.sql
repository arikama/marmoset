START TRANSACTION;
CREATE TABLE word (
  id           INT         NOT NULL AUTO_INCREMENT PRIMARY KEY,
  word         VARCHAR(32) NOT NULL UNIQUE KEY,
  date_created DATETIME    NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO migration (version_name) VALUES ("v001");
COMMIT;