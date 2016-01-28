library(gdata)
library(stringr)

setwd("C:/xampp/htdocs/SPAS/pages/RScripts")

dummy <- read.xls("Book2.xls")

totalDays <- ncol(dummy)
totalDays <- totalDays-6
totalDays

totalStds <- nrow(dummy)
totalStds <- 2

i = 1
j = 7

stdAct <- data.frame()

while(i != totalStds+1) {
  var <- dummy[i,7]
  print(var)
  var2 <- substr(var,start=2,stop=9)
  var2 <- str_split_fixed(var2, ";", 4)
  
  stdAct[i,1] <- var2[1]
  stdAct[i,2] <- var2[2]
  stdAct[i,3] <- var2[3]
  stdAct[i,4] <- var2[4]
  
  i <- i + 1
  j <- j + 1
}

#var <- str_split_fixed(dummy$day1, ",", 4)


#var2 <- substr(var[1],start=2,stop=9)
#var2 <- str_split_fixed(var2, ";", 4)

stdAct