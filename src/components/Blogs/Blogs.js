import React from 'react';
import useAdmin from '../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { Link, Navigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
const Blogs = () => {
    const [user, loading, error] = useAuthState(auth);
  //   const [admin] =useAdmin(user)
  // console.log(admin) 
    return (
        <div className='text-left  w-100 mx-auto pl-16'>
        <h2 className='my-5'>Questions</h2>
        <div className="q1">
        <h2 className='my-3 text-2xl'> How will you improve the performance of a React Application?</h2>
        <p className='w-50'>During the initial rendering process, React builds a DOM tree of components. So, when data changes in the DOM tree, we want React to re-render only those components that were affected by the change, skipping the other components in the tree that were not affected.

However, React could end up re-rendering all components in the DOM tree, even though not all are affected. This will result in longer loading time, wasted time, and even wasted CPU resources. We need to prevent this from happening. So, this is where we will focus our optimization effortIn this situation, we could configure every component to only render or diff when necessary, to avoid wasting resources and time.
        </p>
        </div>
        <div className="q2">
        <h2 className='my-3 text-2xl'>How does prototypical inheritance work?</h2>
        <p  className='w-50'>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values). JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique.
         When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.

        </p>
        </div>
        <div className="q3">
        <h2 className='my-3 text-2xl'>What are the different ways to manage a state in a React application?</h2>
        <p  className='w-50'>Once you attempt to manage state across multiple components, things get a bit trickier.

You will reach a point in your application where patterns like “lifting state up” and passing callbacks down to update your state from components lead to lots and lots of props.

What do you do if you want to update a component’s state from basically anywhere in your app? You turn it into global state.

To manage it, however, you should opt for a third-party solution. Many developers are inclined to use built-in React features like the Context API to manage their state.

        </p>
        </div>
        <div className="q4">
        <h2 className='my-3 text-2xl'>What is a unit test? Why should write unit tests?</h2>
        <p  className='w-50'>
        The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly,
         it can help detect early flaws in code which may be more difficult to find in later testing stages.
        </p>
        </div>
        <div className="q5">
        <h2 className='my-3 text-2xl'> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
        <p  className='w-50'>
        i have an array of products .every product have their own name price description .if i vant to search product by anme firstly i have to use map loop for loop all the product .in this map loop i have to use find method if the scarch name is similler to product name.
        </p>
        </div>
        </div>
    );
};

export default Blogs;