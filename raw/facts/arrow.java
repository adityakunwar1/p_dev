import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);

        int n=scn.nextInt();
        
        int st=1;;
        int sp=n/2;

for(int i=0;i<n;i++){
if(i==(n/2)){
    for(int j=0;j<n;j++)
    System.out.print("*	");
    st--;
}
else{
for(int j=0;j<sp;j++){
    System.out.print("	");
    
    }

for(int j=0;j<st;j++){
    System.out.print("*	");
    
}
    

if(i<n/2){

st++;
}
else
{
    st-=1;
    
}


}

System.out.print("
");


    }
}
}