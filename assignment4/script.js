var names=new Array();
names[0]="Abhishek";
names[1]="John";
names[2]="jay";
names[3]="sachin";
names[4]="Abhinav";
names[5]="Sri";
names[6]="Jayprakash";
names[7]="Chhotu";
names[8]="jitendra";
names[9]="adarsh";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}