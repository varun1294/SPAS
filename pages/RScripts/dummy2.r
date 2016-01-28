library(gdata)
library(stringr)

setwd("C:/xampp/htdocs/SPAS/pages/RScripts")

dummy <- read.xls("Book2.xls")

totalDays <- ncol(dummy)
totalDays <- totalDays-6
totalDays

totalStds <- nrow(dummy)
totalStds

stdAct <- data.frame()


i = 1
j = 7
k = 1;

while(i != totalStds+1) {
    while(j != totalDays+7) {
      var <- dummy[i,j]
      
      a = 2
      b = 9
      while(TRUE) {
        var2 <- substr(var,start=a,stop=b)
        var2 <- str_split_fixed(var2, ";", 4)
        
        if(var2 == '') {
            break;
        }
        
        else {
          stdAct[k,1] <- var2[1]
          stdAct[k,2] <- var2[2]
          stdAct[k,3] <- var2[3]
          stdAct[k,4] <- var2[4]
          
          k = k+1
          
          a = b + 4
          b = a + 7
        }
      }
      
      #if(j != totalDays+6) {
          #For New Day
          # X For New Day & Y For New Student
          #stdAct[k,1] <- "X"
          #stdAct[k,2] <- "X"
          #stdAct[k,3] <- "X"
          #stdAct[k,4] <- "X"
      
          #k = k+1
          #New Day
      #}
      
      j = j + 1
    }
    
    #For New Student
    # X For New Day & Y For New Student
    #stdAct[k,1] <- "Y"
    #stdAct[k,2] <- "Y"
    #stdAct[k,3] <- "Y"
    #stdAct[k,4] <- "Y"
  
    #k = k+1
    #New Student
  
    j = 7
    i = i + 1
}