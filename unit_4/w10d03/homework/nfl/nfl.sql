-- 1. List the names of all NFL teams'

SELECT name FROM teams;
--         name
-- ----------------------
-- Buffalo Bills
-- Miami Dolphins
-- New England Patriots
-- New York Jets
-- Baltimore Ravens
-- Cincinnati Bengals
-- Cleveland Browns
-- Pittsburgh Steelers
-- Houston Texans
-- Indianapolis Colts
-- Jacksonville Jaguars
-- Tennessee Titans
-- Denver Broncos
-- Kansas City Chiefs
-- Oakland Raiders
-- San Diego Chargers
-- Dallas Cowboys
-- New York Giants
-- Philadelphia Eagles
-- Washington Redskins
-- Chicago Bears
-- Detroit Lions
-- Green Bay Packers
-- Minnesota Vikings
-- Atlanta Falcons
-- Carolina Panthers
-- New Orleans Saints
-- Tampa Bay Buccaneers
-- Arizona Cardinals
-- St. Louis Rams
-- San Francisco 49ers
-- Seattle Seahawks
-- (32 rows)

-- 2. List the stadium name and head coach of all NFC teams

SELECT stadium, head_coach FROM teams;
--             stadium            |   head_coach
-- -------------------------------+----------------
--  Ralph Wilson Stadium          | Doug Marrone
--  Sun Life Stadium              | Joe Philbin
--  Gillette Stadium              | Bill Belichick
--  MetLife Stadium               | Rex Ryan
--  M&T Bank Stadium              | John Harbaugh
--  Paul Brown Stadium            | Marvin Lewis
--  FirstEnergy Stadium           | Mike Pettine
--  Heinz Field                   | Mike Tomlin
--  NRG Stadium                   | Bill OBrien
--  Lucas Oil Stadium             | Chuck Pagano
--  EverBank Field                | Gus Bradley
--  LP Field                      | Ken Whisenhunt
--  Sports Authority Field        | John Fox
--  Arrowhead Stadium             | Andy Reid
--  O.co Coliseum                 | Tony Sparano
--  Qualcomm Stadium              | Mike McCoy
--  AT&T Stadium                  | Jason Garrett
--  MetLife Stadium               | Tom Coughlin
--  Lincoln Financial Field       | Chip Kelly
--  FedExField                    | Jay Gruden
--  Soldier Field                 | Marc Trestman
--  Ford Field                    | Jim Caldwell
--  Lambeau Field                 | Mike McCarthy
--  TCF Bank Stadium              | Mike Zimmer
--  Georgia Dome                  | Mike Smith
--  Bank of America Stadium       | Ron Rivera
--  Mercedes-Benz Superdome       | Sean Payton
--  Raymond James Stadium         | Lovie Smith
--  University of Phoenix Stadium | Bruce Arians
--  Edward Jones Dome             | Jeff Fisher
--  Levis Stadium                 | Jim Harbaugh
--  CenturyLink Field             | Pete Carroll
-- (32 rows)

-- 3. List the head coaches of the AFC South

SELECT head_coach FROM teams WHERE division = 'South' AND conference = 'AFC' ;
--    head_coach
-- ----------------
--  Bill OBrien
--  Chuck Pagano
--  Gus Bradley
--  Ken Whisenhunt
-- (4 rows)


-- 4. The total number of players in the NFL

SELECT COUNT(*) FROM players
nfl-# ;
--  count
-- -------
--   1532
-- (1 row)

-- 5. The team names and head coaches of the NFC North and AFC East

SELECT name, head_coach FROM teams WHERE (division = 'North' AND conference='NFC') OR (division = 'East' AND conference = 'AFC');
--          name         |   head_coach   
-- ----------------------+----------------
--  Buffalo Bills        | Doug Marrone
--  Miami Dolphins       | Joe Philbin
--  New England Patriots | Bill Belichick
--  New York Jets        | Rex Ryan
--  Chicago Bears        | Marc Trestman
--  Detroit Lions        | Jim Caldwell
--  Green Bay Packers    | Mike McCarthy
--  Minnesota Vikings    | Mike Zimmer
-- (8 rows)

-- 6. The 50 players with the highest salaries

