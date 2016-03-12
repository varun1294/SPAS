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

stdActX <- data.frame()
kx = 1;

stdActDF <- data.frame()
DF = 1;

stdActVLR <- data.frame()
VLR = 1;

stdActRLR <- data.frame()
RLR = 1;

#stdActAll <- data.frame()
#all = 1;

sumDF = 0;
sumVLR = 0;
sumRLR = 0;

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
    
    ff = b[1];
    count = length(b)
    
    c = b[l] - 2
    l = l + 1
    
    #if(isTRUE(all.equal(ff,-1))) {
    #  nchar(var);
    #  a = 3;
    #  c = 10;
    #}
    
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

        else if(var2[2] == "R") {
          sumRLR = sumRLR + as.numeric(var2[4])
        }
        
        else if(var2[2] == "V") {
          sumVLR = sumVLR + as.numeric(var2[4])
        }
        
        stdAct[k,1] <- var2[1]
        stdAct[k,2] <- var2[2]
        stdAct[k,3] <- var2[3]
        stdAct[k,4] <- var2[4]
        
        #stdActX[kx,1] <- var2[1]
        #stdActX[kx,2] <- var2[2]
        #stdActX[kx,3] <- var2[3]
        #stdActX[kx,4] <- var2[4]
        #kx = kx + 1;
        
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
  
  stdActDF[DF,1] = sumDF
  DF = DF + 1
  
  stdActVLR[VLR,1] = sumVLR
  VLR = VLR + 1
  
  stdActRLR[RLR,1] = sumRLR
  RLR = RLR + 1
  
  stdActX[kx,1] = sumDF + sumVLR + sumRLR;
  kx = kx + 1;
  
  sumDF = 0;
  sumVLR = 0;
  sumRLR = 0;
}

sink()

sink("rAllStdDFActs.txt")
i = 1;
while(i != DF) {
    cat(stdActDF[i,1])
    cat("\n")
    
    i = i + 1;
}

i = 1;
sink()

sink("rAllStdRLRActs.txt")
i = 1;
while(i != RLR) {
  cat(stdActRLR[i,1])
  cat("\n")
  
  i = i + 1;
}
sink()

sink("rAllStdVLRActs.txt")
i = 1;
while(i != VLR) {
  cat(stdActVLR[i,1])
  cat("\n")
  
  i = i + 1;
}
sink()

var <- kmeans(stdActDF,3)
var
sink("DF_Clusters.txt")
i = 1;

while(!(is.na(var$cluster[i]))) {
  cat(var$cluster[i])
  cat("\n");
  i = i + 1;
}
cat(var$centers[1])
cat("\n");
cat(var$centers[2])
cat("\n");
cat(var$centers[3])
sink()

var <- kmeans(stdActRLR,3)
sink("RLR_Clusters.txt")
i = 1;

while(!(is.na(var$cluster[i]))) {
  cat(var$cluster[i])
  cat("\n");
  i = i + 1;
}
cat(var$centers[1])
cat("\n");
cat(var$centers[2])
cat("\n");
cat(var$centers[3])
sink()

var <- kmeans(stdActVLR,3)
sink("VLR_Clusters.txt")
i = 1;

while(!(is.na(var$cluster[i]))) {
  cat(var$cluster[i])
  cat("\n");
  i = i + 1;
}
cat(var$centers[1])
cat("\n");
cat(var$centers[2])
cat("\n");
cat(var$centers[3])
sink()

stdActX$V1
sink("rAllActs.txt")
i = 1;
while(i <= totalStds) {
    cat(stdActX$V1[i])
    cat("\n")
    i = i + 1;
}
sink()

var <- kmeans(stdActX,3)
sink("ALL_Clusters.txt")
i = 1;

while(!(is.na(var$cluster[i]))) {
  cat(var$cluster[i])
  cat("\n");
  i = i + 1;
}
cat(var$centers[1])
cat("\n");
cat(var$centers[2])
cat("\n");
cat(var$centers[3])
sink()