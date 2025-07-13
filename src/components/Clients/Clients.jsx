import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';

let clients = [
    {
      name: "Sarah Johnson",
      position: "Product Manager at HealthTech",
      img_url: "https://randomuser.me/api/portraits/women/44.jpg",
      stars: 5,
      disc: `Working with Marvellous was a seamless experience. She quickly understood our project goals and translated them into a functional and intuitive user interface. Her attention to detail is commendable.`
    },
    {
      name: "Carlos Mendes",
      position: "Founder of EduStart",
      img_url: "https://randomuser.me/api/portraits/men/65.jpg",
      stars: 4,
      disc: `Marvellous delivered a beautiful and efficient solution for our e-learning platform. Communication was prompt, and feedback was always well received and applied. Highly recommend.`
    },
    {
      name: "Amina Yusuf",
      position: "Tech Lead at FinVerse",
      img_url: "https://randomuser.me/api/portraits/women/68.jpg",
      stars: 5,
      disc: `She brought life to our frontend! The responsiveness, animations, and code structure were top-tier. It’s rare to find someone who balances design sensibility with clean code.`
    },
    {
      name: "David Lee",
      position: "Senior Software Engineer at SoftSphere",
      img_url: "https://randomuser.me/api/portraits/men/23.jpg",
      stars: 4,
      disc: `We had a tight deadline, and Marvellous stepped in and delivered a React component library that was scalable and reusable. We’ve integrated it into multiple products since then.`
    },
    {
      name: "Chloe Dubois",
      position: "UX Designer at ZenTech",
      img_url: "https://randomuser.me/api/portraits/women/35.jpg",
      stars: 5,
      disc: `I collaborated with Marvellous on a dashboard redesign. Her ability to bring wireframes to life with pixel-perfect implementation was exactly what we needed.`
    }
  ];

  
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}

const Clients = () => {
    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = clients.map((item, i) => (
        <ClientSlider item={item} key={i}/>
    ))
  return (
    <Container id='client'>
        <Slide direction="left">
            <span className="green">testimonials</span>
            <h1>what clients say</h1>
        </Slide>
        <Testimonials>
            <Slider ref={arrowRef} {...settings}>
                {clientDisc}
            </Slider>
            <Buttons>
                <button
                onClick={() => arrowRef.current.slickPrev()}
                ><IoIosArrowBack/></button>
                <button
                onClick={() => arrowRef.current.slickNext()}
                ><IoIosArrowForward/></button>
            </Buttons>
        </Testimonials>
    </Container>
  )
}

export default Clients

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #01be96;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #01be96;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`