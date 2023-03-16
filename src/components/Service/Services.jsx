import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import { CgWebsite } from "react-icons/cg";


const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">Services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"API development:"}
            disc={`I can build custom APIs using C# ASP.NET to allow your applications to communicate with each other and exchange data.`}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon={FiCodesandbox}
            title={"Web development (Backend)"}
            disc={`I can develop high-quality web applications using C# ASP.NET and related technologies. From simple web pages to complex web applications, I can handle it all.`}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon={CgWebsite}
            title={"Code review and refactoring"}
            disc={` I can review your existing C# ASP.NET code to identify any potential issues and refactor it to improve performance, security, and maintainability.`}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon={CgWebsite}
            title={"Performance optimization"}
            disc={` I can optimize the performance of your C# ASP.NET applications to ensure that they are fast and responsive, even under heavy load.`}
          />
        </Slide>

        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Database design and development"}
            disc={`I can design and develop robust databases using Microsoft SQL Server to ensure that your applications can handle large volumes of data and scale as needed.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Web development (Frontend)"}
            disc={`I can create beautiful, responsive websites using HTML, CSS, and JavaScript. Whether you need a simple landing page or a complex web application, I can handle it all.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"React JS development"}
            disc={`I specialize in React JS development and can create custom components and modules to bring your web application to life. I have experience with both class and functional components and can work with state management tools such as Redux.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Responsive design"}
            disc={` I can ensure that your website looks great and functions well on all devices, from desktops to smartphones`}
          />
        </Slide>
        <Slide direction="top">
          <Card
            Icon={CgWebsite}
            title={"Tailwind CSS integration"}
            disc={`I can integrate Tailwind CSS into your website to create beautiful and responsive user interfaces quickly and efficiently.
            `}
          />
        </Slide>
        <Slide direction="top">
          <Card
            Icon={CgWebsite}
            title={"Code optimization"}
            disc={`I can optimize your website's code to ensure fast loading times and efficient performance, even on slow connections or older devices.`}
          />
        </Slide>
        <Slide direction="top">
          <Card
            Icon={CgWebsite}
            title={"TypeScript development"}
            disc={`I have experience using TypeScript to build robust and scalable applications, and can leverage its strong typing system to catch bugs early in the development process.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
