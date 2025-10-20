//change 10 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellent!"
compliments[1]="Wow, you're really rocking!"
compliments[2]="You must have studied hard. Good job!"
compliments[3]="Right on."
compliments[4]="Correct!"
compliments[5]="Great Job!"
compliments[6]="Good work!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="Who composed the Moonlight Sonata?"
choice1[1]="Beethoven"
choice1[2]="Mozart"
choice1[3]="Chopin"
choice1[4]="Bach"

question[2]="Which key is C major scale starting on?"
choice2[1]="C"
choice2[2]="D"
choice2[3]="G"
choice2[4]="A"

question[3]="Which of the following instruments is part of the string family?"
choice3[1]="Flute"
choice3[2]="Violin"
choice3[3]="Trumpet"
choice3[4]="Timpani"

question[4]="What is the Italian term for 'soft' in music dynamics?"
choice4[1]="Forte"
choice4[2]="Piano"
choice4[3]="Allegro"
choice4[4]="Crescendo"

question[5]="How many notes are in a standard octave?"
choice5[1]="5"
choice5[2]="6"
choice5[3]="7"
choice5[4]="8"

question[6]="How many lines are on a music staff?"
choice5[1]="4"
choice5[2]="5"
choice5[3]="6"
choice5[4]="7"

question[7]="Which note gets one beat in 4/4 time?"
choice5[1]="Whole note"
choice5[2]="Half note"
choice5[3]="Quarter note"
choice5[4]="Eighth note"

question[8]="Which note is higher in pitch?"
choice5[1]="A"
choice5[2]="C"
choice5[3]="F"
choice5[4]="B"

question[9]="How many keys are on a standard piano?"
choice5[1]="52"
choice5[2]="66"
choice5[3]="88"
choice5[4]="100"

question[10]="What does 'forte' mean in music?"
choice5[1]="Soft"
choice5[2]="Fast"
choice5[3]="Loud"
choice5[4]="Slow"

solution[1]="a"
solution[2]="a"
solution[3]="b"
solution[4]="b"
solution[5]="d"
solution[6]="b"
solution[7]="c"
solution[8]="b"
solution[9]="c"
solution[10]="c"

