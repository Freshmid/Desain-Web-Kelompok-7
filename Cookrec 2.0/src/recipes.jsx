import jquery from "jquery";
import React,{useEffect} from "react";
import reactDom from "react-dom";
import ReactDOM from "react-dom";
import $ from "jquery";
import _ from "lodash";
import "../public/recipes.css"

export default function  Recipes (){ 
    return(
    <div>
       
        <header>
            
            <div id="menu" class="fas fa-bars"></div>
        
            <a href="#" class="logo"><i class=""></i>COOKREC</a>
        
            <nav class="navbar">
                <ul>
                    <li><a class="active" href="index.html">home</a></li>
                    <li><a href="index.html">about</a></li>
                    <li><a href="index.html">course</a></li>
                    <li><a href="#reciepes">recipes</a></li>
                    <li><a href="index.html">contact</a></li>
                </ul>
            </nav>
        
           
            <div id="login" class="fas fa-user-circle"></div>
        
        </header>
        
        login form 
        
        <div class="login-form">
        
            <form action="">
                <h3>login</h3>
                <input type="email" placeholder="username" class="box"/>
                <input type="password" placeholder="password" class="box"/>
                <p>forget password? <a href="#">click here</a></p>
                <p>don't have an account? <a href="#">register now</a></p>
                <input type="submit" class="btn" value="login"/>
                <i class="fas fa-times"></i>
            </form>
        
        </div>
        
        <section class="reciepes" id="reciepes">
        
            <h1>FIND YOUR RECIPES HERE</h1>
            <p>New Recipes</p>
            <a href="#carousel"><button class="btn">find now</button></a>
        
        </section>
        
            <div class="carousel" id="carousel">
                <h3>Indonesian</h3>
                <div class="carousel__inner">
                    <div class="carousel__box">
                        <img src="images/indo1.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/indo2.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/indo3.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/indo4.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/indo5.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/indo6.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/indo7.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/indo8.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/indo9.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/indo10.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/indo11.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/indo12.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/indo13.jfif"/>
                    </div>
                </div>
        
            </div>
        
            <div class="carousel">
                <h3>Cake</h3>
                <div class="carousel__inner">
                    <div class="carousel__box">
                        <img src="images/cake1.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/cake2.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/cake3.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/cake4.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/cake5.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/cake6.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/cake7.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/cake8.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/cake9.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/cake10.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/cake11.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/cake12.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/cake13.jfif"/>
                    </div>
                </div>
        
                <button type="button" class="carousel__control carousel__control--left">
                    <i class="fa fa-angle-left"></i>
                </button>
        
                <button type="button" class="carousel__control carousel__control--right">
                    <i class="fa fa-angle-right"></i>
                </button>
            </div>
        
            <div class="carousel">
                <h3>Italian</h3>
                <div class="carousel__inner">
                    <div class="carousel__box">
                        <img src="images/italy1.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/italy2.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/italy3.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/italy4.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/italy5.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/italy6.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/italy7.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/italy8.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/italy9.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/italy10.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/italy11.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/italy12.jfif"/>
                    </div>
                    <div class="carousel__box">
                        <img src="images/italy13.jfif"/>
                    </div>
                </div>
        
            <script type="text/javascript" src="script.js"></script>
        
        
        </div>
        </div>
        )
}
