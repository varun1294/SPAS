library(gdata)
library(stringr)

setwd("C:/xampp/htdocs/SPAS/pages/RScripts")

dummy <- read.xls("Book1.xlsx")

var <- str_split_fixed(dummy$day1, ",", 3)

var[1]
var[2]
var[3]

var2 <- substr(var[1],start=2,stop=9)
var2 <- str_split_fixed(var2, ";", 4)

var2