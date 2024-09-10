import './App.css';
import logo from './assests/bg-pattern-quotation.svg';
import daniel from './assests/image-daniel.jpg';
import jonathan from './assests/image-jonathan.jpg';
import kira from './assests/image-kira.jpg';
import jeanette from './assests/image-jeanette.jpg';
import patrick from './assests/image-patrick.jpg';

function App() {
  return (
    <div className="App">
      <div className="grid">
        <div className="qoute daniel">
          <img className='logo' src={logo}/>
          <div className="userinfo">
            <img src={daniel} className="userphoto" />
            <div className="username">
              <span className='name'>Daniel Clifford</span>
              <span className="verified">Verified Graduate</span>
            </div>
          </div>
          <p className="title">
          I received a job offer mid-course, and the subjects I learned were current, if not more so, 
          in the company I joined. I honestly feel I got every penny’s worth.
          </p>
          <p className="body">
          “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
          transition and have heard some people who had an amazing experience here. I signed up 
          for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
          The next 12 weeks was the best - and most grueling - time of my life. Since completing 
          the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
          </p>
        </div>

        <div className="qoute jonathan">
          <div className="userinfo">
            <img src={jonathan} className="userphoto" />
            <div className="username">
              <span className='name'>Jonathan Walters</span>
              <span className="verified">Verified Graduate</span>
            </div>
          </div>
          <p className="title">
          The team was very supportive and kept me motivated
          </p>
          <p className="body">
          “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
          for a big company. This was one of the best investments I’ve made in myself. ”
          </p>
        </div>

        <div className="qoute kira">
          <div className="userinfo">
            <img src={kira} className="userphoto" />
            <div className="username">
              <span className='name'>Kira Whittle</span>
              <span className="verified">Verified Graduate</span>
            </div>
          </div>
          <p className="title">
          Such a life-changing experience. Highly recommended!
          </p>
          <p className="body">
          “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
          professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
          student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
          did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
          project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
          could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
          experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
          100% recommend! ”
          </p>
        </div>

        <div className="qoute jeanette">
          <div className="userinfo">
            <img src={jeanette} className="userphoto" />
            <div className="username">
              <span className='name'>Jeanette Harmon</span>
              <span className="verified">Verified Graduate</span>
            </div>
          </div>
          <p className="title">
          An overall wonderful and rewarding experience
          </p>
          <p className="body">
          “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
          while doing something I love. ”
          </p>
        </div>

        <div className="qoute patrick">
          <div className="userinfo">
            <img src={patrick} className="userphoto" />
            <div className="username">
              <span className='name'>Patrick Abrams</span>
              <span className="verified">Verified Graduate</span>
            </div>
          </div>
          <p className="title">
          Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
          learning from their experiences was easy.
          </p>
          <p className="body">
          “ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
          gave me the confidence necessary to be able to go out in the world and present myself as a capable 
          junior developer. The standard is above the rest. You will get the personal attention you need from 
          an incredible community of smart and amazing people. ”
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;
