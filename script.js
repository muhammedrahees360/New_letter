           
/* search bar css  */
form{
    background: #fff;
      width: 0px;
      height: 40px;
      display: flex;
  
  }
  form input{
    flex: 1;
  
   }
  
  #searchbtn{
    background: black;
      padding: 5px 18px;
      border: none;
      outline: none;
      color: #fff;
      letter-spacing: 1px;
      cursor: pointer;
      font-size: x-large;
      margin-right: 13px;
      margin-left: 5px;
      border-radius: 10px;
  }
  #searchquery{
    padding: 10px;
    font-size:x-large;
    border-radius: 10px;
    
  }
  
  #searchbtn1{
    background: black;
      padding: 5px 18px;
      border: none;
      outline: none;
      color: #fff;
      letter-spacing: 1px;
      cursor: pointer;
      font-size: x-large;
      margin-right: 13px;
      margin-left: -9px;
      border-radius: 10px;
  }
  .input-field{
    margin: auto;
    width: 20%;
  }
/*    search bar css ends  */


    .popup {
      width: 800px;
      background: #ffffff;
      border-radius: 6px;
      position: absolute;
      text-align: center;
      padding: 0 30px 30px;
      color: #333;
      display: none;
    }


    .popup button {
      width: 100%;
      margin-top: 50px;
      padding: 10px 0;
      background: #00ff00;
      color: #fff;
      font-size: 18px;
      border-radius: 4px;
      cursor: pointer;
    
    }

    .open-popup {
      display: block;
      padding: 20px;
      background: #ffffff;
      border-radius: 6px;
      width: 80%;
      z-index: 10;
      margin-left: 10%;
      margin-top: -450px;
      
    }

    #col l3 m6 s12 {
      position: absolute;
      width: 500px;
      overflow: auto;
      border: 2px solid black;
      padding: 20px 20px;
      margin: 20px;
      height: 500px;
    }

    #newsResults {
      box-sizing: border-box;
      width: 100%;

    }

    .cardmediumhoverable {
      background: #F2F2F7;
      overflow: auto;
      border-radius: 20px;
      padding: 20px 20px;
      margin: 20px;
      height: auto;
      display: flex;
      opacity: 0.8;
      margin-left: 5%;
      margin-right: 5%;
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    }

    .readmore-btn {
      /* background-color: #a5afa5;
      padding: 16px 20px;
      cursor: pointer;
      border-radius: 10px; */
      

      background: black;
      padding: 5px 18px;
      border: none;
      outline: none;
      color: #fff;
      letter-spacing: 1px;
      cursor: pointer;
      font-size: x-large;
      margin-right: 13px;
      margin-left: 5px;
      border-radius: 10px;

    }


@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;700&display=swap');
/* .top{
    position:fixed;
	z-index: 1;   
} */
*{
    box-sizing: border-box;
    margin:0;
    padding:0;
    font-family: 'Poppins', sans-serif;
}
.content1{
    display: flex;
    justify-content:space-between;
   
} 
  /* header name css */
  hr{
    height: 6px;
    margin-left: auto;
    margin-right: auto;
    background-color: black;
  }
.header{
    font-family: 'Bebas Neue', cursive;
    font-size: 88px;
    margin-left: 10px;
    margin-bottom: -10px;
    
}
.ctwitemss{
    display: flex;
    align-items: center;
    max-height: 100px;
}
.w-icon{
    height: 115px;
}
/* weather and date css starts here  */
.container{
    padding: 20px 70px;
    color:#fff;
    background-color: black;
    border-radius: 25px;
    margin-right: 86px;
    margin-top: 5px;
    margin-bottom: 5px;
}

.current-info{
    display: flex;
    float: right;
    justify-content: space-between;
    flex-wrap: wrap;
    color: black;
}

.date-container .time{
    font-size: 20px;
    color: white;
    
}

.date-container #am-pm{
    font-size: 20px;
    margin-left: 10px;
}

.date-container .date{
    font-size: 15px;
    color: white;
}

.place-container{
    text-align: end;
}

.place-container .time-zone{
    font-size: 30px;
    font-weight: 100;
}

.place-container .country{
    font-size: 12px;
    font-weight: 700;
}
.current-info .others .weather-item{
    display: flex;
    justify-content: space-between;
}


.future-forecast{
    background:black;
    padding: 25px;
    padding-top: 5px;
    position: absolute;
    display: flex;
    color:white;
    width: 100%;
    align-items: center;
    justify-content: center;
    overflow-y: hidden;
    margin-top: -120px;
    border-radius: 20px;
}


.future-forecast .today{
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #eee; 
    border-radius: 10px;
    padding:0px;
    padding-right: 0px;
    border-radius: 0px;
    background: rgba(0,0,0,0.2);
}

.future-forecast .today .day{
    padding: 5px 15px;
    background: #3c3c44;
    border-radius: 50px;
    text-align: center;
}

.future-forecast .today .temp{
    font-size: 18px;
    padding-top: 15px;
}

.future-forecast .weather-forecast{
    display: flex;
}

.weather-forecast .weather-forecast-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    border: 1px solid #eee;
    padding: 5px;
    border-radius: 10px;
    background: rgba(0,0,0,0.2);
    height: 115px;
}

