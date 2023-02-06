import React from 'react';
import example from '../../Assets/example.png'
import UseTitle from '../../Hook/useTitle';
const Blogs = () => {
    UseTitle('Blogs');
    return (
        <div className=' min-h-[85vh] flex flex-col items-center justify-center'>
            <div className='w-10/12 mx-auto'>
                <div tabIndex={0} className=" mt-4 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What are the different ways to manage a state in a React application?
                    </div>
                    <div className="collapse-content">
                        <div className="overflow-x-auto">
                            <p>
                                The different ways to manage a state in a React application is Redux.
                                Redux is a library that has been around for a long time and is widely used in the React environment.

                                Redux is a tool that comes to solve both of the problems mentioned before (prop drilling and unpredictable state behavior on frequent and complex state changes).

                                It's important to mention that Redux is an agnostic library, meaning it can be implemented on any front end app, not just React.

                                The Redux set of tools is very similar to what we've just seen with useReducer, but with a few more things. There are three main building blocks in Redux:

                                A store — an object that holds the app state data
                                A reducer — a function that returns some state data, triggered by an action type
                                An action — an object that tells the reducer how to change the state. It must contain a type property, and it can contain an optional payload property
                            </p>
                        </div>
                    </div>
                </div>

                <div tabIndex={0} className="  mt-4 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How does prototypical inheritance work?
                    </div>
                    <div className="collapse-content">
                        <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
                        <img src={example} alt="" />
                    </div>
                </div>

                <div tabIndex={0} className="  mt-4 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is a unit test? Why should we write unit tests?
                    </div>
                    <div className="collapse-content">
                        <div className="overflow-x-auto overflow-hidden ">
                            <p>
                                Unit Testing is a type of software testing where individual units or components of a software are tested.
                                </p>
                                <p>
                                The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.

                                In SDLC, STLC, V Model, Unit testing is first level of testing done before integration testing. Unit testing is a WhiteBox testing technique that is usually performed by the developer. Though, in a practical world due to time crunch or reluctance of developers to tests, QA engineers also do unit testing
                            </p>
                        </div>
                    </div>
                </div>
                <div tabIndex={0} className=" mt-4 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        React vs. Angular vs. Vue?
                    </div>
                    <div className="collapse-content">
                        <p>There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular.</p>

                        <p> React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.</p>

                        <p>They can be used almost interchangeably to build front-end applications, but they’re not 100 percent the same, so it makes sense to compare them and understand their differences.</p>

                        <p>Each framework is component-based and allows the rapid creation of UI features.</p>


                        <p> However, they all have a different structure and architecture — so first, we’ll look into their architectural differences to understand the philosophy behind them.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;