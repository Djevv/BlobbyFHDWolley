# FHD-Wolley v1.0
A small retro-game which is oriented at "Blobby Volley".
The objective of the game is to achieve 12 points by having the ball touch the opponents floor!
Use W/A/S/D for player 1 and the arrow keys for player 2 to move.


# Licence
All assets are made by ourselves.
This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. 
To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/ or send a letter to 
Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.

no(!) 3rd party assets have been used.

# Authors
- Philipp Lottis
- Selim Derkorn

# Date of creation
23.07.2019

# Additional information in regard of the development of this code
Most parts of the code have been developed in the "pair programming" style. Both developers have been writing most of the code together, only a few tasks have been split.
Therefore all tasks are signed with either P, S or P+S.

# Functions
Basic-Functions 1: 
- Game-Loop (P+S)
- Spielfeld (P+S)
- Player (P+S)
- Ball (P+S)
- Net (P+S)
- Playermovement (P)
- Playerphsyics (S)
- Ballphysics (P)

Basic-Functions 2:
- Score (S)
- Spiel-/Startmenü (P)
- Spielablauf  (P)
- Skalierbarkeit (P+S)

Assets (Drawing, Sounds):
- Ball (S)
- Players (S)
- Background (S)
- Menu (S)
- Sounds (S)

Documents:
- README (S)
- Licence  (P)
- Pitchslide (P)

# Known Bugs (most are very rare and therefore not reproducible, so please try for yourself first ;) )
- Ball collides with net in a way that it falls through the net
- Music happens to overlap after very long sessions, even though it is set to only loop after ending
- Menu Buttons don't scale after a game 
- The game has random performance issues in firefox
- the "score_sound" isnt played if there is another score immediately after  
- the 12th score isnt shown after winning