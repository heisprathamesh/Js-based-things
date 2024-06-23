//body styleing
const body = document.body.style;
body.padding="50px 0px";
body.backgroundColor="black";



//elementing form

    let main = document.createElement("div");
    main.setAttribute("class","main");
    document.body.appendChild(main);

        //styling for main
        let mainstyle= main.style;
        mainstyle.display="flex";
        mainstyle.justifyContent="center";
       mainstyle.padding="20px";  





    let formd = document.createElement("form");
    formd.setAttribute("class","form1");
    main.appendChild(formd)

    
    //styling form1
    let formst= formd.style;
    formst.display="flex";
    formst.flexDirection="column";
    formst.alignItems="center"
    formst.backgroundImage="linear-gradient(67deg, #232324, #121212, #101010)";
    formst.width="600px";
    formst.height="400px"

    //first Input
    let In1= document.createElement("input");
    formd.appendChild(In1);
    In1.setAttribute("type","text");
    In1.setAttribute("id","In1");
    In1.setAttribute("placeholder","Enter Your Username");

    //first input styling
    let In1st= In1.style;
    In1st.width="80%";
    In1st.height="45px";
    In1st.borderRadius="4px";
    In1st.padding="20px";

    let br = document.createElement("br");
    formd.appendChild(br);
    //second Input

    let In2= document.createElement("input");
    formd.appendChild(In2);
    In2.setAttribute("type","text");
    In2.setAttribute("id","In2");
    In2.setAttribute("placeholder","Enter Your Password");

    //second input styling
    let In2st= In2.style;
    In2st.width="80%";
    In2st.height="45px";
    In2st.borderRadius="4px";
    In2st.padding="20px";

    let br2 = document.createElement("br");

    formd.appendChild(br2);

    //submit button
    let btn1 = document.createElement("input");
    formd.appendChild(btn1);
    btn1.setAttribute("type","button");
    btn1.setAttribute("id","btn1");
    btn1.setAttribute("value","Login");

     //btn1 styling
     let btn1st= btn1.style;
     btn1st.width="50%";
    btn1st.height="45px";
     btn1st.borderRadius="4px";



     //validation 

     let passcheck=()=>{
        var user=  document.getElementById("In1").value;
        var pass = document.getElementById("In2").value;

        if((user==="Prathamesh")&&(pass==="Prathamesh")){
            alert("login Successfull");
        }
        else{
            alert("Cant login invalid pass or username");
             document.getElementById("In1").value = ""
        document.getElementById("In2").value = ""
        }

     }

     document.getElementById("btn1").addEventListener("click",passcheck);

     

   







