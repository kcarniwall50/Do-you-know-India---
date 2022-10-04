// First CLI APP
 // Mark 1 
 // Do you know India ?
 
 let readlinesync=require('readline-sync')
 let score=0
 
 let user = readlinesync.question('Hi there, What is your good name ?\n')
 console.log("Welcome ",user)
 console.log("Let's play a fun quiz game\n")
 console.log( "-- Do you know India ? --")
 console.log("\nhere we go!\n")
 console.log("Enter a b c or d\n -------")
 let QaA1={
  question: "How many continents are there on our planet ? \n (a)  5       (b)  6 \n (c)  7       (d)   8",
  answer: "c"
 }
 
 let QaA2={
   question: "In which continent, India is  ? \n (a)  Europe       (b)  Asia \n (c)  America     (d)  Africa",
   answer: "b"
  }
 
  let QaA3={
   question: "Is India a land-lock country ?\n (a)  Yes              (b)  No \n (c)  Arguably yes      (d)  arguably no",
   answer: "b"
  }
  let QaA4={
   question: "India is also known as\n (a)  Hindustan       (b)  Bharat \n (c)  Aryavarta     (d)  All",
   answer: "d"
  }
 
  let QaA5={
   question: "What is population of India ?\n (a)  550 million             (b)  940 million \n (c)  1040 million      (d)  1090 million",
   answer: "c"
  }
 
  let QaA6={
   question: "Does India believe in non-alignment principle ?\n (a)  Yes        (b)  No  \n (c)  arguably no         (d) arguably yes ",
   answer: "a"
  }
  let QaA7={
   question: "What is the name of India's space agency?\n (a)  DRDO       (b)  ISRO  \n (c)  BARC       (d)  NTRO",
   answer: "b"
  }
  let QaA8={
   question: "Which country is world's lagest democracy?\n (a)  China       (b)  USA      (c)  India     (d)  Japan",
   answer: "c"
  }
  let QaA9={
   question: "Is India culturally rich country?\n (a)  yes       (b)  no      (c)  can't say",
   answer: "a"
  }
 
  let QaA10={
   question: "Do you think India has potential to grow fast ?\n (a)  yes       (b)  no      (c)  can't say",
   answer: "a"
  }
 
 
  let arrOfObject=[QaA1,QaA2,QaA3,QaA4,QaA5,QaA6,QaA7,QaA8,QaA9,QaA10]
  let n=arrOfObject.length
 
 for(let i=0;i<n;i++)
 {
   
 
   let ans=readlinesync.question(arrOfObject[i].question+"\n Your Answer:  ")
   
 
 if(ans===arrOfObject[i].answer)
 {
    console.log("good job!")
    score++
    console.log("Your score now became ",score)
 }
 else
 {
    console.log("Nice try!")
    console.log("Your score is ",score)
 
 }
   console.log("-----------")
   console.log("\n")
 
 }
 
 // finish
 
 if(score===10)
 {
 console.log("Congrachulations! you rock !")
 console.log("All your responses were correct")
 console.log("You are truley cosmic geek")
 }
 else if(score>5 && score<10)
 {
   console.log("You're awesome buddy")
   console.log("You performed well man")
 
 }
 else if(score<=5)
 {
   console.log("Thank you for participating ")
   console.log("You have gut to learn dude . keep it up!")
 
 }