SELECT name, salary  FROM players ORDER BY salary DESC LIMIT 50;
--           name           |  salary
-- -------------------------+----------
--  Peyton Manning          | 18000000
--  Drew Brees              | 15760000
--  Dwight Freeney          | 14035000
--  Elvis Dumervil          | 14000000
--  Michael Vick            | 12500000
--  Sam Bradford            | 12000000
--  Jared Allen             | 11619850
--  Matt Ryan               | 11500000
--  Matthew Stafford        | 11500000
--  Tamba Hali              | 11250000
--  Jake Long               | 11200000
--  Trent Williams          | 11000000
--  Nnamdi Asomugha         | 11000000
--  Vincent Jackson         | 11000000
--  Cliff Avril             | 10600000
--  Calais Campbell         | 10600000
--  Joe Thomas              | 10500000
--  Brent Grimes            | 10431000
--  Peyton Manning (buyout) | 10400000
--  Chris Long              | 10310000
--  Philip Rivers           | 10200000
--  Jason Smith             | 10000000
--  David Harris            |  9900000
--  Wes Welker              |  9515000
--  Davin Joseph            |  9500000
--  Dwayne Bowe             |  9443000
--  Asante Samuel           |  9400000
--  Brandon Marshall        |  9300000
--  Ndamukong Suh           |  9250000
--  Tony Romo               |  9000000
--  Julius Peppers          |  8900000
--  Anthony Spencer         |  8800000
--  Karlos Dansby           |  8800000
--  Jordan Gross            |  8500000
--  Tyson Jackson           |  8005000
--  Adrian Peterson         |  8000000
--  Champ Bailey            |  8000000
--  Aaron Rodgers           |  8000000
--  Chris Johnson           |  8000000
--  Jason Peters            |  7900000
--  Santonio Holmes         |  7750000
--  Eric Wright             |  7750000
--  Steve Smith             |  7750000
--  Jay Cutler              |  7700000
--  Matt Forte              |  7700000
--  Ray Rice                |  7700000
--  Brian Urlacher          |  7500000
--  Johnathan Joseph        |  7250000
--  Gary Brackett           |  7200000
--  Ed Reed                 |  7200000
-- (50 rows)


-- 7. The average salary of all NFL players

SELECT AVG(salary) FROM players;
--          avg
-- ----------------------
--  1579692.539817232376
-- (1 row)


-- 8. The names and positions of players with a salary above 10_000_000

-- name           | position
-- -------------------------+----------
-- Jake Long               | T
-- Joe Thomas              | T
-- Dwight Freeney          | DE
-- Peyton Manning (buyout) | QB
-- Peyton Manning          | QB
-- Elvis Dumervil          | DE
-- Tamba Hali              | DE
-- Philip Rivers           | QB
-- Michael Vick            | QB
-- Nnamdi Asomugha         | CB
-- Trent Williams          | T
-- Matthew Stafford        | QB
-- Cliff Avril             | DE
-- Jared Allen             | DE
-- Matt Ryan               | QB
-- Brent Grimes            | CB
-- Drew Brees              | QB
-- Vincent Jackson         | WR
-- Calais Campbell         | DE
-- Sam Bradford            | QB
-- Chris Long              | DE
-- (21 rows)


-- 9. The player with the highest salary in the NFL
SELECT name, salary  FROM players ORDER BY salary DESC LIMIT 1;
-- name      |  salary
-- ----------------+----------
-- Peyton Manning | 18000000


-- 10. The name and position of the first 100 players with the lowest salaries


