library(gdata)

setwd("C:/Users/varun/Desktop/Major Project/R Programs/")

#dummy <- read.xls("Data_Version_2.xlsx",TRUE,",")

dummy <- read.csv("Data_Version_2.csv",TRUE,",")

levels(dummy$Day_1)[1]