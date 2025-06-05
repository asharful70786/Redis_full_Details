`working in redis search and indexing , there is Ft command and Ft means full text search ` 
`for the fixed value we use Tag  , and for the dynamic value use  Text 
ex : FT.CREATE nameIdx ON JSON PREFIX 1 user: SCHEMA $.name AS name TEXT
main work is to  search a particule data`