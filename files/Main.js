import React from 'react'
import './styles.css'
//main -->
function Main(){
  return(
<main class="categoreies-contanier">
<h1 class="heading">trending post</h1>
<p class="filter-text">
  <i class="fas fa-filter"></i> filter by category
</p>



<div class="categories">
  <button class="btn active">all</button>
  <button class="btn">artifical inteligence</button>
  <button class="btn">cloud computing</button>
  <button class="btn">dev Ops</button>
  <button class="btn">programing languages</button>
  <button class="btn">mobile appliction development</button>
  <button class="btn">technology and tools</button>
  <button class="btn">get a job in a tech company</button>
  <button class="btn">others</button>
  
  <div class="card-container">
    
    <div class="card">
      <div class="img-container">
        <img
          class="img"
          src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png"
          alt="img"
        />
      </div>
      <div class="text-contanier">
        <h2 class="titile">
          Introduction To A Machine Learning Online Course
        </h2>
        <p class="author">
          <span class="author-text">EdYoda</span> |
          <span class="date">16 jan 2022 </span>
        </p>
        <p class="card-text">
          We have had an insight into Artificial Intelligence. Well, one
          of its subfields is machine learning and this introduction will
          help you get a fair idea of what a machine learning online
          course holds. To begin with, one must understand what machine
          learning is. Basically, it is a concept wherein a machine
          attempts to understand the structure of a data and fits that
          into models that people can understand and utilize
        </p>
      </div>
    </div>
 
    <div class="card">
      <div class="img-container">
        <img
          class="img"
          src="https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png"
          alt="img"
        />
      </div>
      <div class="text-contanier">
        <h2 class="titile">
          Practical Machine Learning with Python and Keras
        </h2>
        <p class="author">
          <span class="author-text">EdYoda</span> |
          <span class="date">16 jan 2022 </span>
        </p>
        <p class="card-text">
          Machine learning is a field of artificial intelligence that uses
          statistical techniques to give computer systems the ability to
          “learn” (e.g., progressively improve performance on a specific
          task) from data, without being explicitly programmed. Think of
          how efficiently (or not) Gmail detects spam emails, or how good
          text-to-speech has become with the rise of Siri, Alexa, and
          Google Home. Some of the tasks that
        </p>
      </div>
    </div>
    
    <div class="card">
      <div class="img-container">
        <img
          class="img"
          src="https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png"
          alt="img"
        />
      </div>
      <div class="text-contanier">
        <h2 class="titile">What is Income Share Agreement?</h2>
        <p class="author">
          <span class="author-text">EdYoda</span> |
          <span class="date">16 jan 2022 </span>
        </p>
        <p class="card-text">
          “An income share agreement (or ISA) is a financial structure in
          which an individual or organization provides something of value
          (often a fixed amount of money) to a recipient who, in exchange,
          agrees to pay back a percentage of their income for a fixed
          number of years.” Too much jargon? Lets simplify the context.
          Income Share Agreement (abbreviated to ISA) is basically a
          financial contract agreement signed between 
        </p>
      </div>
    </div>
   
    <div class="card">
      <div class="img-container">
        <img
          class="img"
          src="https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png"
          alt="img"
        />
      </div>
      <div class="text-contanier">
        <h2 class="titile">What is Web Scraping?</h2>
        <p class="author">
          <span class="author-text">EdYoda</span> |
          <span class="date">16 jan 2022 </span>
        </p>
        <p class="card-text">
          Simply put, web scraping is one of the tools developers use to
          gather and analyze information from the Internet. Some websites
          and platforms offer application programming interfaces (APIs)
          which we can use to access information in a structured way, but
          others might not. While APIs are certainly becoming the standard
          way of interacting with todays popular platforms, we dont always
          have this luxury when interacting with most of the websites on
          the internet. 
        </p>
      </div>
    </div>
   
    <div class="card">
      <div class="img-container">
        <img
          class="img"
          src="https://edyoda.s3.amazonaws.com/media/blog-images/7.png"
          alt="img"
        />
      </div>
      <div class="text-contanier">
        <h2 class="titile">
          Importance of Data Backup and Recovery in the IT industry
        </h2>
        <p class="author">
          <span class="author-text">EdYoda</span> |
          <span class="date">16 jan 2022 </span>
        </p>
        <p class="card-text">
          A business must always introspect the areas where they lack in
          order to bring about a positive change in the work environment.
          One of the main precautions or a contingency plan that is
          necessary for every business and especially industries working
          with clouds, networks and computers should conduct a backup of
          its files which will serve as a boon in any point of time.
          Before moving forward, let us understand the 
        </p>
      </div>
    </div>
   
    <div class="card">
      <div class="img-container">
        <img
          class="img"
          src="https://edyoda.s3.amazonaws.com/media/blog-images/5.png"
          alt="img"
        />
      </div>
      <div class="text-contanier">
        <h2 class="titile">Breaking the Myths around Cybersecurity</h2>
        <p class="author">
          <span class="author-text">EdYoda</span> |
          <span class="date">16 jan 2022 </span>
        </p>
        <p class="card-text">
          As the dependency on online platforms is increasing daily,
          cybersecurity is becoming an important concern for all companies
          today. The number of cyberattacks is ever-rising even after
          adopting every security measure possible by businesses. Cyber
          attackers are developing advancing technologies that are
          continuing to cause more damage. There are many methods through
          which a cyber attack is committed like software,
          
        </p>
      </div>
    </div>
    
    <div class="card">
      <div class="img-container">
        <img
          class="img"
          src="https://edyoda.s3.amazonaws.com/media/blog-images/3.png"
          alt="img"
        />
      </div>
      <div class="text-contanier">
        <h2 class="titile">
          Challenges of Machine Learning in Big Data Analytics
        </h2>
        <p class="author">
          <span class="author-text">EdYoda</span> |
          <span class="date">16 jan 2022 </span>
        </p>
        <p class="card-text">
          Machine Learning is a subset of artificial intelligence which is
          an important part of computer science. The revolution of Big
          Data promises to transform the way we work, live and think by
          enabling the process of optimization, discovering insights and
          improved decision making. This potential relies on the ability
          to extract value from big data and provide data analytics.
          Machine learning is the ability to learn from data, provide
          insights, predictions, 
        </p>
      </div>
    </div>
   
    <div class="card">
      <div class="img-container">
        <img
          class="img"
          src="https://edyoda.s3.amazonaws.com/media/blog-images/4.png"
          alt="img"
        />
      </div>
      <div class="text-contanier">
        <h2 class="titile">
          Impact of Cloud Computing in various industries
        </h2>
        <p class="author">
          <span class="author-text">EdYoda</span> |
          <span class="date">16 jan 2022 </span>
        </p>
        <p class="card-text">
          Cloud computing has been rapidly gaining pace in the world of
          information technology. It has been observed that over 90% of
          global enterprises are using cloud technology as part of their
          business. Every industry has its own technology dynamics
          designed to suit its infrastructure. To understand the future of
          cloud computing, one needs to understand the dynamics of cloud
          computing in various key industries. According to the report 
        </p>
      </div>
    </div>
    
   
    <div class="card">
      <div class="img-container">
        <img
          class="img"
          src="https://edyoda.s3.amazonaws.com/media/blog-images/6.png"
          alt="img"
        />
      </div>
      <div class="text-contanier">
        <h2 class="titile">
          LAMP Stack Vs MEAN stack: Choosing the right platform for your
          web application development
        </h2>
        <p class="author">
          <span class="author-text">EdYoda</span> |
          <span class="date">16 jan 2022 </span>
        </p>
        <p class="card-text">
          In todays dynamic world, rapid web application development with
          a smooth user interface that can adapt to specific features is
          the main business requirement. Many organizations around the
          world that intensely depend on programming for their everyday
          business operations, the big business level applications, sites
          and servers have become apparent. It is important to use
          consistent,
        </p>
      </div>
    </div>
  </div>

</div>
</main>
//<!-- main end -->

  );}

export default Main;