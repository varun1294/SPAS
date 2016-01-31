library(gdata)
library(stringr)

setwd("C:/xampp/htdocs/SPAS/pages/RScripts")

dummy <- read.xls("Book2.xls")
dummy <- data.frame(lapply(dummy, as.character), stringsAsFactors=FALSE)

var <- dummy[1,8]

l = 1;
a = 2
b = gregexpr(pattern =',',var)
b = as.vector(b[[1]])
c = length(b)

while(c > 0) {
    print(b[c])
    c = c - 1
}