SELECT name, position FROM players ORDER BY salary ASC LIMIT 100;
--           name          | position
-- ------------------------+----------
--  Phillip Dillard        |
--  Eric Kettani           | RB
--  Greg Orton             | WR
--  Jeremy Beal            | DE
--  Jamie McCoy            | TE
--  Kevin Cone             | WR
--  Caleb King             | RB
--  Travon Bellamy         | CB
--  Derrick Jones          | WR
--  Sealver Siliga         | DT
--  Ricky Sapp             | DE
--  Tyler Beiler           |
--  Corbin Bryant          | DT
--  Nathan Bussey          | LB
--  Markell Carter         | DE
--  Armando Allen          | RB
--  Garrett Chisolm        | G
--  Jonathan Crompton      | QB
--  McLeod Bethel-Thompson | QB
--  Dontavia Bogan         | WR
--  Shaun Draughn          | RB
--  Curtis Holcomb         | CB
--  Konrad Reuland         | TE
--  Michael Wilhoite       | LB
--  Marshall McFadden      | LB
--  Joe Hastings           | WR
--  Mike Hartline          | QB
--  Chad Spann             | RB
--  Ben Guidugli           | TE
--  Justin Medlock         | KR
--  Mark Dell              | WR
--  Shaky Smithson         | WR
--  DAndre Goodwin         | WR
--  Austin Sylvester       | RB
--  Jimmy Young            | WR
--  Mike Mohamed           | LB
--  Ronald Johnson         | WR
--  Brett Brackett         | TE
--  John Clay              | RB
--  Tristan Davis          | RB
--  Armon Binns            | WR
--  Jerrod Johnson         | QB
--  Robert James           | LB
--  Derek Hall             | T
--  Chase Beeler           | C
--  Cory Nelms             | CB
--  Juamorris Stewart      | WR
--  Kenny Wiggins          | T
--  Mark LeGree            | S
--  John Malecki           | G
--  Kyle Hix               | T
--  Kade Weston            | DT
--  Kyle Nelson            | LS
--  Jameson Konz           | WR
--  Mike Rivera            | LB
--  Trevis Turner          | T
--  Aaron Lavarias         | DT
--  Michael Jasper         | DT
--  Mike Blanc             | DT
--  Pat Devlin             | QB
--  Jerome Messam          | RB
--  David Gilreath         | WR
--  Malcolm Williams       | CB
--  Lestar Jean            | WR
--  Rashad Carmichael      | CB
--  Doug Worthington       | DT
--  Alex Silvestro         | DT
--  Jammie Kirlew          | DE
--  Adam Grant             | T
--  Adam Weber             | QB
--  Joe Reitz              | T
--  Brandon Browner        | CB
--  Jeff Byers             | C
--  Jed Collins            | TE
--  Marcus Sherels         | CB
--  Emmanuel Stephens      | DT
--  Aaron Berry            | CB
--  Logan Payne            | WR
--  Cameron Sheffield      | LB
--  T.J. Conley            | PR
--  Kyle Bosworth          | LB
--  John Estes             | C
--  Thomas Austin          | G
--  Garrett McIntyre       | DT
--  Markus White           | DE
--  Ricardo Matthews       | DT
--  Quinten Lawrence       | WR
--  Jimmy Wilson           | CB
--  Nick Bellore           | LB
--  Taylor Boggs           | C
--  Kamar Aiken            | WR
--  Justin Rogers          | CB
--  Johnny White           | RB
--  Dexter Jackson         | WR
--  DaNorris Searcy        | S
--  Chris White            | LB
--  Sterling Moore         | CB
--  Chris Hairston         | T
--  Brett Hartmann         | P
--  Caleb Schlauderaff     | G
-- (100 rows)


-- 11. The average salary for a DE in the nfl


SELECT AVG(salary) FROM players WHERE position = 'DE';
--          avg
-- ----------------------
--  2161326.377049180328
-- (1 row)


-- 12. The names of all the players on the Buffalo Bills


SELECT name FROM players WHERE team_id = 1;
--         name
-- --------------------
--  Mario Williams
--  Drayton Florence
--  Shawne Merriman
--  Dwan Edwards
--  Chris Kelsay
--  Kyle Williams
--  Nick Barnett
--  Spencer Johnson
--  Ryan Fitzpatrick
--  Steve Johnson
--  Tyler Thigpen
--  Lee Evans (Buyout)
--  Brad Smith
--  Fred Jackson
--  Scott Chandler
--  George Wilson
--  Erik Pears
--  Leodis McKelvin
--  Brian Moorman
--  Terrence McGee
--  Marcell Dareus
--  Chad Rinehart
--  Kraig Urbik
--  Rian Lindell
--  Kirk Morrison
--  Corey McIntyre
--  C.J. Spiller
--  Garrison Sanborn
--  Eric Wood
--  Lionel Dotson
--  Ruvell Martin
--  Andy Levitre
--  Jairus Byrd
--  Jarron Gilbert
--  Kyle Moore
--  Aaron Williams
--  Donald Jones
--  Fendi Onobun
--  Kellen Heard
--  Mike Caussin
--  Naaman Roosevelt
--  Alex Carrington
--  Arthur Moats
--  Colin Brown
--  Cordaro Howard
--  Dan Batten
--  David Nelson
--  Marcus Easley
--  Sam Young
--  Torell Troup
--  Kelvin Sheppard
--  Lee Smith
--  Chris Hairston
--  Chris White
--  DaNorris Searcy
--  Johnny White
--  Justin Rogers
--  Kamar Aiken
--  Michael Jasper
-- (59 rows)


-- 13. The total salary of all players on the New York Giants


SELECT SUM(salary) FROM players WHERE team_id = 18;
--    sum
-- ----------
--  74179466
-- (1 row)


-- 14. The player with the lowest salary on the Green Bay Packers
SELECT NAME, salary FROM players ORDER BY team_id = 23 ASC LIMIT 1;
--       name      | salary
-- ----------------+---------
--  Mario Williams | 5900000
-- (1 row)
