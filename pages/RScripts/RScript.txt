library(gdata)
library(stringr)

setwd("C:/xampp/htdocs/SPAS/pages/RScripts")

dummy <- read.xls("Book3.xls")
dummy <- data.frame(lapply(dummy, as.character), stringsAsFactors=FALSE)

totalDays <- ncol(dummy)
totalDays <- totalDays-6
totalDays

totalStds <- nrow(dummy)
totalStds

stdAct <- data.frame()

i = 1
j = 7
k = 1;

sink("rAllStdAllActs.txt")

while(i != totalStds+1) {
    while(j != totalDays+7) {
      var <- dummy[i,j]
      
      l = 1;
      a = 3
      b = gregexpr(pattern =',',var)
      b = as.vector(b[[1]])
      count = length(b)
      c = b[l] - 2
      l = l + 1
      
      while(TRUE) {
        var2 <- substr(var,start=a,stop=c)
        var2 <- str_split_fixed(var2, ";", 4)
        
        if(var2 == '') {
            break;
        }
        
        else {
          stdAct[k,1] <- var2[1]
          stdAct[k,2] <- var2[2]
          stdAct[k,3] <- var2[3]
          stdAct[k,4] <- var2[4]
          
          a = c + 5
          if(count == 1) {
            c = nchar(var) - 1
          }
          
          else {
            c = b[l] - 2
            l = l + 1
            count = count - 1;
          }
          
          cat(stdAct[k,1],sep=" ")
          cat(stdAct[k,2],sep=" ")
          cat(stdAct[k,3],sep=" ")
          cat(stdAct[k,4],sep=" ")
          
          k = k+1
          
          cat("\n")
        }
      }
      
      if(j != totalDays+6) {
          #For New Day
          # X For New Day & Y For New Student
          stdAct[k,1] <- "X"
          stdAct[k,2] <- "X"
          stdAct[k,3] <- "X"
          stdAct[k,4] <- "X"
          
          cat(stdAct[k,1],sep=" ")
          cat(stdAct[k,2],sep=" ")
          cat(stdAct[k,3],sep=" ")
          cat(stdAct[k,4],sep=" ")
          #cat("\t")
          
          cat("\n")
          
          k = k+1
          #New Day
      }
      
      j = j + 1
    }
    
    #For New Student
    # X For New Day & Y For New Student
    stdAct[k,1] <- "Y"
    stdAct[k,2] <- "Y"
    stdAct[k,3] <- "Y"
    stdAct[k,4] <- "Y"
    
    #New Student
  
    j = 7
    i = i + 1
    
    cat(stdAct[k,1],sep=" ")
    cat(stdAct[k,2],sep=" ")
    cat(stdAct[k,3],sep=" ")
    cat(stdAct[k,4],sep=" ")
    #cat("\t")
    
    cat("\n")
    
    k = k+1
}

sink()