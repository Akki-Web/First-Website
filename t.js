const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('
  <html>
    <head>
      <title>My website</title>
      <link rel="stylesheet" href="style.css" />
    </head>
  
    <body>
      <nav>
        <ul class="topnav" id="dropdownClick">
          <li><a class="active" href="home">Home</a></li>
          <li><a href="news">News</a></li>
          <li><a href="contact">Contact</a></li>
          <li><a href="about">About</a></li>
          <li class="topnav-right"><a href="Sign Up">Sign Up</a></li>
          <li class="topnav-right"><a href="Sign in">Sign in</a></li>
          <li class="dropdownIcon">
            <a href="javascript:void(0);" onclick="dropdownMenu()">&#9776;</a>
          </li>
        </ul>
      </nav>
      <div class="container" id="section-1-gradient">
        <div class="row">
          <div class="col-6">
            <div class="leftside-col">
              <h1 class="large">We Are</h1>
              <h1 class="large">ZinjaCoder</h1>
            </div>
            <form action="">
              <div class="leftside-col">
                <h2>Username</h2>
                <input
                  class="inputbox"
                  type="text"
                  name="username"
                  placeholder="Username"
                />
                <h2>Password</h2>
                <input
                  class="inputbox"
                  type="text"
                  name="password"
                  placeholder="Password"
                />
              </div>
            </form>
          </div>
          <div class="col-6">
            <div class="rightSide-col">
              <div class="videoContaier">
                <iframe
                  width="560"
                  height="316"
                  src="https://www.youtube.com/embed/XU9y8SEzkcY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header>
        <h1 class="section2heder">The Standerds of Awssomeness</h1>
      </header>
      <div class="container">
        <div class="row">
          <div class="col-4">
            <div class="box">
              <div class="icon">
                <img src="1.jpg" />
              </div>
              <label for="">Chat with Me</label>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
                obcaecati harum quibusdam, eligendi voluptatibus repudiandae. Iure
                repudiandae animi magnam totam, suscipit est quae incidunt culpa
              </p>
            </div>
          </div>
          <div class="col-4">
            <div class="box">
              <div class="icon">
                <img src="1.jpg" />
              </div>
              <label for="">Learn to Code</label>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
                obcaecati harum quibusdam, eligendi voluptatibus repudiandae. Iure
                repudiandae animi magnam totam, suscipit est quae incidunt culpa
              </p>
            </div>
          </div>
          <div class="col-4">
            <div class="box">
              <div class="icon">
                <img src="1.jpg" />
              </div>
              <label>Our Gang</label>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
                obcaecati harum quibusdam, eligendi voluptatibus repudiandae. Iure
                repudiandae animi magnam totam, suscipit est quae incidunt culpa
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <button class="learnMore">Learn More</button>
          </div>
        </div>
      </div>
      <hr />
      <div class="container">
        <div class="row">
          <div class="col-7">
            <article>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ad
                illum maiores officia repudiandae ducimus odio ipsa illo
                perferendis voluptates impedit placeat dolorum dolores culpa
                tempora et enim error quaerat quisquam vel, optio, aut id. Quae
                cum laboriosam fugit nisi eos ex. Eius id quasi illo vel porro
                doloribus cum, distinctio omnis labore nostrum at quos placeat
                alias, accusamus voluptate possimus consectetur. Labore ex, odit
                sed at aspernatur ea. Assumenda alias suscipit illum architecto
                fugit est eligendi praesentium impedit voluptatem nihil, molestiae
                inventore nulla a, nemo veniam ut? Deserunt vitae odio fugiat
                assumenda animi. Dolorum maxime repellat fugiat quisquam dolores.
              </p>
            </article>
          </div>
          <div class="col-5">
            <div class="slopeicon">
              <img src="2.jpg" />
            </div>
          </div>
        </div>
      </div> 
  
      <footer class="footsy">
        <div class="row">
          <div class="col-3 mobileStack">
            <h1>Company</h1>
            <ul>
              <li>About</li>
              <li>Blogs</li>
              <li>Carrers</li>
            </ul>
          </div>
          <div class="col-3 mobileStack">
            <h1>Company</h1>
            <ul>
              <li>About</li>
              <li>Blogs</li>
              <li>Carrers</li>
            </ul>
          </div>
          <div class="col-3 mobileStack">
            <h1>Company</h1>
            <ul>
              <li>About</li>
              <li>Blogs</li>
              <li>Carrers</li>
            </ul>
          </div>
          <div class="col-3 mobileStack">
            <h1>Company</h1>
            <ul>
              <li>About</li>
              <li>Blogs</li>
              <li>Carrers</li>
            </ul>
          </div>
        </div>
      </footer> 
     <!-- this is drop downmenu -->
      <script>
        function dropdownMenu() {
          var x = document.getElementById("dropdownClick");
          if (x.className === "topnav") {
            x.className += " responsive"; //leave sapce in front of the responsive
          } else {
            x.className = "topnav";
          }
        }
      </script>
    </body>
  </html>
  ');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});