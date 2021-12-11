import jquery from "jquery";
import React,{useEffect} from "react";
import reactDom from "react-dom";
import ReactDOM from "react-dom";
import $ from "jquery";
import _ from "lodash";

function Index(){
    useEffect(()=>{
        $(document).ready(function(){

            $('#menu').click(function(){
                $(this).toggleClass('fa-times');
                $('.navbar').toggleClass('nav-toggle');
            });
        
            $('#login').click(function(){
                $('.login-form').addClass('popup');
            });
        
            $('.login-form form .fa-times').click(function(){
                $('.login-form').removeClass('popup');
            });
            
            $(window).on('load scroll',function(){
        
                $('#menu').removeClass('fa-times');
                $('.navbar').removeClass('nav-toggle');
        
                $('.login-form').removeClass('popup');
        
                $('section').each(function(){
        
                    let top = $(window).scrollTop();
                    let height = $(this).height();
                    let id = $(this).attr('id');
                    let offset = $(this).offset().top - 200;
        
                    if(top > offset && top < offset + height){
                        $('.navbar ul li a').removeClass('active');
                        $('.navbar').find(`[href="#${id}"]`).addClass('active');
                    }
        
        
                });
        
            });
        
        }); 
        
        var size = 200;
        var margin = 20;
        var count = 6;
        var visible = 3; // Visible carousel slides (excluding the barely)
        var last = count - visible; // 3
        var offset = 0;
        var carousel = (size * visible) + (margin * visible) + (size / 3);
        var container = (size * count) + (margin * count);
        var barely = size / visible;
        
        var $container = $('.carousel__inner');
        var $slides = $('.carousel__box');
        var $left = $('.carousel__control--left');
        var $right = $('.carousel__control--right');
        var $previous = null;
        var $next = null;
        
        var enter = null;
        var close = null;
        
        $left.on('click', function() {
          if ( offset === 0 ) return;
          move(--offset);
        });
        
        $right.on('click', function() {
          if ( offset === count - visible ) return;
          move(++offset);
        });
        
        $slides.each(function(index, slide) {
          $(slide).data('index', index);
        });
        
        $slides.on('mouseenter', _.debounce(function() {
          var $slide = $(this);
          var index = $slide.data('index');
          $previous = previous(index);
          $next = next(index);
        
          $previous.addClass('carousel__box--previous');
          $next.addClass('carousel__box--next');
          $slide.addClass('carousel__box--enter')
        }, 350));
        
        $slides.on('mouseout', _.debounce(function() {
          var $slide = $(this);
        
          $slide
            .addClass('carousel__box--leave')
            .removeClass('carousel__box--enter')
            .delay(400)
            .queue(function() {
              $(this).removeClass('carousel__box--leave')
                .dequeue();
            });
        
          $previous.addClass('carousel__box--previous-leave')
            .removeClass('carousel__box--previous')
            .delay(300)
            .queue(function() {
              $(this).removeClass('carousel__box--previous-leave')
                .dequeue();
            });
        
          $next.addClass('carousel__box--next-leave')
            .removeClass('carousel__box--next')
            .delay(300)
            .queue(function() {
              $(this).removeClass('carousel__box--next-leave')
                .dequeue();
            });
        }, 300));
        
        function previous(hovered) {
          // Index of the hovered slide in the current offset
          var index = hovered - offset;
        
          // We could have this as start = offset, but we have
          // a weird slider presented here haha.
          var start = offset + visible === count
            ? offset - 1
            : offset;
        
          return $slides.slice(start, offset + index);
        }
        
        function next(hovered) {
          // Index of the hovered slide in the current offset
          var index = hovered - offset;
        
          if ( index === visible ) {
            return $slides.slice();
          } else {
            return $slides.slice(offset + index + 1, offset + visible + 1);
          }
        }
        
        function move(offset) {
          var translateX = offset === last
            ? -(container - carousel - margin)
            : -((size * offset) + (margin * offset));
          $container.css('transform', 'translateX(' + translateX + 'px)');
        }
        
    },[])
    return(
<div>
   

<header>

    <div id="menu" className="fas fa-bars"></div>

    <a href="#" className="logo"><i className=""></i>COOKREC</a>

    <nav className="navbar">
        <ul>
            <li><a className="active" href="#home">home</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#course">course</a></li>
            <li><a href="recipes.html">recipes</a></li>
            <li><a href="#contact">contact</a></li>
        </ul>
    </nav>

   
    <div id="login" className="fas fa-user-circle"></div>

</header>


login form 

<div className="login-form">

    <form action="">
        <h3>login</h3>
        <input type="email" placeholder="username" className="box"/>
        <input type="password" placeholder="password" className="box"/>
        <p>forget password? <a href="#">click here</a></p>
        <p>don't have an account? <a href="#">register now</a></p>
        <input type="submit" className="btn" value="login"/>
        <i className="fas fa-times"></i>
    </form>

</div>

<section className="home" id="home">

    <h1>Belajar Memasak Dari Rumah!</h1>
    <p>Dibimbing langsung oleh Chef Terbaik dan Profesional ! Cocok buat Mamah Muda yang baru ingin mulai belajar masak </p>
    <a href="#course"><button className="btn">get started</button></a>

    <div className="shape"></div>

</section>



<section className="about" id="about">

    <div className="image">
        <img src="images/about.png" alt=""/>
    </div>

    <div className="content">
        <h3>why choose us?</h3>
        <p>Kamu ingin belajar memasak dimulai dari 0 ? Hanya di Cookcrec solusinya! Coockrec adalah sebuah website kursus online memasak yang dimana diw website ini terdapat banyak sekali resep masakan nusantara sekaligus akan dibimbing langsung para chef profesional Indonesia</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex delectus ducimus dignissimos pariatur. Amet sed distinctio earum dolorum nulla, in obcaecati aliquid modi quos magni ducimus culpa nobis laudantium incidunt.</p>
        <a href="#"><button className="btn">learn more</button></a>
    </div>

</section>



<section className="course" id="course">

<h1 className="heading">our popular chefs</h1>    

<div className="box-container">

    <div className="box">
        <img src="images/course1.jpg" alt=""/>
        <h3 className="price">$50</h3>
        <div className="content">
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half"></i>
            </div>
            <a href="#" className="title">Arnold Poernomo</a>
            <p> Belajar Teknik Memasak</p>
            <div className="info">
                <h3> <i className="far fa-clock"></i> 2 hours </h3>
                <h3> <i className="far fa-calendar-alt"></i> 3 months </h3>
                <h3> <i className="fas fa-book"></i> 5 Class </h3>
            </div>
        </div>
    </div>

    <div className="box">
        <img src="images/course2.jpg" alt=""/>
        <h3 className="price">$50</h3>
        <div className="content">
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half"></i>
            </div>
            <a href="#" className="title">Juna Rorimpandey</a>
            <p>Belajar Teknik Memasak</p>
            <div className="info">
                <h3> <i className="far fa-clock"></i> 2 hours </h3>
                <h3> <i className="far fa-calendar-alt"></i> 2 months </h3>
                <h3> <i className="fas fa-book"></i> 2 class </h3>
            </div>
        </div>
    </div>

    <div className="box">
        <img src="images/course3.jpg" alt=""/>
        <h3 className="price">$50</h3>
        <div className="content">
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half"></i>
            </div>
            <a href="#" className="title">Renatta Moeloek</a>
            <p>Belajar Teknik Memasak</p>
            <div className="info">
                <h3> <i className="far fa-clock"></i> 2 hours </h3>
                <h3> <i className="far fa-calendar-alt"></i> 1 months </h3>
                <h3> <i className="fas fa-book"></i> 5 class </h3>
            </div>
        </div>
    </div>

    <div className="box">
        <img src="images/course4.jpg" alt=""/>
        <h3 className="price">$50</h3>
        <div className="content">
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half"></i>
            </div>
            <a href="#" className="title">Devina Hermawan</a>
            <p>Belajar Teknik Memasak</p>
            <div className="info">
                <h3> <i className="far fa-clock"></i> 2 hours </h3>
                <h3> <i className="far fa-calendar-alt"></i> 3 months </h3>
                <h3> <i className="fas fa-book"></i> 1 class </h3>
            </div>
        </div>
    </div>

    <div className="box">
        <img src="images/course5.jpg" alt=""/>
        <h3 className="price">$50</h3>
        <div className="content">
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half"></i>
            </div>
            <a href="#" className="title">Reynold Poernomo</a>
            <p>Belajar Teknik Memasak</p>
            <div className="info">
                <h3> <i className="far fa-clock"></i> 2 hours </h3>
                <h3> <i className="far fa-calendar-alt"></i> 2 months </h3>
                <h3> <i className="fas fa-book"></i> 3 class </h3>
            </div>
        </div>
    </div>

    <div className="box">
        <img src="images/course6.jpg" alt=""/>
        <h3 className="price">$50</h3>
        <div className="content">
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half"></i>
            </div>
            <a href="#" className="title">Farah Quinn</a>
            <p>Belajar Teknik Memasak</p>
            <div className="info">
                <h3> <i className="far fa-clock"></i> 2 hours </h3>
                <h3> <i className="far fa-calendar-alt"></i> 2 months </h3>
                <h3> <i className="fas fa-book"></i> 2 class </h3>
            </div>
        </div>
    </div>

</div>

</section>



<section className="reciepes" id="reciepes">

<h1 className="heading">Mau Bikin Apa Hari Ini?</h1>

<p></p>

<a href="recipes.html"><button className="btn">Pastry</button></a>
<a href="recipes.html"><button className="btn">Western</button></a>
<a href="recipes.html"><button className="btn">Asian</button></a>
<a href="recipes.html"><button className="btn">Eastern</button></a>
<a href="recipes.html"><button className="btn">Dessert</button></a>
<a href="recipes.html"><button className="btn">Japanese</button></a>
<a href="recipes.html"><button className="btn">Korean</button></a>
<a href="recipes.html"><button className="btn">Indonesian</button></a>
<a href="recipes.html"><button className="btn">Vegetarian</button></a>
<a href="recipes.html"><button className="btn">Appetizer</button></a>
<a href="recipes.html"><button className="btn">Main Course</button></a>
<a href="recipes.html"><button className="btn">Italian</button></a>
<a href="recipes.html"><button className="btn">American</button></a>
<a href="recipes.html"><button className="btn">Chinese</button></a>
<a href="recipes.html"><button className="btn">Thailand</button></a>
<a href="recipes.html"><button className="btn">Indian</button></a>
<a href="recipes.html"><button className="btn">Arabian</button></a>
<a href="recipes.html"><button className="btn">Coffee</button></a>
<a href="recipes.html"><button className="btn">Juices</button></a>
<a href="recipes.html"><button className="btn">Javanese</button></a>
<a href="recipes.html"><button className="btn">Bread</button></a>
<a href="recipes.html"><button className="btn">Cake</button></a>
<a href="recipes.html"><button className="btn">Cookie</button></a>
<a href="recipes.html"><button className="btn">Baverage</button></a>
<a href="recipes.html"><button className="btn">Mocktail</button></a>
<a href="recipes.html"><button className="btn">Cocktail</button></a>
<a href="recipes.html"><button className="btn">Steak</button></a>
<a href="recipes.html"><button className="btn">Beef</button></a>
<a href="recipes.html"><button className="btn">Sushi</button></a>
<a href="recipes.html"><button className="btn">Soup</button></a>
<a href="recipes.html"><button className="btn">Rendang</button></a>
<a href="recipes.html"><button className="btn">Noodle</button></a>
<a href="recipes.html"><button className="btn">Mexico</button></a>
<a href="recipes.html"><button className="btn">Cupcake</button></a>


</section>



<section className="contact" id="contact">

<h1 className="heading">contact us</h1>

<div className="row">

    <form action="">
        <input type="text" placeholder="full name" className="box"/>
        <input type="email" placeholder="your email" className="box"/>
        <input type="password" placeholder="your password" className="box"/>
        <input type="number" placeholder="your number" className="box"/>
        <textarea name="" id="" cols="30" rows="10" className="box address" placeholder="your address"></textarea>
        <input type="submit" className="btn" value="send now"/>
    </form>

    <div className="image">
        <img src="images/contact-img.png" alt=""/>
    </div>

</div>

</section>



<div className="footer">

    <div className="box-container">

        <div className="box">
            <h3>branch locations</h3>
            <a href="#">Indonesia</a>
            <a href="#">Singapore</a>
            <a href="#">Malaysia</a>
            <a href="#">Brunei</a>
        </div>

        <div className="box">
            <h3>quick links</h3>
            <a href="#">home</a>
            <a href="#">about</a>
            <a href="#">course</a>
            <a href="#">reciepes</a>
            <a href="#">contact</a>
        </div>

        <div className="box">
            <h3>contact info</h3>
            <p> <i className="fas fa-map-marker-alt"></i> Jakarta, Indonesia. </p>
            <p> <i className="fas fa-envelope"></i> Cookrec@gmail.com </p>
            <p> <i className="fas fa-phone"></i> +62-813-777-777 </p>
        </div>

    </div>

  
</div>




<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>


<script src="script.js"></script>

</div>
    )
} 
ReactDOM.render(
    <Index/>,
    document.querySelector("#web")
)