import React from 'react';
import homePic from './images/home1.gif';

const Home = () => (
  <div>
    <h1 className="main-heading">Welcome to our Page!</h1>
    <div className="home-para">

      <img src={homePic} alt="homepic" />
      <p className="home-content">
        Mathematics (from Ancient Greek μάθημα (máthēma) knowledge, study, learning) is an area of
        knowledge that includes the study of such topics as numbers (arithmetic and number theory),
        formulas and related structures (algebra),[2] shapes and spaces in which they are contained
        (geometry), and quantities and their changes (calculus and analysis).There is no general
        consensus about its exact scope or epistemological status.

        Most of mathematical activity consists of discovering and proving (by pure reasoning)
        properties of abstract objects. These objects are either abstractions from nature
        (such as natural numbers or lines), or (in modern mathematics) abstract entities of
        which certain properties, called axioms, are stipulated. A proof consists of a
        succession of applications of some deductive rules to already known results,
        including previously proved theorems, axioms and (in case of abstraction from nature)
        some basic properties that are considered as true starting points of the theory under
        consideration. The result of a proof is called a theorem.
      </p>
    </div>
  </div>
);

export default Home;
