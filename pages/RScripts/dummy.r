library(gdata)
library(stringr)
library(rpart)
library(rattle)
library(rpart.plot)
library(RColorBrewer)

setwd("C:/xampp/htdocs/SPAS/pages/RScripts")

dummy <- read.xls("Book3.xls")
dummy <- data.frame(lapply(dummy, as.character), stringsAsFactors=FALSE)

totalDays <- ncol(dummy)
totalDays <- totalDays-6
totalDays

totalStds <- nrow(dummy)
totalStds

stdAct <- data.frame()
stdActDummy <- data.frame()
stdActDummyCounter = 1

sumDF = 0
sumRLR = 0
sumVLR = 0

i = 1
j = 7
k = 1;

sink("dummy.txt")

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
        
        if(var2[2] == "D") {
          sumDF = sumDF + as.numeric(var2[4])
        }
        
        else if(var2[2] == "V") {
          sumVLR = sumVLR + as.numeric(var2[4])
        }
        
        else if(var2[2] == "R") {
          sumRLR = sumRLR + as.numeric(var2[4])
        }
        
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
    #print(j)
    #cat("\n")
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
  
  #print(i)
  #cat("\n")
  
  cat(stdAct[k,1],sep=" ")
  cat(stdAct[k,2],sep=" ")
  cat(stdAct[k,3],sep=" ")
  cat(stdAct[k,4],sep=" ")
  #cat("\t")
  
  cat("\n")
  
  k = k+1
  
  stdActDummy[stdActDummyCounter,1] <- sumDF
  stdActDummy[stdActDummyCounter,2] <- sumVLR
  stdActDummy[stdActDummyCounter,3] <- sumRLR
  stdActDummy[stdActDummyCounter,4] <- (sumDF + sumRLR + sumVLR)
  
  stdActDummyCounter = stdActDummyCounter + 1
  
  sumDF = 0
  sumVLR = 0
  sumRLR = 0
  #print(sumDF)
  #cat("\n")
  #print(sumRLR)
  #cat("\n")
  #print(sumVLR)
  #cat("\n")
  
}

sink()

stdActDummy

z <- kmeans(stdActDummy$V4,3)
z