.weather-forecast .weather-forecast-item .day{
    padding: 5px 15px;
    background: #3C3C44;
    border-radius: 50px;
    text-align: center;
}

.weather-forecast .weather-forecast-item .temp{
    font-weight: 100;
    font-size: 12px;
}


@media only screen and  (max-width:730px){
    
    .container{
        padding: 20px;
    }
    
    .future-forecast{
        justify-content: start;
        align-items: none;
        overflow-y: scroll;
    }

    .future-forecast .today .temp{
        font-size: 16px;
    }

    .date-container .time{
        font-size: 50px;
    }

    .date-container #am-pm{
        font-size: 20px;
    }

    .date-container .date{
        font-size: 20px;
    }

    .place-container{
        text-align: end;
        margin-top: 15px;
    }

    .place-container .time-zone{
        font-size: 20px;
    }

    .current-info .others{
        padding: 12px;
    }

    .current-info .others .weather-item{
        font-size: 14px;
    }

}

@media only screen and (max-width: 1400px){
    .future-forecast{
        justify-content: start;
        align-items: none;
        overflow-x: scroll;
    }
}
/* weather and date css end here  */
 /* footer css starts here*/
 .footerdown{
    background: #fcfcfc;
    font-family: sans-serif;
}
footer{
    bottom: 0;
    left: 0;
    right: 0;
    background: black;
    height: auto;
    width: 100vw;

    padding-top: 0px;
    color: #fff;
}
.footer-content{
    /* display: flex; */
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}
.footer-content h3{
    font-size: 2.1rem;
    font-weight: 500;
    text-transform: capitalize;
    line-height: 3rem;
}
.footer-content p{
    max-width: 500px;
    margin: 10px auto;
    line-height: 28px;
    font-size: 14px;
    color: #cacdd2;
}
.socials{
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0 3rem 0;
}
.socials li{
    margin: 0 10px;
}
.socials a{
    text-decoration: none;
    color: #fff;
    border: 1.1px solid white;
    padding: 5px;

    border-radius: 50%;

}
.socials a i{
    font-size: 1.1rem;
    width: 20px;


    transition: color .4s ease;

}
.socials a:hover i{
    color: aqua;
}

.footer-bottom{
    background: #000;
    width: 100vw;
    padding: 0px;
padding-bottom: 0px;
    text-align: center;
}
.footer-bottom p{
    display: initial;
    font-size: 14px;
    word-spacing: 2px;
    text-transform: capitalize;
}
.footer-bottom p a{
  color:#44bae8;
  font-size: 16px;
  text-decoration: none;
}
.footer-bottom span{
    text-transform: uppercase;
    opacity: .4;
    font-weight: 200;
}
.footer-menu{
  float: right;

}
.footer-menu ul{
  display: flex;
}
.footer-menu ul li{
padding-right: 10px;
display: block;
}
.footer-menu ul li a{
  color: #cfd2d6;
  text-decoration: none;
}
.footer-menu ul li a:hover{
  color: #27bcda;
}
      
@media (max-width:500px) {
.footer-menu ul{
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
}
}
/* footer css ends here  */

 

          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500&display=swap');
/*  startncss for navigation bar */
nav{	margin:0px;
	padding:0px;
	box-sizing: border-box;
	font-family: 'Poppins', sans-serif;
	width: auto;
	height: 65px;
	
	line-height: 75px;
	padding:0px 10px;
    /* margin-left: -264px;
	 */
}

nav ul{
	float: right;
    margin:0px;
	padding:0px 259px;
	box-sizing: border-box;
	font-family: 'Poppins', sans-serif; 
}
nav ul li{
	display: inline-block;
	list-style: none;
    margin:0px;
	padding:7px;
	box-sizing: border-box;
	font-family: 'Poppins', sans-serif;
}
nav ul li button{
	color:rgb(77, 74, 74);
	text-decoration: none;
	font-size: 25px;
	text-transform: uppercase;
	padding:0px 22px;
    display: contents;
}
   
nav ul li button:hover{
	color:#c0d96f;
}
nav ul li .active{
	color:#c0d96f;
}
.image img{
	width: 100%;
	height: 0px auto;
	opacity: 0.80;
}
/* css for navigation bar finished */
     




.future-forecast{
    background:black;
    padding: 25px;
    position: absolute;
    display: flex;
    color:white;
    width: 100%;
    align-items: center;
    justify-content: center;
    /* overflow-y: hidden; */
    z-index: 1000;
    margin-left: -30px;
}


.future-forecast .weather-forecast{
    display: flex;
}

.weather-forecast .weather-forecast-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    border: 1px solid #eee;
    padding: 5px;
    border-radius: 10px;
    background: rgba(0,0,0,0.2);
    height: 115px;
}

.weather-forecast .weather-forecast-item .day{
    padding: 5px 15px;
    background: #3C3C44;
    border-radius: 50px;
    text-align: center;
}

  .weatherpop {
      width: auto;
      background: #ffffff;
      border-radius: 6px;
      text-align: center;
      padding: 0 30px 30px;
      color: #333;
      display: none;
}
    
.openweatherpop {
      width: auto;
      background: #ffffff;
      border-radius: 6px;
      text-align: center;
      padding: 0 30px 30px;
      color: #333;
      display: block;
      z-index: 1000;    
      margin: top 0px;;
    
  }
