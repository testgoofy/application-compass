INSERT INTO "process_nodes" ("id", "name")
VALUES (1, 'Initial'),
    (2, 'Applied'),
    (3, 'Interview Round 1'),
    (4, 'Offering'),
    (5, 'Accepted'),
    (6, 'Rejected'),
    (7, 'Denied');
INSERT INTO "process_edges" ("id", "fromId", "toId")
VALUES (1, 1, 2),
    (2, 2, 3),
    (3, 3, 4),
    (4, 4, 5);