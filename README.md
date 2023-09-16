# ITRDA

Public repository of data about the Italian Universities Teaching
Rules.

See the file LICENSE for copyright and licensing information.

Marco Antoniotti


## Introduction

This repository contains a the "data" that was used to produce the
Excel file `<Date> Analysis.xlsx`.  The Excel file contains a *very* rough,
incomplete, and possibly wrong, count of the distribution of *exam
roll calls* (*appelli*) among italian universities.

Italian universities are an "unicum" in the planet, to the best of my
knowledge, because of the following characteristics.

- The "final" test and the course are essentially decoupled.
- A student can take the final tests months (or even years) after the
  course offering.
- Italian universities must administer exam roll calls across the
  year, after the course has been offered.
  
The number of these roll calls varies from place to place and may be
either ruled on a year by year basis by a vote in the Academic Senate
(sometime tied to the formal approval of the academic calendar), or it
may be formalized in either the **Regolamento Didattico di Ateneo**
(RDA), a formal and Ministry-approved document, or in an ancillary
document usually called **Regolamento Studenti** (RS), which must only be
approved locally.


## Methods

The following procedure was followed, flawed as it may be.

1. The RDA and, where available and referred to, the RS or similar
   document was downloaded form the official university web site;
   these documents are collected in the `RDAs` subfolder.
2. The RDA and/or the RS were analyzed looking for the
   parameter *number of roll calls* (per year or "session")
3. The result was recorded in the Excel: either the "inferred" number
   of roll calls, or a note stating that the number is not declared in
   the official documents is reported, per university.
   
The analysis is was conducted in February/March 2023.  New RDAs and
RSs may have been passed in the interim.

Please open issues on the github interface, if you feel you found an
error, or if you have new information you feel needs to be added, please
let me know.  Note that Github refused to upload some of the documents,
mostly due to their size.

Marco Antoniotti

